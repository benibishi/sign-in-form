# Vercel Setup Guide

Step-by-step instructions for setting up and deploying to Vercel.

---

## Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with GitHub, GitLab, Bitbucket, or email

---

## Step 2: Install Vercel CLI

```bash
npm install -g vercel
```

Verify installation:
```bash
vercel --version
```

---

## Step 3: Login

```bash
vercel login
```

Choose your preferred login method (GitHub, GitLab, email, etc.)

---

## Step 4: Prepare Your Project

Ensure your project has:
- ✅ `vercel.json` in the root directory
- ✅ `package.json` with project metadata
- ✅ All HTML, CSS, and JS files in place

Project structure should look like:
```
sign-in-form/
├── index.html
├── dashboard.html
├── css/style.css
├── js/
│   ├── main.js
│   ├── signin.js
│   └── dashboard.js
├── docs/
├── vercel.json
└── package.json
```

---

## Step 5: Deploy

### Quick Deploy (Production)
```bash
vercel --prod
```

### Deploy to Preview
```bash
vercel
```
- Creates a preview deployment
- Review at the provided URL
- Promote to production when ready: `vercel --prod`

---

## Step 6: Verify Deployment

1. Open the deployment URL in your browser
2. Test the sign-in form
3. Navigate to the dashboard
4. Check browser console for any errors (F12)

---

## Step 7: Custom Domain (Optional)

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Update DNS records as instructed

---

## Step 8: Automatic Deployments (GitHub Integration)

1. Push code to GitHub
2. In Vercel Dashboard, import your GitHub repo
3. Enable automatic deployments:
   - Push to `main` → Production deployment
   - Push to other branches → Preview deployments

---

## Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*.{html,css,js}",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/css/(.*)",
      "headers": { "cache-control": "public, max-age=31536000, immutable" },
      "dest": "/css/$1"
    },
    {
      "src": "/js/(.*)",
      "headers": { "cache-control": "public, max-age=31536000, immutable" },
      "dest": "/js/$1"
    },
    {
      "src": "/config/(.*)",
      "headers": { "cache-control": "public, max-age=0, must-revalidate" },
      "dest": "/config/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "npx serve .",
    "build": "echo 'Static site - no build required'",
    "deploy": "vercel --prod"
  }
}
```

---

## Common Issues

### Issue: "Command not found: vercel"
**Solution:** Install CLI globally: `npm install -g vercel`

### Issue: 404 on CSS/JS files
**Solution:** Check paths in HTML are relative (`./css/style.css`)

### Issue: Data not persisting
**Note:** This app uses localStorage (browser-only). For shared data across users, add a database backend.

---

## Next Steps

- Set up a custom domain
- Enable analytics in Vercel
- Add environment variables if extending functionality
- Set up automatic deployments via GitHub

---

## Support

- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)
