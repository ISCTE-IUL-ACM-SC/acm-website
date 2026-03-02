#!/usr/bin/env bun
/**
 * Database initialization script for Neon PostgreSQL
 * Run this once after setup: bun scripts/init-db.js
 */

const { neon } = require('@neondatabase/serverless')

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  console.error('Error: DATABASE_URL environment variable is not set')
  console.error('Please add DATABASE_URL to your .env.local file')
  process.exit(1)
}

async function initializeDatabase() {
  const sql = neon(databaseUrl)

  try {
    console.log('🔄 Initializing database...')

    // Create table
    await sql`
      CREATE TABLE IF NOT EXISTS join_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        student_id VARCHAR(50) NOT NULL,
        major VARCHAR(255) NOT NULL,
        year VARCHAR(50) NOT NULL,
        interests TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    // Create index on email for faster lookups
    await sql`
      CREATE INDEX IF NOT EXISTS idx_join_requests_email ON join_requests(email);
    `

    // Create index on created_at for sorting
    await sql`
      CREATE INDEX IF NOT EXISTS idx_join_requests_created_at ON join_requests(created_at DESC);
    `

    console.log('✅ Database initialized successfully!')
    console.log('📋 Tables created:')
    console.log('   - join_requests')
    console.log('\n✨ Setup complete! You can now use the join form.')
  } catch (error) {
    console.error('❌ Error initializing database:', error.message)
    process.exit(1)
  }
}

initializeDatabase()
