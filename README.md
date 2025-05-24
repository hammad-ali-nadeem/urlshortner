# URL Shortener

A Next.js-based URL shortening service that converts long URLs into short, shareable links.

## Features
- Shortens long URLs into compact links
- MongoDB for link storage
- Simple and intuitive interface
- Local development ready

## Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB Atlas account

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hammad-ali-nadeem/urlshortner.git
   cd urlshortner
Install dependencies

bash
npm install
Set up environment variables

Create a .env.local file in the root directory and add:

env
MONGODB_URI=mongodb+srv://hammadsam:islam321ABAD@urlshortner.xmjhaax.mongodb.net/
NEXT_PUBLIC_URL=http://localhost:3000
⚠️ Important: Never commit this file to version control!

Run the development server

bash
npm run dev
Usage
Visit http://localhost:3000 in your browser

Enter a long URL in the input field

Click "Shorten" to generate a compact link

Copy and share your new short URL

Project Structure
urlshortner/
├── pages/            # Next.js pages
├── components/       # React components
├── lib/              # Utility functions
├── styles/           # CSS modules
├── .env.local        # Environment variables
├── package.json      # Project dependencies
└── README.md         # This file
Deployment
This project is configured for Vercel deployment. Pushes to the main branch will automatically trigger deployments.

Security Notes
Rotate your MongoDB credentials regularly

Consider using environment variables for all sensitive data

Implement rate limiting in production

Contributing
Pull requests are welcome. For major changes, please open an issue first.

