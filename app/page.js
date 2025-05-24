import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
      <main className="min-h-screen flex flex-col md:flex-row">
        
        {/* Left Section (Text + CTA) */}
        <div className="w-full md:w-1/2 bg-indigo-600 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shorten Your Links Instantly
            </h1>
            <p className="text-lg text-indigo-100 mb-6">
              A fast, secure, and free URL shortener to make your links more shareable.
            </p>
            <Link href="/shorten" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Try Now
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative bg-gray-50">
]            <Image
              src="/hero.jpg" // Replace with your image path
              alt="URL Shortener Illustration"
              fill
              className="object-cover object-center"
            />
        </div>
      
      </main>
   
  );
}
