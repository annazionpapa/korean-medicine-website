"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Accordion from "@/components/Accordion";
import CategoryTabs from "@/components/CategoryTabs";
import Link from "next/link";
import { useState } from "react";
import { faqs, faqCategories } from "@/data/faq";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredFaqs =
    activeCategory === "전체"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                FAQ
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                자주 묻는 질문
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                환자분들이 궁금해하시는 질문을 모았습니다.
                <br />
                더 궁금한 점은 언제든 전화로 문의해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            {/* Category Tabs */}
            <div className="mb-10">
              <CategoryTabs
                categories={faqCategories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            {/* FAQ Items */}
            <Accordion
              items={filteredFaqs.map((f) => ({
                title: f.question,
                content: f.answer,
              }))}
              allowMultiple
            />

            {/* Empty state */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 text-ink-muted">
                해당 카테고리에 등록된 질문이 없습니다.
              </div>
            )}

            {/* Contact notice */}
            <ScrollReveal>
              <div className="mt-12 bg-sand-light rounded-2xl border border-sand-dark p-6 text-center">
                <p className="text-sm text-ink-muted">
                  원하시는 답변을 찾지 못하셨나요?
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:02-1234-5678"
                    className="px-5 py-2.5 bg-forest text-white rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
                  >
                    전화 문의
                  </a>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 border border-ink/15 text-ink rounded-full text-sm font-medium hover:border-forest hover:text-forest transition-colors"
                  >
                    온라인 상담
                  </Link>
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
