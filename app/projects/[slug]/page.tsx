import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCallButton from '@/components/BookCallButton';

interface ProjectData {
  title: string;
  tagline: string;
  client: string;
  role: string;
  deliverables: string[];
  timeline: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  problem: string;
  solution: string;
  metrics: { value: string; label: string }[];
  accentColor: string;
  nextSlug: string;
  nextTitle: string;
}

const projectsDb: Record<string, ProjectData> = {
  finny: {
    title: "Finny",
    tagline: "Finally know where your money went. Spend less. Save more. Stress never. Finny tracks your money, plans your goals, and gives you an AI advisor all in one clean app.",
    client: "Finny App",
    role: "Product Design & Strategy",
    deliverables: ["Product Strategy", "Android App Interface", "Motion Design", "Design System"],
    timeline: "2026",
    mediaType: "video",
    mediaSrc: "/projects/Finny.mp4",
    problem: "Traditional personal finance applications suffer from severe alert fatigue and visual clutter. Users frequently drop off within their first three days because tracking daily expenses feels like a chore rather than an engaging habit.",
    solution: "We designed a visual experience built around 'zero-friction entry' and calming minimalism. By replacing grids of numbers with high-contrast balance metrics and simple one-tap category pills, we transformed budgeting from a chore into a delightful micro-interaction.",
    metrics: [
      { value: "4.8★", label: "Play Store Rating" },
      { value: "+67%", label: "30-Day Retention" },
      { value: "1.2s", label: "Average Entry Speed" }
    ],
    accentColor: "#10B981",
    nextSlug: "amipay",
    nextTitle: "Amipay"
  },
  amipay: {
    title: "Amipay",
    tagline: "A seamless payment gateway solution offering borderless transactions, intuitive financial analytics, and a frictionless user experience.",
    client: "Amipay Ltd",
    role: "Web App Architecture & Interface Design",
    deliverables: ["Merchant Dashboard", "Checkout Widget API", "Component Library", "Brand Systems"],
    timeline: "8 Weeks",
    mediaType: "video",
    mediaSrc: "/projects/amipay.mp4",
    problem: "International payment portals are complex, slow, and hard to trust. Small businesses suffer from high cart abandonment rates due to confusing multi-step checkout funnels.",
    solution: "We streamlined the check-out funnel into a single-pane transaction screen with instant real-time currency conversion rates. We built a customizable React checkout component that blends into any client's brand interface while handling security seamlessly.",
    metrics: [
      { value: "+34%", label: "Checkout Conversions" },
      { value: "40%", label: "Reduction in Cart Drops" },
      { value: "24/7", label: "Real-time Auditing" }
    ],
    accentColor: "#0400FF",
    nextSlug: "healthy-o-me",
    nextTitle: "Healthy O Me"
  },
  "healthy-o-me": {
    title: "Healthy O Me",
    tagline: "A premium healthy food delivery platform offering organic meal subscriptions, personalized nutrition plans, and a seamless checkout experience.",
    client: "Healthy O Me Corp",
    role: "Lead Product Design & Frontend Architecture",
    deliverables: ["User Experience", "Mobile App Interface", "Subscription Systems", "Frontend Development"],
    timeline: "10 Weeks",
    mediaType: "image",
    mediaSrc: "/projects/healthy-o-me.webp",
    problem: "Most healthy meal apps fail because checking out and managing active subscriptions is complicated, slow, and lacks visual delight. Users drop off when subscription management feels rigid.",
    solution: "We built a clean, subscription-first delivery app. Users can select custom diet preferences, swap meals with a single swipe, and pause or resume subscriptions instantly. Calming gradients and smooth card transitions keep the visual flow premium.",
    metrics: [
      { value: "+84%", label: "Subscription Renewals" },
      { value: "2.3m", label: "Meals Delivered" },
      { value: "-50%", label: "Checkout Time" }
    ],
    accentColor: "#0400FF",
    nextSlug: "nykaa",
    nextTitle: "Nykaa"
  },
  "nykaa": {
    title: "Nykaa",
    tagline: "The Nykaa Naturals Sunkissed Glow poster transforms sunscreen from a skincare necessity into a desirable beauty product. Using a warm pink gradient, vibrant product imagery, and conversational callouts, the design highlights key benefits while maintaining an aspirational feel. Strong brand colors and elegant composition reinforce freshness, confidence, and everyday beauty.",
    client: "NYKAA",
    role: "Creative Direction & Poster Design",
    deliverables: ["Brand Identity", "Graphic Design"],
    timeline: "2026",
    mediaType: "image",
    mediaSrc: "/projects/Nykaa Ad Design.jpg",
    problem: "Skincare advertising often struggles to make essential sun protection feel emotionally desirable, falling back on clinical layouts that fail to connect with beauty-focused consumers.",
    solution: "We designed a warm rose-to-blush gradient poster featuring a tiered white podium and orbiting conversational callouts. This composition elevates the product duo like a retail display and neutralizes objections without sounding clinical.",
    metrics: [
      { value: "Brand DNA", label: "Rose-to-Blush Theme" },
      { value: "Aspirational", label: "Visual Positioning" },
      { value: "Objection Free", label: "Conversational Orbit" }
    ],
    accentColor: "#0400FF",
    nextSlug: "orchid-realtors",
    nextTitle: "Orchid Realtors"
  },
  "orchid-realtors": {
    title: "Orchid Realtors",
    tagline: "An elegant and impactful advertisement poster design crafted to elevate brand presence and attract premium clientele in the real estate market.",
    client: "Orchid Real Estate Group",
    role: "Identity System & Outdoor Print Strategy",
    deliverables: ["Visual Identity", "Outdoor Advertising", "Print Poster Campaign", "Media Kit"],
    timeline: "4 Weeks",
    mediaType: "image",
    mediaSrc: "/projects/🏡 Orchid Realtors – Advertisement Poster Design.jpg",
    problem: "Premium real estate marketing is oversaturated with template layouts, generic stock images, and chaotic typography, rendering properties indistinguishable.",
    solution: "We brought an editorial design aesthetic to Orchid Realtors. Leveraging large serif typography, generous negative space, and custom-styled architectural photography, we designed outdoor posters and digital print ads that evoke high-fashion journals.",
    metrics: [
      { value: "100%", label: "Custom Assets" },
      { value: "Premium", label: "Brand Positioning" },
      { value: "Editorial", label: "Visual System" }
    ],
    accentColor: "#0400FF",
    nextSlug: "finny",
    nextTitle: "Finny"
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsDb).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsDb[slug];

  if (!project) {
    notFound();
  }

  if (slug === 'finny') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#171717] selection:bg-zinc-200">
        <div className="max-w-[1280px] w-full mx-auto border-x border-[#D2D2D2] min-h-screen flex flex-col bg-[#FAFAFA]">
          <Header />
          
          <main className="flex-grow flex flex-col">
            {/* Finny Sub-Navbar */}
            <div className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#D2D2D2] px-4 sm:px-8 py-3.5 flex justify-between items-center">
              <span className="font-display font-medium text-lg tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Finny
              </span>
              <div className="flex items-center gap-6 text-xs font-medium text-stone-500 uppercase tracking-wider">
                <a href="#how-it-works" className="hover:text-[#171717] transition-colors">How it works</a>
                <a href="#features" className="hover:text-[#171717] transition-colors">Features</a>
                <a href="#download" className="hover:text-[#171717] transition-colors text-emerald-600 font-bold">Download</a>
              </div>
            </div>

            {/* Hero Section */}
            <section className="px-4 sm:px-8 py-16 sm:py-24 border-b border-[#D2D2D2] grid md:grid-cols-12 gap-12 items-center bg-white/40">
              <div className="md:col-span-7 flex flex-col gap-6">
                <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase block animate-slide-up-custom delay-100">
                  03 / SELECTED WORK • FINNY
                </span>
                <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-[#171717] animate-slide-up-custom delay-200">
                  Finally know where your money went.
                </h1>
                <p className="font-sans text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl animate-slide-up-custom delay-300">
                  Spend less. Save more. Stress never. Finny tracks your money, plans your goals, and gives you an AI advisor all in one clean app.
                </p>
                <div className="pt-2 animate-slide-up-custom delay-300">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium tracking-wide shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                    </svg>
                    Download For Android
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-5 flex justify-center animate-fade-in-up delay-400">
                <div className="relative aspect-[16/10] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-stone-100 outline outline-1 outline-neutral-200/50 shadow-[0px_8px_32px_rgba(0,0,0,0.06)]">
                  <video
                    src="/projects/Finny.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-[#D2D2D2]">
              <div className="max-w-xl mb-12 sm:mb-16">
                <span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-2 block">
                  HOW IT WORKS
                </span>
                <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#171717] mb-4">
                  Up and running in 2 minutes.
                </h2>
                <p className="font-sans text-stone-500 text-sm sm:text-base leading-relaxed">
                  No bank connection. No complicated setup. Just three steps and you are good to go.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="flex flex-col gap-4 p-6 sm:p-8 bg-white border border-[#D2D2D2] rounded-[24px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-display font-medium text-lg">
                    1
                  </div>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    Download and open
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    Install Finny in seconds. No sign-up. No bank connection. Just open and you are ready.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-4 p-6 sm:p-8 bg-white border border-[#D2D2D2] rounded-[24px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-display font-medium text-lg">
                    2
                  </div>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    Ask Finny anything
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    Where did my salary go? Can I afford this? Honest answers based on your real numbers.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-4 p-6 sm:p-8 bg-white border border-[#D2D2D2] rounded-[24px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-display font-medium text-lg">
                    3
                  </div>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    Add your wishes
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    Add anything you want to buy. Finny tells you when you can afford it.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="px-4 sm:px-8 py-16 sm:py-24 border-b border-[#D2D2D2] bg-white/40">
              <div className="max-w-xl mb-12 sm:mb-16">
                <span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-2 block">
                  FEATURES
                </span>
                <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#171717] mb-4">
                  Simple tools. Real results.
                </h2>
                <p className="font-sans text-stone-500 text-sm sm:text-base leading-relaxed">
                  No complicated setup. No bank connection needed. Just open Finny and start making sense of your money.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="flex flex-col gap-3 p-6 bg-white border border-[#D2D2D2] rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:border-emerald-200 transition-all duration-300">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Visibility</span>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    See exactly where your money goes
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    Track income, expenses, and budgets at a glance. Nothing slips through the cracks.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-3 p-6 bg-white border border-[#D2D2D2] rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:border-emerald-200 transition-all duration-300">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">AI advisor</span>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    Ask Finny anything about your money
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    "Can I afford this?" "Where did my salary go?" Just ask — Finny gives honest, clear answers.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-3 p-6 bg-white border border-[#D2D2D2] rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:border-emerald-200 transition-all duration-300">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Planning</span>
                  <h3 className="font-display font-medium text-lg text-[#171717]">
                    Dream it. Plan it. Own it.
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    Add anything you want to buy. Finny tells you exactly when you can afford it.
                  </p>
                </div>
              </div>
            </section>

            {/* Try Finny CTA Section */}
            <section id="download" className="px-4 sm:px-8 py-20 sm:py-32 flex flex-col items-center justify-center text-center border-b border-[#D2D2D2] bg-white">
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#171717] tracking-tight mb-4">
                Try Finny now.
              </h2>
              <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md mb-8 leading-relaxed">
                Start tracking, planning, and saving today. Available instantly for Android.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base font-medium tracking-wide shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                Download For Android
              </a>
            </section>

            {/* Next Project Loop Bar */}
            <Link href={`/projects/${project.nextSlug}`} className="group block w-full py-12 px-4 sm:px-8 border-b border-[#D2D2D2] hover:bg-stone-50 transition-colors duration-300">
              <div className="max-w-[1280px] mx-auto flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Up Next</span>
                  <span className="font-display text-xl sm:text-2xl text-[#171717] group-hover:text-primary transition-colors font-medium">
                    {project.nextTitle}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl text-stone-400 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </Link>
          </main>

          {/* Finny Branded Footer */}
          <footer className="bg-stone-900 text-stone-400 px-4 sm:px-8 py-16 font-sans">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-6 flex flex-col gap-4">
                <span className="font-display text-white text-2xl font-normal tracking-tight flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  Finny
                </span>
                <p className="text-sm max-w-sm leading-relaxed text-stone-400">
                  Your personal finance companion. Track, plan, and save — all in one app.
                </p>
              </div>
              <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col gap-2.5">
                  <span className="text-white font-medium text-xs tracking-wider uppercase">Product</span>
                  <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                  <a href="#features" className="hover:text-white transition-colors">Features</a>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-white font-medium text-xs tracking-wider uppercase">Download</span>
                  <a href="#download" className="hover:text-white transition-colors">Android App</a>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-white font-medium text-xs tracking-wider uppercase">Connect</span>
                  <a href="https://x.com/flowancestudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <span>© 2026 Finny. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <span>Made with care in India</span>
                <span className="text-stone-700">•</span>
                <Link href="/" className="text-stone-400 hover:text-white transition-colors font-medium">Back to Flowance Studio</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#171717] selection:bg-zinc-200">
      {/* Centered Main 1280px Container with borders */}
      <div className="max-w-[1280px] w-full mx-auto border-x border-[#D2D2D2] min-h-screen flex flex-col bg-[#FAFAFA]">
        
        <Header />

        {/* Dynamic Project Content */}
        <main className="flex-grow flex flex-col">
          
          {/* Hero Header */}
          <section className="px-4 sm:px-8 pt-12 sm:pt-16 pb-12 border-b border-[#D2D2D2]">
            <div className="overflow-hidden block mb-4">
              <span className="text-xs font-medium tracking-widest text-stone-500 uppercase block animate-slide-up-custom delay-100">
                03 / SELECTED WORK • {project.title.toUpperCase()}
              </span>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mt-6">
              <div className="md:col-span-8">
                <h1 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 overflow-hidden block">
                  <span className="block animate-slide-up-custom delay-200">
                    {project.title}
                  </span>
                </h1>
                <p className="font-sans text-base sm:text-lg md:text-xl text-stone-500 leading-relaxed max-w-2xl overflow-hidden block">
                  <span className="block animate-slide-up-custom delay-300">
                    {project.tagline}
                  </span>
                </p>
              </div>
              
              {/* Project Meta Details Grid */}
              <div className="md:col-span-4 grid grid-cols-2 gap-x-6 gap-y-8 text-sm font-sans pt-2 border-t md:border-t-0 border-[#D2D2D2] md:pl-6 overflow-hidden block">
                <div className="animate-slide-up-custom delay-300">
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Client</h4>
                  <p className="text-[#171717] font-medium">{project.client}</p>
                </div>
                <div className="animate-slide-up-custom delay-300">
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Timeline</h4>
                  <p className="text-[#171717] font-medium">{project.timeline}</p>
                </div>
                <div className="animate-slide-up-custom delay-300">
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Role</h4>
                  <p className="text-[#171717] font-medium leading-tight">{project.role}</p>
                </div>
                <div className="animate-slide-up-custom delay-300">
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Services</h4>
                  <div className="flex flex-col gap-0.5 text-[#171717] font-medium leading-tight">
                    {project.deliverables.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Media Showcase */}
          <section className="px-4 sm:px-8 py-12 sm:py-16 border-b border-[#D2D2D2] bg-white/40">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)] animate-fade-in-up delay-400">
              {project.mediaType === 'video' ? (
                <video
                  src={project.mediaSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-1280px) 100vw, 1280px"
                  priority
                />
              )}
            </div>
          </section>

          {/* Problem & Solution Split Section */}
          <section className="px-4 sm:px-8 py-16 sm:py-24 border-b border-[#D2D2D2] grid md:grid-cols-2 gap-12 sm:gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-3">The Challenge</span>
              <h2 className="font-display font-medium text-2xl text-[#171717] tracking-tight leading-snug mb-4">
                What we aimed to solve.
              </h2>
              <p className="font-sans text-base text-stone-500 leading-relaxed max-w-prose">
                {project.problem}
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-3">The Solution</span>
              <h2 className="font-display font-medium text-2xl text-[#171717] tracking-tight leading-snug mb-4">
                How we achieved it.
              </h2>
              <p className="font-sans text-base text-stone-500 leading-relaxed max-w-prose">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Impact Metrics */}
          <section className="px-4 sm:px-8 py-16 sm:py-24 border-b border-[#D2D2D2] bg-white/40">
            <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-8 block text-center">Outcome &amp; Metrics</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-normal text-[#171717]">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-stone-500 tracking-wide">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action & Navigation */}
          <section className="px-4 sm:px-8 py-16 sm:py-24 flex flex-col items-center justify-center text-center border-b border-[#D2D2D2]">
            <h3 className="font-display font-normal text-2xl sm:text-3xl text-[#171717] tracking-tight mb-4">
              Have a similar product in mind?
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md mb-8 leading-relaxed">
              Let's craft a visual language that sets you apart. Book a 1-hour workshop call with us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BookCallButton
                className="px-6 py-3.5 bg-[#171717] hover:bg-[#2A2A2A] hover:outline-[#2A2A2A] hover:text-white transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-neutral-800 text-white font-medium text-sm font-sans"
              >
                Book a workshop call
              </BookCallButton>
              <Link
                href="/#work"
                className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 rounded-[130px] outline outline-1 outline-offset-[-1px] outline-neutral-200 text-neutral-800 font-medium text-sm font-sans"
              >
                Back to all work
              </Link>
            </div>
          </section>

          {/* Next Project Loop Bar */}
          <Link href={`/projects/${project.nextSlug}`} className="group block w-full py-12 px-4 sm:px-8 border-b border-[#D2D2D2] hover:bg-stone-50 transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Up Next</span>
                <span className="font-display text-xl sm:text-2xl text-[#171717] group-hover:text-primary transition-colors font-medium">
                  {project.nextTitle}
                </span>
              </div>
              <span className="text-xl sm:text-2xl text-stone-400 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1.5">
                →
              </span>
            </div>
          </Link>

        </main>

        <Footer />

      </div>
    </div>
  );
}
