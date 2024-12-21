export async function GET(req, res){
  return new Response('<h1> This page will link to /signin an /signup api</h1>', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}