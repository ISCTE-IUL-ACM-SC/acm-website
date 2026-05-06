import { NextResponse } from 'next/server'
import { getSql } from '@/lib/db'

export async function GET() {
  try {
    const sql = getSql()
    const posts = await sql`
      SELECT id, title, description, publish_date, last_updated_date
      FROM posts
      ORDER BY publish_date DESC
    `
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to fetch posts: ${errorMessage}` },
      { status: 500 }
    )
  }
}
