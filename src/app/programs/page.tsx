"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { programs, treatmentProcess } from "@/data/programs";
import { getFaqsByProgram } from "@/data/faq";
import Accordion from "@/components/Accordion";

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Programs
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                진료 안내
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                각 분야별 전문 치료로 당신의 건강을 지켜드립니다.
                체질과 증상에 따른 맞춤 치료 프로그램을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
            {programs.map((program, idx) => (
              <ScrollReveal key={program.id}>
                <div
                  id={program.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    idx % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                      <Image
                        src={program.image}
                        alt={`${program.title} - ${program.titleEn}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-sm text-forest font-medium tracking-wider">
                      {program.titleEn}
                    </span>
                    <h2 className="mt-2 text-2xl lg:text-3xl font-serif font-semibold text-ink">
                      {program.title}
                    </h2>
                    <div className="w-10 h-[2px] bg-gold mt-4 mb-5" />
                    <p className="text-ink-muted leading-relaxed">{program.description}</p>

                    {/* Details */}
                    <div className="mt-6 space-y-3">
                      {program.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm text-ink-light">{detail}</p>
                        </div>
                      ))}
                    </div>

                    {/* Symptoms Tags */}
                    <div className="mt-6">
                      <p className="text-xs text-ink-faint mb-2 font-medium uppercase tracking-wider">주요 치료 대상</p>
                      <div className="flex flex-wrap gap-2">
                        {program.symptoms.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1.5 bg-forest/5 text-forest text-sm rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center px-6 py-3 bg-forest text-white rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
                    >
                      상담 예약하기
                    </Link>
                  </div>
                </div>

                {/* 관련 FAQ */}
                {(() => {
                  const programFaqs = getFaqsByProgram(program.id);
                  if (programFaqs.length === 0) return null;
                  return (
                    <div className="mt-10 bg-forest/[0.03] rounded-2xl p-6">
                      <h3 className="text-sm font-semibold text-forest mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {program.title} 관련 자주 묻는 질문
                      </h3>
                      <Accordion
                        items={programFaqs.map((f) => ({
                          title: f.question,
                          content: f.answer,
                        }))}
                      />
                    </div>
                  );
                })()}

                {idx < programs.length - 1 && (
                  <div className="divider-natural mt-16" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 lg:py-28 bg-sand-light">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-sm text-forest font-medium tracking-widest uppercase">
                  Process
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
                  치료 과정
                </h2>
              </div>
            </ScrollReveal>

            {/* Desktop: 가로 5칸 카드 */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-6">
              {treatmentProcess.map((step, i) => (
                <ScrollReveal key={step.step} delay={Math.min(i + 1, 5)}>
                  <div className="bg-white rounded-2xl p-6 text-center border border-sand-dark h-full">
                    <div className="w-14 h-14 mx-auto rounded-full bg-forest/10 flex items-center justify-center">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <span className="text-xs text-forest font-semibold tracking-wider mt-3 block">
                      STEP {step.step}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile/Tablet: 타임라인 카드 */}
            <div className="lg:hidden max-w-md mx-auto">
              {treatmentProcess.map((step, i) => (
                <ScrollReveal key={step.step} delay={Math.min(i + 1, 3)}>
                  <div className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-forest/20 flex items-center justify-center flex-shrink-0 relative z-10">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      {i < treatmentProcess.length - 1 && (
                        <div className="w-px flex-1 bg-forest/15 my-1" />
                      )}
                    </div>
                    <div className={`flex-1 bg-white rounded-xl border border-sand-dark p-4 ${i < treatmentProcess.length - 1 ? "mb-4" : ""}`}>
                      <span className="text-xs text-forest font-semibold tracking-wider">
                        STEP {step.step}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-forest">
          <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white">
              어떤 치료가 필요한지 모르겠다면?
            </h2>
            <p className="mt-4 text-white/60">
              먼저 상담을 받아보세요. 증상에 맞는 최적의 치료 계획을 안내해 드립니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-forest rounded-full font-medium hover:bg-cream transition-colors"
              >
                무료 상담 신청
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
