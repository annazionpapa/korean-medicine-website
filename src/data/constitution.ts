export interface ConstitutionOption {
  text: string;
  scores: {
    taeyang: number;
    taeeum: number;
    soyang: number;
    soeum: number;
  };
}

export interface ConstitutionQuestion {
  id: number;
  text: string;
  options: ConstitutionOption[];
}

export interface ConstitutionResult {
  type: string;
  name: string;
  nameHanja: string;
  emoji: string;
  color: string;
  description: string;
  bodyType: string;
  personality: string;
  strengths: string[];
  weaknesses: string[];
  goodFoods: string[];
  badFoods: string[];
  healthTips: string[];
}

export const constitutionQuestions: ConstitutionQuestion[] = [
  {
    id: 1,
    text: "평소 체형은 어떤 편인가요?",
    options: [
      { text: "마르고 가슴 부위가 발달한 편", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 0 } },
      { text: "건장하고 허리·배 부위가 넓은 편", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 1 } },
      { text: "상체가 발달하고 하체가 가벼운 편", scores: { taeyang: 1, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "전체적으로 가늘고 작은 편", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 2,
    text: "식사할 때 나의 모습은?",
    options: [
      { text: "소식해도 크게 불편하지 않다", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 0 } },
      { text: "많이 먹어야 힘이 나고, 잘 먹는다", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 0 } },
      { text: "빨리 먹는 편이고, 가리는 것이 적다", scores: { taeyang: 0, taeeum: 1, soyang: 3, soeum: 0 } },
      { text: "입이 짧고, 조금만 먹어도 배가 부르다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 3,
    text: "더위와 추위 중 어느 쪽이 더 힘든가요?",
    options: [
      { text: "더위를 많이 타고, 시원한 것을 좋아한다", scores: { taeyang: 2, taeeum: 1, soyang: 3, soeum: 0 } },
      { text: "더위를 타지만 땀을 잘 흘리면 괜찮다", scores: { taeyang: 0, taeeum: 3, soyang: 1, soeum: 0 } },
      { text: "추위를 많이 타고 손발이 차다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
      { text: "더위·추위 모두 크게 타지 않는다", scores: { taeyang: 1, taeeum: 1, soyang: 1, soeum: 1 } },
    ],
  },
  {
    id: 4,
    text: "땀은 어떤 편인가요?",
    options: [
      { text: "땀이 거의 나지 않는다", scores: { taeyang: 1, taeeum: 0, soyang: 0, soeum: 3 } },
      { text: "조금만 움직여도 땀이 많이 난다", scores: { taeyang: 0, taeeum: 3, soyang: 1, soeum: 0 } },
      { text: "상체나 머리에 땀이 많이 난다", scores: { taeyang: 1, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "운동할 때만 적당히 난다", scores: { taeyang: 2, taeeum: 1, soyang: 1, soeum: 1 } },
    ],
  },
  {
    id: 5,
    text: "소화력은 어떤 편인가요?",
    options: [
      { text: "소화력이 좋고, 웬만한 음식은 잘 소화한다", scores: { taeyang: 0, taeeum: 3, soyang: 2, soeum: 0 } },
      { text: "보통이지만 과식하면 속이 불편하다", scores: { taeyang: 2, taeeum: 1, soyang: 1, soeum: 0 } },
      { text: "속이 자주 더부룩하거나 체한다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
      { text: "소화는 잘 되지만 뒤가 안 좋다(설사 등)", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 0 } },
    ],
  },
  {
    id: 6,
    text: "성격이나 행동 스타일은?",
    options: [
      { text: "추진력이 강하고 독창적이다", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 0 } },
      { text: "듬직하고 꾸준하며, 변화를 싫어한다", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 1 } },
      { text: "활발하고 사교적이며, 한 곳에 오래 못 앉는다", scores: { taeyang: 0, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "꼼꼼하고 내성적이며, 걱정이 많다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 7,
    text: "스트레스를 받으면 주로?",
    options: [
      { text: "화가 치밀고 흥분되면서 두통이 온다", scores: { taeyang: 3, taeeum: 0, soyang: 2, soeum: 0 } },
      { text: "속으로 삭이며 잘 표현하지 않는다", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 1 } },
      { text: "감정 기복이 심하고 화를 냈다 금방 풀린다", scores: { taeyang: 0, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "불안하고 걱정이 많아지며 잠이 안 온다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 8,
    text: "수면 패턴은 어떤가요?",
    options: [
      { text: "잠이 적어도 큰 불편이 없다", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 0 } },
      { text: "잠이 많고 쉽게 잠든다", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 0 } },
      { text: "쉽게 잠들지만 자주 깬다", scores: { taeyang: 0, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "잠들기 어렵고 잠이 얕다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 9,
    text: "대변 상태는 주로?",
    options: [
      { text: "변이 무르거나 설사 경향이 있다", scores: { taeyang: 3, taeeum: 0, soyang: 1, soeum: 1 } },
      { text: "변비 경향이 있다", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 0 } },
      { text: "보통이지만 스트레스 받으면 불규칙해진다", scores: { taeyang: 0, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "가늘고 무른 변을 자주 본다", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
  {
    id: 10,
    text: "피부 상태는 어떤 편인가요?",
    options: [
      { text: "건조하고 트러블이 적은 편", scores: { taeyang: 3, taeeum: 0, soyang: 0, soeum: 1 } },
      { text: "두껍고 기름기가 있는 편", scores: { taeyang: 0, taeeum: 3, soyang: 0, soeum: 0 } },
      { text: "민감하고 열이 나면 붉어지는 편", scores: { taeyang: 0, taeeum: 0, soyang: 3, soeum: 0 } },
      { text: "희고 부드럽지만 탄력이 없는 편", scores: { taeyang: 0, taeeum: 0, soyang: 0, soeum: 3 } },
    ],
  },
];

export const constitutionResults: ConstitutionResult[] = [
  {
    type: "taeyang",
    name: "태양인",
    nameHanja: "太陽人",
    emoji: "☀️",
    color: "#E5533D",
    description: "전체 인구의 약 1~2%로 매우 드문 체질입니다. 창의적이고 진취적이며, 리더십이 강한 것이 특징입니다.",
    bodyType: "상체(목, 가슴)가 발달하고 하체가 약한 편. 체격이 크거나 마른 편이 많습니다.",
    personality: "독창적이고 결단력이 강하며, 남들이 하지 않는 일을 추진하는 경향이 있습니다. 다만 독선적이 되기 쉬워 타인의 의견에도 귀 기울이는 것이 중요합니다.",
    strengths: ["창의력과 추진력", "리더십", "결단력"],
    weaknesses: ["소화기·하체가 약함", "독선적 경향", "하체 순환 부족"],
    goodFoods: ["메밀", "새우", "조개류", "포도", "머루", "다래", "솔잎"],
    badFoods: ["기름진 음식", "자극적인 음식", "육류 과식"],
    healthTips: [
      "하체 운동을 규칙적으로 하세요",
      "담백하고 서늘한 성질의 음식이 좋습니다",
      "감정 조절과 스트레스 관리가 중요합니다",
    ],
  },
  {
    type: "taeeum",
    name: "태음인",
    nameHanja: "太陰人",
    emoji: "🌍",
    color: "#6B7B3A",
    description: "전체 인구의 약 40~50%로 가장 많은 체질입니다. 듬직하고 인내심이 강하며, 먹는 것을 좋아하고 체력이 좋은 편입니다.",
    bodyType: "체격이 크고 건장한 편. 허리와 배 부위가 넓고, 근육이 잘 발달합니다. 살이 잘 찌는 경향이 있습니다.",
    personality: "듬직하고 보수적이며, 신중하게 행동합니다. 인내심이 강하지만 게으르기 쉽고, 변화를 꺼리는 편입니다.",
    strengths: ["강한 체력과 지구력", "인내심과 끈기", "넓은 포용력"],
    weaknesses: ["살이 잘 찜(비만 경향)", "심폐 기능이 상대적으로 약함", "게으름·무기력 경향"],
    goodFoods: ["소고기", "밤", "호두", "잣", "도라지", "더덕", "콩나물", "무"],
    badFoods: ["닭고기", "삼계탕", "꿀", "인삼(과다 섭취)"],
    healthTips: [
      "꾸준한 유산소 운동으로 땀을 흘려주세요",
      "과식을 피하고 규칙적인 식사를 하세요",
      "목욕이나 사우나로 노폐물 배출을 도와주세요",
    ],
  },
  {
    type: "soyang",
    name: "소양인",
    nameHanja: "少陽人",
    emoji: "🔥",
    color: "#D4792A",
    description: "전체 인구의 약 25~30%를 차지합니다. 활동적이고 밝은 성격이며, 열이 많고 행동이 빠른 것이 특징입니다.",
    bodyType: "상체가 발달하고 하체가 가벼운 편. 가슴 부위가 넓고 엉덩이가 작은 역삼각형 체형이 많습니다.",
    personality: "명랑하고 사교적이며 일 처리가 빠릅니다. 하지만 끈기가 부족하고 성급한 면이 있어, 시작은 잘하지만 마무리가 약할 수 있습니다.",
    strengths: ["빠른 판단력과 행동력", "사교성과 밝은 성격", "정의감"],
    weaknesses: ["끈기 부족", "열이 많아 화병 경향", "신장·하체 기능이 약함"],
    goodFoods: ["보리", "팥", "녹두", "수박", "참외", "오이", "배추", "상추"],
    badFoods: ["인삼", "꿀", "닭고기", "고추", "겨자", "후추"],
    healthTips: [
      "시원한 성질의 음식을 많이 드세요",
      "수영, 산책 등 열을 식히는 운동이 좋습니다",
      "충분한 수분 섭취를 하세요",
    ],
  },
  {
    type: "soeum",
    name: "소음인",
    nameHanja: "少陰人",
    emoji: "💧",
    color: "#4A7C9B",
    description: "전체 인구의 약 20~25%를 차지합니다. 섬세하고 꼼꼼하며, 몸이 차고 소화기가 약한 것이 특징입니다.",
    bodyType: "전체적으로 작고 마른 편. 하체가 상대적으로 발달해 있고, 상체가 약한 편입니다.",
    personality: "꼼꼼하고 세심하며, 계획적으로 일을 처리합니다. 내성적이고 걱정이 많아 스트레스에 취약한 편입니다.",
    strengths: ["섬세함과 정확성", "계획성과 분석력", "깊은 사고력"],
    weaknesses: ["소화기가 약함", "추위에 약하고 냉증", "불안·걱정이 많음"],
    goodFoods: ["인삼", "대추", "생강", "계피", "찹쌀", "닭고기", "양고기", "마늘"],
    badFoods: ["차가운 음식", "생맥주", "빙과류", "보리", "메밀", "돼지고기(과다)"],
    healthTips: [
      "따뜻한 음식과 차를 즐기세요",
      "과로를 피하고 충분히 쉬세요",
      "가벼운 운동부터 시작하여 점진적으로 늘리세요",
    ],
  },
];
