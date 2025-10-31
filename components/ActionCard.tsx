import React, { useState } from 'react';

export default function ActionCard({ 
  icon, 
  label, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  onClick?: () => void; 
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 150);
    if (onClick) onClick();
  };

  return (
    <div 
      onClick={handleClick}
      className="action-card group"
      style={{
        transform: isActive ? 'scale(0.95)' : 'scale(1)',
      }}
    >
      <div className="action-card-icon">
        {icon}
      </div>
      <span className="action-card-label">
        {label}
      </span>
    </div>
  );
}