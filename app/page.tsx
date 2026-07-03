import Image from "next/image";
import AsciiTerrain from "@/components/AsciiTerrain";
import Pricing from "@/components/Pricing";
import GoogleMeetIcon from "@/public/icon/google-meet";
import TelegramIcon from "@/public/icon/telegram";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#171717] selection:bg-zinc-200">
      {/* Centered Main 1280px Container with borders */}
      <div className="max-w-[1280px] w-full mx-auto border-x border-[#D2D2D2] min-h-screen flex flex-col bg-[#FAFAFA]">

        {/* Navigation Bar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-[#D2D2D2] sticky top-0 bg-[#FAFAFA]/85 backdrop-blur-md z-50">
          <div className="-ml-1 flex items-center">
            <Image
              src="/logo-text.png"
              alt="Flowance Studio Logo"
              width={160}
              height={36}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-medium tracking-wide">
            <a href="#services" className="hover:text-primary transition-colors duration-200">SERVICES</a>
            <a href="#work" className="hover:text-primary transition-colors duration-200">WORK</a>
            <a href="#pricing" className="hover:text-primary transition-colors duration-200">PRICING</a>
            <a href="#faq" className="hover:text-primary transition-colors duration-200">FAQ</a>
            <a href="#footer" className="hover:text-primary transition-colors duration-200">CONTACT</a>
          </nav>
          {/* Mobile CTA */}
          <a
            href="https://calendly.com/flowancestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden px-4 py-2 bg-[#171717] text-white text-xs font-medium rounded-full"
          >
            Book a call
          </a>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col justify-start">
          <div className="px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4 sm:mb-6 block">
              01 / STRATEGY • BRANDING • DIGITAL EXPERIENCE
            </span>
            <h1 className="font-display font-normal text-2xl sm:text-3xl md:text-5xl lg:text-[44px] tracking-tight leading-[1.3] max-w-2xl text-[#171717] mb-6 sm:mb-8">
              We build brands, products & visuals that people remember and digital experiences they never forget.
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 font-sans">
              <a
                href="https://calendly.com/flowancestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-[#171717] hover:bg-primary hover:outline-primary hover:text-white transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-center items-center gap-2.5 cursor-pointer text-white font-medium text-sm font-sans"
              >
                <GoogleMeetIcon className="w-[18px] h-[15px] flex-shrink-0" />
                <span>Book a call</span>
              </a>
              <a
                href="https://t.me/flowancestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-[#E5E5E5] hover:bg-[#CECECE] hover:outline-[#C0C0C0] transition-all duration-300 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(65,65,65,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] inline-flex justify-center items-center gap-2.5 cursor-pointer text-[#171717] font-medium text-sm font-sans"
              >
                <TelegramIcon className="w-5 h-5 flex-shrink-0" />
                <span>Send a message</span>
              </a>
            </div>
          </div>

          {/* Full Bleed Hero Image */}
          <div className="w-full relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden border-t border-b border-[#D2D2D2] bg-stone-50">
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

            {/* Service 1: Design & Development */}
            <div className="flex flex-col p-8 sm:p-10 md:p-12 group cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/icon/design-development.png"
                  alt="Design & Development"
                  width={120}
                  height={120}
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-medium text-xl text-[#171717] mb-4 leading-snug">
                Design &amp; Development
              </h3>
              <p className="text-sm font-sans text-stone-500 leading-relaxed">
                We design and build fast, scalable digital products with intuitive user experiences combined with scalable frontend architecture, smooth animations, and responsive design systems.
              </p>
            </div>

            {/* Service 2: Branding */}
            <div className="flex flex-col p-8 sm:p-10 md:p-12 group cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/icon/branding.png"
                  alt="Branding"
                  width={100}
                  height={100}
                  className="object-contain object-left transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-medium text-xl text-[#171717] mb-4 leading-snug">
                Branding
              </h3>
              <p className="text-sm font-sans text-stone-500 leading-relaxed">
                Transforming ideas into iconic brands with distinctive identities, cohesive design languages, premium packaging, and scalable brand systems.
              </p>
            </div>

            {/* Service 3: Product Visualization */}
            <div className="flex flex-col p-8 sm:p-10 md:p-12 group cursor-pointer">
              <div className="mb-6 sm:mb-8">
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
              Built artifacts.
            </h2>
          </div>

          <div className="px-4 sm:px-8 pb-16 sm:pb-24 md:pb-32 grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Project 1: Finny */}
            <div className="flex flex-col group cursor-pointer">
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
            </div>

            {/* Project 2: Amipay */}
            <div className="flex flex-col group cursor-pointer">
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
            </div>

            {/* Project 3: Healthy O Me */}
            <div className="flex flex-col group cursor-pointer">
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
                A comprehensive wellness and health tracking ecosystem tailored for mindful living, offering personalized insights and engaging digital interactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  Health & Fitness
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                  UI/UX
                </span>
              </div>
            </div>

            {/* Project 4: Orchid Realtors */}
            <div className="flex flex-col group cursor-pointer">
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
            </div>
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

        {/* Footer Section */}
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
              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary uppercase">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Phone</span>
                </div>
                <a href="tel:+12175550134" className="text-sm font-normal text-stone-900 font-sans hover:text-primary transition-colors">
                  (217) 555-0134
                </a>
              </div>

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
              <a href="#" className="hover:underline transition-all">Home</a>
              <a href="#services" className="hover:underline transition-all">Benefits</a>
              <a href="#work" className="hover:underline transition-all">Portfolio</a>
              <a href="#about" className="hover:underline transition-all">About</a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 text-sm font-medium text-primary">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Linkedin</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Instagram</a>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
