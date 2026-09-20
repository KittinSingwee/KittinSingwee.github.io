"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLookbook, setSelectedLookbook] = useState<null | {
    id: number;
    title: string;
    category: string;
    description: string;
    tag: string;
    likes: string;
    img: string;
    angles: {
      front: string;
      left: string;
      right: string;
      back: string;
    };
  }>(null);
  const [activeAngle, setActiveAngle] = useState<"front" | "left" | "right" | "back">("front");

  const carouselRef = useRef<HTMLDivElement>(null);
  const lineLink = "https://lin.ee/nDC9CYG";

  const lookbookData = [
    {
      id: 1,
      title: "ทรงผมผู้ชาย Mullet",
      category: "Mullet ผมสุดเก๋ ย้อนยุค จะกลับมาฮิตอีกครั้ง!",
      description: "ทรงผม มัลเล็ต (Mullet) ผมสุดเก๋สไตล์ย้อนยุค ปล่อยยาวช่วงท้ายทอย เพิ่มความชิคและมีเอกลักษณ์ กลับมาฮิตอย่างต่อเนื่อง",
      tag: "Mullet",
      likes: "128 likes",
      img: "/image_926161.jpg",
      angles: {
        front: "/image_926161.jpg",
        left: "/watermarked_img_3988630376005458443.jpg",
        right: "/view_3.jpg",
        back: "/view_2.jpg",
      },
    },
    {
      id: 2,
      title: "ทรงผมผู้ชาย Two Block",
      category: "สไตล์หนุ่มสุภาพ แฝงความเท่ และมีเสน่ห์",
      description: "ทรงผมทูบล็อกยอดนิยม สไตล์หนุ่มสุภาพ แฝงความเท่และมีเสน่ห์ ด้านข้างไถเว้นความยาวกำลังดี ด้านบนปล่อยวอลลุ่มธรรมชาติ",
      tag: "TwoBlock",
      likes: "145 likes",
      img: "/watermarked_img_3988630376005458443.jpg",
      angles: {
        front: "/watermarked_img_3988630376005458443.jpg",
        left: "/image_926161.jpg",
        right: "/view_2.jpg",
        back: "/view_3.jpg",
      },
    },
    {
      id: 3,
      title: "ทรงผมผู้ชาย Ivy League",
      category: "ทรงผมสุดคลาสสิก เรียบร้อย ดูดีทุกวัย",
      description: "ทรงผม Ivy League สุดคลาสสิก ด้านข้างเฟดสั้น ด้านบนสไลด์สั้นปาดข้างเบาๆ ลุคสุภาพ เรียบร้อย ดูดีเหมาะกับทุกวัย",
      tag: "IvyLeague",
      likes: "162 likes",
      img: "/view_3.jpg",
      angles: {
        front: "/view_3.jpg",
        left: "/view_2.jpg",
        right: "/image_926161.jpg",
        back: "/watermarked_img_3988630376005458443.jpg",
      },
    },
    {
      id: 4,
      title: "ทรงผมผู้ชาย Slicked Back",
      category: "เซ็ตสไตล์วินเทจ",
      description: "ทรงผม Slicked Back หวีปาดหลังเซ็ตสไตล์วินเทจ เนี้ยบ คมกริบ เพิ่มความมั่นใจและลุคหล่อสมาร์ตสไตล์บาร์เบอร์คลาสสิก",
      tag: "SlickedBack",
      likes: "130 likes",
      img: "/view_2.jpg",
      angles: {
        front: "/view_2.jpg",
        left: "/view_3.jpg",
        right: "/watermarked_img_3988630376005458443.jpg",
        back: "/image_926161.jpg",
      },
    },
    {
      id: 5,
      title: "ทรงผมผู้ชาย Undercut",
      category: "หล่อเนี้ยบ",
      description: "ทรงผม Undercut ไถเปิดข้างเนียนกริบ ปรับลุคให้ดูหล่อเนี้ยบ ดูแลและเซ็ตทรงง่าย เข้ากับทุกโครงหน้า",
      tag: "Undercut",
      likes: "118 likes",
      img: "/image_926161.jpg",
      angles: {
        front: "/image_926161.jpg",
        left: "/view_2.jpg",
        right: "/view_3.jpg",
        back: "/watermarked_img_3988630376005458443.jpg",
      },
    },
    {
      id: 6,
      title: "ทรงผมผู้ชาย Skinhead Fade",
      category: "กวนๆ เท่ๆ",
      description: "ทรงผม Skinhead Fade ตัดสั้นเกลาเนียนกริบ สไตล์กวนๆ เท่ๆ เบาสบายหัว ไม่ต้องเสียเวลาเซ็ตผม",
      tag: "SkinheadFade",
      likes: "156 likes",
      img: "/watermarked_img_3988630376005458443.jpg",
      angles: {
        front: "/watermarked_img_3988630376005458443.jpg",
        left: "/view_3.jpg",
        right: "/image_926161.jpg",
        back: "/view_2.jpg",
      },
    },
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openLookbookModal = (item: typeof lookbookData[0]) => {
    setSelectedLookbook(item);
    setActiveAngle("front");
  };

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

      {/* 4.5 INSTAGRAM CAROUSEL SHOWCASE (พร้อมการดูมุมมอง 4 ด้าน) */}
      <section id="lookbook" className="py-16 px-4 max-w-6xl mx-auto border-t border-gray-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 border border-red-500/40 px-3 py-1 rounded-full bg-red-950/40 text-red-400 font-mono text-[11px] uppercase tracking-wider mb-2">
              <span>📸</span> INSTAGRAM LOOKBOOK • CLICK FOR 4-ANGLES
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
              รีวิวทรงผมลูกค้า <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">(คลิกดูมุมมอง 4 ด้าน)</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-light">
              เลื่อนสไลด์ดูทรงผม และ <span className="text-red-400 font-medium underline">คลิกที่รูป</span> เพื่อส่องดูรายละเอียดทรงผมได้ครบทั้ง 4 มุม (หน้า-ซ้าย-ขวา-หลัง)
            </p>
          </div>

          {/* Navigation Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131926] hover:border-red-500 hover:text-red-400 text-gray-300 flex items-center justify-center transition active:scale-95 shadow-md"
              aria-label="Previous Slide"
            >
              ←
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131926] hover:border-blue-500 hover:text-blue-400 text-gray-300 flex items-center justify-center transition active:scale-95 shadow-md"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Horizontal Scroll Container */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-2 pb-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth"
        >
          {lookbookData.map((item) => (
            <div
              key={item.id}
              onClick={() => openLookbookModal(item)}
              className="flex-none w-[260px] sm:w-[290px] snap-start bg-[#131926] border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/80 transition-all duration-300 shadow-xl group cursor-pointer hover:-translate-y-1"
            >
              {/* Card IG Header */}
              <div className="p-3 bg-[#0d121d] flex items-center justify-between border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-red-500">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-mono">phanbarber_official</p>
                    <p className="text-[9px] text-gray-400 font-mono">Kamphaeng Phet</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#d4af37] font-mono border border-[#d4af37]/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span>📐</span> 4 มุม
                </span>
              </div>

              {/* Card Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#080b10]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-mono">
                  #{item.tag}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="bg-red-600 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg">
                    🔍 คลิกดู 4 มุมมอง
                  </span>
                </div>
              </div>

              {/* Card Footer / Caption */}
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span className="text-red-400 font-medium">❤️ {item.likes}</span>
                  <span className="text-[10px] text-blue-400 font-bold group-hover:underline">ดู 4 ด้าน ➔</span>
                </div>
                <h4 className="text-base font-bold font-serif text-white group-hover:text-red-400 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 font-light truncate">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Tip */}
        <p className="text-center text-[11px] text-gray-500 font-mono mt-2 sm:hidden">
          👉 แตะที่รูปทรงผมเพื่อส่องดูรายละเอียดครบ 4 ด้าน (หน้า-ซ้าย-ขวา-หลัง) 👈
        </p>
      </section>

      {/* 4-ANGLE INTERACTIVE HAIRSTYLE MODAL */}
      {selectedLookbook && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#0d121d] border border-red-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLookbook(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center font-bold text-lg transition duration-200 border border-gray-700 shadow-lg"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Left Column: Image Viewer & Angle Selector */}
            <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-[#080b10] border-b md:border-b-0 md:border-r border-gray-800">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-xl mb-4 group">
                <Image
                  src={selectedLookbook.angles[activeAngle]}
                  alt={`${selectedLookbook.title} - มุม ${activeAngle}`}
                  fill
                  className="object-cover transition duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow">
                  มุม{activeAngle === "front" ? "หน้า" : activeAngle === "left" ? "ซ้าย" : activeAngle === "right" ? "ขวา" : "หลัง"}
                </div>
              </div>

              {/* Angle Switcher Buttons (4 มุม) */}
              <div className="grid grid-cols-4 gap-2 w-full">
                {[
                  { key: "front", label: "หน้า" },
                  { key: "left", label: "ซ้าย" },
                  { key: "right", label: "ขวา" },
                  { key: "back", label: "หลัง" },
                ].map((angle) => {
                  const isActive = activeAngle === angle.key;
                  return (
                    <button
                      key={angle.key}
                      onClick={() => setActiveAngle(angle.key as any)}
                      className={`py-2 px-1 rounded-xl text-xs font-mono font-bold transition duration-200 flex flex-col items-center justify-center gap-1 border ${
                        isActive
                          ? "bg-gradient-to-r from-red-600 to-blue-600 text-white border-white shadow-md scale-105"
                          : "bg-[#131926] text-gray-400 border-gray-800 hover:text-white hover:border-gray-600"
                      }`}
                    >
                      <span className="text-[10px] uppercase">มุม{angle.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Haircut Details & LINE Booking */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-red-400 bg-red-950/60 border border-red-500/40 px-3 py-1 rounded-full uppercase">
                    #{selectedLookbook.tag}
                  </span>
                  <span className="text-xs font-mono text-gray-400">❤️ {selectedLookbook.likes}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {selectedLookbook.title}
                </h3>

                <p className="text-sm font-medium text-[#d4af37]">
                  {selectedLookbook.category}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light bg-[#131926] p-4 rounded-2xl border border-gray-800">
                  {selectedLookbook.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    🔍 พรีวิวตัวอย่างมุมมอง 4 ด้าน:
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { key: "front", label: "หน้า" },
                      { key: "left", label: "ซ้าย" },
                      { key: "right", label: "ขวา" },
                      { key: "back", label: "หลัง" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        onClick={() => setActiveAngle(item.key as any)}
                        className={`relative aspect-square rounded-xl overflow-hidden border cursor-pointer ${
                          activeAngle === item.key ? "border-red-500 ring-2 ring-red-500/60 scale-105" : "border-gray-800 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={selectedLookbook.angles[item.key as keyof typeof selectedLookbook.angles]}
                          alt={item.label}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-1">
                          <span className="text-[9px] font-mono text-white font-bold">มุม{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-full font-semibold text-xs sm:text-sm text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>💬</span> สอบถามทรงนี้ผ่าน LINE
                </a>
                <button
                  onClick={() => setSelectedLookbook(null)}
                  className="px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full font-mono text-xs transition"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  6PPJ+597 ตำบลท่ามะเขือ
                  <br />
                  อำเภอคลองขลุง จังหวัดกำแพงเพชร
                </p>
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
                    <span className="text-xs sm:text-sm text-gray-200 group-hover:text-blue-400 transition">พันธ์ สิงห์วิจารย์</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[360px] sm:h-[440px] bg-[#0d121d] rounded-2xl border border-gray-800 overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-red-500/50 bg-[#0b0e14] flex items-center justify-center font-mono text-xs text-red-400">
                MAP
              </div>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xs font-light">
                พื้นที่สำหรับใส่ Google Maps Embed Code สำหรับบอกตำแหน่งร้าน
              </p>
              <a
                href="https://maps.google.com/?q=6PPJ%2B597+Khlong+Khlung+District+Kamphaeng+Phet"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-red-700 to-blue-700 border border-white/20 text-white rounded-lg text-xs font-mono tracking-wider hover:brightness-110 transition duration-300 shadow-md"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
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