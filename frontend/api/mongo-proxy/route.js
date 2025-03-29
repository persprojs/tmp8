// api/mongo-proxy/route.js
export const runtime = 'edge';

export default async function handler(request) {
  // 1. Verify secret key
  if (request.headers.get('x-auth-key') !== process.env.PROXY_AUTH_KEY) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 2. Forward to MongoDB
  try {
    const response = await fetch(
      'mongodb+srv://sunil:desiPwd1@cluster0.bxqtu5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        method: request.method,
        headers: request.headers,
        body: request.body
      }
    );
    return response;
  } catch (error) {
    return new Response('Proxy error: ' + error.message, { status: 500 });
  }
}