'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GoogleMeetIcon from '@/public/icon/google-meet';
import SubscriptionTickIcon from '@/public/icon/subscription-tick';
import TelegramIcon from '@/public/icon/telegram';

type TabType = 'landing-page' | 'branding' | 'viz' | 'web-app';

interface TagPillProps {
  text: string;
}

// Reusable TagPill component with Framer style shadow definitions
export function TagPill({ text }: TagPillProps) {
  return (
    <div className="px-4 py-2 bg-neutral-100 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(161,159,255,1.00)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="justify-center text-black text-sm font-normal font-sans leading-none">{text}</div>
    </div>
  );
}

interface ServiceTagPillProps {
  text: string;
}

// Reusable ServiceTagPill component inside pricing cards
export function ServiceTagPill({ text }: ServiceTagPillProps) {
  return (
    <div className="h-7 px-3.5 bg-zinc-100 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center text-stone-500 text-xs font-medium font-sans leading-none">
      {text}
    </div>
  );
}

interface ServiceTabButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

// Extracted reusable ServiceTabButton component with smooth horizontal slider motion
export function ServiceTabButton({ text, active, onClick }: ServiceTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex-1 h-full rounded-[130px] flex justify-center items-center overflow-hidden cursor-pointer outline-none z-10 px-1"
    >
      <div
        className={`text-[11px] sm:text-sm md:text-base font-normal font-sans leading-none transition-colors duration-200 ${
          active ? 'text-black font-medium' : 'text-stone-500 hover:text-stone-800'
        }`}
      >
        {text}
      </div>
    </button>
  );
}

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

// Extracted reusable ToggleSwitch component
export function ToggleSwitch({ enabled, onChange }: ToggleSwitchProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`w-10 h-5 shrink-0 relative rounded-full transition-colors duration-200 cursor-pointer outline-none ${
        enabled ? 'bg-primary' : 'bg-neutral-300'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white border border-neutral-200 rounded-full absolute top-[1px] transition-all duration-200 ${
          enabled ? 'left-[22px]' : 'left-[2px]'
        }`}
      />
    </button>
  );
}

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

// Extracted reusable Stepper component
export function Stepper({ value, onChange, min = 0, max = 99 }: StepperProps) {
  return (
    <div className="flex items-center gap-3 bg-white outline outline-1 outline-neutral-200 rounded-full px-2 py-1 shrink-0">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-6 h-6 flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer outline-none"
      >
        -
      </button>
      <span className="text-sm font-medium w-4 text-center">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-6 h-6 flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full transition-colors cursor-pointer outline-none"
      >
        +
      </button>
    </div>
  );
}

import { useCalModal } from './CalModalContext';

interface PricingCTAButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export function PricingCTAButton({ text, href, onClick }: PricingCTAButtonProps) {
  const { openCalModal } = useCalModal();

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openCalModal();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleButtonClick}
      data-cal-link="yourusername"
      data-cal-config='{"layout":"month_view"}'
      className="w-full px-2.5 py-4 bg-stone-950 hover:bg-black transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.18),_inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.4),_inset_0px_1.5px_0px_0px_rgba(255,255,255,0.15)] outline outline-1 outline-offset-[-1px] outline-stone-800 hover:outline-stone-700 inline-flex justify-center items-center gap-2.5 overflow-hidden outline-none cursor-pointer"
    >
      <div className="flex justify-start items-center gap-2.5">
        <GoogleMeetIcon className="w-[18px] h-[15px] flex-shrink-0" />
        <div className="justify-center text-white text-lg font-normal font-sans leading-none">{text}</div>
      </div>
    </a>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabType>('landing-page');

  const handleBookCall = (packageName: string, price: string, addOns: string) => {
    fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageName,
        details: `Price: ${price} | Selected Add-ons: ${addOns}`,
      }),
    }).catch((err) => console.error('Telegram notification failed:', err));
  };

  // Add-on states for Card 1
  const [addDevelopment, setAddDevelopment] = useState(false);
  const [addHighRes, setAddHighRes] = useState(false);
  const [addMobileDev, setAddMobileDev] = useState(false);
  const [brandingExtraConcepts, setBrandingExtraConcepts] = useState(0);
  const [addBrandingSocialMedia, setAddBrandingSocialMedia] = useState(false);

  // Live adjustment controller states for flowers
  const [showController, setShowController] = useState(false);
  const [controllerTab, setControllerTab] = useState<'left' | 'right'>('left');

  // Default Left Flower Values
  const leftDefaults = {
    useLeftTop: false,
    posX: -194,
    posY: -203,
    size: 459,
    rotation: 0
  };

  // Default Right Flower Values
  const rightDefaults = {
    useLeftTop: false,
    posX: -163,
    posY: -229,
    size: 493,
    rotation: 0
  };

  // Left flower positioning state
  const [leftUseLeftTop, setLeftUseLeftTop] = useState(leftDefaults.useLeftTop);
  const [leftPosX, setLeftPosX] = useState(leftDefaults.posX);
  const [leftPosY, setLeftPosY] = useState(leftDefaults.posY);
  const [leftSize, setLeftSize] = useState(leftDefaults.size);
  const [leftRotation, setLeftRotation] = useState(leftDefaults.rotation);

  // Right flower positioning state
  const [rightUseLeftTop, setRightUseLeftTop] = useState(rightDefaults.useLeftTop);
  const [rightPosX, setRightPosX] = useState(rightDefaults.posX);
  const [rightPosY, setRightPosY] = useState(rightDefaults.posY);
  const [rightSize, setRightSize] = useState(rightDefaults.size);
  const [rightRotation, setRightRotation] = useState(rightDefaults.rotation);

  // Load persistent configurations from localStorage safely
  useEffect(() => {
    try {
      const savedLeft = localStorage.getItem('flowance_left_flower');
      if (savedLeft) {
        const parsed = JSON.parse(savedLeft);
        setLeftUseLeftTop(parsed.useLeftTop ?? leftDefaults.useLeftTop);
        setLeftPosX(parsed.posX ?? leftDefaults.posX);
        setLeftPosY(parsed.posY ?? leftDefaults.posY);
        setLeftSize(parsed.size ?? leftDefaults.size);
        setLeftRotation(parsed.rotation ?? leftDefaults.rotation);
      }

      const savedRight = localStorage.getItem('flowance_right_flower');
      if (savedRight) {
        const parsed = JSON.parse(savedRight);
        setRightUseLeftTop(parsed.useLeftTop ?? rightDefaults.useLeftTop);
        setRightPosX(parsed.posX ?? rightDefaults.posX);
        setRightPosY(parsed.posY ?? rightDefaults.posY);
        setRightSize(parsed.size ?? rightDefaults.size);
        setRightRotation(parsed.rotation ?? rightDefaults.rotation);
      }
    } catch (e) {
      console.warn('Failed to load flower position configurations from localStorage', e);
    }
  }, []);

  // Save current configurations to localStorage
  const handleSaveConfig = () => {
    try {
      localStorage.setItem('flowance_left_flower', JSON.stringify({
        useLeftTop: leftUseLeftTop,
        posX: leftPosX,
        posY: leftPosY,
        size: leftSize,
        rotation: leftRotation
      }));
      localStorage.setItem('flowance_right_flower', JSON.stringify({
        useLeftTop: rightUseLeftTop,
        posX: rightPosX,
        posY: rightPosY,
        size: rightSize,
        rotation: rightRotation
      }));
      alert('Flower configurations saved permanently to browser storage!');
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  // Reset configurations to default
  const handleResetConfig = () => {
    try {
      localStorage.removeItem('flowance_left_flower');
      localStorage.removeItem('flowance_right_flower');

      setLeftUseLeftTop(leftDefaults.useLeftTop);
      setLeftPosX(leftDefaults.posX);
      setLeftPosY(leftDefaults.posY);
      setLeftSize(leftDefaults.size);
      setLeftRotation(leftDefaults.rotation);

      setRightUseLeftTop(rightDefaults.useLeftTop);
      setRightPosX(rightDefaults.posX);
      setRightPosY(rightDefaults.posY);
      setRightSize(rightDefaults.size);
      setRightRotation(rightDefaults.rotation);

      alert('Reset to default flower coordinates!');
    } catch (e) {
      console.error('Failed to clear localStorage', e);
    }
  };

  // Figma Custom Checklist Icon
  const FigmaCheckIcon = () => (
    <SubscriptionTickIcon className="w-[18px] h-[18px] flex-shrink-0" />
  );

  // Dynamic Left card flowers rendering
  const FigmaFlowersLeft = () => (
    <Image
      className="absolute object-contain pointer-events-none select-none z-0"
      src="/payment-flower.png"
      alt="Flower decoration"
      width={leftSize}
      height={leftSize}
      priority
      style={{
        width: `${leftSize}px`,
        height: `${leftSize}px`,
        top: `${leftPosY}px`,
        [leftUseLeftTop ? 'left' : 'right']: `${leftPosX}px`,
        transform: `rotate(${leftRotation}deg)`,
        transformOrigin: 'top left',
      }}
    />
  );

  // Dynamic Right card flowers rendering
  const FigmaFlowersRight = () => (
    <Image
      className="absolute object-contain pointer-events-none select-none z-0"
      src="/payment-flower.png"
      alt="Flower decoration"
      width={rightSize}
      height={rightSize}
      priority
      style={{
        width: `${rightSize}px`,
        height: `${rightSize}px`,
        top: `${rightPosY}px`,
        [rightUseLeftTop ? 'left' : 'right']: `${rightPosX}px`,
        transform: `rotate(${rightRotation}deg)`,
        transformOrigin: 'top left',
      }}
    />
  );

  // Constant Card 2 (Ultimate Package) rendered on the right for all services
  const ConstantRightCard = () => (
    <div className="w-full max-w-[547px] min-h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden flex flex-col p-6">
      <FigmaFlowersRight />

      {/* Tag pill */}
      <div className="z-10">
        <TagPill text="Ultimate package" />
      </div>

      {/* Price */}
      <div className="z-10 mt-8 mb-6 text-neutral-900 text-4xl font-normal font-display leading-9">
        from $5,999<span className="text-xs text-stone-400 font-sans font-normal ml-1">/mo</span>
      </div>

      {/* Checklist */}
      <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 z-10 flex-grow">
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Bespoke Design &amp; Development</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Unlimited Requests &amp; Revisions</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Dedicated Creative Team</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Weekly Strategy &amp; Review Calls</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Full Source Files &amp; Code Ownership</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Priority Delivery with 48-Hour Updates</div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <FigmaCheckIcon />
          <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Ongoing Support, Maintenance &amp; Optimization</div>
        </div>
      </div>

      {/* Capability Tags */}
      <div className="w-full mt-6 mb-8 flex flex-wrap gap-2 z-10">
        <ServiceTagPill text="Landing Page" />
        <ServiceTagPill text="Logo" />
        <ServiceTagPill text="Mobile Apps" />
        <ServiceTagPill text="Web Apps" />
        <ServiceTagPill text="Product Design" />
        <ServiceTagPill text="Social Media" />
        <ServiceTagPill text="Animation 2D/3D" />
      </div>

      {/* Book Call CTA Button */}
      <div className="w-full mt-auto z-10">
        <PricingCTAButton 
          text="Book a call" 
          href="https://cal.com/yourusername" 
          onClick={() => handleBookCall("Ultimate Package", "$5,999/mo", "Includes unlimited branding, design, development, custom animations, priority support")}
        />
      </div>
    </div>
  );

  // Helper to get active gliding tab style responsive layout
  const getActiveTabStyle = () => {
    const percent = ['landing-page', 'branding', 'viz', 'web-app'].indexOf(activeTab) * 25;
    return {
      left: `calc(${percent}% + 4px)`,
      width: 'calc(25% - 8px)',
    };
  };

  return (
    <section id="pricing" className="px-8 py-8 md:py-12 border-b border-[#D2D2D2] flex flex-col justify-center bg-[#FAFAFA]/40 relative">
      
      {/* Eyebrow */}
      <div className="flex justify-center mb-2 z-10">
        <span className="text-xs font-medium tracking-widest text-stone-500 uppercase">
          04 / PRICING
        </span>
      </div>
      
      {/* Title */}
      <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-center text-[#171717] mb-8">
        Pricing for work worth keeping
      </h2>

      {/* Segmented Tab Bar Outer Div Wrapper using drop shadows */}
      <div className="flex justify-center mb-8 w-full">
        <div className="h-16 p-1 bg-white rounded-[130px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08),_inset_0px_1px_1px_0px_rgba(0,0,0,0.08)] flex justify-start items-center relative w-full max-w-[542px] z-10 mx-auto">
          
          {/* Gliding active background active pill containing the exact shadow and outline styles requested */}
          <div
            className="absolute top-1 bottom-1 bg-neutral-100 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.40)] outline outline-1 outline-offset-[-1px] outline-gray-200 rounded-[130px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
            style={getActiveTabStyle()}
          />

          <ServiceTabButton
            text="Landing Page"
            active={activeTab === 'landing-page'}
            onClick={() => setActiveTab('landing-page')}
          />

          <ServiceTabButton
            text="Branding"
            active={activeTab === 'branding'}
            onClick={() => setActiveTab('branding')}
          />

          <ServiceTabButton
            text="3D Design"
            active={activeTab === 'viz'}
            onClick={() => setActiveTab('viz')}
          />

          <ServiceTabButton
            text="Web/App Dev"
            active={activeTab === 'web-app'}
            onClick={() => setActiveTab('web-app')}
          />

        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-center gap-6 w-full md:grid md:grid-cols-2 md:gap-8 max-w-[1126px] mx-auto px-4 md:px-0 justify-center">
        
        {activeTab === 'landing-page' && (
          <>
            {/* Card 1 - Landing Page */}
            <div className="w-full max-w-[547px] min-h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden flex flex-col p-6">
              <FigmaFlowersLeft />
              
              <div className="z-10">
                <TagPill text="Landing page" />
              </div>

              <div className="w-full mt-8 mb-6 inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addDevelopment ? (1199 + 1500).toLocaleString() : '1,199'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add Development</div>
                    </div>
                    <div className="flex justify-start items-center gap-3 shrink-0">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$1,500</div>
                      <ToggleSwitch enabled={addDevelopment} onChange={setAddDevelopment} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Pages</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+${addDevelopment ? '400' : '300'}/PAGE</div>
                    </div>
                    <div className="w-full h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Animations</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$300/ANIM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 z-10 mb-8 flex-grow">
                {addDevelopment ? (
                  <>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom UI/UX + Full Development</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Production-ready code (Next.js/React)</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Fully Responsive + Interactions</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions (Design &amp; Code)</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Figma + Complete Source Code</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom UI/UX Design, No Templates</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Fully Responsive (Desktop, Tablet &amp; Mobile)</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Conversion-Focused UX</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                      <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Figma Source Files Included</div>
                    </div>
                  </>
                )}
              </div>

              <div className="w-full mt-auto z-10">
                <PricingCTAButton 
                  text="Book a call" 
                  href="https://cal.com/yourusername" 
                  onClick={() => handleBookCall("Landing Page Package", addDevelopment ? "$2,699" : "$1,199", `Add Development: ${addDevelopment ? 'Yes' : 'No'}`)}
                />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'branding' && (
          <>
            {/* Card 1 */}
            <div className="w-full max-w-[547px] min-h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden flex flex-col p-6">
              <FigmaFlowersLeft />
              
              <div className="z-10">
                <TagPill text="Branding" />
              </div>

              <div className="w-full mt-8 mb-6 inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${(999 + (addBrandingSocialMedia ? 350 : 0)).toLocaleString()}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col gap-3">
                    <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Social Media Kit</div>
                      </div>
                      <div className="flex justify-start items-center gap-3 shrink-0">
                        <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$350</div>
                        <ToggleSwitch enabled={addBrandingSocialMedia} onChange={setAddBrandingSocialMedia} />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Concepts</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$250/EACH</div>
                    </div>
                    <div className="w-full h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Additional Revision Round</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$150/EACH</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 z-10 mb-8 flex-grow">
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Primary & Secondary Logo Suite</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom Color Palette & Typography System</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Brand Identity Assets and poster design for Print & Digital</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Editable Source Files & Full Ownership</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions</div>
                </div>
              </div>

              <div className="w-full mt-auto z-10">
                <PricingCTAButton 
                  text="Book a call" 
                  href="https://cal.com/yourusername" 
                  onClick={() => handleBookCall("Branding Package", addBrandingSocialMedia ? "$1,349" : "$999", `Social Media Kit: ${addBrandingSocialMedia ? 'Yes' : 'No'}, Extra Concepts: ${brandingExtraConcepts}`)}
                />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'viz' && (
          <>
            {/* Card 1 */}
            <div className="w-full max-w-[547px] min-h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden flex flex-col p-6">
              <FigmaFlowersLeft />
              
              <div className="z-10">
                <TagPill text="3D Visualization" />
              </div>

              <div className="w-full mt-8 mb-6 inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addHighRes ? (999 + 499).toLocaleString() : '999'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  {/* Reusable ToggleSwitch component */}
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add 8K Ultra High-Res</div>
                    </div>
                    <div className="flex justify-start items-center gap-3 shrink-0">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$499</div>
                      <ToggleSwitch enabled={addHighRes} onChange={setAddHighRes} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Render Angles</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$200/EACH</div>
                    </div>
                    <div className="w-full h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Raw 3D Models (.blend/.obj)</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$400</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 z-10 mb-8 flex-grow">
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">High-fidelity 3D modeling of 1 product</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom materials, textures, and labels</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 professional studio lighting scenarios</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">2 feedback revisions per rendering</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Delivery in 5-7 days</div>
                </div>
              </div>

              <div className="w-full mt-auto z-10">
                <PricingCTAButton 
                  text="Book a call" 
                  href="https://cal.com/yourusername" 
                  onClick={() => handleBookCall("3D Visualization Package", addHighRes ? "$1,498" : "$999", `Add 8K Ultra High-Res: ${addHighRes ? 'Yes' : 'No'}`)}
                />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'web-app' && (
          <>
            {/* Card 1 - Web App */}
            <div className="w-full max-w-[547px] min-h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden flex flex-col p-6">
              <FigmaFlowersLeft />
              
              <div className="z-10">
                <TagPill text="Web/App Development" />
              </div>

              <div className="w-full mt-8 mb-6 inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${(3199 + (addMobileDev ? 1599 : 0)).toLocaleString()}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col gap-3">
                    <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-between items-center">
                      <div className="flex justify-start items-center gap-2">
                        <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add Mobile Development</div>
                      </div>
                      <div className="flex justify-start items-center gap-3 shrink-0">
                        <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$1,599</div>
                        <ToggleSwitch enabled={addMobileDev} onChange={setAddMobileDev} />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Performance &amp; SEO Tuning</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                    <div className="w-full h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Cross-Browser Testing</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 z-10 mb-8 flex-grow">
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Bespoke React/Next.js frontend development</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Backend, database &amp; CMS integration</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Responsive design across all screen sizes</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Smooth animations &amp; micro-interactions</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start sm:items-center gap-2.5">
                  <div className="mt-1 sm:mt-0"><FigmaCheckIcon /></div>
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Delivery in 4–6 weeks</div>
                </div>
              </div>

              <div className="w-full mt-auto z-10">
                <PricingCTAButton 
                  text="Book a call" 
                  href="https://cal.com/yourusername" 
                  onClick={() => handleBookCall("Web/App Development Package", addMobileDev ? "$4,798" : "$3,199", `Add Mobile Development: ${addMobileDev ? 'Yes' : 'No'}`)}
                />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

      </div>

      {/* Have Doubts? Telegram contact note */}
      <div className="w-full max-w-[1126px] mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h3 className="font-display font-medium text-lg text-neutral-900 leading-snug">
            Still have questions about our plans?
          </h3>
          <p className="font-sans text-sm text-stone-500">
            Drop us a message, and we'll get back to you in a few minutes.
          </p>
        </div>
        <a
          href="https://t.me/iamjiiit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 bg-[#E5E5E5] hover:bg-[#CECECE] hover:outline-[#C0C0C0] transition-all duration-300 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(65,65,65,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] inline-flex justify-center items-center gap-2.5 cursor-pointer outline-none text-[#171717] font-medium text-sm font-sans"
        >
          <TelegramIcon className="w-5 h-5 flex-shrink-0" />
          <span>Send a message</span>
        </a>
      </div>

      {/* Floating Interactive Controller (Development Mode Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
          <button
            onClick={() => setShowController(!showController)}
            className="bg-[#0400FF] hover:bg-[#0300cc] text-white text-xs font-semibold px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer select-none outline-none"
          >
            <span>⚙️</span>
            <span>{showController ? 'Hide Flower Editor' : 'Adjust Flower Positions'}</span>
          </button>

          {showController && (
            <div className="w-80 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 mt-3 p-4 shadow-xl flex flex-col gap-4 text-[#171717]">
              <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Live Flower Controller</span>
                <div className="flex gap-1.5 text-[10px]">
                  <button
                    onClick={() => setControllerTab('left')}
                    className={`px-2 py-1 rounded-md cursor-pointer ${
                      controllerTab === 'left' ? 'bg-[#0400FF] text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    Left Card
                  </button>
                  <button
                    onClick={() => setControllerTab('right')}
                    className={`px-2 py-1 rounded-md cursor-pointer ${
                      controllerTab === 'right' ? 'bg-[#0400FF] text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    Right Card
                  </button>
                </div>
              </div>

              {controllerTab === 'left' ? (
                <div className="flex flex-col gap-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium">Position Side:</span>
                    <button
                      onClick={() => setLeftUseLeftTop(!leftUseLeftTop)}
                      className="text-[10px] bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded border border-stone-200 font-medium text-stone-700 cursor-pointer"
                    >
                      Align to: {leftUseLeftTop ? 'Left & Top' : 'Right & Top'}
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>X Offset ({leftUseLeftTop ? 'left' : 'right'}):</span>
                      <span>{leftPosX}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="600"
                      value={leftPosX}
                      onChange={(e) => setLeftPosX(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Y Offset (top):</span>
                      <span>{leftPosY}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="600"
                      value={leftPosY}
                      onChange={(e) => setLeftPosY(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Size (width/height):</span>
                      <span>{leftSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="600"
                      value={leftSize}
                      onChange={(e) => setLeftSize(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Rotation:</span>
                      <span>{leftRotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="-360"
                      max="360"
                      value={leftRotation}
                      onChange={(e) => setLeftRotation(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#171717] font-medium">Position Side:</span>
                    <button
                      onClick={() => setRightUseLeftTop(!rightUseLeftTop)}
                      className="text-[10px] bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded border border-stone-200 font-medium text-stone-700 cursor-pointer"
                    >
                      Align to: {rightUseLeftTop ? 'Left & Top' : 'Right & Top'}
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>X Offset ({rightUseLeftTop ? 'left' : 'right'}):</span>
                      <span>{rightPosX}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="600"
                      value={rightPosX}
                      onChange={(e) => setRightPosX(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Y Offset (top):</span>
                      <span>{rightPosY}px</span>
                    </div>
                    <input
                      type="range"
                      min="-400"
                      max="600"
                      value={rightPosY}
                      onChange={(e) => setRightPosY(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Size (width/height):</span>
                      <span>{rightSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="600"
                      value={rightSize}
                      onChange={(e) => setRightSize(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-[#171717]">
                      <span>Rotation:</span>
                      <span>{rightRotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="-360"
                      max="360"
                      value={rightRotation}
                      onChange={(e) => setRightRotation(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0400FF]"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons to save permanently / reset values */}
              <div className="flex gap-2 border-t border-stone-100 pt-3">
                <button
                  onClick={handleSaveConfig}
                  className="flex-1 bg-[#0400FF] hover:bg-[#0300cc] text-white text-[11px] font-semibold py-2 rounded-lg transition-colors cursor-pointer outline-none"
                >
                  Save to Browser
                </button>
                <button
                  onClick={handleResetConfig}
                  className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-600 text-[11px] font-semibold py-2 rounded-lg transition-colors cursor-pointer outline-none border border-stone-200"
                >
                  Reset Defaults
                </button>
              </div>

              {/* Code output display block */}
              <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 flex flex-col gap-0.5 select-all font-mono text-[8px] text-stone-700 leading-tight">
                <span className="text-[8px] font-bold text-stone-400 font-sans uppercase">CSS Style config:</span>
                {controllerTab === 'left' ? (
                  <>
                    <div>width: {leftSize}px; height: {leftSize}px;</div>
                    <div>{leftUseLeftTop ? 'left' : 'right'}: {leftPosX}px; top: {leftPosY}px;</div>
                    <div>transform: rotate({leftRotation}deg);</div>
                  </>
                ) : (
                  <>
                    <div>width: {rightSize}px; height: {rightSize}px;</div>
                    <div>{rightUseLeftTop ? 'left' : 'right'}: {rightPosX}px; top: {rightPosY}px;</div>
                    <div>transform: rotate({rightRotation}deg);</div>
                  </>
                )}
              </div>

            </div>
          )}
        </div>
      )}

    </section>
  );
}
