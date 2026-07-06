'use client';

import Image from 'next/image';
import Link from 'next/link';
import TelegramIcon from '@/public/icon/telegram';

export default function Footer() {
  return (
    <footer id="footer" className="relative px-4 sm:px-8 pt-12 sm:pt-20 pb-48 sm:pb-72 flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 overflow-hidden min-h-[480px] sm:min-h-[580px] bg-[#FAFAFA]">
      {/* Background Accent Image behind the content, pushed down and clipped at the bottom */}
      <div className="absolute bottom-[-200px] left-[-90px] right-[-90px] h-[520px] z-0 pointer-events-none">
        <Image
          src="/flower-footer.png"
          alt="Footer background illustration"
          fill
          className="object-cover object-top"
          sizes="(max-w-1280px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Left Column Group: Brand Logo & Tagline */}
      <div className="relative z-10 max-w-sm flex flex-col gap-4">
        <div className="-ml-1">
          <Image
            src="/logo-text.png"
            alt="Flowance Studios Logo"
            width={180}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
        <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-[280px]">
          The next big thing starts here drop us a line and let's get creating!
        </p>
      </div>

      {/* Right Column Group: Contact, Navigation & Socials */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-x-16 md:gap-x-24 gap-y-10 text-sm font-sans pt-1">

        {/* Contact details: Phone & Email */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary uppercase">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Email</span>
            </div>
            <a href="mailto:flowancestudio@email.com" className="text-sm font-normal text-stone-900 font-sans hover:text-primary transition-colors">
              flowancestudio@email.com
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col gap-3 text-sm font-medium text-primary">
          <Link href="/" className="hover:underline transition-all">Home</Link>
          <Link href="/#services" className="hover:underline transition-all">Service</Link>
          <Link href="/#work" className="hover:underline transition-all">Work</Link>
          <Link href="/#pricing" className="hover:underline transition-all">Pricing</Link>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3 text-sm font-medium text-primary">
          <a href="https://contra.com/flowance_8g6j2lid/work?r=flowance_8g6j2lid" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Contra</a>
          <a href="https://t.me/iamjiiit" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Telegram</a>
          <a href="https://x.com/flowancestudios" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Twitter</a>
          <a href="https://www.instagram.com/flowance.studios/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Instagram</a>
        </div>

      </div>
    </footer>
  );
}
