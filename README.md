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

- **Local Storage**
  - Data persists across page refreshes
  - No backend required
  - Works offline

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
│   ├── DEPLOYMENT.md       # Deployment guide
│   └── VERCEL-SETUP.md     # Vercel setup instructions
├── vercel.json             # Vercel configuration
├── package.json            # Project metadata
└── README.md               # This file
```

## Quick Start

### Run Locally

```bash
# Install a local server (optional)
npm install -g serve

# Run dev server
npm run dev
```

Navigate to `http://localhost:3000`.

### Usage

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

## Deploy to Vercel

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### GitHub Integration

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Auto-deploy on every push

## Technologies

- HTML5
- CSS3 (Flexbox, gradients, responsive media queries)
- Vanilla JavaScript (ES6+ Modules)
- LocalStorage API
- Vercel (deployment)

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript Modules
- CSS Flexbox
- LocalStorage API

## Note on Data Storage

This application uses **localStorage** for data persistence:
- Data is stored in the user's browser
- Data persists across page refreshes
- Each browser/device has its own separate data
- For multi-user shared data, a backend database would be required

## License

ISC
