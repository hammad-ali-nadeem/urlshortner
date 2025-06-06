"use client";

import Loader from "@/components/Loader";
import Link from "next/link";
import React,{useState} from "react";
import {  toast } from 'react-toastify';

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [generated, setGenerated] = useState("");
    const [requiredUrl, setRequiredUrl] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shortenedUrl }),
        });
        const data = await response.json();
        console.log("Response Data:", data);
        if (data.error) {
            setGenerated("");
            setRequiredUrl("");
            toast.error(data.message);
            setLoading(false);
            return;
        }
        if(data.shortenedUrl){
        setGenerated(`${process.env.NEXT_PUBLIC_URL}/${data.shortenedUrl}`);
        setRequiredUrl(`https://www.smi.to/${data.shortenedUrl}`);
        setLoading(false);
        toast.success(data.message);}
        else{
        setGenerated("");
        setRequiredUrl("");
        toast.error(data.message);}
        setUrl("");
        setShortenedUrl("");
        setLoading(false);
    };
    
    return (
        <>
        {loading && (<Loader />)}
        <div className="container mx-auto p-4 my-12">
        <form onSubmit={handleSubmit} className="mb-4 flex space-y-4 flex-col max-w-lg mx-auto bg-green-100 p-8 rounded shadow-xl">
            <h1 className="text-2xl font-bold mb-4 text-center">Shorten Your URL</h1>
            {generated && (
                <div className="mt-4">
                <p className="text-lg font-bold">Shortened URL:</p>
                <code><Link
                href={generated} target="_blank" rel="noopener noreferrer">
                    {generated}
                </Link>
                </code>
                <p className="text-lg font-bold my-2">Required URL:
                </p>
                <code><Link
                href={requiredUrl} target="_blank" rel="noopener noreferrer">
                    {requiredUrl}
                </Link>
                </code>
                <p><small className="text-red-500">Note: This URL will not work. This is done because of the requirment for base url</small>
                </p>
                </div>
            )}
            <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            className="border border-gray-300 p-2 rounded w-full"
            required
            />
             <input
            type="shortenurl"
            value={shortenedUrl}
            onChange={(e) => setShortenedUrl(e.target.value)}
            placeholder="Enter your short url text"
            className="border border-gray-300 p-2 rounded w-full"
            required
            />
            <button
            type="submit"
            className="bg-purple-700 text-white p-2 rounded mt-2 font-bold hover:bg-purple-900 transition duration-200" 
            >
            Generate Short URL
            </button>
        </form>
        
        </div>
        </>
    );
}


  
export default Shorten;