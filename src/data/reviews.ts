export interface Review {
  id: string;
  name: string;
  age: string;
  treatment: string;
  rating: number;
  date: string;
  content: string;
  highlight: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "김○영",
    age: "40대 여성",
    treatment: "허리 통증",
    rating: 5,
    date: "2025년 12월",
    content: "10년 넘게 허리 통증으로 고생했는데, 추나요법과 침 치료를 병행하니 3주 만에 확연히 좋아졌어요. 원장님이 원인을 정확히 짚어주셔서 신뢰가 갔습니다.",
    highlight: "3주 만에 확연히 좋아졌어요",
  },
  {
    id: "r2",
    name: "이○준",
    age: "30대 남성",
    treatment: "교통사고 후유증",
    rating: 5,
    date: "2025년 11월",
    content: "교통사고 후 목이 뻣뻣하고 두통이 심했는데, 자동차보험으로 부담 없이 치료받았습니다. 침과 부항으로 근육 긴장이 풀리고 두통도 많이 줄었어요.",
    highlight: "자동차보험으로 부담 없이",
  },
  {
    id: "r3",
    name: "박○희",
    age: "50대 여성",
    treatment: "갱년기 증상",
    rating: 5,
    date: "2025년 10월",
    content: "안면 홍조와 불면증이 심해서 찾아갔는데, 박 원장님이 체질에 맞는 한약을 처방해주셨어요. 한 달 복용 후 밤에 잠도 잘 오고 홍조도 줄었습니다.",
    highlight: "한 달 후 확실한 개선",
  },
  {
    id: "r4",
    name: "최○서",
    age: "20대 여성",
    treatment: "다이어트 한약",
    rating: 5,
    date: "2025년 9월",
    content: "식단 조절해도 안 빠지던 살이 체질 맞춤 한약과 이침 치료로 2개월에 8kg 감량했어요! 요요도 없고 소화도 잘 되니 일석이조입니다.",
    highlight: "2개월에 8kg 감량",
  },
  {
    id: "r5",
    name: "정○민",
    age: "60대 남성",
    treatment: "무릎 관절통",
    rating: 5,
    date: "2025년 8월",
    content: "무릎이 아파서 계단 오르기가 힘들었는데, 약침 치료를 꾸준히 받으니 지금은 등산도 다시 다닙니다. 수술 없이 나을 수 있어서 감사합니다.",
    highlight: "수술 없이 등산까지",
  },
  {
    id: "r6",
    name: "한○아",
    age: "30대 여성",
    treatment: "생리통·생리불순",
    rating: 5,
    date: "2025년 7월",
    content: "매달 진통제 없이는 버틸 수 없었는데, 3개월 한약 복용 후 진통제 없이도 일상생활이 가능해졌어요. 주기도 정상으로 돌아왔습니다.",
    highlight: "진통제 없이 일상생활",
  },
];
