https://benibishi.github.io/sign-in-form/
# Sign-In Form

A simple, responsive web-based sign-in system for construction site workers. Allows users to register their attendance with company, trade, and safety induction information.

## Features

- **Sign-In Form** (`index.html`)
  - Full name input
  - Company name input
  - Role/Trade selection (Plumbing, Electrical, Framing, etc.)
  - Safety induction confirmation checkbox
  - Form validation

- **Dashboard** (`dashboard.html`)
  - View all signed-in users
  - Total count display
  - Sorted by company name
  - Responsive table layout

- **Responsive Design**
  - Mobile-friendly layout
  - Adapts to different screen sizes
  - Clean, modern UI with gradient background

- **Firebase Realtime Database**
  - Real-time data synchronization
  - Data persists across sessions
  - Multi-user support

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
├── config/
│   └── firebase-config.js  # Firebase configuration (REPLACE WITH YOUR CONFIG)
└── package.json            # Project metadata
```

## Setup

### 1. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable **Realtime Database** (Build → Realtime Database → Create Database)
4. Set database rules for testing:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
5. Get your Firebase config:
   - Project Settings (gear icon) → General
   - Scroll to "Your apps" → Add web app or select existing
   - Copy the `firebaseConfig` object
6. Replace the config in `config/firebase-config.js` with your actual credentials

### 2. Run Locally

```bash
# Install serve (optional)
npm install -g serve

# Run local dev server
npm run dev
```

Navigate to `http://localhost:3000`.

### 3. Deploy to Vercel

**Option A: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

**Option B: GitHub Integration**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Option C: Direct from folder**
```bash
npm run deploy
```

## Usage

1. Open `index.html` in a web browser
2. Fill out the sign-in form:
   - Enter your full name
   - Enter your company name
   - Select your role/trade
   - Confirm safety induction completion
3. Click **Sign In** to submit
4. View all signed-in users at the **Dashboard** link

## Trades Available

- Plumbing
- Electrical
- Siding
- Drywall/Mud and Tape
- Framing
- Finish Carpentry
- Roofing/Shingles
- Cribbing
- Excavation

## Technologies

- HTML5
- CSS3 (Flexbox, gradients, responsive media queries)
- Vanilla JavaScript (ES6+ Modules)
- Firebase Realtime Database

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript Modules
- CSS Flexbox
- Firebase SDK

## License

ISC
