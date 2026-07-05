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
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeCalModal}
        >
          <div 
            className="relative w-full max-w-[900px] h-[85vh] sm:h-[80vh] flex flex-col transition-all duration-300 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar with close button */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-white/95 uppercase font-sans">
                  Book a Consultation Call
                </span>
              </div>
              <button 
                onClick={closeCalModal}
                className="text-white/60 hover:text-white transition-colors w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center font-sans text-lg font-medium cursor-pointer"
              >
                ✕
              </button>
            </div>
            {/* Iframe Card wrapper */}
            <div className="flex-grow w-full bg-transparent relative px-4 sm:px-6 pb-6">
              <iframe
                src="https://cal.com/flowance-studios/1-hour?embed=true"
                className="w-full h-full border border-stone-200/80 rounded-2xl bg-white shadow-2xl"
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
