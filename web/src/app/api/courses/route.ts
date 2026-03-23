import { NextResponse } from "next/server";

// Static fallback course list
const STATIC_COURSES = [
  { id: 1001, name: "Intro to Python Programming", course_code: "PY001", workflow_state: "available", amount: 999 },
  { id: 1002, name: "Vibe Coding: Build Apps with AI", course_code: "VC002", workflow_state: "available", amount: 1499 },
  { id: 1003, name: "Web Development Bootcamp", course_code: "WD003", workflow_state: "available", amount: 2499 },
  { id: 1004, name: "AI Tools Masterclass for Students", course_code: "AI004", workflow_state: "available", amount: 999 },
  { id: 1005, name: "AI-Powered Video Creation & Editing", course_code: "AV005", workflow_state: "available", amount: 1499 },
  { id: 1006, name: "Teaching AI: Educators' Toolkit", course_code: "TA006", workflow_state: "available", amount: 1299 },
  { id: 1007, name: "Graphic Design with Canva & AI", course_code: "GD007", workflow_state: "available", amount: 999 },
  { id: 1008, name: "UI/UX Design Fundamentals", course_code: "UX008", workflow_state: "available", amount: 1999 },
  { id: 1009, name: "Mobile App Development (Flutter)", course_code: "FL009", workflow_state: "available", amount: 2499 },
  { id: 1010, name: "Arduino & IoT for Beginners", course_code: "AR010", workflow_state: "available", amount: 1999 },
  { id: 1011, name: "Data Science with Python", course_code: "DS011", workflow_state: "available", amount: 2499 },
  { id: 1012, name: "Prompt Engineering & ChatGPT", course_code: "PE012", workflow_state: "available", amount: 999 },
  { id: 1013, name: "Robotics Programming Fundamentals", course_code: "RP013", workflow_state: "available", amount: 2499 },
  { id: 1014, name: "Cybersecurity Essentials", course_code: "CS014", workflow_state: "available", amount: 1499 },
  { id: 1015, name: "Blockchain & Web3 Basics", course_code: "BC015", workflow_state: "available", amount: 1999 },
];

export async function GET() {
  const baseUrl = process.env.CANVAS_BASE_URL;
  const token = process.env.CANVAS_API_TOKEN;

  // If LMS is configured, try fetching live courses
  if (baseUrl && token) {
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/courses?enrollment_type=teacher&state[]=published&per_page=50`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // Cache for 5 minutes on server
          next: { revalidate: 300 },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          return NextResponse.json(data, {
            headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
          });
        }
      }
    } catch (err) {
      console.error("LMS fetch failed, using static fallback:", err);
    }
  }

  // Fallback to static course list
  return NextResponse.json(STATIC_COURSES, {
    headers: { "Cache-Control": "public, s-maxage=3600" },
  });
}
