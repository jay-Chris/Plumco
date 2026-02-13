# Quick Start Guide - Plumco React Template

## 📦 Installation (2 minutes)

```bash
# Navigate to the project
cd Plumco

# Install all dependencies
npm install

# Start development server
npm run dev
```

That's it! Your site is now running at `http://localhost:5173/`

---

## 🎨 Project Features at a Glance

| Section | File | Purpose |
|---------|------|---------|
| Header | `Header.jsx` | Navigation with mobile menu |
| Hero | `Hero.jsx` | Main banner with CTA buttons |
| Services | `Services.jsx` | 6 service cards |
| About | `About.jsx` | Why choose us + stats |
| Projects | `Projects.jsx` | Portfolio grid |
| Testimonials | `Testimonials.jsx` | Customer reviews |
| Pricing | `Pricing.jsx` | 3 pricing tiers |
| CTA | `CTA.jsx` | Final conversion push |
| Footer | `Footer.jsx` | Links & contact |

---

## 📁 File Structure

```
Plumco/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Button.jsx              ← Reusable button
│   │   └── sections/
│   │       ├── Header.jsx              ← Navigation
│   │       ├── Hero.jsx                ← Banner
│   │       ├── Services.jsx            ← Services grid
│   │       ├── About.jsx               ← Why choose us
│   │       ├── Projects.jsx            ← Portfolio
│   │       ├── Testimonials.jsx        ← Reviews
│   │       ├── Pricing.jsx             ← Price plans
│   │       ├── CTA.jsx                 ← Call to action
│   │       └── Footer.jsx              ← Footer
│   ├── App.jsx                         ← Root component
│   ├── Home3.jsx                       ← Page assembler
│   ├── main.jsx                        ← Entry point
│   ├── App.css                         ← App styles
│   └── index.css                       ← Global styles
├── index.html                          ← HTML template
├── package.json                        ← Dependencies
├── vite.config.js                      ← Build config
├── tailwind.config.js                  ← Tailwind config
├── postcss.config.js                   ← CSS processing
├── .eslintrc.json                      ← Code linting
├── README.md                           ← Overview
├── DOCUMENTATION.md                    ← Detailed guide
└── CODE_EXPLANATIONS.md                ← Code teaching
```

---

## 🚀 Common Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

---

## 💡 Making Changes

### Change Text Content

Edit the component file directly:

**Example - Change service title:**

Open `src/components/sections/Services.jsx`

Find:
```jsx
const services = [
  {
    id: 1,
    icon: '🔧',
    title: 'Emergency Repairs',  ← Change this
    description: 'Fast response to urgent plumbing issues.',
  },
```

Change to:
```jsx
    title: 'Quick Fixes & Repairs',
```

Save the file. The browser updates instantly!

### Change Colors

Edit `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',  // Change blue to orange
        'primary-dark': '#D84315',
      },
    },
  },
  plugins: [],
};
```

Then update component classNames:
```jsx
<button className="bg-primary hover:bg-primary-dark">
  Click Me
</button>
```

### Add a New Service

In `Services.jsx`, add to the array:

```jsx
const services = [
  // ...existing services...
  {
    id: 7,
    icon: '🛠️',
    title: 'Your New Service',
    description: 'Description of your new service.',
  },
];
```

That's it! The grid automatically adds it.

### Reorder Sections

In `Home3.jsx`, move sections around:

```jsx
const Home3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Testimonials />    {/* Moved before Services */}
      <Services />        {/* Now after Testimonials */}
      <About />
      {/* ... rest ... */}
    </div>
  );
};
```

---

## 🎓 Learning Path

### If You're New to React:

1. **Start with:** [react.dev](https://react.dev) official tutorial
2. **Then read:** `DOCUMENTATION.md` in this project
3. **Study:** `CODE_EXPLANATIONS.md` component by component
4. **Practice:** Modify components (change text, colors, add services)
5. **Build:** Try adding a new section (e.g., Blog, FAQs)

### Key Concepts to Understand:

- [ ] Function Components
- [ ] JSX
- [ ] Props
- [ ] useState Hook
- [ ] Array mapping with `.map()`
- [ ] Conditional rendering
- [ ] Component composition

---

## 🎨 Customization Ideas

### Easy Changes (30 seconds)

- Change company name in `Header.jsx`
- Change phone number in `Footer.jsx`
- Add/remove services in `Services.jsx`
- Change hero headline in `Hero.jsx`

### Medium Changes (5 minutes)

- Change color scheme in `tailwind.config.js`
- Add new pricing tier in `Pricing.jsx`
- Add testimonials in `Testimonials.jsx`
- Reorder page sections in `Home3.jsx`

### Advanced Changes (1+ hour)

- Add state and interactivity (e.g., contact form)
- Create custom hooks for API calls
- Add animations with Tailwind
- Integrate with backend API
- Add dark mode support

---

## 🔌 Using the Button Component

The `Button` component is reusable everywhere:

```jsx
import Button from '../common/Button';

// Variant: primary (filled blue)
<Button variant="primary">Get Quote</Button>

// Variant: secondary (light gray)
<Button variant="secondary">Learn More</Button>

// Variant: outline (border blue)
<Button variant="outline">Contact Us</Button>

// Size: sm (small)
<Button size="sm">Small</Button>

// Size: md (medium) - default
<Button size="md">Medium</Button>

// Size: lg (large)
<Button size="lg">Large</Button>

// Combinations
<Button variant="primary" size="lg">
  Big Blue Button
</Button>

// With click handler
<Button onClick={() => console.log('clicked!')}>
  Click Me
</Button>
```

---

## 📱 Responsive Design

The site uses **Tailwind's responsive classes**:

```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

This means:
- `grid-cols-1` - 1 column on mobile
- `md:grid-cols-2` - 2 columns on tablets (768px+)
- `lg:grid-cols-3` - 3 columns on desktop (1024px+)

Test responsiveness:
1. Open site in browser
2. Press F12 (DevTools)
3. Click the device icon (toggle device toolbar)
4. Resize to see breakpoints

---

## 🐛 Troubleshooting

### Problem: Port 5173 already in use

**Solution:**
```bash
npm run dev -- --port 3000
```

### Problem: Styles not updating

**Solution:**
```bash
# Clear browser cache
# Press Ctrl+Shift+Delete, clear cache
# Then reload the page
```

### Problem: Component not showing

**Checklist:**
1. Is it imported in `Home3.jsx`?
2. Is the file name capitalized?
3. Are there syntax errors? (Check console with F12)
4. Is the component exported? (`export default ComponentName`)

### Problem: "Cannot find module"

**Solution:** Check the import path is correct:
```jsx
// Correct
import Services from './components/sections/Services';

// Wrong (missing .jsx or wrong path)
import Services from './components/sections/Services.jsx';
```

---

## 📚 Key Files to Know

1. **Home3.jsx** - Main page (imports all sections)
2. **Button.jsx** - Reusable button (use everywhere)
3. **Header.jsx** - Navigation bar
4. **Services.jsx** - Service showcase (has array of data)
5. **tailwind.config.js** - Colors and styling

---

## 🌐 Deployment

When ready to go live:

```bash
# Build for production
npm run build
```

This creates a `dist/` folder with optimized files.

**Deploy options:**
- **Netlify:** Drag & drop `dist` folder
- **Vercel:** Connect GitHub repo
- **GitHub Pages:** Use `gh-pages` package
- **Traditional hosting:** Upload `dist` via FTP

---

## 💬 Getting Help

1. **React Questions:** Visit [react.dev](https://react.dev)
2. **Tailwind CSS:** Visit [tailwindcss.com](https://tailwindcss.com)
3. **Vite Issues:** Visit [vitejs.dev](https://vitejs.dev)
4. **Code Errors:** Check browser console (F12)

---

## ✨ Next Steps

### 1. Get Familiar (15 minutes)
- [ ] Start dev server (`npm run dev`)
- [ ] Open browser at `http://localhost:5173/`
- [ ] Click around, see the site
- [ ] Open `Home3.jsx` and see the imports

### 2. Make First Change (5 minutes)
- [ ] Open `Services.jsx`
- [ ] Change a service title
- [ ] Watch browser update instantly

### 3. Understand Components (30 minutes)
- [ ] Read `DOCUMENTATION.md`
- [ ] Understand props, state, JSX
- [ ] Try changing multiple components

### 4. Deep Dive (1-2 hours)
- [ ] Read `CODE_EXPLANATIONS.md`
- [ ] Study each component
- [ ] Understand `.map()` and loops
- [ ] See how components compose together

### 5. Customize (ongoing)
- [ ] Change colors and fonts
- [ ] Modify text and images
- [ ] Add/remove services
- [ ] Reorder sections

---

## 🎉 You're Ready!

This project is production-ready and follows React.dev best practices. Everything you need is here:

✅ Modern React (function components only)
✅ Responsive design (mobile-first)
✅ Reusable components
✅ Clean, professional code
✅ Complete documentation

**Start building!**

---

**Need help?** Check the DOCUMENTATION.md or CODE_EXPLANATIONS.md files.

**Want to learn React?** Visit [react.dev](https://react.dev) - the official React documentation.
