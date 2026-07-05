'use client';

import React from 'react';
import { useCalModal } from './CalModalContext';

interface BookCallButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function BookCallButton({ className, children }: BookCallButtonProps) {
  const { openCalModal } = useCalModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openCalModal();
  };

  return (
    <a
      href="https://cal.com/flowance-studios/1-hour"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
