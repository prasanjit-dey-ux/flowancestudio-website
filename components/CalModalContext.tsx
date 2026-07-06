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
            className="relative w-full max-w-[900px] h-[85vh] sm:h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200/80 transition-all duration-300 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar with close button */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-stone-100 bg-[#FAFAFA] select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase font-sans">
                  Book a Consultation Call
                </span>
              </div>
              <button 
                onClick={closeCalModal}
                className="text-stone-400 hover:text-stone-900 transition-colors w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center font-sans text-lg font-medium cursor-pointer"
              >
                ✕
              </button>
            </div>
            {/* Iframe */}
            <div className="flex-grow w-full bg-stone-50 relative">
              <iframe
                src="https://cal.com/yourusername?embed=true"
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
