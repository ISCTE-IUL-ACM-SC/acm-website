import { NextRequest, NextResponse } from 'next/server'
import { getSql } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const sql = getSql()
    const body = await request.json()

    const { name, email, studentId, major, year, interests = [], message = "" } = body

    // Validate required fields
    if (!name || !email || !studentId || !major || !year) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const interestsString = Array.isArray(interests) ? interests.join(', ') : ''

    // Insert into database using parameterized query
    const result = await sql`
      INSERT INTO join_requests (name, email, student_id, major, year, interests, message)
      VALUES (${name}, ${email}, ${studentId}, ${major}, ${year}, ${interestsString}, ${message})
      ON CONFLICT (email) DO UPDATE SET 
      name = ${name},
      student_id = ${studentId},
      major = ${major},
      year = ${year},
      interests = ${interestsString},
      message = ${message},
      updated_at = CURRENT_TIMESTAMP
      RETURNING id, created_at
    `

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined ACM ISCTE!',
        data: result[0],
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting join form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Detailed error:', errorMessage)
    return NextResponse.json(
      { error: `Failed to submit form: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const sql = getSql()
    const result = await sql`SELECT COUNT(*) as count FROM join_requests`
    return NextResponse.json({
      totalMembers: result[0].count,
    })
  } catch (error) {
    console.error('Error fetching join requests count:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
