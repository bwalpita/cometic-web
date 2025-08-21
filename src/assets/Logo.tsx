import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Graphic Symbol - Intertwined Curved Bands */}
      {/* Red band - main C shape */}
      <path
        d="M8 8 Q20 8 28 20 Q28 32 20 40 Q12 36 8 28 Q6 20 8 8"
        fill="none"
        stroke="#DC2626"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Light blue band - horizontal curve */}
      <path
        d="M5 18 Q15 18 25 18 Q35 18 45 18"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Dark blue band - lower horizontal curve */}
      <path
        d="M8 22 Q18 22 28 22 Q38 22 48 22"
        fill="none"
        stroke="#1E40AF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Text: Cometic */}
      <text
        x="50"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#DC2626"
      >
        Cometic
      </text>
      
      {/* Text: IT care */}
      <text
        x="52"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="normal"
        fill="#1E40AF"
      >
        IT care
      </text>
    </svg>
  );
};

export default Logo;
