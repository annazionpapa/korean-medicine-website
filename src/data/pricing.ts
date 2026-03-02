export interface PricingItem {
  name: string;
  price: string;
  description?: string;
  note?: string;
}

export interface PricingCategory {
  category: string;
  icon: string;
  items: PricingItem[];
}

export const pricingData: PricingCategory[] = [
  {
    category: "침 치료",
    icon: "🪡",
    items: [
      { name: "일반침 치료", price: "15,000원", description: "경혈 자극을 통한 기본 침 치료" },
      { name: "전침 치료", price: "20,000원", description: "전기 자극을 활용한 침 치료" },
      { name: "약침 치료", price: "30,000 ~ 50,000원", description: "한약 성분을 경혈에 직접 주입", note: "부위·약제에 따라 상이" },
      { name: "미용침(얼굴)", price: "50,000원", description: "안면 리프팅·탄력 개선 미용침" },
      { name: "두피침", price: "30,000원", description: "탈모 치료를 위한 두피 침 치료" },
      { name: "이침(귀침)", price: "10,000원", description: "식욕 억제·스트레스 완화 귀 침" },
    ],
  },
  {
    category: "추나요법",
    icon: "🦴",
    items: [
      { name: "추나요법 (1부위)", price: "50,000원", description: "척추·골반 등 근골격 교정", note: "건강보험 적용 시 본인부담 약 20,000원" },
      { name: "추나요법 (2부위 이상)", price: "80,000원", description: "복합 부위 추나 교정 치료" },
      { name: "도수치료", price: "60,000원", description: "도수를 활용한 근육·관절 치료" },
    ],
  },
  {
    category: "한약 처방",
    icon: "🫖",
    items: [
      { name: "일반 한약 (1개월)", price: "200,000 ~ 400,000원", description: "체질별 맞춤 한약 처방", note: "증상·처방에 따라 상이" },
      { name: "다이어트 한약 (1개월)", price: "250,000 ~ 500,000원", description: "체질별 맞춤 감량 한약" },
      { name: "보약 (1개월)", price: "200,000 ~ 350,000원", description: "면역력 강화·체력 보강 보약" },
      { name: "산후조리 한약", price: "250,000 ~ 400,000원", description: "출산 후 회복을 위한 한약" },
      { name: "공진단 (10환)", price: "200,000 ~ 500,000원", description: "프리미엄 보약", note: "사향 함유 여부에 따라 상이" },
    ],
  },
  {
    category: "뜸·부항 치료",
    icon: "🔥",
    items: [
      { name: "뜸 치료", price: "10,000원", description: "혈자리 온열 자극 치료" },
      { name: "건식 부항", price: "10,000원", description: "음압을 이용한 근육 이완" },
      { name: "습식 부항", price: "15,000원", description: "사혈을 동반한 부항 치료" },
      { name: "왕뜸 치료", price: "20,000원", description: "복부·허리 대면적 온열 치료" },
    ],
  },
  {
    category: "체질 검사·진단",
    icon: "🔍",
    items: [
      { name: "사상체질 정밀 검사", price: "50,000원", description: "체질 분석 + 맞춤 생활 가이드" },
      { name: "체성분 분석", price: "10,000원", description: "인바디 측정 + 결과 상담" },
      { name: "적외선 체열 검사", price: "30,000원", description: "체표면 온도 분포 분석" },
    ],
  },
  {
    category: "특수 치료",
    icon: "✨",
    items: [
      { name: "물리치료 (1회)", price: "10,000원", description: "전기 자극·초음파·온열 등" },
      { name: "한방 좌훈", price: "20,000원", description: "한약재 증기를 이용한 좌훈 치료" },
      { name: "한방팩 (얼굴)", price: "30,000원", description: "한약재 성분 미용 팩 시술" },
      { name: "테이핑 치료", price: "5,000원", description: "근육·관절 보조 테이핑" },
    ],
  },
];

export const pricingNotices = [
  "위 금액은 비급여 항목의 기준 가격이며, 실제 비용은 진료 후 결정됩니다.",
  "건강보험 적용 항목(침, 뜸, 부항, 추나 일부)은 본인 부담금이 별도입니다.",
  "교통사고 치료는 자동차보험 100% 적용 (본인 부담 없음)됩니다.",
  "한약 가격은 처방 내용, 약재 종류, 복용 기간에 따라 달라질 수 있습니다.",
  "자세한 비용은 진료 상담 시 안내드립니다.",
];
