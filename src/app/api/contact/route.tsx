// src/app/api/contact/route.ts
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

const region = process.env.AWS_REGION || 'us-west-2';

// Local dev = explicit credentials
const isLocal =
  process.env.NODE_ENV === 'development' &&
  !!process.env.AWS_ACCESS_KEY_ID &&
  !!process.env.AWS_SECRET_ACCESS_KEY;

const client = isLocal
  ? new DynamoDBClient({
      region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    })
  : new DynamoDBClient({
      region,
      // IMPORTANT:
      // No credentials here → Amplify SSR assumes AmplifySSR_DynamoDBWriteOnly
    });

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const command = new PutItemCommand({
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
    });

    await client.send(command);

    return new Response(
      JSON.stringify({ message: 'Form submission stored successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err: any) {
    console.error('DynamoDB error:', err);
    return new Response(
      JSON.stringify({
        error: err.message || 'Failed to store form submission',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
