'use client';

import React, { createContext, useContext, useState } from 'react';

interface CalModalContextType {
  openCalModal: () => void;
  closeCalModal: () => void;
}

const CalModalContext = createContext<CalModalContextType | undefined>(undefined);

export function CalModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalModal = () => setIsOpen(true);
  const closeCalModal = () => setIsOpen(false);

  return (
    <CalModalContext.Provider value={{ openCalModal, closeCalModal }}>
      {children}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeCalModal}
        >
          <div 
            className="relative w-full max-w-[950px] h-[85vh] sm:h-[80vh] bg-transparent transition-all duration-300 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating close button */}
            <button 
              onClick={closeCalModal}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-50 text-white/80 hover:text-white transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900/90 hover:bg-stone-950 flex items-center justify-center font-sans text-base sm:text-lg font-medium cursor-pointer border border-stone-800 shadow-md"
            >
              ✕
            </button>
            {/* Iframe wrapper */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-[#111111]">
              <iframe
                src="https://cal.com/iamjiit/30min?embed=true"
                className="w-full h-full border-none"
                title="Book a call with Flowance Studios"
                allow="camera; microphone; geolocation;"
              />
            </div>
          </div>
        </div>
      )}
    </CalModalContext.Provider>
  );
}

export function useCalModal() {
  const context = useContext(CalModalContext);
  if (!context) {
    throw new Error('useCalModal must be used within a CalModalProvider');
  }
  return context;
}
