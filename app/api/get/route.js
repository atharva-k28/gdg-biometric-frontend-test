import dbConnect from '../../../lib/mongodb'; // Adjust path if necessary
import MyData from '../../../models/MyData';

export async function GET(req) {
  await dbConnect();

    const url = new URL(req.url);
    const className = url.searchParams.get('class');
    const startDate = url.searchParams.get('start');
    const endDate = url.searchParams.get('end');
  try {

    const filter = (className) && !['everyone','all','sol'].includes(className)
    ?{class:className}
    :{};

    (startDate && endDate)
    ?filter.date = {$gte: new Date(startDate),$lte: new Date(endDate)}
    :null

    const data = await MyData.find(filter); // Fetch all data
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
