'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GoogleMeetIcon from '@/public/icon/google-meet';
import SubscriptionTickIcon from '@/public/icon/subscription-tick';
import TelegramIcon from '@/public/icon/telegram';

type TabType = 'landing-page' | 'branding' | 'viz' | 'web-app' | 'mobile-app';

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
  widthClass: string;
}

// Extracted reusable ServiceTabButton component with smooth horizontal slider motion
export function ServiceTabButton({ text, active, onClick, widthClass }: ServiceTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${widthClass} h-full rounded-[130px] flex justify-center items-center overflow-hidden cursor-pointer outline-none z-10`}
    >
      <div
        className={`text-base font-normal font-sans leading-none transition-colors duration-200 ${
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
      className={`w-10 h-5 relative rounded-full transition-colors duration-200 cursor-pointer outline-none ${
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

interface PricingCTAButtonProps {
  text: string;
  href: string;
}

// Reusable PricingCTAButton with tactile inner and outer shadows to make it feel tangible on dark background
export function PricingCTAButton({ text, href }: PricingCTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-2.5 py-4 bg-stone-950 hover:bg-stone-800 transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.18),_inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.4),_inset_0px_1.5px_0px_0px_rgba(255,255,255,0.15)] outline outline-1 outline-offset-[-1px] outline-stone-800 hover:outline-stone-700 inline-flex justify-center items-center gap-2.5 overflow-hidden outline-none cursor-pointer"
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

  // Add-on states for Card 1
  const [addDevelopment, setAddDevelopment] = useState(false);
  const [addGuidelines, setAddGuidelines] = useState(false);
  const [addHighRes, setAddHighRes] = useState(false);
  const [addCMS, setAddCMS] = useState(false);
  const [addMobileNative, setAddMobileNative] = useState(false);

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
    <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
      <FigmaFlowersRight />

      {/* Tag pill */}
      <div className="left-[24px] top-[24px] absolute z-10">
        <TagPill text="Ultimate package" />
      </div>

      {/* Price */}
      <div className="left-[24px] top-[81px] absolute z-10 text-neutral-900 text-4xl font-normal font-display leading-9">
        from $7,999<span className="text-xs text-stone-400 font-sans font-normal ml-1">/mo</span>
      </div>

      {/* Checklist — starts at same top as left card checklist */}
      <div className="w-[499px] left-[24px] top-[148px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
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
      <div className="w-[499px] left-[24px] top-[412px] absolute flex flex-wrap gap-2 z-10">
        <ServiceTagPill text="Landing Page" />
        <ServiceTagPill text="Logo" />
        <ServiceTagPill text="Mobile Apps" />
        <ServiceTagPill text="Web Apps" />
        <ServiceTagPill text="Product Design" />
        <ServiceTagPill text="Social Media" />
        <ServiceTagPill text="Animation 2D/3D" />
      </div>

      {/* Book Call CTA Button */}
      <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
        <PricingCTAButton text="Book a call" href="https://calendly.com" />
      </div>
    </div>
  );

  // Helper to get active gliding tab offsets and widths dynamically
  const getActiveTabStyle = () => {
    switch (activeTab) {
      case 'landing-page':
        return { left: '4px', width: '140px' };
      case 'branding':
        return { left: '152px', width: '110px' };
      case 'viz':
        return { left: '270px', width: '120px' };
      case 'web-app':
        return { left: '398px', width: '100px' };
      case 'mobile-app':
        return { left: '506px', width: '120px' };
    }
  };

  return (
    <section id="pricing" className="px-8 py-8 md:py-12 border-b border-[#D2D2D2] flex flex-col justify-center bg-[#FAFAFA]/40 relative">
      
      {/* Title */}
      <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-center text-[#171717] mb-8">
        Pricing for work worth keeping
      </h2>

      {/* Segmented Tab Bar Outer Div Wrapper using drop shadows */}
      <div className="flex justify-center mb-8">
        <div className="h-16 p-1 bg-white rounded-[130px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08),_inset_0px_1px_1px_0px_rgba(0,0,0,0.08)] inline-flex justify-start items-center gap-2 overflow-hidden relative w-[634px] z-10">
          
          {/* Gliding active background active pill containing the exact shadow and outline styles requested */}
          <div
            className="absolute top-1 bottom-1 bg-neutral-100 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.40)] outline outline-1 outline-offset-[-1px] outline-gray-200 rounded-[130px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
            style={getActiveTabStyle()}
          />

          <ServiceTabButton
            text="Landing Page"
            active={activeTab === 'landing-page'}
            onClick={() => setActiveTab('landing-page')}
            widthClass="w-[140px]"
          />

          <ServiceTabButton
            text="Branding"
            active={activeTab === 'branding'}
            onClick={() => setActiveTab('branding')}
            widthClass="w-[110px]"
          />

          <ServiceTabButton
            text="3D Design"
            active={activeTab === 'viz'}
            onClick={() => setActiveTab('viz')}
            widthClass="w-[120px]"
          />

          <ServiceTabButton
            text="Web App"
            active={activeTab === 'web-app'}
            onClick={() => setActiveTab('web-app')}
            widthClass="w-[100px]"
          />

          <ServiceTabButton
            text="Mobile App"
            active={activeTab === 'mobile-app'}
            onClick={() => setActiveTab('mobile-app')}
            widthClass="w-[120px]"
          />

        </div>
      </div>

      {/* Cards Grid */}
      <div className="overflow-x-auto flex gap-6 pb-6 md:grid md:grid-cols-2 md:gap-8 max-w-[1126px] mx-auto w-full px-4 md:px-0 scrollbar-none justify-start md:justify-center">
        
        {activeTab === 'landing-page' && (
          <>
            {/* Card 1 - Landing Page */}
            <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
              <FigmaFlowersLeft />
              
              <div className="left-[24px] top-[24px] absolute z-10">
                <TagPill text="Landing page" />
              </div>

              <div className="w-[499px] left-[24px] top-[81px] absolute inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addDevelopment ? (1199 + 2099).toLocaleString() : '1,199'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add Development</div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$2,099</div>
                      <ToggleSwitch enabled={addDevelopment} onChange={setAddDevelopment} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Pages</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+${addDevelopment ? '400' : '300'}/PAGE</div>
                    </div>
                    <div className="w-[499px] h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Animations</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$300/ANIM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[309px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
                {addDevelopment ? (
                  <>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom UI/UX Design, No Templates</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Fully Responsive (Desktop, Tablet &amp; Mobile)</div>
                    </div>

                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Conversion-Focused UX</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Figma Source Files Included</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom UI/UX Design, No Templates</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Fully Responsive (Desktop, Tablet &amp; Mobile)</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Conversion-Focused UX</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                      <FigmaCheckIcon />
                      <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Figma Source Files Included</div>
                    </div>
                  </>
                )}
              </div>

              <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
                <PricingCTAButton text="Book a call" href="https://calendly.com" />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'branding' && (
          <>
            {/* Card 1 */}
            <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
              <FigmaFlowersLeft />
              
              <div className="left-[24px] top-[24px] absolute z-10">
                <TagPill text="Branding package" />
              </div>

              <div className="w-[499px] left-[24px] top-[81px] absolute inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from $1,499
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Concepts</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$250/EACH</div>
                    </div>
                    <div className="w-[499px] h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Social Media Kit</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$350</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[309px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Primary & Secondary Logo Suite</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom Color Palette & Typography System</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Brand Identity Assets and poster design for Print & Digital</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Editable Source Files & Full Ownership</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 Revisions</div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
                <PricingCTAButton text="Book a call" href="https://calendly.com" />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'viz' && (
          <>
            {/* Card 1 */}
            <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
              <FigmaFlowersLeft />
              
              <div className="left-[24px] top-[24px] absolute z-10">
                <TagPill text="Still visualization" />
              </div>

              <div className="w-[499px] left-[24px] top-[81px] absolute inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addHighRes ? (999 + 499).toLocaleString() : '999'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  {/* Reusable ToggleSwitch component */}
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add 8K Ultra High-Res</div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$499</div>
                      <ToggleSwitch enabled={addHighRes} onChange={setAddHighRes} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Extra Render Angles</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$200/EACH</div>
                    </div>
                    <div className="w-[499px] h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Raw 3D Models (.blend/.obj)</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">+$400</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[309px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">High-fidelity 3D modeling of 1 product</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom materials, textures, and labels</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">3 professional studio lighting scenarios</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">2 feedback revisions per rendering</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Delivery in 5-7 days</div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
                <PricingCTAButton text="Book a call" href="https://calendly.com" />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'web-app' && (
          <>
            {/* Card 1 - Web App */}
            <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
              <FigmaFlowersLeft />
              
              <div className="left-[24px] top-[24px] absolute z-10">
                <TagPill text="Web Application" />
              </div>

              <div className="w-[499px] left-[24px] top-[81px] absolute inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addCMS ? (4999 + 1999).toLocaleString() : '4,999'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add CMS &amp; Database</div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$1,999</div>
                      <ToggleSwitch enabled={addCMS} onChange={setAddCMS} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Performance &amp; SEO Tuning</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                    <div className="w-[499px] h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Cross-Browser Testing</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[309px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Bespoke React/Next.js frontend development</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Responsive design across all screen sizes</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Smooth animations &amp; micro-interactions</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">SEO, metadata &amp; performance optimization</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Delivery in 4–6 weeks</div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
                <PricingCTAButton text="Book a call" href="https://calendly.com" />
              </div>
            </div>

            <ConstantRightCard />
          </>
        )}

        {activeTab === 'mobile-app' && (
          <>
            {/* Card 1 - Mobile App */}
            <div className="w-[547px] h-[590px] relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shrink-0">
              <FigmaFlowersLeft />
              
              <div className="left-[24px] top-[24px] absolute z-10">
                <TagPill text="Mobile Application" />
              </div>

              <div className="w-[499px] left-[24px] top-[81px] absolute inline-flex flex-col justify-start items-start gap-6 z-10">
                <div className="self-stretch justify-start text-neutral-900 text-4xl font-normal font-display leading-9">
                  from ${addMobileNative ? (5999 + 2000).toLocaleString() : '5,999'}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch px-4 py-3.5 bg-stone-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-100 inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-neutral-900 text-sm font-medium font-sans leading-5">Add iOS + Android (both platforms)</div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="text-zinc-800 text-xs font-bold font-sans leading-5">+$2,000</div>
                      <ToggleSwitch enabled={addMobileNative} onChange={setAddMobileNative} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">App Store &amp; Play Store submission</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                    <div className="w-[499px] h-px bg-zinc-100" />
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="text-neutral-600 text-sm font-normal font-sans leading-5">Push notifications setup</div>
                      <div className="text-zinc-500 text-xs font-medium font-mono leading-4 tracking-wide">Included</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[309px] absolute inline-flex flex-col justify-start items-start gap-2.5 z-10">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">React Native cross-platform development</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Custom UI components &amp; animations</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Offline support &amp; local data storage</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">API integration &amp; authentication</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                  <FigmaCheckIcon />
                  <div className="justify-start text-neutral-700 text-base font-normal font-sans leading-6">Delivery in 6–10 weeks</div>
                </div>
              </div>

              <div className="w-[499px] left-[24px] top-[513px] absolute z-10">
                <PricingCTAButton text="Book a call" href="https://calendly.com" />
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
          href="https://t.me/flowancestudio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 bg-[#E5E5E5] hover:bg-[#CECECE] hover:outline-[#C0C0C0] transition-all duration-300 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(65,65,65,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] inline-flex justify-center items-center gap-2.5 cursor-pointer outline-none text-[#171717] font-medium text-sm font-sans"
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
