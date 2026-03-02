import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { notices } from "@/data/notices";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = notices.find((n) => n.id === id);
  if (!notice) return { title: "공지사항 | 수한의원" };
  return {
    title: `${notice.title} | 수한의원`,
    description: notice.title,
  };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = notices.find((n) => n.id === id);

  if (!notice) notFound();

  /* 마크다운 → HTML */
  const renderContent = (md: string) => {
    return md
      .split("\n")
      .map((line) => {
        if (line.startsWith("## "))
          return `<h2 class="text-xl font-serif font-semibold text-ink mt-8 mb-4">${line.slice(3)}</h2>`;
        if (line.startsWith("### "))
          return `<h3 class="text-lg font-semibold text-ink mt-6 mb-3">${line.slice(4)}</h3>`;
        if (line.startsWith("> "))
          return `<blockquote class="border-l-4 border-forest/30 pl-4 py-2 my-4 text-ink-muted italic">${line.slice(2)}</blockquote>`;
        if (line.startsWith("- "))
          return `<li class="ml-4 text-ink-muted">${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')}</li>`;
        if (line.trim() === "") return `<div class="h-2"></div>`;
        return `<p class="text-ink-muted leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink">$1</strong>')}</p>`;
      })
      .join("");
  };

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-cream-warm">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Link
              href="/notice"
              className="inline-flex items-center text-sm text-forest font-medium mb-6 hover:underline anim-fade-up"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              공지사항 목록
            </Link>
            <div className="flex items-center gap-2 mb-3 anim-fade-up anim-fade-up-d1">
              <span
                className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                  notice.type === "event"
                    ? "bg-gold/20 text-gold-dark"
                    : "bg-forest/10 text-forest"
                }`}
              >
                {notice.type === "event" ? "이벤트" : "공지"}
              </span>
              <span className="text-sm text-ink-faint">{notice.date}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-serif font-semibold text-ink leading-snug anim-fade-up anim-fade-up-d2">
              {notice.title}
            </h1>
            {notice.eventPeriod && (
              <p className="mt-3 text-sm text-forest font-medium anim-fade-up anim-fade-up-d3">
                기간: {notice.eventPeriod}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-cream">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <ScrollReveal>
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: renderContent(notice.content) }}
              />
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="mt-10 bg-forest/[0.03] rounded-2xl p-6 text-center">
                <p className="text-base font-serif font-semibold text-ink">
                  문의 및 예약
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:02-1234-5678"
                    className="px-6 py-3 bg-forest text-white rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
                  >
                    02-1234-5678
                  </a>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border border-ink/15 text-ink rounded-full text-sm font-medium hover:border-forest hover:text-forest transition-colors"
                  >
                    온라인 상담
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Back to list */}
            <div className="mt-8 text-center">
              <Link
                href="/notice"
                className="inline-flex items-center text-sm text-ink-muted hover:text-forest transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                목록으로 돌아가기
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
