import React, { useState } from 'react';

export default function ActionCard({
  icon,
  label,
  color = 'blue',
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  color?: 'blue' | 'green' | 'orange' | 'red';
  onClick?: () => void;
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 150);
    if (onClick) onClick();
  };

  const colorClasses = {
    blue: 'text-blue-600 group-hover:text-blue-700',
    green: 'text-green-600 group-hover:text-green-700',
    orange: 'text-orange-600 group-hover:text-orange-700',
    red: 'text-red-600 group-hover:text-red-700',
  };

  return (
    <div
      onClick={handleClick}
      className="action-card group"
      style={{
        transform: isActive ? 'scale(0.95)' : 'scale(1)',
      }}
    >
      <div className={`action-card-icon ${colorClasses[color]}`}>
        {icon}
      </div>
      <span className="action-card-label">
        {label}
      </span>
    </div>
  );
}