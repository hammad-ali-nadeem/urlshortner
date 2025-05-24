import {redirect} from 'next/navigation';
import clientPromise from '@/lib/mongodb';

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    const client = await clientPromise;
    const db = client.db("urlshortner");
    const collection = db.collection("links");
    const link = await collection.findOne({ shortenedUrl: shorturl });
    if (link) {
        redirect(link.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_URL}`);
    }
}