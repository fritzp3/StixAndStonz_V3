// src/app/api/contact/route.ts
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  try {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } =
      process.env;

    if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION) {
      throw new Error('Missing AWS environment variables');
    }

    const client = new DynamoDBClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    const data = await req.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
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
