import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수한의원 | 자연이 치유하는 맞춤 한방 진료",
  description: "30년 전통의 맞춤 한방 진료. 통증 치료, 체질 개선, 한약 처방, 침·뜸·부항·추나 전문. 당신의 몸이 본래의 균형을 되찾도록 돕겠습니다.",
  keywords: "한의원, 한방치료, 침치료, 한약, 추나요법, 부항, 체질개선, 통증치료, 교통사고치료",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "수한의원 | 자연이 치유하는 맞춤 한방 진료",
    description: "30년 전통의 맞춤 한방 진료. 통증 치료, 체질 개선, 한약 처방 전문.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
