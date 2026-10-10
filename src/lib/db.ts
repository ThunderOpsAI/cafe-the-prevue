import { neon } from '@neondatabase/serverless';

export interface InquiryRecord {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  service_type: string;
  guest_count?: number;
  event_date?: string;
  notes?: string;
  created_at?: string;
}

// In-memory fallback for instant local preview if DATABASE_URL is not yet provided
const demoInquiries: InquiryRecord[] = [
  {
    id: 1,
    name: "Claire Jenkins",
    phone: "0418 345 678",
    email: "claire.j@gmail.com",
    service_type: "Riverside Wedding",
    guest_count: 75,
    event_date: "2026-11-20",
    notes: "Scenic outdoor riverfront deck ceremony & evening canape package with local King Valley prosecco and wines.",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 2,
    name: "David Miller",
    phone: "0422 987 654",
    email: "david.m@nehealth.org.au",
    service_type: "Corporate Breakfast/Lunch",
    guest_count: 30,
    event_date: "2026-10-28",
    notes: "Executive breakfast meeting with artisan barista coffee, fresh baked pastries, and gourmet brunch boards.",
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 3,
    name: "Sarah Henderson",
    phone: "0439 112 233",
    email: "sarah.h@vicpost.com.au",
    service_type: "Riverside Birthday/Celebration",
    guest_count: 45,
    event_date: "2026-11-15",
    notes: "50th birthday cocktail celebration with grazing platters, riverside terrace seating, and cake service.",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  }
];

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.includes('your_password') || connectionString.includes('placeholder')) {
    return null;
  }
  return neon(connectionString);
}

export async function initDb() {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS prevue_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        service_type VARCHAR(100) NOT NULL,
        guest_count INT,
        event_date VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return true;
  } catch (err) {
    console.error('Failed to initialize Neon database table:', err);
    return false;
  }
}

export async function saveInquiry(inquiry: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<InquiryRecord> {
  const sql = getDb();

  if (!sql) {
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: demoInquiries.length + 1,
      created_at: new Date().toISOString()
    };
    demoInquiries.unshift(newRecord);
    return newRecord;
  }

  await initDb();

  const result = await sql`
    INSERT INTO prevue_inquiries (name, phone, email, service_type, guest_count, event_date, notes)
    VALUES (
      ${inquiry.name},
      ${inquiry.phone},
      ${inquiry.email || null},
      ${inquiry.service_type},
      ${inquiry.guest_count || null},
      ${inquiry.event_date || null},
      ${inquiry.notes || null}
    )
    RETURNING id, name, phone, email, service_type, guest_count, event_date, notes, created_at;
  `;

  return result[0] as unknown as InquiryRecord;
}

export async function getInquiries(): Promise<{ inquiries: InquiryRecord[]; isLiveDb: boolean }> {
  const sql = getDb();

  if (!sql) {
    return { inquiries: demoInquiries, isLiveDb: false };
  }

  try {
    await initDb();
    const rows = await sql`
      SELECT id, name, phone, email, service_type, guest_count, event_date, notes, created_at
      FROM prevue_inquiries
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return { inquiries: rows as unknown as InquiryRecord[], isLiveDb: true };
  } catch (err) {
    console.error('Error fetching from Neon database:', err);
    return { inquiries: demoInquiries, isLiveDb: false };
  }
}
