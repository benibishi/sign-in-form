# Deployment Guide

This guide covers deploying the Sign-In Form application to Vercel.

## Project Structure

```
sign-in-form/
├── index.html              # Sign-in form page
├── dashboard.html          # Dashboard to view signed-in users
├── css/
│   └── style.css           # Styles and responsive design
├── js/
│   ├── main.js             # Main entry point
│   ├── signin.js           # Sign-in form logic
│   └── dashboard.js        # Dashboard logic
├── docs/
│   ├── DEPLOYMENT.md       # This file
│   └── VERCEL-SETUP.md     # Vercel-specific setup guide
├── vercel.json             # Vercel configuration
├── package.json            # Project metadata with deploy scripts
└── README.md               # Project overview
```

---

## Prerequisites

- Node.js installed (v14 or higher)
- A Vercel account (free tier available)

---

## Deployment Options

### Option 1: Vercel CLI (Recommended for Quick Deploy)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to project folder:**
   ```bash
   cd sign-in-form
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   - First deploy creates a preview URL
   - For production: `vercel --prod`

---

### Option 2: GitHub Integration (Recommended for CI/CD)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your repository
   - Click "Deploy"

3. **Auto-deploy on push:**
   - Every push to `main` branch triggers automatic deployment

---

### Option 3: Using npm Scripts

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy using package.json script:**
   ```bash
   npm run deploy
   ```

---

## Post-Deployment

### Testing

1. Open your deployed URL in a browser
2. Fill out the sign-in form
3. Navigate to the dashboard to verify data persistence

### Note on Data Storage

This application uses **localStorage** for data persistence:
- Data is stored in the user's browser
- Each user sees only their own sign-in data
- For multi-user shared data, consider adding a backend database

---

## Environment Variables (Optional)

If you extend the app with API routes, add environment variables in:
- Vercel Dashboard → Project Settings → Environment Variables

---

## Troubleshooting

### Build Errors
- This is a static site - no build step required
- Ensure `vercel.json` is in the project root

### 404 on Pages
- Check that HTML files are in the project root
- Verify `vercel.json` routes configuration

### CSS/JS Not Loading
- Check file paths in HTML are relative: `./css/style.css`, `./js/main.js`
- Clear browser cache after deployment

---

## Useful Commands

```bash
# Local development
npm run dev

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls
```

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Static Deployment Guide](https://vercel.com/docs/deployments/generated-static-urls)
