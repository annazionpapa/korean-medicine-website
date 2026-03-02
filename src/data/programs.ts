export interface Program {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  image: string;
  description: string;
  details: string[];
  symptoms: string[];
}

export const programs: Program[] = [
  {
    id: "pain",
    title: "통증 클리닉",
    titleEn: "Pain Clinic",
    icon: "🦴",
    image: "/images/program-pain.jpg",
    description: "허리, 목, 어깨, 무릎 등 근골격계 통증을 한방 치료로 근본적으로 개선합니다.",
    details: [
      "침·전침 치료로 통증 부위 직접 자극",
      "추나요법으로 체형 교정 및 균형 회복",
      "약침 치료로 염증 완화 및 조직 재생",
      "개인 맞춤 한약 처방으로 체질 개선",
    ],
    symptoms: ["허리 디스크", "목 디스크", "어깨 통증", "무릎 관절", "손목 터널 증후군"],
  },
  {
    id: "traffic",
    title: "교통사고 클리닉",
    titleEn: "Traffic Accident",
    icon: "🚗",
    image: "/images/program-accident.jpg",
    description: "교통사고 후유증을 한방 통합 치료로 빠르게 회복합니다. 자동차보험 적용.",
    details: [
      "사고 직후 응급 한방 치료 가능",
      "목·허리 염좌 및 근육 손상 집중 치료",
      "자동차보험 100% 적용 (본인 부담 없음)",
      "후유증 예방을 위한 체계적 관리 프로그램",
    ],
    symptoms: ["목 염좌", "허리 염좌", "두통·어지러움", "근육 경직", "불면·불안"],
  },
  {
    id: "internal",
    title: "내과 클리닉",
    titleEn: "Internal Medicine",
    icon: "🫁",
    image: "/images/program-internal.jpg",
    description: "소화기, 호흡기, 순환기 질환을 한방 내과 전문 치료로 체질부터 개선합니다.",
    details: [
      "사상체질 진단을 통한 맞춤 치료",
      "소화불량·위장 질환 한방 치료",
      "만성 기침·비염·천식 치료",
      "혈액순환 개선 및 냉증 치료",
    ],
    symptoms: ["소화불량", "역류성 식도염", "만성 비염", "냉증", "만성 피로"],
  },
  {
    id: "women",
    title: "여성 클리닉",
    titleEn: "Women's Health",
    icon: "🌸",
    image: "/images/program-women.jpg",
    description: "생리통, 갱년기, 산후조리 등 여성 특유의 건강 문제를 섬세하게 치료합니다.",
    details: [
      "생리통·생리불순 근본 치료",
      "갱년기 증상 완화 한약 처방",
      "산후조리 및 산후 보약",
      "임신 준비를 위한 한방 난임 치료",
    ],
    symptoms: ["생리통", "생리불순", "갱년기 증상", "산후 회복", "난임"],
  },
  {
    id: "diet",
    title: "다이어트 클리닉",
    titleEn: "Diet & Wellness",
    icon: "🍃",
    image: "/images/program-diet.jpg",
    description: "체질 분석에 기반한 건강한 감량. 요요 없는 한방 다이어트를 경험하세요.",
    details: [
      "사상체질별 맞춤 다이어트 한약",
      "식이요법 + 생활 습관 코칭",
      "이침(귀 침)으로 식욕 조절",
      "체성분 분석 및 주기적 모니터링",
    ],
    symptoms: ["복부 비만", "하체 비만", "산후 비만", "스트레스성 과식", "대사 저하"],
  },
  {
    id: "skin",
    title: "피부 클리닉",
    titleEn: "Dermatology",
    icon: "✨",
    image: "/images/program-skin.jpg",
    description: "아토피, 여드름, 건선 등 피부 질환을 내부 체질 개선과 함께 치료합니다.",
    details: [
      "아토피 피부염 체질 개선 치료",
      "여드름·피부 트러블 한방 치료",
      "건선·습진 면역 조절 치료",
      "미백·탄력을 위한 한방 미용침",
    ],
    symptoms: ["아토피", "여드름", "건선", "습진", "피부 건조"],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const treatmentProcess: ProcessStep[] = [
  {
    step: "01",
    title: "상담 & 접수",
    description: "증상과 병력을 꼼꼼히 청취하고 치료 방향을 상담합니다.",
    icon: "📋",
  },
  {
    step: "02",
    title: "진맥 & 진단",
    description: "맥진, 설진, 복진 등 한방 사진법과 체질 분석을 진행합니다.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "맞춤 치료",
    description: "침, 뜸, 부항, 추나, 약침 등 최적의 복합 치료를 시행합니다.",
    icon: "🏥",
  },
  {
    step: "04",
    title: "한약 처방",
    description: "체질과 증상에 맞는 개인 맞춤 한약을 처방합니다.",
    icon: "🫖",
  },
  {
    step: "05",
    title: "경과 관리",
    description: "정기적 내원으로 치료 경과를 확인하고 관리합니다.",
    icon: "📊",
  },
];
