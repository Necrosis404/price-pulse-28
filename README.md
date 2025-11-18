# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/83ef2b6e-3531-4727-8149-532eb5006798

## How to Run This Project on Localhost

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18 or higher recommended)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or install using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

2. **npm** (comes with Node.js) or **yarn** package manager

### Step-by-Step Installation Guide

#### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone <YOUR_GIT_URL>
```

If you don't have the Git URL, you can get it from your Lovable project settings or GitHub repository.

#### 2. Navigate to Project Directory

```bash
cd <YOUR_PROJECT_NAME>
```

Replace `<YOUR_PROJECT_NAME>` with the actual folder name of your cloned project.

#### 3. Install Dependencies

Install all required packages and dependencies:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

This command will read the `package.json` file and install all necessary dependencies in a `node_modules` folder.

#### 4. Start the Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

#### 5. Access Your Application

Once the development server starts successfully, you'll see output similar to:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your web browser and navigate to:
```
http://localhost:5173
```

Your application should now be running on localhost!

### Additional Commands

- **Build for Production:**
  ```bash
  npm run build
  ```
  This creates an optimized production build in the `dist` folder.

- **Preview Production Build:**
  ```bash
  npm run preview
  ```
  This serves the production build locally for testing.

### Troubleshooting

**Port Already in Use:**
If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.).

**Dependencies Issues:**
If you encounter dependency errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Node Version Issues:**
Ensure you're using Node.js version 18 or higher:
```bash
node --version
```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/83ef2b6e-3531-4727-8149-532eb5006798) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/83ef2b6e-3531-4727-8149-532eb5006798) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
