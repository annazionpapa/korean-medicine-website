import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { healthArticles } from "@/data/health-info";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return healthArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = healthArticles.find((a) => a.slug === slug);
  if (!article) return { title: "건강 칼럼 | 수한의원" };
  return {
    title: `${article.title} | 수한의원 건강 칼럼`,
    description: article.summary,
  };
}

export default async function HealthArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = healthArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  /* 관련 글 (같은 카테고리, 현재 글 제외, 최대 3개) */
  const relatedArticles = healthArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  /* 마크다운을 간단히 HTML로 변환 (## 제목, **볼드**, > 인용, - 목록, 빈 줄) */
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
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-cream-warm">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Link
              href="/health-info"
              className="inline-flex items-center text-sm text-forest font-medium mb-6 hover:underline anim-fade-up"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              건강 칼럼 목록
            </Link>
            <div className="flex items-center gap-2 mb-4 anim-fade-up anim-fade-up-d1">
              <span className="px-2.5 py-1 bg-forest/10 text-forest text-xs rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-sm text-ink-faint">{article.date}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-ink leading-snug anim-fade-up anim-fade-up-d2">
              {article.title}
            </h1>
            <p className="mt-4 text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d3">
              {article.summary}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-cream">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <ScrollReveal>
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: renderContent(article.content) }}
              />
            </ScrollReveal>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-sand">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-forest/5 text-forest text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <ScrollReveal>
              <div className="mt-10 bg-forest/[0.03] rounded-2xl p-6 lg:p-8 text-center">
                <p className="text-lg font-serif font-semibold text-ink">
                  궁금한 점이 있으시면 상담받아 보세요
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  증상에 맞는 맞춤 치료 계획을 안내해 드립니다.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
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

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-serif font-semibold text-ink mb-5">
                  관련 글
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedArticles.map((ra) => (
                    <Link
                      key={ra.slug}
                      href={`/health-info/${ra.slug}`}
                      className="p-4 bg-white rounded-xl border border-sand-dark hover:border-forest/30 transition-colors group"
                    >
                      <span className="text-xs text-forest font-medium">{ra.category}</span>
                      <p className="mt-1 text-sm font-medium text-ink group-hover:text-forest transition-colors line-clamp-2">
                        {ra.title}
                      </p>
                      <p className="mt-1 text-xs text-ink-faint">{ra.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
