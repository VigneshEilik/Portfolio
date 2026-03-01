# Modern AI & Data Science Portfolio 🚀

A high-performance, visually stunning portfolio website designed for AI Engineers and Data Scientists. Inspired by premium design agencies ("MOST"), this portfolio features a sophisticated **Glassmorphism** aesthetic, cinematic animations, and a seamless AJAX-powered contact system.

---

## ✨ Features

- **💎 Elite Glassmorphism Design**: Custom-built glassy utility system with 20px backdrop blur, saturated translucency, and glowing borders.
- **🌌 Cinematic Hero Section**: High-impact bold display typography, italic stroke-text effects, and professional star-trail background integration.
- **🛠️ AJAX Contact System**: Fully integrated with **FormSubmit.co**, featuring a custom success state and checkmark animation—no page reloads.
- **📱 Responsive Layout**: Optimized for every device, from mobile to ultra-wide monitors.
- **🌗 Smart Dark Mode**: Custom color palette (Slate & Blue) that adapts to the user's system preferences.
- **⚡ Performance First**: Built with **Next.js 15 (App Router)** for instant loading and SEO-ready architecture.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@theme` engine)
- **Icons**: Custom SVG icons for GitHub, LinkedIn, and Phone.
- **Contact Handling**: [FormSubmit.co](https://formsubmit.co/) (AJAX-powered submission)
- **Typography**: [Google Fonts - Inter & Outfit](https://fonts.google.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/vignesheilik/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Contact Form
Update the email in `src/components/sections/Contact.tsx` to your own to start receiving inquiries:
```tsx
const response = await fetch("https://formsubmit.co/ajax/your-email@example.com", { ... });
```

### 4. Run locally
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site live.

---

## ⚙️ Project Structure

- `src/app/` - App router components and global styles.
- `src/components/` - Reusable UI components (Navbar, Footer, FadeIn).
- `src/components/sections/` - Individual page sections (Hero, About, Projects, Experience, Contact).
- `public/` - Static assets including profile photos and background images.

---

## 👔 Contact Info

**Vignesh G**  
*Data Scientist • AI Full Stack Developer*

- **LinkedIn**: [linkedin.com/in/vignes-g](https://www.linkedin.com/in/vignes-g)
- **GitHub**: [github.com/vignesheilik](https://github.com/vignesheilik)
- **Email**: [vignesh2k02@gmail.com](mailto:vignesh2k02@gmail.com)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
