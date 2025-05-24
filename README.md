# URL Shortener

A Next.js-based URL shortening service that converts long URLs into short, shareable links.

## Features
- Shortens long URLs into compact links
- MongoDB for link storage
- Simple and intuitive interface

## Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB Atlas account

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hammad-ali-nadeem/urlshortner.git
   cd urlshortner
   
## Install dependencies

bash
npm install
Set up environment variables

Create a .env.local file in the root directory and add:

MONGODB_URI="your-mongodb-uri"
NEXT_PUBLIC_URL="your-public-url"

⚠️ Important: Never commit this file to version control!

Run the development server

npm run dev
## Usage

Visit http://localhost:3000 in your browser

Enter a long URL in the input field
Enter shorten url text
Click "Generate" to generate a compact link

Copy and share your new short URL

## Deployment
This project is configured for Vercel deployment. Pushes to the main branch will automatically trigger deployments.

