'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useCalModal } from '@/components/CalModalContext';

export default function Header() {
  const { openCalModal } = useCalModal();

  const handleBookCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openCalModal();
    fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageName: 'Book a Call clicked from Header Mobile CTA',
        details: 'User clicked Book a Call button in header'
      })
    }).catch(err => console.error(err));
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-[#D2D2D2] sticky top-0 bg-[#FAFAFA]/85 backdrop-blur-md z-50">
      <div className="-ml-1 flex items-center">
        <Link href="/">
          <Image
            src="/logo-text.png"
            alt="Flowance Studio Logo"
            width={160}
            height={36}
            className="h-7 w-auto object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-medium tracking-wide">
        <Link href="/#services" className="hover:text-primary transition-colors duration-200">SERVICES</Link>
        <Link href="/#work" className="hover:text-primary transition-colors duration-200">WORK</Link>
        <Link href="/#pricing" className="hover:text-primary transition-colors duration-200">PRICING</Link>
        <Link href="/#faq" className="hover:text-primary transition-colors duration-200">FAQ</Link>
        <Link href="/#footer" className="hover:text-primary transition-colors duration-200">CONTACT</Link>
      </nav>
      {/* Mobile CTA */}
      <a
        href="https://cal.com/iamjiit/30min"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBookCallClick}
        data-cal-link="iamjiit/30min"
        data-cal-config='{"layout":"month_view"}'
        className="md:hidden px-4 py-2 bg-[#171717] text-white text-xs font-medium rounded-full"
      >
        Book a call
      </a>
    </header>
  );
}
