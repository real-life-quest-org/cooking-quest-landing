import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email || typeof email !== 'string') return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    await prisma.preRegistration.create({ data: { email } });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: any) {
    if (err?.code === 'P2002') return NextResponse.json({ ok: true }, { status: 200 });
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
