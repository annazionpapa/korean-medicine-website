"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Our Doctors
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                의료진 소개
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                풍부한 경험과 따뜻한 마음으로 환자 한 분 한 분을 정성껏 진료합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Profiles */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-20">
            {doctors.map((doctor, idx) => (
              <ScrollReveal key={doctor.id}>
                <div className={`grid lg:grid-cols-5 gap-10 lg:gap-16 items-start`}>
                  {/* Image */}
                  <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-forest/5 to-sand overflow-hidden relative sticky top-28">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-28 h-28 rounded-full bg-forest/10 flex items-center justify-center">
                          <span className="text-5xl">👨‍⚕️</span>
                        </div>
                        <p className="text-sm text-ink-muted mt-4">프로필 사진</p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-3 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-forest/10 text-forest text-sm font-medium rounded-full">
                        {doctor.title}
                      </span>
                      <span className="text-sm text-ink-faint">{doctor.specialty}</span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-ink">
                      {doctor.name}
                      <span className="text-lg font-display text-ink-faint ml-3">
                        {doctor.nameEn}
                      </span>
                    </h2>

                    {/* Greeting */}
                    <div className="mt-6 p-6 bg-forest/5 rounded-2xl border-l-4 border-forest">
                      <p className="text-ink-light leading-relaxed italic">
                        &ldquo;{doctor.greeting}&rdquo;
                      </p>
                    </div>

                    {/* Education */}
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
                        학력
                      </h3>
                      <div className="space-y-2">
                        {doctor.education.map((item) => (
                          <p key={item} className="text-sm text-ink-muted flex items-start gap-2">
                            <span className="text-forest mt-0.5">·</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Career */}
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
                        경력 및 활동
                      </h3>
                      <div className="space-y-2">
                        {doctor.career.map((item) => (
                          <p key={item} className="text-sm text-ink-muted flex items-start gap-2">
                            <span className="text-forest mt-0.5">·</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
                        자격 및 인증
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-3 py-1.5 bg-gold/10 text-herb text-sm rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center px-6 py-3 bg-forest text-white rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
                    >
                      {doctor.name} 원장 상담 예약
                    </Link>
                  </div>
                </div>

                {idx < doctors.length - 1 && (
                  <div className="divider-natural mt-20" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-forest">
          <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white">
              궁금한 점이 있으시면 편하게 문의하세요
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-forest rounded-full font-medium hover:bg-cream transition-colors"
              >
                상담 예약하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="px-7 py-3.5 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
