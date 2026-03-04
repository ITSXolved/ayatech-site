import Link from "next/link";
import { BookOpen, Clock, Award, PlayCircle, BarChart, Calendar, ChevronRight } from "lucide-react";

const enrolledCourses = [
    {
        id: 1,
        title: "Introduction to Python for Data Science",
        instructor: "Mentor 2",
        progress: 65,
        nextLesson: "Data Cleaning with Pandas",
        thumbnail: "bg-blue-100",
    },
    {
        id: 2,
        title: "Cambridge IGCSE Physics — Year 1",
        instructor: "Sainul Abid M",
        progress: 30,
        nextLesson: "Forces and Motion: Lab Experiment",
        thumbnail: "bg-teal-100",
    },
    {
        id: 3,
        title: "Design Thinking Basics",
        instructor: "Mentor 3",
        progress: 100,
        nextLesson: "Completed",
        thumbnail: "bg-purple-100",
    }
];

const upcomingClasses = [
    { id: 1, title: "Live Q&A: Python Basics", time: "Today, 4:00 PM", type: "Live Session" },
    { id: 2, title: "Physics Peer Review", time: "Tomorrow, 10:00 AM", type: "Workshop" },
];

const stats = [
    { label: "Courses in Progress", value: "2", icon: BookOpen },
    { label: "Completed Courses", value: "1", icon: Award },
    { label: "Learning Hours", value: "24.5", icon: Clock },
];

export default function DashboardPage() {
    return (
        <div style={{ backgroundColor: "#F5F7F8", minHeight: "100vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
            <div className="container-main">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="font-display font-semibold mb-2" style={{ color: "#1F2432", fontSize: "2.5rem" }}>
                        Welcome back, <span className="text-gradient-primary">Learner!</span>
                    </h1>
                    <p style={{ color: "#6A7081" }}>Continue your learning journey today.</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className="phase-card p-6" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,86,210,0.1)", color: "#0056D2" }}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <div className="font-display font-semibold text-3xl" style={{ color: "#1F2432", lineHeight: 1 }}>{stat.value}</div>
                                        <div className="text-sm mt-1" style={{ color: "#6A7081" }}>{stat.label}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content: Courses */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-display font-semibold text-2xl" style={{ color: "#1F2432" }}>My Learning</h2>
                                <Link href="/courses" className="text-sm font-medium flex items-center gap-1" style={{ color: "#0056D2" }}>
                                    Browse Catalog <ChevronRight size={16} />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-5">
                                {enrolledCourses.map((course) => (
                                    <div key={course.id} className="course-card p-5 flex flex-col sm:flex-row gap-5" style={{ background: "#FFFFFF" }}>
                                        {/* Placeholder Thumbnail */}
                                        <div className={`w-full sm:w-48 h-32 rounded-lg shrink-0 flex items-center justify-center ${course.thumbnail}`} style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
                                            <PlayCircle size={40} className="text-black/10" />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1" style={{ color: "#1F2432" }}>{course.title}</h3>
                                                <div className="text-sm mb-4" style={{ color: "#6A7081" }}>Instructor: {course.instructor}</div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span style={{ color: "#1F2432" }} className="font-medium">
                                                        {course.progress === 100 ? "Completed" : `${course.progress}% Complete`}
                                                    </span>
                                                    {course.progress < 100 && (
                                                        <span style={{ color: "#0056D2" }} className="flex items-center gap-1 text-xs font-semibold">
                                                            Up next: <span style={{ color: "#6A7081", fontWeight: "normal" }}>{course.nextLesson}</span>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full transition-all duration-500 ease-in-out"
                                                        style={{
                                                            width: `${course.progress}%`,
                                                            background: course.progress === 100 ? "#10B981" : "linear-gradient(135deg, #0056D2 0%, #0046AA 100%)"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Weekly Goal Activity */}
                        <div className="phase-card p-6" style={{ background: "#FFFFFF" }}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-display font-semibold text-xl" style={{ color: "#1F2432" }}>Weekly Goal</h3>
                                <BarChart size={20} style={{ color: "#6A7081" }} />
                            </div>
                            <div className="flex items-end gap-2 h-32 mb-4">
                                {/* Dummy Chart Bars */}
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                                    const heights = [40, 70, 30, 90, 60, 20, 0];
                                    const isToday = i === 3; // Thu
                                    return (
                                        <div key={day} className="flex-1 flex flex-col items-center gap-2">
                                            <div className="w-full relative bg-gray-100 rounded-t-md flex-1 overflow-hidden" style={{ minHeight: "100px" }}>
                                                <div
                                                    className="absolute bottom-0 w-full rounded-t-md"
                                                    style={{
                                                        height: `${heights[i]}%`,
                                                        backgroundColor: isToday ? "#0056D2" : "rgba(0,86,210,0.2)"
                                                    }}
                                                />
                                            </div>
                                            <div className="text-xs" style={{ color: isToday ? "#1F2432" : "#6A7081", fontWeight: isToday ? 600 : 400 }}>{day}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="text-sm text-center" style={{ color: "#6A7081" }}>You've learned <strong style={{ color: "#1F2432" }}>4.5 hours</strong> this week. Keep it up!</div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Upcoming Classes Widget */}
                        <div className="phase-card p-6" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="font-display font-semibold text-xl" style={{ color: "#1F2432" }}>Upcoming Classes</h3>
                                <Calendar size={20} style={{ color: "#6A7081" }} />
                            </div>
                            <div className="space-y-4">
                                {upcomingClasses.map((cls) => (
                                    <div key={cls.id} className="flex gap-4 p-3 rounded-lg" style={{ backgroundColor: "#F5F7F8", border: "1px solid rgba(0,0,0,0.03)" }}>
                                        <div className="w-2 rounded-full" style={{ background: "linear-gradient(to bottom, #0056D2, #0046AA)" }} />
                                        <div>
                                            <div className="font-semibold text-sm mb-1" style={{ color: "#1F2432" }}>{cls.title}</div>
                                            <div className="text-xs mb-1" style={{ color: "#6A7081" }}>{cls.time}</div>
                                            <div className="text-[10px] font-mono-custom uppercase tracking-wider" style={{ color: "#0056D2" }}>{cls.type}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-5 py-2 text-sm font-medium rounded-md transition-colors" style={{ color: "#0056D2", backgroundColor: "rgba(0,86,210,0.05)", border: "1px solid rgba(0,86,210,0.1)" }}>
                                View Full Schedule
                            </button>
                        </div>

                        {/* Help / Support Widget */}
                        <div className="phase-card p-6" style={{ background: "linear-gradient(135deg, #1F2432 0%, #2A3142 100%)", color: "#FFFFFF" }}>
                            <h3 className="font-display font-semibold text-xl mb-2">Need help?</h3>
                            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Our support team and academic counsellors are available 24/7 to guide you.</p>
                            <button className="w-full py-2 text-sm font-medium rounded-md transition-colors overlay-btn" style={{ backgroundColor: "#FFFFFF", color: "#1F2432" }}>
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
