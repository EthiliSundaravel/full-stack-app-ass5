import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // uses the database in URI
    const collections = await db.listCollections().toArray();

    return NextResponse.json({ collections });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
