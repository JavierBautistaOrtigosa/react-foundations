# ============================================

# React + Vite + Tailwind CSS v4 Setup (2026)

# ============================================

## 1. Create the Vite + React project

```bash
npm create vite@latest react-foundations -- --template react
```

## 2. Enter the project directory

```bash
cd react-foundations
```

## 3. Install project dependencies (REQUIRED)

```bash
npm install
```

## 4. Install Tailwind v4 + the official Vite plugin (REQUIRED)

```bash
npm install -D tailwindcss @tailwindcss/vite
```

## 5. (OPTIONAL) Create a Tailwind config file

Tailwind v4 works without a config file.  
Create one only if you want to customize theme, colors, fonts, etc.

```bash
New-Item tailwind.config.js
```

Add this inside `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 6. Configure Vite to use Tailwind v4 (REQUIRED)

Replace the contents of `vite.config.js` with:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 7. Add Tailwind to your CSS entry file (REQUIRED)

Replace the contents of `src/index.css` with:

```css
@import "tailwindcss";
```

## 8. Start the development server (REQUIRED)

```bash
npm run dev
```
