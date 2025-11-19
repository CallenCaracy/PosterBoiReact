# PosterBoi Frontend

**PosterBoi Frontend** is a lightweight and modular UI built with React, Vite, and Tailwind CSS. It serves as the presentation layer for the PosterBoi ecosystem, consuming backend APIs for posts, comments, authentication, and image content. It focuses on a fast developer experience, reusable components, and clean state management.

---

## Architecture Diagram

![Architecture Diagram](https://github.com/CallenCaracy/PosterBoi/blob/main/.github/diagrams/PosterBoi.png)

## Features

  - React + Vite for a fast, modern development workflow
  - Tailwind CSS utility-first styling
  - Atomic component structure (UI, features, layout separation)
  - API integration with PosterBoi backend
  - React Router v6 for navigation
  - Environment-based configuration
  - Image rendering via Cloudinary URLs

## Planned features:

  - User authentication UI → WIP
  - Post creation & upload → Not Started
  - In-app notifications → Not Started
  - WebSocket chat UI → Not Started

## Project Structure
  ```bash
  └───posterboi-frontend
      ├───.github/
      │   └───workflows/          # GitHub Actions for CI/CD (build/test)
      ├───.gitignore              # Ignore dist, node_modules, logs, and env files
      ├───README.md               # Project documentation
      ├───index.html              # Root HTML entry
      ├───vite.config.ts          # Vite configuration and plugins
      ├───package.json            # Dependencies and scripts
      └───src/
          ├───assets/             # Images, logo, static assets
          ├───components/         # Reusable UI components
          ├───hooks/              # Custom React hooks
          ├───layout/             # Global layouts (Navbar, Sidebar)
          ├───pages/              # Route-level pages (Home, Login, Register)
          ├───api/                # API clients for backend endpoints
          ├───styles/             # Global CSS, Tailwind config imports
          ├───utils/              # Helper functions (formatting, validation)
          ├───App.tsx             # Root app component
          └───main.tsx            # React entry point
  ```

## Getting Started

### Prerequisites

  - [Node.js 18+](https://nodejs.org/en)
  - [A running PosterBoi backend API](https://github.com/CallenCaracy/PosterBoi)
  - [A Cloudinary account (for image rendering)](https://cloudinary.com/)

### Setup

  1. Clone the repository:

  ```
  git clone https://github.com/YourUsername/posterboi-frontend.git
  cd posterboi-frontend
  ```

  2. Install dependencies:

  ```
  npm install
  ```

  3. Create a .env file:

  ```
  VITE_API_BASE_URL="http://localhost:5000/api"
  VITE_CLOUDINARY_CLOUD_NAME="your-cloud-name"
  ```

  4. Start the development server:

  ```
  npm run dev
  ```

  5. The app will be available at:

  ```
  http://localhost:5173
  ```

### Available Scripts

  - Run development server

  ```
  npm run dev
  ```

  - Prepare production build

  ```
  npm run build
  ```

  - Preview a production build locally

  ```
  npm run preview
  ```

## API Integration

### API requests are kept inside src/api/:
  - authService.ts
  - postService.ts
  - commentService.ts

### Tailwind Setup

  1. Tailwind is fully configured through:
  - vite.config.ts
  - src/styles/index.css

  2. Example utility usage:

  ```bash
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
    Create Post
  </button>
  ```

  3. Planned Enhancements
  - Authentication Flow: Login, Register, Forgot Password
  - Protected Routes: Guards using JWT
  - Post Editor: Image upload and markdown support
  - Live Feed: WebSocket-based real-time updates
  - Responsive Layout: Modern UI for desktop and mobile