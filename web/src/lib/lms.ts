/**
 * Canvas LMS Integration Utility
 * 
 * To use this, add the following to your .env.local:
 * CANVAS_API_URL=https://canvas.instructure.com/api/v1
 * CANVAS_ACCESS_TOKEN=your_access_token_here
 */

export interface CanvasCourse {
  id: number;
  name: string;
  course_code: string;
  workflow_state: string;
  public_description?: string;
}

export async function fetchLMSCourses(): Promise<CanvasCourse[]> {
  const baseUrl = process.env.CANVAS_BASE_URL;
  const token = process.env.CANVAS_API_TOKEN;

  if (!baseUrl || !token) {
    console.warn("LMS credentials missing. Returning empty course list.");
    return [];
  }

  try {
    // Canvas API path usually starts with /api/v1/
    const response = await fetch(`${baseUrl}/api/v1/courses?enrollment_type=teacher&state[]=published`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Canvas API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data as CanvasCourse[];
  } catch (error) {
    console.error("Failed to fetch courses from LMS:", error);
    return [];
  }
}
