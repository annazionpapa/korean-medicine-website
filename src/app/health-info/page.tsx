import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { healthArticles } from "@/data/health-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "건강 칼럼 | 수한의원",
  description: "수한의원 한의사가 전하는 건강 정보. 통증, 여성건강, 다이어트, 피부, 생활건강 등 유용한 한방 건강 칼럼.",
};

export default function HealthInfoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Health Info
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                건강 칼럼
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                한의사가 전하는 건강한 생활을 위한 정보와 팁.
                <br />
                체질과 증상에 맞는 관리법을 알려드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthArticles.map((article, i) => (
                <ScrollReveal key={article.slug} delay={Math.min((i % 3) + 1, 3)}>
                  <Link
                    href={`/health-info/${article.slug}`}
                    className="card-natural block group h-full overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[16/9] relative overflow-hidden rounded-t-2xl bg-sand">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-forest/5 text-forest text-xs rounded-full font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-ink-faint">{article.date}</span>
                      </div>
                      <h3 className="text-base font-semibold text-ink group-hover:text-forest transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-ink-faint"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
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
