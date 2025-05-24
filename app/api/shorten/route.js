import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  console.log("Request Body:", body);
  
    const client = await clientPromise;
    const db = client.db("urlshortner");
    const collection = db.collection("links");

    // Check if the URL already exists in the database
    const existingLink = await collection.findOne({ shortenedUrl: body.shortenedUrl });
    console.log("Existing Link:", existingLink);
    if (existingLink) {
      return  Response.json({ success:false, error:true, message: "Url already exists"})
        
    }

    // Insert the new link into the database
    const result = await collection.insertOne({
      url: body.url,
      shortenedUrl: body.shortenedUrl,
      createdAt: new Date(),
    });

    return Response.json({ success:true, error:false, message: "Url shortened successfully", shortenedUrl: body.shortenedUrl });
  
}