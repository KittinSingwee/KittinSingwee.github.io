"use client";

import { useState, useRef } from "react";
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
    <div className="bg-[#0b0e14] text-[#f1f5f9] min-h-screen font-sans scroll-smooth antialiased selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* 1. HEADER */}
      <header className="fixed w-full top-0 bg-[#0d121d]/90 backdrop-blur-md z-50 border-b border-red-900/30 shadow-lg shadow-black/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo with Mascot Icon */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.4)] group-hover:scale-105 group-hover:border-blue-400 transition duration-300">
              <Image
                src="/logo.jpg"
                alt="โลโก้ พันธ์ บาร์เบอร์"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold tracking-[0.15em] uppercase font-serif text-white flex items-center gap-1">
                Phan <span className="text-red-500">Barber</span>
              </h1>
              <p className="text-[9px] tracking-widest text-blue-400 uppercase -mt-0.5 font-mono">
                Classic Barber • Est. 2001
              </p>
            </div>
          </a>

          {/* Menu for Desktop */}
          <nav className="hidden md:flex space-x-7 text-sm tracking-wider uppercase text-gray-300 font-light">
            <a href="#hero" className="hover:text-red-400 transition duration-200">หน้าแรก</a>
            <a href="#about" className="hover:text-blue-400 transition duration-200">เกี่ยวกับร้าน</a>
            <a href="#services" className="hover:text-red-400 transition duration-200">บริการ</a>
            <a href="#lookbook" className="hover:text-[#d4af37] transition duration-200">สไตล์ทรงผม</a>
            <a href="#shop-view" className="hover:text-blue-400 transition duration-200">บรรยากาศร้าน</a>
            <a href="#line-chatbot" className="hover:text-emerald-400 transition duration-200">LINE Chatbot</a>
            <a href="#location" className="hover:text-red-400 transition duration-200">การติดต่อ</a>
          </nav>

          {/* Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 text-white px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase font-medium shadow-[0_0_12px_rgba(16,185,129,0.3)] transition duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              LINE Chatbot
            </a>
            <a
              href="tel:0898599742"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-700 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium hover:brightness-110 shadow-md transition duration-300"
            >
              <span className="font-mono text-xs">089-859-9742</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white border border-red-500/40 px-3 py-1.5 rounded-lg text-sm font-mono hover:bg-red-500/10 active:scale-95 transition flex items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <span>{isMenuOpen ? "✕" : "☰"}</span>
            <span className="text-xs">{isMenuOpen ? "ปิด" : "เมนู"}</span>
          </button>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0d121d]/98 border-b border-red-900/40 px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-medium text-sm tracking-wider uppercase text-gray-200">
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-red-950/40 hover:text-red-400 transition"
              >
                🏠 หน้าแรก
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-blue-950/40 hover:text-blue-400 transition"
              >
                💈 เกี่ยวกับร้าน
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-red-950/40 hover:text-red-400 transition"
              >
                ✂️ บริการและราคา
              </a>
              <a
                href="#lookbook"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-amber-950/40 hover:text-[#d4af37] transition"
              >
                📸 รีวิวทรงผม (ดู 4 มุม)
              </a>
              <a
                href="#shop-view"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-blue-950/40 hover:text-blue-400 transition"
              >
                📸 บรรยากาศภายในร้าน
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-emerald-950/40 text-emerald-400 transition flex items-center justify-between"
              >
                <span>💬 LINE Chatbot</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono">
                  ADD LINE
                </span>
              </a>
              <a
                href="#location"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-red-950/40 hover:text-red-400 transition"
              >
                📍 ที่ตั้งและการติดต่อ
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-3">
              <a
                href="tel:0898599742"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 rounded-xl font-mono text-xs font-bold shadow-md"
              >
                📞 โทรออก
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 rounded-xl font-mono text-xs font-bold shadow-md"
              >
                💬 แชท LINE
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="hero"
        className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 min-h-[90vh] flex items-center border-b border-blue-950/40"
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: "url('/image_926161.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Mobile Avatar */}
          <div className="md:hidden flex justify-center pt-4">
            <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-br from-red-600 via-white to-blue-600 shadow-[0_0_25px_rgba(220,38,38,0.4)]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#0b0e14]">
                <Image
                  src="/logo.jpg"
                  alt="พันธ์ บาร์เบอร์ Mascot Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 text-center md:text-left">
            {/* Mascot Badge */}
            <div className="inline-flex items-center gap-2.5 border border-red-500/40 px-3.5 py-1.5 rounded-full bg-[#131926]/90 backdrop-blur-sm shadow-md">
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-red-400">
                <Image src="/logo.jpg" alt="Phan Barber Mascot" fill className="object-cover" />
              </div>
              <span className="text-[11px] md:text-xs text-gray-200 font-mono tracking-widest uppercase">
                Est. 2001 • Phan Barber Official
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight font-serif text-white">
              พันธ์ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">บาร์เบอร์</span>
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 md:w-10 h-[2px] bg-gradient-to-r from-red-600 to-blue-600"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 tracking-wide">
                มากกว่า 25 ปี แห่งประสบการณ์ตัดผม
              </h3>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-light">
              ตัดผมดี มีสไตล์ ดูแลคุณเหมือนเพื่อน
              สัมผัสบรรยากาศร้านบาร์เบอร์สไตล์คลาสสิก อบอุ่นและเป็นกันเอง
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-2">
              <a
                href="#services"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3.5 rounded-full font-semibold tracking-wider text-sm hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(220,38,38,0.35)] transition duration-300 text-center"
              >
                ดูบริการและราคา
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full font-semibold tracking-wider text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-300 flex items-center justify-center gap-2"
              >
                <span>💬</span> แชทผ่าน LINE Chatbot
              </a>
            </div>
          </div>

          {/* Desktop Mascot Card */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[360px] h-[360px] rounded-3xl p-3 bg-gradient-to-br from-red-600 via-blue-600 to-red-700 shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:scale-105 transition duration-500 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0d121d] border border-white/20">
                <Image
                  src="/logo.jpg"
                  alt="พันธ์ บาร์เบอร์ Mascot Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0d121d] border border-red-500/60 px-6 py-2 rounded-full shadow-xl text-center whitespace-nowrap">
                <p className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  ✂️ ร้านตัดผมพันธ์บาร์เบอร์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section id="about" className="py-20 md:py-24 bg-[#0d121d] px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block">
            <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase block mb-1">
              ― ABOUT US ―
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-white">
              ความใส่ใจในทุกรายละเอียด
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="text-white text-xs font-serif font-bold">★</span>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            พันธ์ บาร์เบอร์ ให้บริการตัดผมชายและบริการดูแลเส้นผม
            ด้วยประสบการณ์ตัดผมที่ยาวนานกว่า 25 ปี
            เราใส่ใจในทุกรายละเอียดและพร้อมให้คำแนะนำทรงผมที่เหมาะกับบุคลิกของลูกค้าแต่ละท่าน
            ท่ามกลางบรรยากาศร้านที่เป็นกันเองและเข้าถึงง่าย
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-xl mx-auto pt-6 md:pt-8 border-t border-gray-800">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-red-500">25+</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase font-mono tracking-wider">ปีประสบการณ์</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white">100%</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase font-mono tracking-wider">ใส่ใจทุกรายละเอียด</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-blue-400">Classic</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase font-mono tracking-wider">สไตล์คลาสสิก</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (PRICE) */}
      <section id="services" className="py-20 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase block mb-2">
            ― SERVICE MENU ―
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif">
            อัตราค่าบริการ
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-light">
            บริการคุณภาพ ราคามิตรภาพ ใส่ใจทุกขั้นตอน
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            { tag: "AD", num: "01", name: "ผู้ใหญ่", price: "100", label: "HAIRCUT", theme: "red" },
            { tag: "KD", num: "02", name: "เด็กโต", price: "60-80", label: "JUNIOR", theme: "blue" },
            { tag: "BB", num: "03", name: "เด็กเล็ก", price: "40-60", label: "TODDLER", theme: "red" },
            { tag: "DY", num: "04", name: "ย้อมผม", price: "250", label: "COLORING", theme: "blue" },
            { tag: "WS", num: "05", name: "สระผม", price: "50", label: "WASH & CARE", theme: "red" },
            { tag: "EW", num: "06", name: "ล้างตา", price: "200", label: "EYE CARE", theme: "blue" },
            { tag: "EC", num: "07", name: "แคะหู", price: "180-200", label: "EAR CARE", theme: "red" },
            { tag: "SV", num: "08", name: "โกนหนวด", price: "50", label: "SHAVING", theme: "blue" },
          ].map((service, index) => {
            const isRed = service.theme === "red";
            return (
              <div
                key={index}
                className={`relative group bg-gradient-to-b from-[#131926] to-[#0d121d] border p-4 sm:p-6 rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md ${
                  isRed
                    ? "border-red-900/40 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.2)]"
                    : "border-blue-900/40 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
                }`}
              >
                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-10 h-10 rounded-bl-full pointer-events-none transition duration-300 ${
                    isRed ? "bg-red-500/10 group-hover:bg-red-500/20" : "bg-blue-500/10 group-hover:bg-blue-500/20"
                  }`}
                ></div>

                <div>
                  <div className="flex justify-between items-start mb-3">
                    {/* Monogram Badge */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0b0e14] border flex items-center justify-center font-serif text-xs sm:text-sm font-bold group-hover:scale-105 transition duration-300 ${
                        isRed
                          ? "border-red-500/50 text-red-400 group-hover:border-red-500"
                          : "border-blue-500/50 text-blue-400 group-hover:border-blue-500"
                      }`}
                    >
                      {service.tag}
                    </div>
                    {/* Number Badge */}
                    <span className="font-mono text-[10px] sm:text-xs text-gray-500 font-semibold tracking-wider">
                      #{service.num}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase block mb-0.5 ${
                      isRed ? "text-red-400" : "text-blue-400"
                    }`}
                  >
                    {service.label}
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-white mb-2 sm:mb-3">
                    {service.name}
                  </h4>
                </div>

                <div className="pt-2.5 border-t border-gray-800 flex justify-between items-baseline">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-light">เริ่มต้น</span>
                  <p
                    className={`text-lg sm:text-xl md:text-2xl font-bold font-serif ${
                      isRed ? "text-red-400" : "text-blue-400"
                    }`}
                  >
                    {service.price} <span className="text-xs font-sans text-gray-400 font-normal">฿</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4.5 MINIMAL BARBER & EDITORIAL HAIRSTYLE LOOKBOOK (VERTICAL FEED) */}
      <section id="lookbook" className="py-24 px-4 max-w-5xl mx-auto border-t border-neutral-800 text-white font-sans">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="font-mono text-[11px] tracking-[0.35em] text-neutral-400 uppercase">
            Editorial Lookbook
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] font-serif text-white uppercase">
            HAIRSTYLE COLLECTION
          </h3>
          <div className="w-12 h-[1px] bg-neutral-600 mx-auto my-4"></div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            คู่มือทรงผมสำหรับลูกค้า สไตล์ Minimal & Editorial เรียงแนวตั้งเพื่อความชัดเจนของรูปหน้าและเส้นผม
          </p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-[65px] z-40 bg-[#0b0e14]/95 backdrop-blur-md border-y border-neutral-800 py-3 mb-16 shadow-lg">
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
                className="text-xs font-mono tracking-wider px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-400 hover:bg-neutral-900 text-neutral-300 transition duration-200 whitespace-nowrap active:scale-95"
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
              {/* Block Header: Index & Title */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 gap-2">
                <div>
                  <span className="font-mono text-xs text-neutral-500 tracking-[0.25em] block mb-1">
                    {item.num} / HAIRSTYLE
                  </span>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.15em] text-white font-serif uppercase group-hover:text-neutral-300 transition duration-300">
                    {item.title}
                  </h4>
                </div>
                <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
                  {item.file}
                </span>
              </div>

              {/* Full Width Editorial Image */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition duration-700 ease-out"
                  priority={item.id === "twoblock"}
                />
              </div>

              {/* Specs Grid (3 Columns Layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0e121a]/80 p-5 rounded-xl border border-neutral-800/80 backdrop-blur-sm">
                <div className="border-l-2 border-neutral-700 pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                    ความยาว (LENGTH)
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.length}
                  </p>
                </div>

                <div className="border-l-2 border-neutral-700 pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                    ระดับ FADE
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.fade}
                  </p>
                </div>

                <div className="border-l-2 border-neutral-700 pl-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                    สภาพเส้นผม (HAIR TYPE)
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-white font-medium">
                    {item.hairType}
                  </p>
                </div>
              </div>

              {/* Action Link to LINE */}
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

      {/* 5. SHOP VIEW SECTION */}
      <section id="shop-view" className="py-20 md:py-24 bg-[#080b10] px-4 border-y border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase block mb-2">
              ― SHOP GALLERY ―
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif">
              บรรยากาศและมุมต่าง ๆ ภายในร้าน
            </h2>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm max-w-md mx-auto font-light">
              สัมผัสความคลาสสิก อุปกรณ์ตัดผมดั้งเดิม และบรรยากาศที่เป็นกันเองของร้านพันธ์บาร์เบอร์
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* View 1: Main Station */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden relative border border-gray-800 shadow-2xl group">
              <Image
                src="/watermarked_img_3988630376005458443.jpg"
                alt="โซนกระจกและบรรยากาศภายในร้านพันธ์บาร์เบอร์"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 uppercase tracking-widest block mb-0.5">
                    BARBER STATION
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                    โซนกระจกและบรรยากาศภายในร้าน
                  </p>
                  <p className="text-gray-300 text-xs font-light mt-0.5">
                    บรรยากาศอบอุ่น เป็นกันเอง ปรึกษาทรงผมได้สบาย ๆ
                  </p>
                </div>
              </div>
            </div>

            {/* View 2: Classic Chair & Clippers (view_3.jpg) */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden relative border border-gray-800 shadow-2xl group">
              <Image
                src="/view_3.jpg"
                alt="เก้าอี้บาร์เบอร์คลาสสิกสีแดงและอุปกรณ์ปัตตาเลี่ยน"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-red-400 uppercase tracking-widest block mb-0.5">
                    CLASSIC BARBER CHAIR & TOOLS
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                    เก้าอี้บาร์เบอร์สีแดงดั้งเดิม & ปัตตาเลี่ยนคู่ใจ
                  </p>
                  <p className="text-gray-300 text-xs font-light mt-0.5">
                    มุมตัดผมพร้อมอุปกรณ์ปัตตาเลี่ยนเรียงราย ใส่ใจพิถีพิถันทุกขั้นตอน
                  </p>
                </div>
              </div>
            </div>

            {/* View 3: Brick Wall Art Decoration (view_2.jpg) */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden relative border border-gray-800 shadow-2xl group">
              <Image
                src="/view_2.jpg"
                alt="มุมตกแต่งผนังอิฐและกรอบรูปอนิเมะคลาสสิก"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-0.5">
                    STORE DECORATION & ART
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                    มุมตกแต่งผนังอิฐ & สตรีทอนิเมะสไตล์เท่
                  </p>
                  <p className="text-gray-300 text-xs font-light mt-0.5">
                    เติมเต็มกลิ่นอายความสตรีทคลาสสิกด้วยงานศิลปะแนวป๊อปคัลเจอร์บนผนังอิฐ
                  </p>
                </div>
              </div>
            </div>

            {/* View 4: Front View */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden relative border border-gray-800 shadow-2xl group">
              <Image
                src="/image_926161.jpg"
                alt="วิวหน้าร้านพันธ์บาร์เบอร์"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    FRONT STORE VIEW
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                    หน้าร้านและมุมต้อนรับลูกค้า
                  </p>
                  <p className="text-gray-300 text-xs font-light mt-0.5">
                    พร้อมต้อนรับลูกค้าทุกท่านด้วยความยิ้มแย้มและบริการที่เป็นมิตร
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LINE CHATBOT QR CODE SECTION */}
      <section id="line-chatbot" className="py-20 md:py-24 bg-gradient-to-b from-[#0d121d] via-[#101928] to-[#0d121d] px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#131d2b] to-[#0a111a] rounded-3xl border border-emerald-500/40 p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)] grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 border border-emerald-500/50 px-3.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LINE Official & Chatbot
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
                แชทสอบถามข้อมูลผ่าน <span className="text-emerald-400">LINE Chatbot</span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
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

            {/* QR Code Container (Clickable) */}
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center pt-2 md:pt-0 group cursor-pointer"
            >
              <div className="relative p-4 sm:p-5 bg-white rounded-3xl shadow-2xl border-4 border-emerald-500/60 group-hover:scale-105 transition duration-300">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
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

      {/* 7. LOCATION & CONTACT */}
      <section id="location" className="py-20 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase block mb-2">
                ― FIND US ―
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif">
                ที่ตั้งและการติดต่อ
              </h2>
            </div>

            <div className="bg-gradient-to-b from-[#131926] to-[#0d121d] p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/10 to-blue-600/10 rounded-bl-full pointer-events-none"></div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase block mb-1">
                  STORE ADDRESS
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-serif text-white mb-2">
                  พันธ์ บาร์เบอร์ (PHAN BARBER)
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  6PPJ+597 ตำบลท่ามะเขือ
                  <br />
                  อำเภอคลองขลุง จังหวัดกำแพงเพชร
                </p>

                {/* Shop Photo Card */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-gray-800 shadow-md group">
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

              <div className="pt-5 border-t border-gray-800 space-y-3.5">
                <a
                  href="tel:0898599742"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-red-400 transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/50 flex items-center justify-center font-mono text-xs font-bold text-red-400 group-hover:border-red-400 group-hover:scale-105 transition duration-300">
                    TEL
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block font-mono">PHONE NUMBER</span>
                    <span className="font-mono text-xs sm:text-sm text-gray-200 group-hover:text-red-400 transition">089-859-9742</span>
                  </div>
                </a>

                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-emerald-400 transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-400 group-hover:scale-105 transition duration-300">
                    LINE
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block font-mono">LINE CHATBOT</span>
                    <span className="text-xs sm:text-sm text-gray-200 group-hover:text-emerald-400 transition">แอดไลน์ https://lin.ee/nDC9CYG</span>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/phanth.singh.wi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm sm:text-base hover:text-blue-400 transition group w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/50 flex items-center justify-center font-mono text-xs font-bold text-blue-400 group-hover:border-blue-400 group-hover:scale-105 transition duration-300">
                    FB
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block font-mono">FACEBOOK PAGE</span>
                    <span className="text-xs sm:text-sm text-gray-200 group-hover:text-blue-400 transition">พันธ์ บาร์เบอร์</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed & Open in Google Maps Link */}
          <div className="space-y-4">
            <div className="h-[360px] sm:h-[420px] bg-[#0d121d] rounded-2xl border border-gray-800 overflow-hidden relative shadow-2xl">
              <iframe
                title="Phan Barber Google Maps Location"
                src="https://maps.google.com/maps?q=16.2353408,99.7308583&hl=th&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) opacity(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/hLDXYvqb8BShwz9P7"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-gradient-to-r from-red-600 via-emerald-600  hover:opacity-95 text-white rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition duration-300 shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>📍</span> เปิดนำทางด้วย Google Maps (คลิกเพื่อดูหมุดร้าน) ➔
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#080b10] py-12 sm:py-16 border-t border-gray-900 text-center px-4">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="flex justify-center items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-red-500">
              <Image src="/logo.jpg" alt="Phan Barber Logo" fill className="object-cover" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-[0.18em] text-white uppercase font-serif">
              Phan <span className="text-red-500">Barber</span>
            </h4>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto font-light">
            ตัดผมชาย • ดูแลสไตล์ • ประสบการณ์ยาวนานกว่า 25 ปี
          </p>
          <p className="text-gray-500 text-[11px] font-mono">
            ตำบลท่ามะเขือ อำเภอคลองขลุง จังหวัดกำแพงเพชร
          </p>
          <div className="w-28 h-[2px] bg-gradient-to-r from-red-600 via-white to-blue-600 mx-auto py-0 my-3 opacity-80"></div>
          <p className="text-gray-600 text-[11px] font-mono">
            © 2026 PHAN BARBER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}