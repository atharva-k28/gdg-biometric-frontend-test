import dbConnect from '../../../lib/mongodb'; // Adjust path if necessary
import MyData from '../../../models/MyData';

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json(); // Parse request body
    const data = await MyData.create(body); // Save to MongoDB
    return new Response(JSON.stringify({ success: true, data }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
