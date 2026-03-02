"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";
import {
  constitutionQuestions,
  constitutionResults,
  type ConstitutionResult,
} from "@/data/constitution";

type Phase = "intro" | "questions" | "result";

export default function ConstitutionTestPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ taeyang: 0, taeeum: 0, soyang: 0, soeum: 0 });
  const [result, setResult] = useState<ConstitutionResult | null>(null);

  const totalQ = constitutionQuestions.length;

  const handleAnswer = (optionScores: typeof scores) => {
    const newScores = {
      taeyang: scores.taeyang + optionScores.taeyang,
      taeeum: scores.taeeum + optionScores.taeeum,
      soyang: scores.soyang + optionScores.soyang,
      soeum: scores.soeum + optionScores.soeum,
    };
    setScores(newScores);

    if (currentQ < totalQ - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      /* 결과 산출 */
      const maxType = Object.entries(newScores).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];
      const found = constitutionResults.find((r) => r.type === maxType);
      setResult(found || constitutionResults[0]);
      setPhase("result");
    }
  };

  const restart = () => {
    setPhase("intro");
    setCurrentQ(0);
    setScores({ taeyang: 0, taeeum: 0, soyang: 0, soeum: 0 });
    setResult(null);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream-warm">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm text-forest font-medium tracking-widest uppercase anim-fade-up">
                Constitution Test
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold text-ink leading-tight anim-fade-up anim-fade-up-d1">
                사상체질 자가진단
              </h1>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed anim-fade-up anim-fade-up-d2">
                10가지 질문으로 알아보는 나의 사상체질.
                <br />
                체질에 맞는 건강 관리법을 확인해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-cream">
          <div className="mx-auto max-w-2xl px-5 lg:px-8">
            {/* Intro */}
            {phase === "intro" && (
              <ScrollReveal>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-forest/10 flex items-center justify-center mb-6">
                    <span className="text-4xl">🍃</span>
                  </div>
                  <h2 className="text-2xl font-serif font-semibold text-ink">
                    나의 사상체질 알아보기
                  </h2>
                  <p className="mt-4 text-ink-muted leading-relaxed max-w-md mx-auto">
                    사상체질은 태양인, 태음인, 소양인, 소음인의 네 가지로 분류됩니다.
                    자신의 체질을 알면 건강 관리에 큰 도움이 됩니다.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
                    {constitutionResults.map((c) => (
                      <div key={c.type} className="p-3 bg-white rounded-xl border border-sand-dark">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{c.emoji}</span>
                          <div>
                            <p className="text-sm font-semibold text-ink">{c.name}</p>
                            <p className="text-xs text-ink-faint">{c.nameHanja}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setPhase("questions")}
                    className="mt-10 px-8 py-4 bg-forest text-white rounded-full font-medium text-lg hover:bg-forest-dark transition-colors shadow-lg shadow-forest/20"
                  >
                    검사 시작하기
                  </button>

                  <p className="mt-4 text-xs text-ink-faint">
                    약 2~3분 소요 · {totalQ}문항
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Questions */}
            {phase === "questions" && (
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-forest font-medium">
                      {currentQ + 1} / {totalQ}
                    </span>
                    <span className="text-xs text-ink-faint">
                      {Math.round(((currentQ + 1) / totalQ) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-sand rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQ + 1) / totalQ) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div key={currentQ} className="anim-fade-up">
                  <h3 className="text-xl font-serif font-semibold text-ink mb-6 leading-snug">
                    Q{currentQ + 1}. {constitutionQuestions[currentQ].text}
                  </h3>

                  <div className="space-y-3">
                    {constitutionQuestions[currentQ].options.map((option, oi) => (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(option.scores)}
                        className="w-full text-left p-5 bg-white rounded-2xl border border-sand-dark hover:border-forest/40 hover:bg-forest/[0.02] transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest/20 transition-colors">
                            <span className="text-sm font-semibold text-forest">
                              {["A", "B", "C", "D"][oi]}
                            </span>
                          </div>
                          <span className="text-[15px] text-ink leading-snug">
                            {option.text}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Result */}
            {phase === "result" && result && (
              <ScrollReveal>
                <div className="text-center mb-8">
                  <div
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${result.color}15` }}
                  >
                    <span className="text-5xl">{result.emoji}</span>
                  </div>
                  <p className="text-sm text-forest font-medium mb-2">당신의 체질은</p>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-ink">
                    {result.name}
                    <span className="text-lg text-ink-muted ml-2 font-normal">
                      {result.nameHanja}
                    </span>
                  </h2>
                </div>

                <div className="bg-white rounded-2xl border border-sand-dark p-6 lg:p-8 mb-6">
                  <p className="text-ink-muted leading-relaxed">{result.description}</p>
                </div>

                {/* Details Grid */}
                <div className="space-y-4">
                  {/* 체형 & 성격 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl border border-sand-dark p-5">
                      <h4 className="text-sm font-semibold text-forest mb-2">체형 특징</h4>
                      <p className="text-sm text-ink-muted">{result.bodyType}</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-sand-dark p-5">
                      <h4 className="text-sm font-semibold text-forest mb-2">성격 특성</h4>
                      <p className="text-sm text-ink-muted">{result.personality}</p>
                    </div>
                  </div>

                  {/* 음식 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl border border-sand-dark p-5">
                      <h4 className="text-sm font-semibold text-forest mb-3 flex items-center gap-1.5">
                        <span>✅</span> 좋은 음식
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {result.goodFoods.map((f) => (
                          <span key={f} className="px-2.5 py-1 bg-forest/5 text-forest text-xs rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-sand-dark p-5">
                      <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-1.5">
                        <span>⚠️</span> 주의할 음식
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {result.badFoods.map((f) => (
                          <span key={f} className="px-2.5 py-1 bg-red-50 text-red-600 text-xs rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 건강 팁 */}
                  <div className="bg-white rounded-2xl border border-sand-dark p-5">
                    <h4 className="text-sm font-semibold text-forest mb-3">건강 관리 팁</h4>
                    <ul className="space-y-2">
                      {result.healthTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                          <span className="text-forest mt-0.5 flex-shrink-0">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Disclaimer + CTA */}
                <div className="mt-8 bg-sand-light rounded-2xl border border-sand-dark p-6 text-center">
                  <p className="text-sm text-ink-muted mb-1">
                    본 검사는 참고용이며, 정확한 체질 진단은 한의사의 진료가 필요합니다.
                  </p>
                  <p className="text-xs text-ink-faint mb-5">
                    맥진, 설진, 복진 등을 통해 보다 정확한 체질 진단이 가능합니다.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-forest text-white rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
                    >
                      정밀 체질 진단 예약
                    </Link>
                    <button
                      onClick={restart}
                      className="px-6 py-3 border border-ink/15 text-ink rounded-full text-sm font-medium hover:border-forest hover:text-forest transition-colors"
                    >
                      다시 검사하기
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
