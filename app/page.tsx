"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Kontakt Technology</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-[#6366F1] transition">Haqqımızda</a>
              <a href="#services" className="text-gray-600 hover:text-[#6366F1] transition">Xidmətlər</a>
              <a href="#contact" className="text-gray-600 hover:text-[#6366F1] transition">Əlaqə</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:*1234" className="text-gray-600 hover:text-[#6366F1]">
                <span className="font-mono font-bold">*1234</span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                İndi Qoşul
              </a>
            </div>

            <button className="lg:hidden text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-gray-600 py-2">Haqqımızda</a>
                <a href="#services" className="text-gray-600 py-2">Xidmətlər</a>
                <a href="#contact" className="text-gray-600 py-2">Əlaqə</a>
                <a href="#contact" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-xl font-medium text-center">İndi Qoşul</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Pricing */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
            alt="İnternetdən istifadə edən insanlar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Evinizə<br />
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Sürətli İnternet</span><br />
                Gətirin
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Fiber optik texnologiya ilə limitsiz internet. Ailənizdə hər kəs eyni anda rahat istifadə etsin.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">1 Gbps</div>
                  <div className="text-gray-500 text-sm">Max Sürət</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-500 text-sm">Uptime</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">7/24</div>
                  <div className="text-gray-500 text-sm">Dəstək</div>
                </div>
              </div>
            </div>

            {/* Right - Pricing Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 max-w-sm w-full">
                <div className="text-center mb-6">
                  <span className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Ev İnterneti
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">25</span>
                    <span className="text-gray-500 text-lg">₼/ay</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Yüksək sürətli fiber optik",
                    "Limitsiz trafik",
                    "Pulsuz WiFi 6 modem",
                    "7/24 texniki dəstək",
                    "Pulsuz quraşdırma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  İndi Qoşul
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Images */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Niyə <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Kontakt</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Müasir texnologiya və keyfiyyətli xidmət ilə internet təcrübənizi yeni səviyyəyə qaldırırıq
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Large */}
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-80 group">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
                alt="Fiber optik kabel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ultra Sürətli Fiber Optik</h3>
                <p className="text-gray-300">1 Gbps-ə qədər yükləmə sürəti ilə gecikməsiz internet təcrübəsi</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070"
                alt="WiFi Router"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">WiFi 6 Modem</h3>
                <p className="text-gray-300 text-sm">Ən son nəsil router pulsuz</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070"
                alt="Təhlükəsizlik"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Tam Təhlükəsizlik</h3>
                <p className="text-gray-300 text-sm">DDoS müdafiəsi daxildir</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                alt="Müştəri dəstəyi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">7/24 Dəstək</h3>
                <p className="text-gray-300 text-sm">Həmişə sizinləyik</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070"
                alt="Quraşdırma"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Pulsuz Quraşdırma</h3>
                <p className="text-gray-300 text-sm">Professional komanda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Team Image */}
      <section id="about" className="py-24 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Kontakt Technology komandası"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl p-6 shadow-2xl shadow-purple-500/30">
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-purple-100">İllik Təcrübə</div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sizinlə <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Birlikdə</span> Böyüyürük
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                2019-cü ildən bəri Azərbaycanda fiber optik internet xidməti göstərən Kontakt Technology, müasir infrastruktur və 50+ nəfərlik peşəkar komanda ilə 10,000+ ev və biznesə keyfiyyətli internet təqdim edir.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">10,000+</div>
                  <div className="text-gray-500">Aktiv Müştəri</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">99.9%</div>
                  <div className="text-gray-500">Uptime</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">50+</div>
                  <div className="text-gray-500">Mühəndis</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-gray-500">Dəstək</div>
                </div>
              </div>

              <a href="#contact" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Bizimlə Əlaqə
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bizimlə <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Əlaqə</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Qoşulmaq və ya suallarınız üçün bizimlə əlaqə saxlayın
              </p>

              <div className="space-y-6 mb-10">
                <a href="tel:+994501234567" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#6366F1] group-hover:to-[#8B5CF6] transition-all">
                    <svg className="w-6 h-6 text-[#6366F1] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Telefon</div>
                    <div className="text-xl font-semibold text-gray-900">+994 50 123 45 67</div>
                  </div>
                </a>

                <a href="mailto:info@kontakt.az" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#6366F1] group-hover:to-[#8B5CF6] transition-all">
                    <svg className="w-6 h-6 text-[#6366F1] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Email</div>
                    <div className="text-xl font-semibold text-gray-900">info@kontakt.az</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Ünvan</div>
                    <div className="text-xl font-semibold text-gray-900">Bakı, Azadlıq pr. 15</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder with image */}
              {/* <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
                  alt="Xəritə"
                  fill
                  className="object-cover"
                />

              </div> */}
            </div>

            {/* Form */}
            <div className="bg-[#FAFBFC] rounded-3xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Müraciət Formu</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 transition text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 transition text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ünvan"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 transition text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Qeyd (istəyə bağlı)"
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 transition text-gray-900 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Göndər
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Kontakt</span>
              </div>
              <p className="text-gray-400">Evinizə sürətli internet gətirin</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Xidmətlər</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Ev İnterneti</a></li>
                <li><a href="#" className="hover:text-white transition">Fiber Optik</a></li>
                <li><a href="#" className="hover:text-white transition">WiFi Modem</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Şirkət</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">Haqqımızda</a></li>
                <li><a href="#" className="hover:text-white transition">Karyera</a></li>
                <li><a href="#contact" className="hover:text-white transition">Əlaqə</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Əlaqə</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+994 50 123 45 67</li>
                <li>info@kontakt.az</li>
                <li>Bakı, Azadlıq pr. 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 Kontakt Technology. Bütün hüquqlar qorunur.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition">Məxfilik</a>
              <a href="#" className="hover:text-white transition">Şərtlər</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
