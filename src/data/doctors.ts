export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  specialty: string;
  image: string;
  actionImages: { src: string; alt: string }[];
  education: string[];
  career: string[];
  certifications: string[];
  greeting: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-kim",
    name: "김수현",
    nameEn: "Suhyeon Kim",
    title: "대표원장",
    specialty: "통증·추나 전문",
    image: "/images/doctor-kim-full.jpg",
    actionImages: [
      { src: "/images/doctor-kim-action2.jpg", alt: "침 시술 중인 김수현 대표원장" },
      { src: "/images/doctor-kim-action.jpg", alt: "환자 상담 중인 김수현 대표원장" },
    ],
    education: [
      "경희대학교 한의과대학 졸업",
      "경희대학교 대학원 한방재활의학 석사",
      "경희대학교 대학원 한방재활의학 박사",
    ],
    career: [
      "前 경희대학교 한방병원 수련의",
      "前 강남 모 한방병원 진료과장",
      "대한추나의학회 정회원",
      "대한침구의학회 정회원",
      "교통사고 한의 진료 전문가 과정 수료",
    ],
    certifications: [
      "한의사 면허",
      "추나요법 전문가 인증",
      "약침 시술 전문가 인증",
    ],
    greeting: "환자분의 이야기에 귀 기울이고, 몸이 스스로 낫는 힘을 되찾도록 돕겠습니다. 통증의 근본 원인을 찾아 치료하는 것이 수한의원의 철학입니다.",
  },
  {
    id: "dr-park",
    name: "박지연",
    nameEn: "Jiyeon Park",
    title: "원장",
    specialty: "여성·내과 전문",
    image: "/images/doctor-park-full.jpg",
    actionImages: [
      { src: "/images/doctor-park-action.jpg", alt: "맥진 중인 박지연 원장" },
      { src: "/images/doctor-park-action2.jpg", alt: "한약재 검수 중인 박지연 원장" },
    ],
    education: [
      "원광대학교 한의과대학 졸업",
      "원광대학교 대학원 한방부인과학 석사",
    ],
    career: [
      "前 원광대학교 한방병원 수련의",
      "前 서울 여성 전문 한의원 원장",
      "대한한방부인과학회 정회원",
      "대한한방소아과학회 정회원",
      "한방 난임 치료 연구회 연구위원",
    ],
    certifications: [
      "한의사 면허",
      "한방 여성의학 전문가 인증",
    ],
    greeting: "여성의 몸은 섬세한 리듬으로 움직입니다. 그 고유한 리듬을 존중하며, 자연스러운 균형을 되찾을 수 있도록 정성껏 진료하겠습니다.",
  },
];

export const stats = [
  { number: 30, suffix: "년+", label: "한방 진료 경험" },
  { number: 50000, suffix: "+", label: "누적 진료 건수" },
  { number: 98, suffix: "%", label: "환자 만족도" },
  { number: 2, suffix: "인", label: "한의학 전문의" },
];
