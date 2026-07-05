import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { packageName, details } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn('Telegram Bot Token or Chat ID is missing in environment variables.');
      return NextResponse.json({ success: false, error: 'Telegram configuration missing' }, { status: 500 });
    }

    const message = `🔔 *New Lead - Book a Call Clicked!*\n\n*Section/Package:* ${packageName || 'General'}\n*Details:* ${details || 'N/A'}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Telegram API error:', errText);
      return NextResponse.json({ success: false, error: 'Failed to send Telegram message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Telegram route error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
