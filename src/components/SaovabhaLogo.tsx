import React from 'react';

interface SaovabhaLogoProps {
  className?: string;
  size?: number;
}

export const SaovabhaLogo: React.FC<SaovabhaLogoProps> = ({ className = 'w-14 h-14' }) => {
  return (
    <img
      src="https://lh3.googleusercontent.com/d/1og-QqwMnWYP1g9iJXKiARJJmBZ07NJHN"
      alt="โลโก้สถานเสาวภา สภากาชาดไทย"
      className={`${className} object-contain rounded-full`}
      referrerPolicy="no-referrer"
    />
  );
};
