import { NextResponse } from 'next/server';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
});

export async function POST(req: Request) {
  try {
    console.log('AWS REGION:', process.env.AWS_REGION);
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    await client.send(
      new PutItemCommand({
        TableName: 'landscaping_leads',
        Item: {
          leadId: { S: randomUUID() },
          name: { S: name },
          email: { S: email },
          phone: { S: phone || '' },
          message: { S: message || '' },
          status: { S: 'new' },
          createdAt: { S: new Date().toISOString() },
        },
      }),
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
