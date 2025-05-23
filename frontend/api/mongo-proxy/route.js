export const runtime = 'edge';

export default async function handler(request) {  
  const headers = new Headers();  
  headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow these methods
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow these headers

  // Handle preflight requests
  // 1. Quick auth check (use the same key you set in Vercel)
  if (request.headers.get('x-auth-key') !== process.env.PROXY_AUTH_KEY) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 2. Your exact Atlas connection string
  const ATLAS_URI = 'mongodb+srv://sunil:desiPwd1@cluster0.bxqtu5q.mongodb.net/?retryWrites=true&w=majority';

  // 3. Forward request directly
  try {
    const response = await fetch(ATLAS_URI, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return response;
  } catch (error) {
    return new Response('DB Connection Failed: ' + error.message, { status: 500 });
  }
}