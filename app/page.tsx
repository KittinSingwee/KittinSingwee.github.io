"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lineLink = "https://lin.ee/nDC9CYG";

  const editorialLookbookData = [
    {
      id: "twoblock",
      num: "01",
      title: "TWO BLOCK",
      file: "Twoblock.jpg",
      img: "/Twoblock.jpg",
      length: "Medium–Long",
      fade: "Low to None",
      hairType: "Straight / Wavy",
    },
    {
      id: "mullet",
      num: "02",
      title: "MULLET",
      file: "Mullet.jpg",
      img: "/Mullet.jpg",
      length: "Short–Long",
      fade: "Low",
      hairType: "All types",
    },
    {
      id: "slicked",
      num: "03",
      title: "SLICKED BACK",
      file: "Slicked.jpg",
      img: "/Slicked Back.jpg",
      length: "Medium–Long",
      fade: "None",
      hairType: "Straight / Thick",
    },
    {
      id: "undercut",
      num: "04",
      title: "UNDERCUT",
      file: "Undercut.jpg",
      img: "/Undercut.jpg",
      length: "Medium Top",
      fade: "High",
      hairType: "Straight / Wavy",
    },
    {
      id: "skinhead",
      num: "05",
      title: "SKINHEAD FADE",
      file: "Skinhead Fade.jpg",
      img: "/Skinhead Fade.jpg",
      length: "Very Short",
      fade: "High / Bald",
      hairType: "All types",
    },
    {
      id: "ivyleague",
      num: "06",
      title: "IVY LEAGUE",
      file: "Ivy League.jpg",
      img: "/Ivy League.jpg",
      length: "Short",
      fade: "Low",
      hairType: "Straight / Fine",
    },
  ];

  return (
    <div className="bg-[#0c081a] text-[#f1f5f9] min-h-screen font-sans scroll-smooth antialiased selection:bg-[#7c3aed] selection:text-white overflow-x-hidden">
      {/* 1. FLOATING MODERN CAPSULE HEADER */}
      <header className="fixed w-full top-0 z-50 pt-4 px-4">
        <div className="max-w-6xl mx-auto bg-[#130d29]/80 backdrop-blur-xl border border-[#7c3aed]/30 rounded-full px-5 py-2.5 flex justify-between items-center shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
          {/* Logo with Mascot Icon */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105 transition duration-300">
              <Image
                src="/logo.jpg"
                alt="โลโก้ พันธ์ บาร์เบอร์"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-black tracking-[0.18em] uppercase font-serif text-white flex items-center gap-1">
                Phan <span className="text-[#a78bfa]">Barber</span>
              </h1>
              <p className="text-[8px] tracking-widest text-[#c4b5fd] uppercase -mt-0.5 font-mono">
                Est. 2001 • Modern & Classic
              </p>
            </div>
          </a>

          {/* Menu for Desktop */}
          <nav className="hidden md:flex space-x-6 text-xs tracking-wider uppercase text-neutral-300 font-medium">
            <a href="#hero" className="hover:text-[#c4b5fd] transition duration-200">หน้าแรก</a>
            <a href="#about" className="hover:text-[#c4b5fd] transition duration-200">เกี่ยวกับร้าน</a>
            <a href="#services" className="hover:text-[#c4b5fd] transition duration-200">บริการ</a>
            <a href="#lookbook" className="hover:text-[#c4b5fd] transition duration-200">สไตล์ทรงผม</a>
            <a href="#shop-view" className="hover:text-[#c4b5fd] transition duration-200">บรรยากาศร้าน</a>
            <a href="#line-chatbot" className="hover:text-emerald-400 transition duration-200">LINE Chatbot</a>
            <a href="#location" className="hover:text-[#c4b5fd] transition duration-200">ติดต่อ</a>
          </nav>

          {/* Action Status Pills (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider font-semibold shadow-[0_0_15px_rgba(16,185,129,0.35)] transition duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              LINE CHATBOT
            </a>
            <a
              href="tel:0898599742"
              className="flex items-center gap-1.5 bg-[#7c3aed] hover:bg-[#6d28d9] border border-[#a78bfa]/40 text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider font-semibold shadow-md transition duration-300"
            >
              📞 089-859-9742
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white border border-[#7c3aed]/50 px-3 py-1.5 rounded-full text-xs font-mono bg-[#7c3aed]/20 active:scale-95 transition flex items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <span>{isMenuOpen ? "✕" : "☰"}</span>
            <span>{isMenuOpen ? "ปิด" : "เมนู"}</span>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 bg-[#130d29]/95 backdrop-blur-2xl border border-[#7c3aed]/40 rounded-3xl p-5 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col space-y-2 text-xs tracking-wider uppercase text-gray-200 font-medium">
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                🏠 หน้าแรก
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                💈 เกี่ยวกับร้าน
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                ✂️ บริการและราคา
              </a>
              <a
                href="#lookbook"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                📸 ลุคบุ๊กสไตล์ทรงผม
              </a>
              <a
                href="#shop-view"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                📸 บรรยากาศภายในร้าน
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-emerald-950/40 text-emerald-400 transition flex items-center justify-between"
              >
                <span>💬 LINE Chatbot</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">
                  ADD LINE
                </span>
              </a>
              <a
                href="#location"
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-4 rounded-2xl hover:bg-[#7c3aed]/20 hover:text-[#c4b5fd] transition"
              >
                📍 ที่ตั้งและการติดต่อ
              </a>
            </nav>

            <div className="pt-3 border-t border-[#7c3aed]/30 grid grid-cols-2 gap-2">
              <a
                href="tel:0898599742"
                className="flex items-center justify-center gap-1.5 bg-[#7c3aed] text-white py-2.5 rounded-2xl font-mono text-xs font-bold shadow-md"
              >
                📞 โทรออก
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 rounded-2xl font-mono text-xs font-bold shadow-md"
              >
                💬 แชท LINE
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. MODERN EDITORIAL HERO BANNER (NEXORA INSPIRED UI) */}
      <section id="hero" className="pt-28 md:pt-36 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header Headlines Stack */}
          <div className="text-center md:text-left space-y-1">
            <div className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#8b5cf6]/40 px-4 py-1.5 rounded-full text-[#c4b5fd] font-mono text-xs uppercase tracking-[0.25em] mb-2 shadow-sm">
              <span>✦</span> MODERN EDITORIAL LOOKBOOK • EST. 2001 <span>✦</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-white uppercase">
                Refine Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#e879f9]">STYLE</span>
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif tracking-tight text-[#c4b5fd]/90 uppercase">
                Master Your <span className="text-white">LOOK</span> ✦
              </h2>
            </div>
          </div>

          {/* Main Hero Banner Container Card */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4c1d95] p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_25px_60px_rgba(124,58,237,0.35)] border border-[#a78bfa]/40">
            {/* Soft Overlay Graphics */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & CTAs */}
              <div className="md:col-span-7 space-y-6 text-white text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase">
                  <span>✦</span> High Precision Grooming <span>✦</span>
                </div>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-white">
                  Where Craft Meets <br className="hidden sm:inline" />
                  <span className="text-[#f3e8ff] underline decoration-[#c084fc] decoration-4 underline-offset-8">Confidence & Style</span>
                </h3>

                <p className="text-purple-100 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-lg mx-auto md:mx-0">
                  สัมผัสประสบการณ์ตัดผมระดับพรีเมียม ประสบการณ์กว่า 25 ปี <br className="hidden sm:inline" />
                  ดูแลและออกแบบทรงผมที่ใช่ให้เข้ากับรูปหน้าและสไตล์ของคุณ
                </p>

                {/* Primary Pill Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
                  <a
                    href="#services"
                    className="w-full sm:w-auto bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-2xl transition duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Explore Services</span>
                    <span className="group-hover:translate-x-1 transition duration-200">➔</span>
                  </a>

                  <a
                    href={lineLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black px-7 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    <span>💬 แชท LINE Chatbot</span>
                  </a>
                </div>

                {/* Social Proof Pill Badge */}
                <div className="pt-2 flex items-center justify-center md:justify-start">
                  <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                    <div className="flex -space-x-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-purple-500">
                        <Image src="/logo.jpg" alt="Barber User" fill className="object-cover" />
                      </div>
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-purple-500">
                        <Image src="/view_2.jpg" alt="Barber User 2" fill className="object-cover" />
                      </div>
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-purple-500">
                        <Image src="/view_3.jpg" alt="Barber User 3" fill className="object-cover" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-purple-100 font-medium">
                      Loved by 2,500+ Customers ❤️
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Look Card (NEXORA Style) */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative max-w-sm w-full bg-white text-black p-4 sm:p-5 rounded-[2rem] shadow-2xl border border-purple-200/50 transform md:rotate-1 hover:rotate-0 transition duration-500">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7c3aed] bg-purple-100 px-2.5 py-1 rounded-full">
                      Featured Look ✦
                    </span>
                    <span className="text-xs font-mono text-gray-500">Est. 2001</span>
                  </div>

                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                    <Image
                      src="/logo.jpg"
                      alt="Featured Hairstyle Lookbook"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-mono">
                      #PhanBarber
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold font-serif text-neutral-900">
                        พันธ์บาร์เบอร์
                      </h4>
                      <span className="text-xs font-mono font-bold text-[#7c3aed]">
                        มาจ้าา
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 font-light">
                      มาตัดผม ทรงยอดฮิต หล่อเนี้ยบสไตล์ร่วมสมัย เซ็ตทรงง่าย
                    </p>

                    <a
                      href={lineLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full mt-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>💬</span> สอบถามทรงนี้ผ่าน LINE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Value Props Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#16102b] border border-[#7c3aed]/30 p-4 rounded-2xl flex items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-xl">👕</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase tracking-wider">Premium Quality</p>
                <p className="text-[11px] text-[#c4b5fd]">อุปกรณ์สะอาด ใส่ใจทุกขั้นตอน</p>
              </div>
            </div>

            <div className="bg-[#16102b] border border-[#7c3aed]/30 p-4 rounded-2xl flex items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-xl">💈</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase tracking-wider">25+ Years Craft</p>
                <p className="text-[11px] text-[#c4b5fd]">ประสบการณ์ตัดผมยาวนาน</p>
              </div>
            </div>

            <div className="bg-[#16102b] border border-[#7c3aed]/30 p-4 rounded-2xl flex items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-xl">⭐</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase tracking-wider">5-Star Rated</p>
                <p className="text-[11px] text-[#c4b5fd]">บริการเป็นกันเอง ลูกค้าติดใจ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-[#130d29] rounded-[2.5rem] border border-[#7c3aed]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 border border-[#8b5cf6]/40 px-3.5 py-1 rounded-full bg-[#7c3aed]/15 text-[#c4b5fd] font-mono text-xs uppercase tracking-widest">
                <span>✦</span> ABOUT PHAN BARBER <span>✦</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
                ความพิถีพิถัน และประสบการณ์กว่า <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#e879f9]">25 ปี</span>
              </h2>

              <p className="text-[#c4b5fd] text-xs sm:text-sm md:text-base leading-relaxed font-light">
                พันธ์ บาร์เบอร์ ให้บริการตัดผมชายและดูแลทรงผมด้วยความตั้งใจ
                ใส่ใจในทุกรายละเอียดและพร้อมให้คำแนะนำทรงผมที่เข้ากับใบหน้าของลูกค้าทุกท่าน
                สัมผัสบรรยากาศร้านที่เป็นกันเอง อบอุ่น และเข้าถึงง่าย
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#7c3aed]/30">
                <div className="bg-[#1a1238] p-3.5 rounded-2xl border border-[#7c3aed]/20 text-center">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#a855f7]">25+</p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase font-mono">ปีประสบการณ์</p>
                </div>
                <div className="bg-[#1a1238] p-3.5 rounded-2xl border border-[#7c3aed]/20 text-center">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white">100%</p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase font-mono">ความใส่ใจ</p>
                </div>
                <div className="bg-[#1a1238] p-3.5 rounded-2xl border border-[#7c3aed]/20 text-center">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#c084fc]">Classic</p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase font-mono">บาร์เบอร์สไตล์</p>
                </div>
              </div>
            </div>

            {/* About Image Frame */}
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-[2rem] overflow-hidden border-2 border-[#7c3aed]/40 shadow-2xl group">
              <Image
                src="/front_shop.jpg"
                alt="บรรยากาศการบริการ พันธ์บาร์เบอร์"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c081a]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-mono text-[#c4b5fd] uppercase tracking-widest block mb-1">
                    📍 KAMPHAENG PHET
                  </span>
                  <p className="text-white font-medium text-base sm:text-lg">
                    ร้านพันธ์บาร์เบอร์ (ตำบลท่ามะเขือ)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & PRICE MENU SECTION */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#8b5cf6]/40 px-3.5 py-1 rounded-full bg-[#7c3aed]/15 text-[#c4b5fd] font-mono text-xs uppercase tracking-widest">
            <span>✂️</span> SERVICE MENU & PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white">
            อัตราค่าบริการ
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md mx-auto">
            บริการดูแลทรงผมคุณภาพ ราคามิตรภาพ ใส่ใจในทุกรายละเอียด
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { tag: "AD", num: "01", name: "ผู้ใหญ่", price: "100", label: "HAIRCUT" },
            { tag: "KD", num: "02", name: "เด็กโต", price: "60-80", label: "JUNIOR" },
            { tag: "BB", num: "03", name: "เด็กเล็ก", price: "40-60", label: "TODDLER" },
            { tag: "DY", num: "04", name: "ย้อมผม", price: "250", label: "COLORING" },
            { tag: "WS", num: "05", name: "สระผม", price: "50", label: "WASH & CARE" },
            { tag: "EW", num: "06", name: "ล้างตา", price: "200", label: "EYE CARE" },
            { tag: "EC", num: "07", name: "แคะหู", price: "180-200", label: "EAR CARE" },
            { tag: "SV", num: "08", name: "โกนหนวด", price: "50", label: "SHAVING" },
          ].map((service, index) => (
            <div
              key={index}
              className="relative group bg-[#130d29] border border-[#7c3aed]/30 p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:border-[#a78bfa] hover:bg-[#181033] hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7c3aed]/20 border border-[#7c3aed]/40 text-[#c4b5fd] flex items-center justify-center font-mono text-xs font-bold">
                    {service.tag}
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 font-semibold tracking-wider">
                    #{service.num}
                  </span>
                </div>

                <span className="text-[9px] font-mono tracking-widest text-[#a78bfa] uppercase block mb-0.5">
                  {service.label}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-3">
                  {service.name}
                </h4>
              </div>

              <div className="pt-3 border-t border-[#7c3aed]/20 flex justify-between items-baseline">
                <span className="text-[10px] text-neutral-400 font-light">เริ่มต้น</span>
                <p className="text-lg sm:text-xl font-bold font-mono text-[#c084fc]">
                  {service.price} <span className="text-xs text-neutral-400">฿</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 MINIMAL EDITORIAL LOOKBOOK SECTION */}
      <section id="lookbook" className="py-24 px-4 max-w-5xl mx-auto border-t border-[#7c3aed]/25 text-white font-sans">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="font-mono text-[11px] tracking-[0.35em] text-[#c4b5fd] uppercase">
            Editorial Lookbook
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-white uppercase">
            HAIRSTYLE COLLECTION
          </h3>
          <div className="w-12 h-[1px] bg-[#7c3aed] mx-auto my-4"></div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            คู่มือทรงผมสำหรับลูกค้า สไตล์ Minimal & Editorial เรียงแนวตั้งเพื่อความชัดเจนของรูปหน้าและเส้นผม
          </p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-[75px] z-40 bg-[#0c081a]/95 backdrop-blur-md border-y border-[#7c3aed]/30 py-3 mb-16 shadow-xl">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none px-2 py-1">
            {editorialLookbookData.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const el = document.getElementById(`hairstyle-${item.id}`);
                  if (el) {
                    const yOffset = -130;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="text-xs font-mono tracking-wider px-4 py-2 rounded-full border border-[#7c3aed]/40 hover:border-[#a78bfa] hover:bg-[#7c3aed]/20 text-neutral-300 transition duration-200 whitespace-nowrap active:scale-95"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hairstyle Vertical Feed (6 Blocks) */}
        <div className="space-y-28 sm:space-y-36">
          {editorialLookbookData.map((item) => (
            <div
              key={item.id}
              id={`hairstyle-${item.id}`}
              className="scroll-mt-36 space-y-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#7c3aed]/30 pb-4 gap-2">
                <div>
                  <span className="font-mono text-xs text-[#c4b5fd] tracking-[0.25em] block mb-1">
                    {item.num} / HAIRSTYLE
                  </span>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.15em] text-white font-serif uppercase group-hover:text-[#c4b5fd] transition duration-300">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="relative w-full aspect-[3/4] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-900 border border-[#7c3aed]/30 shadow-2xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition duration-700 ease-out"
                  priority={item.id === "twoblock"}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#130d29] p-5 rounded-3xl border border-[#7c3aed]/30 backdrop-blur-sm">
                <div className="border-l-2 border-[#7c3aed] pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-[#c4b5fd] uppercase tracking-widest block">
                    ความยาว (LENGTH)
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.length}
                  </p>
                </div>

                <div className="border-l-2 border-[#7c3aed] pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-[#c4b5fd] uppercase tracking-widest block">
                    ระดับ FADE
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.fade}
                  </p>
                </div>

                <div className="border-l-2 border-[#7c3aed] pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-[#c4b5fd] uppercase tracking-widest block">
                    สภาพเส้นผม (HAIR TYPE)
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.hairType}
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition duration-200 border-b border-emerald-500/30 hover:border-emerald-400 pb-1"
                >
                  <span>💬</span> สอบถามทรง {item.title} ผ่าน LINE ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SHOP GALLERY SECTION */}
      <section id="shop-view" className="py-20 bg-[#0a0714] px-4 border-y border-[#7c3aed]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[#c4b5fd] font-mono text-xs tracking-[0.3em] uppercase block mb-1">
              ✦ SHOP GALLERY ✦
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-white">
              บรรยากาศภายในร้าน
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto font-light">
              สัมผัสความคลาสสิก อุปกรณ์ตัดผมดั้งเดิม และบรรยากาศที่เป็นกันเองของร้านพันธ์บาร์เบอร์
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* View 1 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/watermarked_img_3988630376005458443.jpg"
                alt="โซนกระจกและบรรยากาศภายในร้านพันธ์บาร์เบอร์"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-[#c4b5fd] uppercase tracking-widest block mb-0.5">
                    BARBER STATION
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    โซนกระจกและบรรยากาศภายในร้าน
                  </p>
                </div>
              </div>
            </div>

            {/* View 2 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/view_3.jpg"
                alt="เก้าอี้บาร์เบอร์คลาสสิกสีแดงและอุปกรณ์ปัตตาเลี่ยน"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest block mb-0.5">
                    CLASSIC CHAIR & TOOLS
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    เก้าอี้บาร์เบอร์สีแดงดั้งเดิม & ปัตตาเลี่ยนคู่ใจ
                  </p>
                </div>
              </div>
            </div>

            {/* View 3 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/view_2.jpg"
                alt="มุมตกแต่งผนังอิฐและกรอบรูปอนิเมะคลาสสิก"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-[#c4b5fd] uppercase tracking-widest block mb-0.5">
                    STORE DECORATION
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    มุมตกแต่งผนังอิฐ & สตรีทอนิเมะสไตล์เท่
                  </p>
                </div>
              </div>
            </div>

            {/* View 4 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/front_shop.jpg"
                alt="วิวหน้าร้านพันธ์บาร์เบอร์"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    FRONT STORE VIEW
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    หน้าร้านและมุมต้อนรับลูกค้า
                  </p>
                </div>
              </div>
            </div>

            {/* View 5 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/in_shop.jpg"
                alt="ภายในร้าน"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    IN STORE VIEW
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    ในร้านและมุมต้อนรับลูกค้า
                  </p>
                </div>
              </div>
            </div>

            {/* View 6 */}
            <div className="w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden relative border border-[#7c3aed]/30 shadow-2xl group">
              <Image
                src="/in_shop2.jpg"
                alt="ภายในร้าน"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    IN STORE VIEW
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    มีเด็กไม่อยากตัดผม555
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LINE CHATBOT QR CODE SECTION */}
      <section id="line-chatbot" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#130d29] rounded-[2.5rem] border border-emerald-500/40 p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)] grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 border border-emerald-500/50 px-3.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LINE Official & Chatbot
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
                แชทสอบถามข้อมูลผ่าน <span className="text-emerald-400">LINE Chatbot</span>
              </h2>

              <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                สะดวก รวดเร็ว! คุณสามารถแสกน QR Code นี้ หรือคลิกปุ่มแอดไลน์ด้านล่างเพื่อแชทสอบถามรายละเอียดกับ LINE Chatbot ของร้านพันธ์บาร์เบอร์ได้ทันที
              </p>

              <div className="space-y-2.5 pt-1 text-left inline-block md:block">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                  สอบถามอัตราค่าบริการและทรงผม
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                  เช็คเวลาทำการและข้อมูลบริการ
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                  พูดคุยกับช่างตัดผมโดยตรง
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] transition duration-300"
                >
                  <span>📲</span> คลิกเพื่อแอดไลน์ / เปิดแชท LINE ทันที
                </a>
              </div>
            </div>

            {/* QR Code Container */}
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="relative p-4 bg-white rounded-3xl shadow-2xl border-4 border-emerald-500/60 group-hover:scale-105 transition duration-300">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  <Image
                    src="/line-qr.png"
                    alt="LINE Chatbot QR Code - พันธ์บาร์เบอร์"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-black font-bold font-mono text-[10px] px-3 py-1 rounded-full uppercase shadow-md">
                  Click or Scan
                </div>
              </div>

              <p className="text-emerald-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mt-4 text-center group-hover:underline">
                📲 แสกนด้วยแอป LINE หรือคลิกที่นี่เพื่อเปิดแชท
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & CONTACT SECTION */}
      <section id="location" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-[#c4b5fd] font-mono text-xs tracking-[0.3em] uppercase block mb-2">
                ― FIND US ―
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-white">
                ที่ตั้งและการติดต่อ
              </h2>
            </div>

            <div className="bg-[#130d29] p-6 sm:p-8 rounded-[2rem] border border-[#7c3aed]/30 space-y-6 shadow-xl relative overflow-hidden">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#a78bfa] uppercase block mb-1">
                  STORE ADDRESS
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-serif text-white mb-2">
                  พันธ์ บาร์เบอร์ (PHAN BARBER)
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  6PPJ+597 ตำบลท่ามะเขือ
                  <br />
                  อำเภอคลองขลุง จังหวัดกำแพงเพชร
                </p>

                {/* Shop Photo Card */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-[#7c3aed]/30 shadow-md group">
                  <Image
                    src="/view_2.jpg"
                    alt="ร้านตัดผมชาย พันธ์ บาร์เบอร์"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                    <span className="text-xs font-mono text-white font-medium flex items-center gap-1.5">
                      <span>📍</span> ร้านตัดผมชาย พันธ์ บาร์เบอร์ (ท่ามะเขือ)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#7c3aed]/20 space-y-3.5">
                <a
                  href="tel:0898599742"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-[#c4b5fd] transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center font-mono text-xs font-bold text-[#c4b5fd]">
                    TEL
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block font-mono">PHONE NUMBER</span>
                    <span className="font-mono text-xs sm:text-sm text-gray-200">089-859-9742</span>
                  </div>
                </a>

                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-emerald-400 transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
                    LINE
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block font-mono">LINE CHATBOT</span>
                    <span className="text-xs sm:text-sm text-gray-200">แอดไลน์ https://lin.ee/nDC9CYG</span>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/phanth.singh.wi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-blue-400 transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/50 flex items-center justify-center font-mono text-xs font-bold text-blue-400">
                    FB
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block font-mono">FACEBOOK PAGE</span>
                    <span className="text-xs sm:text-sm text-gray-200">พันธ์ บาร์เบอร์</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="space-y-4">
            <div className="h-[360px] sm:h-[420px] bg-[#130d29] rounded-[2rem] border border-[#7c3aed]/30 overflow-hidden relative shadow-2xl">
              <iframe
                title="Phan Barber Google Maps Location"
                src="https://maps.google.com/maps?q=16.2353408,99.7308583&hl=th&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) opacity(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/hLDXYvqb8BShwz9P7"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#c084fc] hover:opacity-95 text-white rounded-2xl text-xs sm:text-sm font-mono font-bold tracking-wider transition duration-300 shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>📍</span> เปิดนำทางด้วย Google Maps (คลิกเพื่อดูหมุดร้าน) ➔
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER SECTION */}
      <footer className="bg-[#080512] py-12 border-t border-[#7c3aed]/20 text-center px-4">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#8b5cf6]">
              <Image src="/logo.jpg" alt="Phan Barber Logo" fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold tracking-[0.18em] text-white uppercase font-serif">
              Phan <span className="text-[#a78bfa]">Barber</span>
            </h4>
          </div>
          <p className="text-neutral-400 text-xs max-w-md mx-auto font-light">
            ตัดผมชาย • ดูแลสไตล์ • ประสบการณ์ยาวนานกว่า 25 ปี
          </p>
          <p className="text-neutral-500 text-[11px] font-mono">
            ตำบลท่ามะเขือ อำเภอคลองขลุง จังหวัดกำแพงเพชร
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent mx-auto my-3"></div>
          <p className="text-neutral-600 text-[11px] font-mono">
            © 2026 PHAN BARBER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}