"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                About Us
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                자연의 원리로
                <br />
                <span className="text-forest">건강을 되찾다</span>
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                수한의원은 한의학의 본질에 충실하면서도 현대인의 건강 문제에
                최적화된 치료를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/clinic-exterior.jpg"
                    alt="수한의원 외관 - 30년 전통의 한의원 건물"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl font-serif font-semibold text-ink">
                  30년, 한길을 걸어온
                  <br />
                  한방 치료의 여정
                </h2>
                <div className="w-12 h-[2px] bg-gold mt-5 mb-6" />
                <div className="space-y-4 text-ink-muted leading-relaxed">
                  <p>
                    수한의원은 1995년 개원 이래 30년 동안 한의학의 본질인
                    &apos;자연치유력&apos;에 집중하며 환자 한 분 한 분에게
                    정성을 다해왔습니다.
                  </p>
                  <p>
                    우리 몸에는 본래 스스로를 치유하는 놀라운 힘이 있습니다.
                    수한의원은 그 힘이 최대한 발휘될 수 있도록 돕는 것을
                    치료의 근본 원칙으로 삼고 있습니다.
                  </p>
                  <p>
                    전통 한의학의 지혜와 현대 의학의 진단 기술을 결합하여,
                    증상의 표면이 아닌 <strong className="text-ink">근본 원인</strong>을
                    치료합니다.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-sand-light">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-sm text-forest font-medium tracking-widest uppercase">
                  Our Values
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
                  수한의원이 소중히 여기는 가치
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🌿",
                  title: "자연치유",
                  desc: "몸의 본래 치유력을 깨워 부작용 없는 치료를 추구합니다.",
                },
                {
                  icon: "🎯",
                  title: "맞춤 진료",
                  desc: "같은 증상이라도 체질과 원인이 다릅니다. 1:1 맞춤 치료를 합니다.",
                },
                {
                  icon: "🤝",
                  title: "소통과 신뢰",
                  desc: "환자분의 이야기에 충분히 귀 기울이고, 치료 과정을 함께 공유합니다.",
                },
                {
                  icon: "📚",
                  title: "끊임없는 연구",
                  desc: "한의학의 전통을 지키면서도 최신 연구와 기술을 접목합니다.",
                },
              ].map((value, i) => (
                <ScrollReveal key={value.title} delay={i + 1}>
                  <div className="bg-white rounded-2xl p-7 text-center h-full border border-sand-dark">
                    <span className="text-4xl">{value.icon}</span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{value.title}</h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{value.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-forest">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: 30, suffix: "년+", label: "진료 경력" },
                { number: 50000, suffix: "+", label: "누적 진료" },
                { number: 98, suffix: "%", label: "환자 만족도" },
                { number: 6, suffix: "개", label: "진료 클리닉" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-white font-serif">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-sm text-forest font-medium tracking-widest uppercase">
                  Facilities
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-serif font-semibold text-ink">
                  편안한 치료 공간
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "대기실", desc: "따뜻한 원목 인테리어의 편안한 대기 공간", image: "/images/facility-waiting.jpg" },
                { title: "진료실", desc: "프라이버시가 보장되는 독립 진료실", image: "/images/facility-consultation.jpg" },
                { title: "침 치료실", desc: "청결한 개인별 침상으로 쾌적한 치료 환경", image: "/images/facility-acupuncture.jpg" },
                { title: "추나 치료실", desc: "전문 추나 치료를 위한 최적의 시설", image: "/images/facility-chuna.jpg" },
                { title: "한약 조제실", desc: "엄선된 약재로 정성껏 조제하는 공간", image: "/images/facility-pharmacy.jpg" },
                { title: "상담실", desc: "편안한 분위기에서 진행되는 1:1 상담", image: "/images/facility-counseling.jpg" },
              ].map((facility, i) => (
                <ScrollReveal key={facility.title} delay={Math.min(i + 1, 6)}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                    <Image
                      src={facility.image}
                      alt={`${facility.title} - ${facility.desc}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-base font-semibold text-white">{facility.title}</h3>
                      <p className="text-sm text-white/80 mt-0.5">{facility.desc}</p>
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
              건강에 대한 고민, 편하게 상담하세요
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
