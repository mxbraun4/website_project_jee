Setup and Deployment Guide

1. Prerequisites:
Node.js (version 18 or higher | https://nodejs.org/en)
Git (https://git-scm.com/downloads)
Strapi CLI (npm install -g @strapi/strapi)


2. Frontend Setup:
Clone Projec (git clone https://github.com/mxbraun4/website_project_jee.git)
Change directory (cd website_project_jee)
Install the required packages (npm install)
Start development server (npm run dev)
Site will be availible at http://localhost:3000/


3. Backend Setup (Strapi):
Go to Strapi directory (cd my-strapi-project)
Install dependencies (npm install)
Start Strapi (npm run develop)

Info:
Strapi admin panel will be at http://localhost:1337/admin
The Strapi admin panel will fetch for articles and display them on the events page of the frontend
The backend is configured to serve articles as shown in:
async function importSeedData() {
  // Allow read of application content types
  await setPublicPermissions({
    article: ['find', 'findOne'],
    category: ['find', 'findOne'],
    author: ['find', 'findOne'],
    global: ['find', 'findOne'],
    about: ['find', 'findOne'],
  });




Deployment:
1. Deploy Frontend (Next.js)
Using Vercel (Easiest Option)
Create account at vercel.com
Install Vercel CLI (npm install -g vercel)
Deploy (vercel)

2. Deploy Strapi Backend
Using Railway (Simple Option)
Create account at railway.app
2. Connect your GitHub repository
Add environment variables:
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-keys-here
API_TOKEN_SALT=your-salt-here
ADMIN_JWT_SECRET=your-secret-here
JWT_SECRET=your-secret-here

3. Connect Frontend to Backend
Update your frontend's .env file with your deployed Strapi URL:
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.com




Troubleshooting:
Dependencies Not Installing: Ensure Node.js and NPM are installed and updated.
Node.js documentation: https://nodejs.org/docs/latest/api/
Strapi documentation: https://docs.strapi.io/dev-docs/intro
