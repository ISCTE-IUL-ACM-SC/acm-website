import { neon } from "@neondatabase/serverless";

let sqlInstance: any = null;

export function getSql() {
  if (!sqlInstance) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    sqlInstance = neon(databaseUrl, { fetchOptions: { cache: 'no-store' } });
  }
  return sqlInstance;
}

// Initialize database tables
export async function initializeDatabase() {
  try {
    const sql = getSql();
    await sql`
      CREATE TABLE IF NOT EXISTS join_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        student_id VARCHAR(50) NOT NULL,
        major VARCHAR(255) NOT NULL,
        year VARCHAR(50) NOT NULL,
        interests TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(email)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        publish_date DATE NOT NULL,
        last_updated_date DATE NOT NULL
      )
    `;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}
