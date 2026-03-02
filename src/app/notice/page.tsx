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

        {/* Notice List */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <div className="space-y-4">
              {notices.map((notice, i) => (
                <ScrollReveal key={notice.id} delay={Math.min(i + 1, 3)}>
                  <Link
                    href={`/notice/${notice.id}`}
                    className={`block rounded-2xl border transition-all hover:shadow-md group ${
                      notice.type === "event"
                        ? "bg-forest/[0.03] border-forest/20 hover:border-forest/40"
                        : "bg-white border-sand-dark hover:border-forest/30"
                    }`}
                  >
                    <div className="p-5 lg:p-6">
                      <div className="flex items-center gap-2 mb-2">
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
                          <span className="text-xs text-ink-faint">
                            {notice.eventPeriod}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-ink group-hover:text-forest transition-colors leading-snug">
                        {notice.title}
                      </h3>
                      <p className="mt-2 text-xs text-ink-faint">{notice.date}</p>
                    </div>
                  </Link>
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
