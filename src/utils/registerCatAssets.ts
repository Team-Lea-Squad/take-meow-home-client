export const registerCatAssets = {
  name: { title: "고양이의 이름/별명은 무엇인가요?", isOptional: false },
  physical: { title: "고양이의 신체 정보를 입력해주세요.", isOptional: false },
  health: { title: "고양이의 건강 정보를 선택해주세요.", isOptional: false },
  personality: {
    title: "고양이의 성격 정보를 선택해주세요.",
    isOptional: false
  },
  keywords: {
    title: "고양이를 표현하는 키워드를 선택해주세요.",
    content: [
      "장난기 많은",
      "호기심 많은",
      "애교쟁이",
      "독립적인",
      "소심한",
      "에너제틱한",
      "느긋한",
      "사교적인",
      "내성적인",
      "공격적인",
      "온순한",
      "장난꾸러기",
      "조심성 강한",
      "모험심 강한",
      "수다쟁이",
      "똥꼬발랄",
      "잠만보",
      "도도한",
      "고급스러운"
    ],
    isOptional: false
  }
};
