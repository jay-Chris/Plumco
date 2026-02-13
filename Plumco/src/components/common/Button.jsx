// Button.jsx
// A reusable button component following React.dev patterns
// This component accepts props to customize its appearance and behavior

const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  // Define base styles that apply to all button variants
  const baseStyles = 'btn-base';

  // Define variant and size classes
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  // Combine all classes
  const finalClasses = `${baseStyles} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button className={finalClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
