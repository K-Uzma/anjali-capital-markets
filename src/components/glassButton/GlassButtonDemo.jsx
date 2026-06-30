import "./GlassButton.css";

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const GlassButton = ({ children, size = "default", className = "", onClick, type = "button" }) => {
  const sizeClass = `glass-btn--${size}`;
  return (
    <button
      type={type}
      className={`glass-btn ${sizeClass} ${className}`}
      onClick={onClick}
    >
      <span className="glass-btn__content">{children}</span>
    </button>
  );
};

const GlassButtonDemo = () => {
  return (
    <div className="glass-btn-demo">
      <div className="glass-btn-demo__dots" />
      <div className="glass-btn-demo__row">
        <GlassButton size="sm">Small</GlassButton>
        <GlassButton size="default">
          <span>Generate</span>
          <ZapIcon />
        </GlassButton>
        <GlassButton size="lg">Submit</GlassButton>
        <GlassButton size="icon">
          <ZapIcon />
        </GlassButton>
      </div>
    </div>
  );
};

export default GlassButtonDemo;
