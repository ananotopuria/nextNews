export function GET(request) {
  console.log(request);
  // return Response.json()
  return new Response("hello");
}
// export default function POST(request){
//     console.log(request)

// }
