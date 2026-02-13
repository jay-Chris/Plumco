# Plumco React Template - Home 3

A modern, professional React template for a plumbing services website. Built with modern React patterns, Tailwind CSS, and following React.dev best practices.

## 🎯 Features

- **Modern React** - Function components, Hooks, no class components
- **Responsive Design** - Mobile-first, works on all devices
- **Component-Based** - Reusable, modular architecture
- **Tailwind CSS** - Utility-first styling for rapid development
- **Semantic HTML** - Better for accessibility and SEO
- **Clean Code** - Professional, readable, maintainable
- **Zero Configuration** - Vite for instant HMR

## 📂 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Button.jsx         # Reusable button component
│   └── sections/
│       ├── Header.jsx         # Navigation & branding
│       ├── Hero.jsx           # Hero banner with CTA
│       ├── Services.jsx       # Services showcase
│       ├── About.jsx          # Why choose us
│       ├── Projects.jsx       # Portfolio
│       ├── Testimonials.jsx   # Customer reviews
│       ├── Pricing.jsx        # Pricing plans
│       ├── CTA.jsx            # Final call-to-action
│       └── Footer.jsx         # Footer links & info
├── App.jsx                    # Root component
├── Home3.jsx                  # Page assembler
├── main.jsx                   # Entry point
├── App.css                    # App styles
└── index.css                  # Global styles
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

Creates optimized files in `dist/` folder.

## 📋 Page Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Large banner with headline and buttons
3. **Services** - 6 service cards in responsive grid
4. **About** - Why choose us with stats and features
5. **Projects** - Portfolio with filter buttons
6. **Testimonials** - Customer reviews with ratings
7. **Pricing** - 3 pricing tiers with features
8. **CTA** - Final conversion section
9. **Footer** - Links, company info, contact

## 💻 Component Examples

### Using the Button Component
```jsx
import Button from './components/common/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`
**Sizes:** `sm`, `md`, `lg`

### Creating a New Section
```jsx
const MySection = () => {
  return (
    <section id="my-section" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">Section Title</h2>
        {/* Content */}
      </div>
    </section>
  );
};

export default MySection;
```

Then add to `Home3.jsx`:
```jsx
import MySection from './components/sections/MySection';

<MySection />
```

## 🎨 Styling

Uses **Tailwind CSS** for all styling. Key classes:

- **Colors:** `bg-blue-600`, `text-gray-800`, `text-white`
- **Spacing:** `px-4`, `py-20`, `gap-8`
- **Responsive:** `md:`, `lg:` prefixes
- **Hover:** `hover:bg-blue-700`, `hover:shadow-lg`

### Customizing Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      'primary-dark': '#1d4ed8',
    },
  },
}
```

## 🔧 React Patterns Used

### 1. Function Components
```jsx
const MyComponent = () => {
  return <div>Hello</div>;
};
```

### 2. Props
```jsx
const Card = ({ title, description }) => {
  return <div><h3>{title}</h3><p>{description}</p></div>;
};

<Card title="Hello" description="World" />
```

### 3. State (hooks)
```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
```

### 4. Array Mapping
```jsx
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

### 5. Conditional Rendering
```jsx
{isVisible && <Component />}
```

## 📚 Learning Resources

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **JavaScript Array Methods:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## ✅ Code Quality

- ✨ ESLint configured
- 🎯 Modern React patterns only
- 🔍 Semantic HTML
- ♿ Accessible components
- 📱 Responsive design
- ⚡ Optimized performance

## 📦 Dependencies

- **React 18.2** - UI library
- **Tailwind CSS 3.3** - Styling
- **Vite 4.4** - Build tool
- **PostCSS & Autoprefixer** - CSS processing

## 🤝 Contributing

This is a learning template. Feel free to fork and customize:

1. Clone the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is a learning resource based on the Plumco template design.

## 🆘 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Styles not updating?
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild Tailwind: `npm run build`

### Components not rendering?
- Check imports in `Home3.jsx`
- Ensure component path is correct
- Check browser console for errors

## 🎓 Educational Notes

This template demonstrates:

- **Component Architecture** - Breaking UI into reusable pieces
- **Props** - Passing data between components
- **State Management** - Tracking changing data
- **Array Methods** - `.map()`, `.filter()` for rendering lists
- **Conditional Rendering** - Showing/hiding elements
- **Semantic HTML** - Proper HTML structure
- **Responsive Design** - Mobile-first CSS
- **CSS Utilities** - Tailwind for rapid styling

Perfect for learning modern React development!

---

**Built with ❤️ following React.dev best practices**
