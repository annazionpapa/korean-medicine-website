"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import KakaoMap from "@/components/KakaoMap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `[포트폴리오 시연용]\n\n상담 예약이 접수되었습니다.\n\n이름: ${formData.name}\n연락처: ${formData.phone}\n진료과목: ${formData.subject}\n내용: ${formData.message}\n\n빠른 시간 내에 연락드리겠습니다.`
    );
    setFormData({ name: "", phone: "", subject: "", message: "", agree: false });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Contact
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                상담 예약 & 오시는 길
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                건강에 대한 고민을 편하게 상담해 주세요.
                전화 또는 온라인으로 예약하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Info */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="text-2xl font-serif font-semibold text-ink mb-8">
                    연락처 안내
                  </h2>

                  <div className="space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ink-muted mb-1">전화 예약</p>
                        <a href="tel:02-1234-5678" className="text-xl font-semibold text-forest">
                          02-1234-5678
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ink-muted mb-1">주소</p>
                        <p className="text-base font-medium text-ink">
                          서울특별시 강남구 테헤란로 123
                        </p>
                        <p className="text-sm text-ink-muted">수한빌딩 2층</p>
                        <p className="text-xs text-ink-faint mt-1">
                          강남역 2번 출구 도보 3분
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ink-muted mb-2">진료 시간</p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between gap-8 text-sm">
                            <span className="text-ink-muted">평일</span>
                            <span className="text-ink font-medium">09:30 - 19:00</span>
                          </div>
                          <div className="flex justify-between gap-8 text-sm">
                            <span className="text-ink-muted">토요일</span>
                            <span className="text-ink font-medium">09:30 - 15:00</span>
                          </div>
                          <div className="flex justify-between gap-8 text-sm">
                            <span className="text-ink-muted">점심시간</span>
                            <span className="text-ink font-medium">13:00 - 14:00</span>
                          </div>
                          <div className="flex justify-between gap-8 text-sm">
                            <span className="text-ink-faint">일·공휴일</span>
                            <span className="text-red-500 font-medium">휴진</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-6 border-t border-sand-dark">
                      <p className="text-sm text-ink-muted mb-3">간편 상담</p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); alert("카카오톡 채널로 이동합니다."); }}
                          className="flex-1 py-3 bg-[#FEE500] text-[#3C1E1E] rounded-xl text-sm font-medium text-center"
                        >
                          카카오톡 상담
                        </a>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); alert("네이버 예약 페이지로 이동합니다."); }}
                          className="flex-1 py-3 bg-[#03C75A] text-white rounded-xl text-sm font-medium text-center"
                        >
                          네이버 예약
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <div className="bg-white rounded-2xl p-7 lg:p-10 border border-sand-dark">
                    <h2 className="text-2xl font-serif font-semibold text-ink mb-2">
                      온라인 상담 예약
                    </h2>
                    <p className="text-sm text-ink-muted mb-8">
                      아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            이름 <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="홍길동"
                            className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-cream text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-2">
                            연락처 <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="010-1234-5678"
                            className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-cream text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          진료 과목
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-cream text-ink focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                        >
                          <option value="">선택해 주세요</option>
                          <option value="통증 클리닉">통증 클리닉</option>
                          <option value="교통사고 클리닉">교통사고 클리닉</option>
                          <option value="내과 클리닉">내과 클리닉</option>
                          <option value="여성 클리닉">여성 클리닉</option>
                          <option value="다이어트 클리닉">다이어트 클리닉</option>
                          <option value="피부 클리닉">피부 클리닉</option>
                          <option value="기타/상담">기타 / 상담</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">
                          상담 내용
                        </label>
                        <textarea
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="증상이나 궁금한 점을 자유롭게 작성해 주세요."
                          className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-cream text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="agree"
                          required
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                          className="mt-1 w-4 h-4 rounded border-sand-dark text-forest focus:ring-forest"
                        />
                        <label htmlFor="agree" className="text-sm text-ink-muted">
                          개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.)
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-forest text-white rounded-xl font-medium hover:bg-forest-dark transition-colors text-base"
                      >
                        상담 예약하기
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 lg:py-28 bg-sand-light">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="text-sm text-forest font-medium tracking-widest uppercase">
                  Location
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
                  오시는 길
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden border border-sand-dark">
                <KakaoMap
                  lat={37.4979}
                  lng={127.0276}
                  level={3}
                  placeName="수한의원"
                  address="서울특별시 강남구 테헤란로 123 수한빌딩 2층"
                />
              </div>
            </ScrollReveal>

            {/* Directions */}
            <ScrollReveal>
              <div className="mt-8 grid sm:grid-cols-3 gap-5">
                <div className="bg-white rounded-xl p-5 border border-sand-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <span className="text-sm">🚇</span>
                    </div>
                    <h3 className="text-sm font-semibold text-ink">지하철</h3>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    2호선 강남역 2번 출구<br />
                    도보 약 3분
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-sand-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                      <span className="text-sm">🚌</span>
                    </div>
                    <h3 className="text-sm font-semibold text-ink">버스</h3>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    강남역 정류장 하차<br />
                    140, 144, 146, 341
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-sand-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                      <span className="text-sm">🚗</span>
                    </div>
                    <h3 className="text-sm font-semibold text-ink">자가용</h3>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    건물 내 지하주차장 이용<br />
                    진료 시 2시간 무료
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
