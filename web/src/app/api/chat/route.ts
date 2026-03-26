import { NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'Claude API key not configured' }, { status: 500 });
  }

  try {
    const { messages } = await req.json();

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: `You are the AyaTech AI Assistant, a helpful and friendly representative of AyaTech (AILT Technical School).
      AyaTech is based in Calicut, Kerala, and offers courses in AI, coding, design, IoT, and robotics.
      Your goal is to help prospective students and parents understand the courses, admissions, and AyaTech's mission.
      Key Facts:
      - Mission: Empowering innovative minds for sustainable futures.
      - Core Courses: Python Programming, Vibe Coding (App building with AI), Web Development, AI Tools Masterclass, UI/UX Design, Flutter App Dev.
      - Pricing: ₹999 to ₹2,499.
      - Unique Feature: Live mentorship and physical tinkering centres in Calicut, Bangalore, and Dubai.
      - Admission Year: 2026.
      Be professional, concise, and encouraging. If you don't know something, ask them to email ayatectechnicalschool@gmail.com.`,
      messages: messages,
    });

    return NextResponse.json({ 
      content: (response.content[0] as any).text 
    });
  } catch (error: any) {
    console.error('Claude API Error:', error);
    return NextResponse.json({ error: 'Failed to communicate with Claude' }, { status: 500 });
  }
}
