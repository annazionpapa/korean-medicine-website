import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-warm">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <span className="text-white text-sm font-bold font-serif">水</span>
              </div>
              <span className="text-lg font-bold tracking-tight font-serif text-cream-warm">
                수한의원
              </span>
            </div>
            <p className="text-sm text-cream-dark/60 leading-relaxed mb-6">
              자연이 치유하는 맞춤 한방 진료.
              <br />
              당신의 몸이 본래의 균형을
              <br />
              되찾도록 돕겠습니다.
            </p>
            <div className="flex gap-3">
              {["instagram", "blog", "kakao"].map((sns) => (
                <a
                  key={sns}
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert(`${sns} 페이지로 이동합니다.`); }}
                  className="w-9 h-9 rounded-full border border-cream-dark/20 flex items-center justify-center text-cream-dark/50 hover:border-forest hover:text-forest transition-colors"
                >
                  <span className="text-xs uppercase">{sns[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream-warm mb-5 tracking-wider uppercase">
              진료 안내
            </h4>
            <ul className="space-y-3">
              {["통증 클리닉", "교통사고 클리닉", "내과 클리닉", "여성 클리닉", "다이어트 클리닉", "피부 클리닉"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/programs"
                      className="text-sm text-cream-dark/50 hover:text-forest transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-cream-warm mb-5 tracking-wider uppercase">
              바로가기
            </h4>
            <ul className="space-y-3">
              {[
                { label: "한의원 소개", href: "/about" },
                { label: "의료진 소개", href: "/doctors" },
                { label: "치료 후기", href: "/reviews" },
                { label: "오시는 길", href: "/contact" },
                { label: "상담 예약", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-dark/50 hover:text-forest transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-cream-warm mb-5 tracking-wider uppercase">
              연락처
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cream-dark/40 mb-1">전화</p>
                <a
                  href="tel:02-1234-5678"
                  className="text-lg font-semibold text-forest"
                >
                  02-1234-5678
                </a>
              </div>
              <div>
                <p className="text-xs text-cream-dark/40 mb-1">주소</p>
                <p className="text-sm text-cream-dark/60">
                  서울특별시 강남구 테헤란로 123
                  <br />
                  수한빌딩 2층
                </p>
              </div>
              <div>
                <p className="text-xs text-cream-dark/40 mb-1">진료시간</p>
                <div className="text-sm text-cream-dark/60 space-y-1">
                  <p>평일 09:30 - 19:00</p>
                  <p>토요일 09:30 - 15:00</p>
                  <p>일·공휴일 휴진</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-dark/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-dark/30">
            &copy; 2025 수한의원. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-cream-dark/30 hover:text-cream-dark/50 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-cream-dark/30 hover:text-cream-dark/50 transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
