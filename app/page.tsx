"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AsciiTerrain from "@/components/AsciiTerrain";
import Pricing from "@/components/Pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCalModal } from "@/components/CalModalContext";
import GoogleMeetIcon from "@/public/icon/google-meet";
import TelegramIcon from "@/public/icon/telegram";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { openCalModal } = useCalModal();
  const handleHeroBookCall = (e: React.MouseEvent<HTMLAnchorElement>, location: string) => {
    e.preventDefault();
    openCalModal();
    fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageName: `Book a Call clicked from ${location}`,
        details: 'User clicked Book a Call button'
      })
    }).catch(err => console.error(err));
  };
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#171717] selection:bg-zinc-200">
      {/* Centered Main 1280px Container with borders */}
      <div className="max-w-[1280px] w-full mx-auto border-x border-[#D2D2D2] min-h-screen flex flex-col bg-[#FAFAFA]">

        <Header />

        {/* Hero Section */}
        <section className="flex flex-col justify-start">
          <div className="px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16">
            <div className="overflow-hidden block mb-4 sm:mb-6">
              <span className="text-xs font-medium tracking-widest text-stone-500 uppercase block animate-slide-up-custom delay-100">
                01 / STRATEGY • BRANDING • DIGITAL EXPERIENCE
              </span>
            </div>
            <h1 className="font-display font-normal text-2xl sm:text-3xl md:text-5xl lg:text-[44px] tracking-tight leading-[1.3] max-w-2xl text-[#171717] mb-6 sm:mb-8 overflow-hidden block">
              <span className="block animate-slide-up-custom delay-200">
                We build brands, products & visuals that people remember and digital experiences they never forget.
              </span>
            </h1>
            <div className="overflow-hidden block">
              <div className="flex flex-wrap gap-3 sm:gap-4 font-sans animate-slide-up-custom delay-300">
                <a
                  href="https://cal.com/flowance-studios/1-hour"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleHeroBookCall(e, "Hero Section CTA")}
                  data-cal-link="flowance-studios/1-hour"
                  data-cal-config='{"layout":"month_view"}'
                  className="px-5 sm:px-6 py-3 sm:py-3.5 bg-[#171717] hover:bg-[#2A2A2A] hover:outline-[#2A2A2A] hover:text-white transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-center items-center gap-2.5 cursor-pointer text-white font-medium text-sm font-sans"
                >
                  <GoogleMeetIcon className="w-[18px] h-[15px] flex-shrink-0" />
                  <span>Book a call</span>
                </a>
                <a
                  href="https://t.me/iamjiiit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#E5E5E5] hover:bg-[#CECECE] hover:outline-[#C0C0C0] transition-all duration-300 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(65,65,65,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] inline-flex justify-center items-center gap-2.5 cursor-pointer text-[#171717] font-medium text-sm font-sans"
                >
                  <TelegramIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Send a message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Full Bleed Hero Image */}
          <div className="w-full relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden border-t border-b border-[#D2D2D2] bg-stone-50 animate-fade-in-up delay-400">
            <Image
              src="/hero-bg.png"
              alt="Flowance Studio hero illustration"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-b border-[#D2D2D2]">
          <div className="px-4 sm:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">
              02 / SERVICES
            </span>
            <h2 className="font-display font-normal text-2xl sm:text-3xl tracking-tight leading-tight text-[#171717]">
              Our capabilities.
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base text-stone-500 max-w-xl leading-relaxed">
              We design and construct digital products, visual systems, physical-digital boundaries, and brand strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D2D2D2] border-t border-[#D2D2D2]">
            {/* Service 1 */}
            <div className="p-4 sm:p-8 flex flex-col justify-start">
              <div className="w-16 h-16 mb-6">
                <Image
                  src="/icon/design-development.png"
                  alt="UI/UX Design"
                  width={100}
                  height={100}
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-medium text-xl text-[#171717] mb-4 leading-snug">
                Product / UI/UX Design
              </h3>
              <p className="text-sm font-sans text-stone-500 leading-relaxed">
                Transforming complex workflows into simple, highly aesthetic, and conversion-focused user interfaces across mobile and web platforms.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-4 sm:p-8 flex flex-col justify-start">
              <div className="w-16 h-16 mb-6">
                <Image
                  src="/icon/branding.png"
                  alt="Branding"
                  width={100}
                  height={100}
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-medium text-xl text-[#171717] mb-4 leading-snug">
                Brand Strategy &amp; Identity
              </h3>
              <p className="text-sm font-sans text-stone-500 leading-relaxed">
                Transforming ideas into iconic brands with distinctive identities, cohesive design languages, premium packaging, and scalable brand systems.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-4 sm:p-8 flex flex-col justify-start">
              <div className="w-16 h-16 mb-6">
                <Image
                  src="/icon/3d.png"
                  alt="Product Visualization"
                  width={100}
                  height={100}
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-medium text-xl text-[#171717] mb-4 leading-snug">
                Product Visualization
              </h3>
              <p className="text-sm font-sans text-stone-500 leading-relaxed">
                Transforming products into stunning visual experiences through photorealistic 3D visuals, cinematic animations, and immersive product experiences that captivate audiences and elevate brands.
              </p>
            </div>

          </div>
        </section>

        {/* Featured Work Grid */}
        <section id="work" className="border-b border-[#D2D2D2]">
          <div className="px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">
              03 / SELECTED WORK
            </span>
            <h2 className="font-display font-normal text-2xl sm:text-3xl tracking-tight text-[#171717]">
              Featured Projects.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border-t border-[#D2D2D2]">
            {/* Project 1: Finny */}
            <Link
              href="/projects/finny"
              className="p-4 sm:p-8 md:p-12 flex flex-col group cursor-pointer border-b md:border-r border-[#D2D2D2]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] mb-6">
                <video
                  src="/projects/Finny.mp4"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <h3 className="font-display font-medium text-xl md:text-2xl text-[#171717] tracking-tight leading-tight mb-3">
                Finny
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-5 max-w-md">
                A smart financial platform that redefines how users track, manage, and optimize their daily expenses with an intuitive, modern interface.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  App Design
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Fintech
                </span>
              </div>
            </Link>

            {/* Project 2: Amipay */}
            <Link
              href="/projects/amipay"
              className="p-4 sm:p-8 md:p-12 flex flex-col group cursor-pointer border-b border-[#D2D2D2]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] mb-6">
                <video
                  src="/projects/amipay.mp4"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <h3 className="font-display font-medium text-xl md:text-2xl text-[#171717] tracking-tight leading-tight mb-3">
                Amipay
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-5 max-w-md">
                A seamless payment gateway solution offering borderless transactions, intuitive financial analytics, and a frictionless user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Fintech
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Web App
                </span>
              </div>
            </Link>

            {/* Project 3: Healthy O Me */}
            <Link
              href="/projects/healthy-o-me"
              className={`p-4 sm:p-8 md:p-12 flex flex-col group cursor-pointer border-b md:border-r border-[#D2D2D2] ${showAllProjects ? "" : "md:border-b-0"}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] mb-6">
                <Image
                  src="/projects/healthy-o-me.webp"
                  alt="Healthy O Me"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display font-medium text-xl md:text-2xl text-[#171717] tracking-tight leading-tight mb-3">
                Healthy O Me
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-5 max-w-md">
                A premium healthy food delivery platform offering organic meal subscriptions, personalized nutrition plans, and a seamless checkout experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Food Delivery
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Subscription Model
                </span>
              </div>
            </Link>

            {/* Project 4: Nykaa */}
            <Link
              href="/projects/nykaa"
              className={`p-4 sm:p-8 md:p-12 flex flex-col group cursor-pointer border-[#D2D2D2] ${showAllProjects ? "border-b" : "border-b-0"}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] mb-6">
                <Image
                  src="/projects/Nykaa Ad Design.jpg"
                  alt="Nykaa Ad Design"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display font-medium text-xl md:text-2xl text-[#171717] tracking-tight leading-tight mb-3">
                Nykaa
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-5 max-w-md">
                An aspirational advertisement design campaign transforming skincare sun protection into a highly desirable beauty essential.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Brand Identity
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Graphic Design
                </span>
              </div>
            </Link>

            {/* Project 5: Orchid Realtors */}
            {showAllProjects && (
              <Link
                href="/projects/orchid-realtors"
                className="p-4 sm:p-8 md:p-12 flex flex-col group cursor-pointer md:border-r border-[#D2D2D2]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] mb-6">
                  <Image
                    src="/projects/🏡 Orchid Realtors – Advertisement Poster Design.jpg"
                    alt="Orchid Realtors Advertisement Poster"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-display font-medium text-xl md:text-2xl text-[#171717] tracking-tight leading-tight mb-3">
                  Orchid Realtors
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-5 max-w-md">
                  An elegant and impactful advertisement poster design crafted to elevate brand presence and attract premium clientele in the real estate market.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Graphic Design
                  </span>
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Branding
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* See More/Less toggle button row */}
          <div className="flex justify-center py-8 border-t border-[#D2D2D2]">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-5 py-3 bg-[#E5E5E5] hover:bg-[#CECECE] hover:outline-[#C0C0C0] transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] text-[#171717] font-medium text-sm font-sans cursor-pointer"
            >
              {showAllProjects ? 'See less' : 'See more'}
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <section id="faq" className="px-4 sm:px-8 py-16 sm:py-24 md:py-32 border-b border-[#D2D2D2] grid md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-6 block">
              04 / FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display font-normal text-3xl tracking-tight leading-tight">
              Common inquiries.
            </h2>
            <p className="mt-4 font-sans text-sm text-stone-600 leading-relaxed">
              Our answers to recurring questions about our methods, timelines, and deliverables.
            </p>
            <video
              src="/jellyfish.mp4"
              className="w-full max-w-[320px] h-auto mt-6 translate-x-6"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="md:col-span-7 md:col-start-6 divide-y divide-[#D2D2D2] border-t border-[#D2D2D2]">
            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>What services do you offer?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                We provide UI/UX design, website design, website development, app development, branding & visual identity, 3D design, poster & marketing creatives, product visualization, video editing, and ongoing website maintenance. Our solutions are tailored to help businesses build a strong online presence.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>How long does it take to design a website?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Most websites are completed within 2–4 weeks, depending on the project size and requirements. We'll provide a clear timeline before we begin.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Do you work with small businesses or just big brands?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                We work with businesses of all sizes — from startups and small businesses to established brands. Every project receives the same level of attention and quality.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Can I customize the packages you offer?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Yes, our packages are flexible. We can customize any package to align with your specific business goals, budget, and project requirements.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Are your packages flexible to suit different business needs?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Absolutely. We scale our services to fit your needs, whether you are looking for a foundational website design or a full-scale digital ecosystem.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Can your packages be personalized for specific industries?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Yes, we create industry-specific solutions for retail, healthcare, education, real estate, hospitality, and more. Your website will be designed to suit your target audience.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Is it possible to adjust the components within your packages?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Yes, you can add, remove, or upgrade features at any stage. We ensure your package remains flexible as your business grows.
              </div>
            </details>
          </div>
        </section>

        <Footer />

      </div>
    </div>
  );
}
