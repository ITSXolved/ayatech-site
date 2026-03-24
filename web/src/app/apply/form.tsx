'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createRazorpayOrder, verifyRazorpayPayment } from './razorpay-actions'
import { saveApplicationDraft, getMentorReferrer } from './actions'
import { useDebounce } from '@/hooks/use-debounce'
import { Loader2, CheckCircle2, ChevronRight, GraduationCap, Phone, Mail, User, BookOpen, UserCheck, Calendar } from 'lucide-center-icons'
import Script from 'next/script'

// Use simpler icons since some might not be in lucide-react default
import { CheckCircle, Info } from 'lucide-react'

interface Course {
    id: string
    name: string
    fee: number
    duration_weeks: number
    description: string
    course_groups?: {
        classes: string[]
    }[]
}

interface ApplicationFormProps {
    courses: Course[]
}

export default function ApplicationForm({ courses }: ApplicationFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [mentorLoading, setMentorLoading] = useState(false)
    const [referrer, setReferrer] = useState<{ name: string; type: 'mentor' | 'course_manager' } | null>(null)
    const [mentorError, setMentorError] = useState<string | null>(null)
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const [formData, setFormData] = useState({
        student_name: '',
        email: '',
        phone: '',
        class: '',
        course_id: '',
        mentor_code: ''
    })

    const debouncedFormData = useDebounce(formData, 1000)

    useEffect(() => {
        if (debouncedFormData.student_name || debouncedFormData.email || debouncedFormData.course_id) {
            handleSaveDraft()
        }
    }, [debouncedFormData])

    const handleSaveDraft = async () => {
        setSaveStatus('saving')
        try {
            await saveApplicationDraft(formData)
            setSaveStatus('saved')
        } catch (error) {
            console.error('Draft save failed:', error)
            setSaveStatus('error')
        }
    }

    const checkMentor = async (code: string) => {
        if (!code || code.length < 3) {
            setReferrer(null)
            setMentorError(null)
            return
        }
        setMentorLoading(true)
        setMentorError(null)
        try {
            const data = await getMentorReferrer(code)
            if (data) {
                setReferrer(data as any)
                setMentorError(null)
            } else {
                setReferrer(null)
                setMentorError('Invalid referral code')
            }
        } catch (err) {
            setReferrer(null)
        } finally {
            setMentorLoading(false)
        }
    }

    const debouncedMentorCode = useDebounce(formData.mentor_code, 500)
    useEffect(() => {
        checkMentor(debouncedMentorCode)
    }, [debouncedMentorCode])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage(null)

        if (!formData.student_name || !formData.email || !formData.course_id) {
            setErrorMessage("Please fill in all required fields.")
            return
        }

        setIsSubmitting(true)
        try {
            const selectedCourse = courses.find(c => c.id === formData.course_id)
            if (!selectedCourse) return

            // 1. Save final application and get ID
            const appResponse = await saveApplicationDraft(formData)
            const appId = (appResponse as any)?.id

            if (!appId) {
                throw new Error("Failed to create application reference.")
            }

            // 2. Create Razorpay order
            const orderResult = await createRazorpayOrder(appId);

            if (orderResult.error || !orderResult.orderId) {
                throw new Error(orderResult.error || "Order creation failed.")
            }

            // 3. Redirect to whitelisted domain for payment
            const queryParams = new URLSearchParams({
                order_id: orderResult.orderId,
                amount: (orderResult.amount / 100).toString(), // Pass in Rupees
                application_id: appId,
                name: formData.student_name,
                email: formData.email,
                phone: formData.phone,
                course_name: selectedCourse.name
            });

            window.location.href = `https://nawazinedu.com/checkout?${queryParams.toString()}`;;
        } catch (err: any) {
            console.error("Payment setup error:", err)
            setErrorMessage(err.message || "Failed to initialize payment. Try again.")
            setIsSubmitting(false)
        }
    }

    const filteredCourses = formData.class
        ? courses.filter(c => {
            if (!c.course_groups || c.course_groups.length === 0) return true
            return c.course_groups.some(group => group.classes.includes(formData.class))
        })
        : courses

    const selectedCourse = courses.find(c => c.id === formData.course_id)

    return (
        <div className="w-full max-w-2xl mx-auto" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            {/* Card Header */}
            <div style={{ background: '#06101e', padding: '28px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 style={{ color: '#e6f1ff', fontSize: '24px', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>
                            Course Application
                        </h2>
                        <p style={{ color: '#8892b0', marginTop: '4px', fontSize: '14px' }}>
                            Fill out the form below to begin your journey.
                        </p>
                    </div>
                    <div style={{ background: 'rgba(79, 70, 229, 0.15)', color: '#818cf8', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                        {saveStatus === 'saving' ? 'Autosaving...' : 'Changes Saved'}
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <div style={{ background: '#0b192e', padding: '32px' }}>
                {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl border border-red-500/50 bg-red-500/10 text-red-400 text-sm">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Student Name */}
                        <div className="space-y-2">
                            <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Full Name
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.student_name}
                                onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                                style={{
                                    width: '100%',
                                    background: '#112240',
                                    border: '1px solid #233554',
                                    borderRadius: '10px',
                                    padding: '12px 16px',
                                    color: '#e6f1ff',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Email ID
                            </label>
                            <input
                                required
                                type="email"
                                placeholder="yourname@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    background: '#112240',
                                    border: '1px solid #233554',
                                    borderRadius: '10px',
                                    padding: '12px 16px',
                                    color: '#e6f1ff',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2">
                            <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Phone Number
                            </label>
                            <input
                                required
                                type="tel"
                                placeholder="+91 00000 00000"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                style={{
                                    width: '100%',
                                    background: '#112240',
                                    border: '1px solid #233554',
                                    borderRadius: '10px',
                                    padding: '12px 16px',
                                    color: '#e6f1ff',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        {/* Educational Class */}
                        <div className="space-y-2">
                            <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Educational Class
                            </label>
                            <select
                                required
                                value={formData.class}
                                onChange={(e) => setFormData({ ...formData, class: e.target.value, course_id: '' })}
                                style={{
                                    width: '100%',
                                    background: '#112240',
                                    border: '1px solid #233554',
                                    borderRadius: '10px',
                                    padding: '12px 16px',
                                    color: '#e6f1ff',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                <option value="">Select your class</option>
                                <option value="Class 1 - 4">Class 1 - 4</option>
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>
                                <option value="9th">9th</option>
                                <option value="10th">10th</option>
                                <option value="11th">11th</option>
                                <option value="12th">12th</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Engineer">Engineer</option>
                            </select>
                        </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-2">
                        <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Choose Your Course
                        </label>
                        <div className="grid grid-cols-1 gap-3">
                            {filteredCourses.map((course) => (
                                <div
                                    key={course.id}
                                    onClick={() => setFormData({ ...formData, course_id: course.id })}
                                    style={{
                                        background: formData.course_id === course.id ? 'rgba(79, 70, 229, 0.1)' : '#112240',
                                        border: `2px solid ${formData.course_id === course.id ? '#4f46e5' : '#1d2d50'}`,
                                        borderRadius: '12px',
                                        padding: '16px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div style={{ 
                                            width: '10px', 
                                            height: '10px', 
                                            borderRadius: '50%', 
                                            background: formData.course_id === course.id ? '#4f46e5' : '#233554' 
                                        }} />
                                        <div>
                                            <div style={{ color: '#e6f1ff', fontWeight: 600, fontSize: '15px' }}>{course.name}</div>
                                            <div style={{ color: '#8892b0', fontSize: '12px' }}>
                                                {course.duration_weeks} Weeks
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ color: '#a5b4fc', fontWeight: 700, fontSize: '18px' }}>
                                        ₹{course.fee}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Referral Code */}
                    <div className="space-y-3 pt-2">
                        <label style={{ fontSize: '14px', fontWeight: 600, color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Mentor Referral Code
                        </label>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Enter Referral Code (Optional)"
                                value={formData.mentor_code}
                                onChange={(e) => setFormData({ ...formData, mentor_code: e.target.value })}
                                style={{
                                    width: '100%',
                                    background: '#112240',
                                    border: '1px solid #233554',
                                    borderRadius: '10px',
                                    padding: '12px 16px',
                                    color: '#e6f1ff',
                                    outline: 'none',
                                    fontWeight: 700,
                                }}
                            />
                            {referrer && (
                                <div className="text-sm font-medium text-emerald-400">
                                    ✓ Found: {referrer.name}
                                </div>
                            )}
                            {mentorError && <div className="text-sm font-medium text-red-400">{mentorError}</div>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '16px',
                            fontWeight: 700,
                            borderRadius: '10px',
                            border: 'none',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            background: isSubmitting ? '#233554' : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                            color: isSubmitting ? '#8892b0' : '#ffffff',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                        }}
                    >
                        {isSubmitting ? 'Initializing Gateway...' : 'Proceed to Payment'}
                    </button>
                </form>
            </div>
        </div>
    )
}
