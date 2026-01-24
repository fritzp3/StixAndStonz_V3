// src/app/api/contact/route.ts
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  try {
    // --- Determine environment (Production vs Local) ---
    const isProd = !!process.env.PROD_AWS_ACCESS_KEY_ID;

    const accessKeyId = isProd
      ? process.env.PROD_AWS_ACCESS_KEY_ID
      : process.env.AWS_ACCESS_KEY_ID;

    const secretAccessKey = isProd
      ? process.env.PROD_AWS_SECRET_ACCESS_KEY
      : process.env.AWS_SECRET_ACCESS_KEY;

    const region = isProd
      ? process.env.PROD_AWS_REGION
      : process.env.AWS_REGION;

    if (!accessKeyId || !secretAccessKey || !region) {
      throw new Error(
        `Missing AWS environment variables. Current values: 
      accessKeyId=${!!accessKeyId}, 
      secretAccessKey=${!!secretAccessKey}, 
      region=${!!region}`,
      );
    }

    // --- Initialize DynamoDB client ---
    const client = new DynamoDBClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    // --- Parse request body ---
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

    // --- Prepare DynamoDB item ---
    const command = new PutItemCommand({
      TableName: 'landscaping_leads',
      Item: {
        leadId: { S: randomUUID() }, // Primary key
        name: { S: name },
        email: { S: email },
        phone: { S: phone || '' },
        message: { S: message || '' },
        status: { S: 'new' },
        createdAt: { S: new Date().toISOString() },
      },
    });

    // --- Send item to DynamoDB ---
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
