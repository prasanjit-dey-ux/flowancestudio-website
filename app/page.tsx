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
        <header className="h-16 flex items-center justify-between px-8 border-b border-[#D2D2D2] sticky top-0 bg-[#FAFAFA]/85 backdrop-blur-md z-50">
          <div className="-ml-1 flex items-center">
            <Image
              src="/logo-text.png"
              alt="Flowance Studio Logo"
              width={160}
              height={36}
              className="h-7.5 w-auto object-contain"
              priority
            />
          </div>
          <nav className="flex gap-8 text-xs font-medium tracking-wide">
            <a href="#services" className="hover:text-primary transition-colors duration-200">SERVICES</a>
            <a href="#work" className="hover:text-primary transition-colors duration-200">WORK</a>
            <a href="#pricing" className="hover:text-primary transition-colors duration-200">PRICING</a>
            <a href="#faq" className="hover:text-primary transition-colors duration-200">FAQ</a>
            <a href="#footer" className="hover:text-primary transition-colors duration-200">CONTACT</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col justify-start">
          <div className="px-8 pt-20 pb-16">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-6 block">
              01 / ARCHITECTURE & IDENTITY
            </span>
            <h1 className="font-display font-normal text-3xl md:text-5xl lg:text-[44px] tracking-tight leading-[1.3] max-w-4xl text-[#171717] mb-8">
              We create strategies, brand systems,<br />digital products, and experiences for the<br />world's most disruptive thinkers.
            </h1>
            <div className="flex flex-wrap gap-4 font-sans">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#171717] hover:bg-primary hover:outline-primary hover:text-white transition-all duration-300 rounded-[130px] shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-center items-center gap-2.5 cursor-pointer outline-none text-white font-medium text-sm font-sans"
              >
                <GoogleMeetIcon className="w-[18px] h-[15px] flex-shrink-0" />
                <span>Book a call</span>
              </a>
              <a
                href="https://t.me/flowancestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#E5E5E5] hover:bg-primary hover:outline-primary hover:text-white transition-all duration-300 rounded-[130px] shadow-[0px_1px_0px_0px_rgba(65,65,65,0.15)] outline outline-1 outline-offset-[-1px] outline-[#D0D0D0] inline-flex justify-center items-center gap-2.5 cursor-pointer outline-none text-[#171717] font-medium text-sm font-sans"
              >
                <TelegramIcon className="w-5 h-5 flex-shrink-0" />
                <span>Send a message</span>
              </a>
            </div>
          </div>

          {/* Full Bleed Illustration Image */}
          <div className="w-full relative aspect-[16/10] md:aspect-[16/9] overflow-hidden border-t border-b border-[#D2D2D2] bg-stone-50">
            <Image
              src="/hero_illustration.png"
              alt="Flowance Studios beautiful pixel art garden workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-b border-[#D2D2D2]">
          <div className="px-8 pt-16 pb-10">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">
              02 / SERVICES
            </span>
            <h2 className="font-display font-normal text-3xl tracking-tight leading-tight text-[#171717]">
              Our capabilities.
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base text-stone-500 max-w-xl leading-relaxed">
              We design and construct digital products, visual systems, physical-digital boundaries, and brand strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D2D2D2] border-t border-[#D2D2D2]">
            {/* Service 1: Design & Development */}
            <div className="flex flex-col group cursor-pointer bg-white">
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src="/pc.png"
                  alt="Design & Development"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 border-t border-[#D2D2D2] flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase block mb-2 font-sans font-semibold">
                    01
                  </span>
                  <h3 className="font-display font-medium text-lg text-[#171717] mb-2">
                    Design & Development
                  </h3>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed">
                    Bespoke user experiences, modern Next.js/React frontend development, custom animations, and responsive layout structures.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-[#171717] uppercase">View services</span>
                  <span className="text-xs text-stone-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* Service 2: Branding */}
            <div className="flex flex-col group cursor-pointer bg-white">
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src="/editorial_publication.png"
                  alt="Branding"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 border-t border-[#D2D2D2] flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase block mb-2 font-sans font-semibold">
                    02
                  </span>
                  <h3 className="font-display font-medium text-lg text-[#171717] mb-2">
                    Branding
                  </h3>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed">
                    Visual identity systems, typographic tokens, durable brand books, typographic styling, and packaging designs.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-[#171717] uppercase">View services</span>
                  <span className="text-xs text-stone-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* Service 3: Product Visualization */}
            <div className="flex flex-col group cursor-pointer bg-white">
              <div className="relative h-[160px] w-full overflow-hidden">
                <video
                  src="/jellyfish.mp4"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="p-8 border-t border-[#D2D2D2] flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase block mb-2 font-sans font-semibold">
                    03
                  </span>
                  <h3 className="font-display font-medium text-lg text-[#171717] mb-2">
                    Product Visualization
                  </h3>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed">
                    High-fidelity 3D modeling, interdisciplinary digital-physical bounds, cinematic render mockups, and motion animations.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-[#171717] uppercase">View services</span>
                  <span className="text-xs text-stone-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Grid */}
        <section id="work" className="border-b border-[#D2D2D2]">
          <div className="px-8 pt-16 pb-8">
            <span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">
              03 / SELECTED WORK
            </span>
            <h2 className="font-display font-normal text-3xl tracking-tight text-[#171717]">
              Built artifacts.
            </h2>
          </div>

          <div className="px-8 pb-24 md:pb-32 flex flex-col gap-20 md:gap-28">
            {/* Project 1 */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center group cursor-pointer">
              <div className="md:col-span-5 flex flex-col justify-center">
                <h3 className="font-display font-medium text-3xl md:text-4xl text-[#171717] tracking-tight leading-tight mb-4">
                  The Copenhagen Atelier
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-6 max-w-md">
                  Most design is forgettable. Ours isn't. We craft bespoke spaces, tactile objects, and thoughtful visual identities that people actually remember.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Spatial Design
                  </span>
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Interior Curation
                  </span>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/studio_interior.png"
                    alt="Minimalist design studio interior"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-w-768px) 100vw, 58vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center group cursor-pointer">
              <div className="md:col-span-5 flex flex-col justify-center">
                <h3 className="font-display font-medium text-3xl md:text-4xl text-[#171717] tracking-tight leading-tight mb-4">
                  Organic Vessel Series
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-stone-500 leading-relaxed mb-6 max-w-md">
                  Investigations into tactile surface imperfections and natural glazes. A limited series of hand-coiled raw volcanic clay sculptures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Product Design
                  </span>
                  <span className="text-[11px] font-sans font-medium text-stone-600 bg-neutral-100 rounded-[6px] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-gray-200 shadow-[0px_1px_0px_0px_rgba(65,65,65,0.05)]">
                    Ceramics
                  </span>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-50 outline outline-1 outline-neutral-200/50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/ceramic_sculpture.png"
                    alt="Tactile ceramic vase on shelf"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-w-768px) 100vw, 58vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <section id="faq" className="px-8 py-24 md:py-32 border-b border-[#D2D2D2] grid md:grid-cols-12 gap-12 md:gap-8">
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
                We’re a one-stop-shop for all things digital! From crafting stunning websites to skyrocketing your SEO rankings, managing your social media, and building unforgettable brands, we do it all. Oh, and we promise we don’t bite.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>How long does it take to design a website?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Think of us as your digital chefs—we cook up greatness without rushing the recipe. Typically, it takes 4–6 weeks, depending on your needs. But don’t worry, we keep you in the loop every step of the way!
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Do you work with small businesses or just big brands?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Size doesn’t matter! Whether you’re a budding startup or an industry giant, we’re here to make your vision a reality. Big dreams? Small budget? Let’s chat!
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Can I customize the packages you offer?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Are your packages flexible to suit different business needs?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Definitely! Each package is a customizable toolkit designed to fit your unique marketing goals.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Can your packages be personalized for specific industries?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Of course! We tailor each package like a tailored suit, ensuring all elements align with your brand’s vision.
              </div>
            </details>

            <details className="group py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center list-none font-display font-medium text-base text-[#171717]">
                <span>Is it possible to adjust the components within your packages?</span>
                <span className="text-stone-400 group-open:rotate-45 transition-transform duration-300 font-sans text-lg select-none">+</span>
              </summary>
              <div className="mt-4 font-sans text-sm text-stone-600 leading-relaxed max-w-xl transition-all duration-300">
                Yes, think of our offerings as building blocks—you can mix and match to build your ideal digital strategy.
              </div>
            </details>
          </div>
        </section>

        {/* Footer Section */}
        <footer id="footer" className="relative px-8 pt-20 pb-72 flex flex-col md:flex-row justify-between items-start gap-12 overflow-hidden min-h-[580px] bg-[#FAFAFA]">
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
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
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
