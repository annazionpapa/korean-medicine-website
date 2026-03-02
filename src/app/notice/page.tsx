import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { notices } from "@/data/notices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항 | 수한의원",
  description: "수한의원 공지사항 및 이벤트 안내. 진료 일정 변경, 특별 이벤트 등 최신 소식을 확인하세요.",
};

export default function NoticePage() {
  // 최신순 정렬
  const sortedNotices = [...notices].sort((a, b) => {
    const dateA = new Date(a.date.replace(/년|월/g, "-").replace(/일/g, "").trim());
    const dateB = new Date(b.date.replace(/년|월/g, "-").replace(/일/g, "").trim());
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Notice
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                공지사항
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                수한의원의 최신 소식과 이벤트 안내입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Notice List - Full width with inline content */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="space-y-6">
              {sortedNotices.map((notice, i) => (
                <ScrollReveal key={notice.id} delay={Math.min(i + 1, 3)}>
                  <article
                    className={`rounded-2xl border overflow-hidden ${
                      notice.type === "event"
                        ? "bg-forest/[0.03] border-forest/20"
                        : "bg-white border-sand-dark"
                    }`}
                  >
                    {/* Header */}
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                            notice.type === "event"
                              ? "bg-gold/20 text-gold-dark"
                              : "bg-forest/10 text-forest"
                          }`}
                        >
                          {notice.type === "event" ? "이벤트" : "공지"}
                        </span>
                        {notice.isNew && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] rounded-full font-bold">
                            NEW
                          </span>
                        )}
                        {notice.eventPeriod && (
                          <span className="text-xs text-ink-faint bg-sand-light px-2.5 py-1 rounded-full">
                            📅 {notice.eventPeriod}
                          </span>
                        )}
                        <span className="text-xs text-ink-faint ml-auto">
                          {notice.date}
                        </span>
                      </div>

                      <h2 className="text-lg lg:text-xl font-semibold text-ink leading-snug">
                        {notice.title}
                      </h2>

                      {/* Summary content displayed inline */}
                      <p className="mt-4 text-[15px] text-ink-muted leading-relaxed">
                        {notice.summary}
                      </p>

                      {/* Read more link */}
                      <Link
                        href={`/notice/${notice.id}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-forest font-medium hover:text-forest-dark transition-colors group"
                      >
                        자세히 보기
                        <svg
                          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
