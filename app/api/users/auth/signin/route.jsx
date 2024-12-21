
export async function GET(req, res) {
  return new Response('<h1> Sign In Route </h1>', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    }
  })
}