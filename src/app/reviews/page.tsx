"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Reviews
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                치료 후기
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                수한의원에서 건강을 되찾으신 분들의 생생한 후기입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-forest">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white font-serif">98%</p>
                <p className="text-xs text-white/60 mt-1">환자 만족도</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white font-serif">4.9</p>
                <p className="text-xs text-white/60 mt-1">네이버 평점</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white font-serif">500+</p>
                <p className="text-xs text-white/60 mt-1">블로그 후기</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review, i) => (
                <ScrollReveal key={review.id} delay={Math.min((i % 3) + 1, 3)}>
                  <div className="card-natural p-6 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Treatment tag */}
                    <span className="inline-block w-fit px-2.5 py-1 bg-forest/5 text-forest text-xs rounded-full mb-3">
                      {review.treatment}
                    </span>

                    {/* Highlight */}
                    <p className="text-lg font-semibold text-ink mb-3 font-serif">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Content */}
                    <p className="text-sm text-ink-muted leading-relaxed flex-1">
                      {review.content}
                    </p>

                    {/* Author */}
                    <div className="mt-5 pt-4 border-t border-sand flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-ink">{review.name}</p>
                        <p className="text-xs text-ink-faint">{review.age}</p>
                      </div>
                      <span className="text-xs text-ink-faint">{review.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Notice */}
            <ScrollReveal>
              <div className="mt-12 p-6 bg-sand-light rounded-2xl border border-sand-dark text-center">
                <p className="text-sm text-ink-muted">
                  본 후기는 실제 환자분들의 동의를 받아 게시한 것이며,
                  개인의 치료 결과는 체질과 상태에 따라 다를 수 있습니다.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-forest">
          <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white">
              다음 후기의 주인공이 되어보세요
            </h2>
            <p className="mt-4 text-white/60">
              증상이 가벼울 때 시작하면 더 빠르게 회복할 수 있습니다
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-forest rounded-full font-medium hover:bg-cream transition-colors"
              >
                상담 예약하기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
