# Guidance Group Pvt Ltd - Student Portal

A modern Next.js website for Guidance Group Pvt Ltd, featuring a student portal with PDF document generation and management.

## Features

- **Student Portal** - Secure login and dashboard for enrolled students
- **PDF Generation** - Automated fee receipts and coaching agreements
- **Online PDF Viewer** - View documents in-browser before downloading
- **100% Placement Guarantee** - Unconditional refund policy in contracts
- **Responsive Design** - Mobile-friendly interface with dark mode support

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **PDF Generation**: jsPDF
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 10 or higher

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Student Login

Login credentials:
- **Email**: rahulkushwaha2206@gmail.com
- **Password**: Rahul@2206

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── courses/           # Courses page
│   ├── contact/           # Contact page
│   ├── login/             # Student login
│   └── dashboard/         # Student dashboard
├── components/            # React components
│   ├── home/             # Home page sections
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
│   ├── generate-contract.ts  # Contract PDF generator
│   ├── generate-receipt.ts   # Receipt PDF generator
│   └── student-data.ts       # Student data interface
└── public/               # Static assets
```

## Images

Add the following images to `public/images/`:
- `hero-students.jpg` - Hero section background
- `classroom.jpg` - About page image

## Environment Variables

For Vercel deployment, add these secrets to your GitHub repository:
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

## Deployment

### GitHub Pages (Static Site)

The site is configured to deploy automatically as a static website to GitHub Pages:

1. Push code to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
4. Your site will be live at: `https://luxestudio-live.github.io/guidance-group/`

### Vercel (Alternative)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on every push to `main`

Or use the GitHub Actions workflow included in `.github/workflows/deploy.yml`

### Manual Deployment

```bash
# Build static site
pnpm build

# The static files will be in the 'out' directory
# Upload the 'out' folder to any static hosting service
```

## Contact

- **Email**: info@guidancegroup.online
- **Website**: [https://guidance-group.vercel.app](https://guidance-group.vercel.app)

## License

© 2026 Guidance Group Pvt Ltd. All rights reserved.
