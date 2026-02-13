# Plumco React Template Home 3 - Complete Documentation

## Project Overview

This is a modern React implementation of the Plumco Home 3 template, following **React.dev best practices** and teaching patterns. The project demonstrates professional component architecture, reusable UI patterns, and modern React development techniques.

### Key Features

- ✅ Modern React (functional components only)
- ✅ React Hooks (useState, useEffect)
- ✅ Semantic HTML
- ✅ Tailwind CSS styling
- ✅ Responsive design
- ✅ Clean, readable code
- ✅ Component-based architecture
- ✅ No class components
- ✅ No outdated patterns

---

## Project Structure

```
Plumco/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Button.jsx          # Reusable button component
│   │   └── sections/
│   │       ├── Header.jsx          # Navigation header
│   │       ├── Hero.jsx            # Hero banner section
│   │       ├── Services.jsx        # Services showcase
│   │       ├── About.jsx           # Why choose us section
│   │       ├── Projects.jsx        # Portfolio/Projects
│   │       ├── Testimonials.jsx    # Customer reviews
│   │       ├── Pricing.jsx         # Pricing plans
│   │       ├── CTA.jsx             # Call-to-action
│   │       └── Footer.jsx          # Footer section
│   ├── App.jsx                     # Root component
│   ├── Home3.jsx                   # Main page assembler
│   ├── main.jsx                    # Entry point
│   ├── App.css                     # App styles
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── .eslintrc.json                  # ESLint rules
└── README.md                       # This file
```

---

## Component Architecture

### 1. **Button Component** (`common/Button.jsx`)

#### What It Does
The `Button` component is a reusable UI element that can be styled in different ways (variants and sizes). It accepts props to customize appearance and behavior.

#### Why It's Split This Way
By creating a single `Button` component, we avoid repeating styling code. Every button across the website uses this component, making future style updates easy and consistent.

#### How JSX Works
```jsx
const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
```

- `children`: The text inside the button (JSX pattern for component composition)
- `variant`: Changes button colors (primary, secondary, outline)
- `size`: Controls padding and font (sm, md, lg)
- `className`: Allows custom CSS classes for flexibility

#### How Props Are Used
Props are JavaScript objects passed to components. They're like function parameters:

```jsx
<Button variant="primary" size="lg">Click Me</Button>
```

This passes `variant="primary"` and `size="lg"` to the component function as props.

#### Code Pattern (React.dev Standard)
```jsx
const Button = ({ children, variant = 'primary' }) => {
  return <button className={...}>{children}</button>;
};
```

This is the modern React pattern: **function component with props**.

---

### 2. **Header Component** (`sections/Header.jsx`)

#### What It Does
Displays the website's navigation bar with logo, menu links, and mobile menu toggle.

#### Why Components Are Split This Way
The header is a distinct section that could appear on any page. By keeping it separate:
- It's reusable on multiple pages
- It's easier to update navigation without affecting other code
- Mobile and desktop layouts are in one place

#### React Hooks Used: `useState`
```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

**What this means:**
- `isMenuOpen`: A state variable that tracks if the menu is open
- `setIsMenuOpen`: A function to update this state
- `useState(false)`: Initial value is `false` (menu is closed)

**Why we need it:**
When users click the mobile menu button, we need to remember if the menu is open or closed. State lets us store this information.

#### How JSX Works in Header
```jsx
{isMenuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200">
    {/* Mobile menu content */}
  </div>
)}
```

This is **conditional rendering**: "If `isMenuOpen` is true, show this mobile menu. Otherwise, show nothing."

#### How Props Would Be Used
If we wanted to pass data to Header:
```jsx
<Header navLinks={links} logo="plumco" />
```

Currently, Header creates its own data (navLinks array), which is fine for a static site. For dynamic sites, we'd pass this as props from a parent.

---

### 3. **Hero Component** (`sections/Hero.jsx`)

#### What It Does
The hero section is the large banner at the top of the page with headline, subheading, and buttons. It creates the first impression for visitors.

#### Why It's Separated
- Hero is a self-contained section with specific styling
- Easy to reuse on different pages with different text
- Can be updated independently without affecting other sections

#### JSX Pattern
```jsx
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4">
      {/* Content */}
    </section>
  );
};
```

**Key JSX concepts:**
- `<section>`: Semantic HTML - tells browsers this is a major content section
- `className`: Tailwind CSS classes for styling (gradient background, padding, colors)
- Multiple `<Button>` components reused here

#### No Props in This Component
Hero doesn't take any props because the content is static. If we needed dynamic content:
```jsx
const Hero = ({ headline, subheading, buttonText }) => {
  // Use props instead of hardcoded text
};
```

---

### 4. **Services Component** (`sections/Services.jsx`)

#### What It Does
Shows a grid of services offered. Uses **array mapping** to render multiple service cards from a single data array.

#### Why Components Are Split This Way
Services is complex enough to be its own file:
- Has its own styling
- Contains map/loop logic
- Could grow to include filtering, search, etc.

#### How Array Mapping Works (Critical React Pattern)
```jsx
const services = [
  { id: 1, icon: '🔧', title: 'Emergency Repairs', ... },
  { id: 2, icon: '🚿', title: 'Drain Cleaning', ... },
  // more services...
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service) => (
    <div key={service.id} className="...">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  ))}
</div>
```

**What's happening:**
1. We have an array of service objects
2. `.map()` loops through each one
3. For each service, we return JSX
4. React renders all of them together

**Why the `key` prop?**
```jsx
<div key={service.id}>
```

React uses keys to track which items changed. It makes updates efficient. **Best practice: use unique IDs as keys, not array indexes.**

#### No State Needed
This component doesn't need `useState` because the services list doesn't change. It's just displaying static data.

---

### 5. **About Component** (`sections/About.jsx`)

#### What It Does
"Why Choose Us" section with statistics, features, and trust signals. Builds credibility with potential customers.

#### Component Structure
```jsx
const About = () => {
  const reasons = [ /* data */ ];
  const features = [ /* data */ ];
  
  return (
    <section id="about" className="...">
      {/* Title section */}
      {/* Stats grid using map */}
      {/* Two-column layout */}
      {/* Features list using map */}
    </section>
  );
};
```

#### Multiple Mapping Examples
```jsx
{reasons.map((reason) => (
  <div key={reason.id}>
    <div>{reason.number}</div>
    <p>{reason.label}</p>
  </div>
))}
```

and

```jsx
{features.map((feature, index) => (
  <li key={index}>
    <span>✓</span>
    <span>{feature}</span>
  </li>
))}
```

**When to use index as key:**
- Only use `index` as `key` when the list is static and won't be reordered
- Here, features is a static list, so using `index` is acceptable

**Better approach:**
If features had unique IDs:
```jsx
const features = [
  { id: 1, text: 'Licensed...' },
  { id: 2, text: 'Transparent...' },
];
```

Then: `{features.map((feature) => <li key={feature.id}>...`

---

### 6. **Projects Component** (`sections/Projects.jsx`)

#### What It Does
Portfolio grid showing completed work. Demonstrates portfolio/showcase functionality.

#### Key Pattern: Working with Data
```jsx
const projects = [
  { id: 1, title: '...', category: 'Commercial', ... },
  // more projects...
];

// Extract unique categories for filter buttons
const categories = ['All', ...new Set(projects.map((p) => p.category))];
```

**What `[...new Set(...)]` does:**
- `.map(p => p.category)` gets all categories
- `new Set()` removes duplicates
- `[...]` converts Set back to Array

This is JavaScript, not React, but shows how to transform data.

#### Rendering Filtered Results
Currently, all projects show. To filter by category, we'd add:
```jsx
const [activeCategory, setActiveCategory] = useState('All');

const filteredProjects = activeCategory === 'All' 
  ? projects 
  : projects.filter(p => p.category === activeCategory);
```

This teaches **state management** and **array filtering**.

---

### 7. **Testimonials Component** (`sections/Testimonials.jsx`)

#### What It Does
Displays customer reviews with ratings. Social proof to build trust.

#### JSX Pattern: Nested Components
```jsx
<div key={testimonial.id} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8">
  <StarRating rating={testimonial.rating} />
  {/* ... */}
</div>
```

We create a helper function `StarRating`:
```jsx
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
  );
};
```

**What `[...Array(rating)]` does:**
- Creates an array of `rating` empty items
- Maps over it to create that many stars

#### Why Helper Functions?
By creating `StarRating`, we can reuse it anywhere we need to show ratings:
- Other components can import it
- Easy to update star styling
- Follows React principle: **Break complex UI into smaller pieces**

---

### 8. **Pricing Component** (`sections/Pricing.jsx`)

#### What It Does
Shows three pricing tiers with features and CTA buttons. Helps users choose a service level.

#### Key Pattern: Conditional Styling
```jsx
<div
  key={plan.id}
  className={`rounded-lg overflow-hidden transition-transform ${
    plan.highlighted
      ? 'bg-blue-600 text-white shadow-2xl scale-105'
      : 'bg-white shadow-md text-gray-800'
  }`}
>
```

This uses **template literals** with **ternary operators**:
```jsx
${condition ? 'true styles' : 'false styles'}
```

**React.dev pattern:**
Conditional classes are better than conditional return statements. Always return JSX, just change the className.

#### Mapping Over Plan Features
```jsx
{plan.features.map((feature, index) => (
  <li key={index} className="flex items-start gap-3">
    <span className={plan.highlighted ? 'text-blue-200' : 'text-blue-600'}>
      ✓
    </span>
    <span>{feature}</span>
  </li>
))}
```

Shows how to:
- Loop over nested data (features array inside plans array)
- Use parent data in child elements (plan.highlighted)
- Conditional styling based on parent props

---

### 9. **CTA Component** (`sections/CTA.jsx`)

#### What It Does
Final call-to-action section before footer. Drives conversions by encouraging visitors to contact or book services.

#### Simple, Focused Component
```jsx
const CTA = () => {
  return (
    <section className="bg-gradient-to-r ...">
      <div className="max-w-7xl mx-auto text-center">
        <h2>Ready to Get Your Plumbing Fixed?</h2>
        <p>...</p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            Schedule Service Now
          </Button>
          <Button variant="outline" size="lg">
            Call: (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
};
```

**Why it's simple:**
- No state needed
- No props
- No loops or conditionals
- Just layout and content

This is valid React. Not every component needs to be complex.

---

### 10. **Footer Component** (`sections/Footer.jsx`)

#### What It Does
Footer with links, company info, and contact details.

#### Key Pattern: Mapping Over Link Sections
```jsx
const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Emergency Repairs', href: '#' },
      { label: 'Drain Cleaning', href: '#' },
      // ...
    ],
  },
  // more sections...
];

{footerSections.map((section) => (
  <div key={section.title}>
    <h4>{section.title}</h4>
    <ul>
      {section.links.map((link) => (
        <li key={link.label}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
))}
```

**Nested loops pattern:**
- Outer loop: map over footerSections
- Inner loop: map over links in each section

This prevents repetition and makes adding new sections easy.

---

### 11. **Home3 Component** (`Home3.jsx`)

#### What It Does
The main page assembler. Imports all section components and renders them in order.

#### Architecture Pattern
```jsx
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
// ... imports ...

const Home3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};
```

**React.dev principle: Composition**
- Each section is a separate, reusable component
- Home3 composes them together
- Each component is independent and testable

---

## React Concepts Explained

### 1. Function Components

```jsx
const MyComponent = () => {
  return <div>Hello</div>;
};
```

**Why we use this:**
- Simpler than class components
- Easier to understand
- Modern React standard
- Works with all React features

### 2. JSX

JSX looks like HTML but it's actually JavaScript:

```jsx
const element = <h1>Hello World</h1>;
// JSX version of:
const element = React.createElement('h1', null, 'Hello World');
```

**Benefits:**
- More readable than createElement()
- Looks like HTML, feels like JavaScript
- Type-safe (errors caught by linters)

### 3. Props

Props are how components communicate:

```jsx
const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Usage:
<Greeting name="Alice" />
```

**Key points:**
- Props are read-only
- Props come from parent component
- Props can be any JavaScript type

### 4. State with Hooks

`useState` lets components remember things:

```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);
```

**When to use state:**
- User interactions (form inputs, toggles)
- Data that changes over time
- Anything that affects rendering

### 5. Array Mapping

```jsx
const items = ['apple', 'banana', 'orange'];

{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

**Key principle:**
- Never use index as key if list can be reordered
- Always provide a stable key for each item

### 6. Conditional Rendering

```jsx
// Option 1: Ternary (for inline)
{isVisible ? <Component /> : null}

// Option 2: Logical AND (for simple conditions)
{isVisible && <Component />}

// Option 3: Conditional classes (preferred)
<div className={isVisible ? 'block' : 'hidden'}>
```

**React.dev standard:** Prefer conditional classes over conditional JSX when possible.

### 7. Semantic HTML

```jsx
<header>Navigation</header>
<main>Content</main>
<section>Features</section>
<article>News</article>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

**Why it matters:**
- Better for SEO (search engines)
- Better for accessibility (screen readers)
- More meaningful code

### 8. Tailwind CSS

We use utility-first CSS:

```jsx
<div className="bg-blue-600 text-white px-4 py-2 rounded">
  Button
</div>
```

**Advantages:**
- Fast development (no context switching)
- Consistent spacing and colors
- Responsive classes built-in (`md:`, `lg:`, etc.)
- Smaller final bundle size

---

## How to Run This Project

### Prerequisites
- Node.js (version 16+)
- npm or yarn

### Installation

```bash
cd Plumco
npm install
```

This installs all dependencies from package.json.

### Development Server

```bash
npm run dev
```

Opens the project at `http://localhost:5173/`

Hot Module Replacement (HMR) enabled—changes auto-refresh in the browser.

### Build for Production

```bash
npm run build
```

Creates optimized files in the `dist/` folder, ready for deployment.

---

## Code Style Guide (React.dev Standards)

### ✅ Do This

```jsx
// Function components
const Button = ({ variant = 'primary' }) => {
  return <button className={...}>{children}</button>;
};

// Named exports
export default Button;

// Destructure props
const Card = ({ title, description }) => {

// JSX in separate lines
return (
  <div className="...">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

// Use semantic HTML
<header>Navigation</header>

// Use meaningful variable names
const userEmail = email;

// Import at top
import Header from './Header';
```

### ❌ Don't Do This

```jsx
// Class components (outdated)
class Button extends React.Component {
  render() { return ...; }
}

// Inline object creation in JSX
<Component style={{ color: 'blue' }} />  // Better: use className

// Not destructuring props
const Button = (props) => <button>{props.children}</button>

// Using index as key (when list is reorderable)
{items.map((item, index) => <div key={index}>...

// Inline arrow functions in JSX
<button onClick={() => doSomething()}>  // Can cause re-renders

// Generic variable names
const x = data;
const temp = value;
```

---

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',  // Change from blue to orange
      'primary-dark': '#D84315',
    },
  },
}
```

Then use in components:
```jsx
<button className="bg-primary">Click</button>
```

### Adding New Sections

1. Create a new file: `src/components/sections/NewSection.jsx`
2. Build your component following the patterns shown
3. Import in `Home3.jsx`: `import NewSection from './components/sections/NewSection';`
4. Add to JSX: `<NewSection />`

### Adding State (Interactivity)

Example: Filter projects by category

```jsx
// In Projects.jsx
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
  
  return (
    <section>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={activeCategory === cat ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
      {filteredProjects.map(project => (...))}
    </section>
  );
};
```

---

## Common Questions (React.dev FAQ Style)

### Q: Why split components into separate files?

**A:** For maintainability and reusability.
- Each file has one responsibility (Single Responsibility Principle)
- Easy to test individual components
- Easy to reuse on different pages
- Easier to find and update code

### Q: When should I use state?

**A:** Use state when:
- Data changes over time
- User interactions affect the UI
- Component needs to "remember" something

Don't use state for:
- Static content (use plain variables)
- Data from props (data from parent)

### Q: Should I use custom hooks?

**A:** Yes, if you have logic used in multiple components.

Example: A hook to fetch data
```jsx
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  
  return data;
};
```

### Q: How do I handle forms?

**A:** Use controlled components with state:

```jsx
const [email, setEmail] = useState('');

return (
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter email"
  />
);
```

This pattern is: value from state → update on input → state updates → re-render.

### Q: How do I make API calls?

**A:** Use `useEffect` hook:

```jsx
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{/* render data */}</div>;
};
```

---

## Deployment

This project is ready for deployment:

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel
```

### Deploy to Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder via FTP
```

---

## Best Practices Summary

1. **Keep components small** - One responsibility per component
2. **Use semantic HTML** - `<header>`, `<section>`, `<main>`, etc.
3. **Prop drilling** - Pass data through parent-child relationships
4. **Reuse components** - DRY principle (Don't Repeat Yourself)
5. **Name components descriptively** - `UserProfile` not `Component`
6. **Use keys in lists** - Always provide stable keys
7. **Keep state close** - State should be near where it's used
8. **Avoid prop drilling** - For deeply nested components, consider Context API
9. **Comment when needed** - Complex logic deserves explanation
10. **Test components** - Unit test reusable components

---

## Further Learning

- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Guide:** https://vitejs.dev
- **ESLint Rules:** https://eslint.org/docs/rules

---

## License

This is a learning project based on the Plumco template design. Use it as a reference for building your own projects.

---

## Support

For questions about React concepts, always refer to **https://react.dev** - the official React documentation.

All code in this project follows the patterns and recommendations from React.dev.
