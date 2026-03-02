import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { pricingData, pricingNotices } from "@/data/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비급여 수가표 | 수한의원",
  description: "수한의원 비급여 진료 항목별 가격 안내. 침, 한약, 추나, 약침 등 비급여 수가를 투명하게 안내합니다.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Pricing
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                비급여 수가표
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                투명한 진료비 안내로 신뢰를 드립니다.
                <br />
                건강보험 적용 항목은 별도이며, 실제 비용은 진료 후 결정됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-5xl px-5 lg:px-8 space-y-10">
            {pricingData.map((category, idx) => (
              <ScrollReveal key={category.category} delay={Math.min(idx + 1, 3)}>
                <div className="bg-white rounded-2xl border border-sand-dark overflow-hidden">
                  {/* Category Header */}
                  <div className="px-6 py-5 bg-forest/[0.03] border-b border-sand-dark flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-lg font-semibold text-ink font-serif">
                      {category.category}
                    </h2>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-sand text-left">
                          <th className="px-6 py-3 text-xs font-semibold text-ink-faint uppercase tracking-wider">
                            항목
                          </th>
                          <th className="px-6 py-3 text-xs font-semibold text-ink-faint uppercase tracking-wider text-right">
                            가격
                          </th>
                          <th className="px-6 py-3 text-xs font-semibold text-ink-faint uppercase tracking-wider hidden sm:table-cell">
                            비고
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, i) => (
                          <tr
                            key={item.name}
                            className={`${
                              i < category.items.length - 1 ? "border-b border-sand/60" : ""
                            } hover:bg-forest/[0.02] transition-colors`}
                          >
                            <td className="px-6 py-4">
                              <p className="text-sm font-medium text-ink">{item.name}</p>
                              {item.description && (
                                <p className="text-xs text-ink-faint mt-0.5">{item.description}</p>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="text-sm font-semibold text-forest whitespace-nowrap">
                                {item.price}
                              </span>
                            </td>
                            <td className="px-6 py-4 hidden sm:table-cell">
                              {item.note && (
                                <span className="text-xs text-ink-faint">{item.note}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Notices */}
            <ScrollReveal>
              <div className="bg-sand-light rounded-2xl border border-sand-dark p-6 lg:p-8">
                <h3 className="text-base font-semibold text-ink mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  안내사항
                </h3>
                <ul className="space-y-2.5">
                  {pricingNotices.map((notice, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="text-forest mt-1 flex-shrink-0">•</span>
                      {notice}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-forest">
          <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white">
              비용이 궁금하시다면?
            </h2>
            <p className="mt-4 text-white/60">
              정확한 비용은 진료 후 안내드립니다. 부담 없이 상담받아 보세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:02-1234-5678"
                className="px-7 py-3.5 bg-white text-forest rounded-full font-medium hover:bg-cream transition-colors"
              >
                02-1234-5678 전화 문의
              </a>
              <Link
                href="/contact"
                className="px-7 py-3.5 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                온라인 상담
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
