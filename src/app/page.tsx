"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/programs";
import { doctors, stats } from "@/data/doctors";
import { reviews } from "@/data/reviews";
import { treatmentProcess } from "@/data/programs";

/* ════════════════════════════════════
   수한의원 메인 페이지
   Natural Grain 컨셉 - 자연의 결
   ════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <PhilosophySection />
        <ProgramsSection />
        <ProcessSection />
        <DoctorsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-warm via-cream to-cream" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-forest/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-herb/5 blur-3xl" />

      {/* Traditional pattern overlay (subtle dots) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #2D5A27 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="anim-fade-up">
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-medium rounded-full mb-6">
                30년 전통 한방 진료
              </span>
            </div>

            <h1 className="anim-fade-up anim-fade-up-d1">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-ink leading-tight">
                자연이 치유하는
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-forest leading-tight mt-2">
                맞춤 한방 진료
              </span>
            </h1>

            <p className="anim-fade-up anim-fade-up-d2 mt-6 text-base lg:text-lg text-ink-muted leading-relaxed max-w-lg">
              몸이 보내는 신호에 귀 기울이고,
              <br />
              자연의 원리로 균형을 되찾아 드립니다.
              <br />
              당신만을 위한 1:1 맞춤 진료를 경험하세요.
            </p>

            <div className="anim-fade-up anim-fade-up-d3 mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-forest text-white rounded-full font-medium hover:bg-forest-dark transition-all duration-300 shadow-lg shadow-forest/20"
              >
                상담 예약하기
              </Link>
              <Link
                href="/programs"
                className="px-7 py-3.5 border border-ink/15 text-ink rounded-full font-medium hover:border-forest hover:text-forest transition-all duration-300"
              >
                진료 안내
              </Link>
            </div>

            {/* Mini Trust */}
            <div className="anim-fade-up anim-fade-up-d4 mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-sand border-2 border-cream flex items-center justify-center text-xs text-ink-muted"
                    >
                      {["김", "이", "박", "최"][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-forest font-semibold">5만+</span>
                  <span className="text-ink-muted ml-1">누적 진료</span>
                </div>
              </div>
              <div className="h-5 w-px bg-sand-dark" />
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-ink-muted">만족도 98%</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative anim-fade anim-fade-d1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-interior.jpg"
                alt="김수현 원장 - 환자 맥진 상담 장면"
                fill
                className="object-cover"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade anim-fade-d2">
        <span className="text-xs text-ink-muted tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-muted to-transparent" />
      </div>
    </section>
  );
}

/* ── Stats Bar ── */
function StatsBar() {
  return (
    <section className="relative py-6 bg-forest">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/15" : ""
              }`}
            >
              <p className="text-2xl lg:text-3xl font-bold text-white font-serif">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-xs lg:text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Philosophy Section ── */
function PhilosophySection() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/herbal-medicine.jpg"
                  alt="전통 한약재와 약탕기 - 정성스러운 한약 조제"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-forest/30 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-gold/30 rounded-bl-2xl" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <span className="text-sm text-forest font-medium tracking-widest uppercase">
              Our Philosophy
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink leading-snug">
              몸이 스스로 낫는 힘,
              <br />
              <span className="text-forest">자연치유력</span>을 깨웁니다
            </h2>
            <div className="w-12 h-[2px] bg-gold mt-6 mb-6" />
            <p className="text-ink-muted leading-relaxed">
              한의학은 4천 년의 지혜를 담고 있습니다. 우리 몸에는 스스로를 치유하는
              놀라운 힘이 있으며, 수한의원은 그 자연치유력을 최대한 끌어올리는 것을
              치료의 근본으로 삼습니다.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              증상만 억누르는 것이 아니라, 몸의 균형이 무너진 <strong className="text-ink">근본 원인</strong>을
              찾아 체질과 상태에 맞는 맞춤 치료를 제공합니다.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "맞춤 진료", desc: "체질별 1:1 맞춤" },
                { icon: "🌿", title: "자연 치유", desc: "부작용 없는 치료" },
                { icon: "🔬", title: "정밀 진단", desc: "한·양방 협진" },
                { icon: "💚", title: "사후 관리", desc: "치료 후 관리까지" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/60">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Programs Section ── */
function ProgramsSection() {
  return (
    <section className="py-20 lg:py-32 bg-sand-light">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm text-forest font-medium tracking-widest uppercase">
              Programs
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
              진료 안내
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              각 분야별 전문 치료로 당신의 건강을 지켜드립니다
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} delay={Math.min(i + 1, 6)}>
              <Link
                href="/programs"
                className="card-natural p-6 lg:p-7 block group h-full"
              >
                <span className="text-3xl">{program.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-forest transition-colors">
                  {program.title}
                </h3>
                <p className="text-xs text-ink-faint font-display mt-0.5">
                  {program.titleEn}
                </p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {program.symptoms.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-forest/5 text-forest text-xs rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center text-forest text-sm font-medium">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process Section ── */
function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm text-forest font-medium tracking-widest uppercase">
              Treatment Process
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
              치료 과정
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              상담부터 치료 후 관리까지, 체계적인 5단계 진료 프로세스
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-sand-dark" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {treatmentProcess.map((step, i) => (
              <ScrollReveal key={step.step} delay={Math.min(i + 1, 5)}>
                <div className="text-center relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-forest/20 flex items-center justify-center relative z-10">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs text-forest font-semibold tracking-wider">
                      STEP {step.step}
                    </span>
                    <h3 className="mt-1.5 text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Doctors Section ── */
function DoctorsSection() {
  return (
    <section className="py-20 lg:py-32 bg-forest/[0.03]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm text-forest font-medium tracking-widest uppercase">
              Our Doctors
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
              의료진 소개
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              풍부한 경험과 따뜻한 마음으로 진료합니다
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, i) => (
            <ScrollReveal key={doctor.id} delay={i + 1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-sand-dark hover:shadow-lg hover:shadow-forest/5 transition-all duration-300">
                {/* Profile Image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} ${doctor.title} 프로필`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Activity Images Strip */}
                <div className="grid grid-cols-2 gap-px bg-sand-dark">
                  {doctor.actionImages.map((img, j) => (
                    <div
                      key={j}
                      className="aspect-[16/10] relative overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-forest/10 text-forest text-xs font-medium rounded-full">
                      {doctor.title}
                    </span>
                    <span className="text-xs text-ink-faint">{doctor.specialty}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-ink">
                    {doctor.name}
                    <span className="text-sm font-display text-ink-faint ml-2">
                      {doctor.nameEn}
                    </span>
                  </h3>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed italic">
                    &ldquo;{doctor.greeting}&rdquo;
                  </p>

                  <div className="mt-5 space-y-1.5">
                    {doctor.career.slice(0, 3).map((item) => (
                      <p key={item} className="text-xs text-ink-muted flex items-start gap-2">
                        <span className="text-forest mt-0.5">·</span>
                        {item}
                      </p>
                    ))}
                  </div>

                  <Link
                    href="/doctors"
                    className="mt-5 inline-flex items-center text-forest text-sm font-medium group"
                  >
                    자세히 보기
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reviews Section ── */
function ReviewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-sm text-forest font-medium tracking-widest uppercase">
                Reviews
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
                치료 후기
              </h2>
            </div>
            <Link
              href="/reviews"
              className="hidden sm:flex items-center text-forest text-sm font-medium group"
            >
              전체 후기 보기
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, 6).map((review, i) => (
            <ScrollReveal key={review.id} delay={Math.min(i + 1, 6)}>
              <div className="card-natural p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Highlight */}
                <p className="text-base font-semibold text-ink mb-2">
                  &ldquo;{review.highlight}&rdquo;
                </p>

                {/* Content */}
                <p className="text-sm text-ink-muted leading-relaxed flex-1">
                  {review.content}
                </p>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-sand flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-ink">{review.name}</p>
                    <p className="text-xs text-ink-faint">{review.age} · {review.treatment}</p>
                  </div>
                  <span className="text-xs text-ink-faint">{review.date}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/reviews"
            className="inline-flex items-center text-forest text-sm font-medium"
          >
            전체 후기 보기
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white leading-snug">
            건강한 내일을 위한
            <br />
            첫 걸음을 함께 하겠습니다
          </h2>
          <p className="mt-5 text-white/70 max-w-lg mx-auto leading-relaxed">
            증상이 가벼울 때 치료를 시작하면 더 빠르게 회복할 수 있습니다.
            편하게 상담받아 보세요.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-1234-5678"
              className="px-7 py-3.5 bg-white text-forest rounded-full font-medium hover:bg-cream transition-colors"
            >
              02-1234-5678 전화 상담
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              온라인 상담 예약
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/40">
            평일 09:30 - 19:00 · 토 09:30 - 15:00 · 일·공휴일 휴진
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
