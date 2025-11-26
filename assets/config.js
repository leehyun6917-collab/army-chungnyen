// 사이트 설정 - 이 파일만 수정하면 전체 사이트 콘텐츠가 변경됩니다
window.__SITE_CONFIG__ = {
  // 브랜드 정보
  brandName: "청년취업진흥교육원",
  tagline: "2030 청년들을 위한 일자리 정보 포털",

  // 카카오톡 채널 설정
  kakaoChannelUrl: "http://pf.kakao.com/_YwsxcG/chat", // 카카오 채널 URL을 여기에 입력

  // [선택] 카카오 공식 위젯 사용시 (없으면 링크 방식으로 동작)
  kakaoAppKey: "", // 카카오 앱 키 (https://developers.kakao.com 에서 발급)
  kakaoChannelPublicId: "", // 카카오 채널 공개 ID

  // 연락처 정보
  contact: {
    phone: "0507-1353-8459",
    email: "mystaryoyo4@naver.com",
    address: "서울 구로구 20가길 5",
    businessNumber: "544-52-00853",
    ceo: "이현진",
  },

  // 히어로 섹션
  hero: {
    headline: "지금 바로 구직청원휴가\n신청하세요",
    subcopy: "50% 이상 복무하신 분들께\n취업 | 창업 컨설팅 | 군 경험 기반 개인 역량 분석표 제공",
    image: "assets/images/hero_image.png",
    primaryCta: "구직청원휴가 상담받기",
    badges: [
      "대면 및 비대면 진행",
      "신청 당일 서류발급",
      "24시간 상담지원"
    ]
  },

  // 자가진단 섹션
  selfDiagnosis: {
    title: "나는 구직청원휴가 신청이 가능할까요?",
    subtitle: "간단한 체크만으로 즉시 확인하세요",
    categories: [
      {
        id: "military-job",
        title: "군인 구직청원휴가",
        icon: "🇰🇷",
        active: true
      },
      {
        id: "startup",
        title: "창업 지원",
        icon: "💼",
        active: false
      },
      {
        id: "education",
        title: "입시 준비",
        icon: "📚",
        active: false
      }
    ],
    // 카테고리별 질문 세트
    forms: {
      "military-job": {
        questions: [
          {
            id: "branch",
            title: "군종을 선택해주세요",
            type: "radio",
            options: ["육군", "해군", "공군", "해병대"]
          },
          {
            id: "rank",
            title: "현재 계급 및 복무 현황",
            type: "radio",
            options: [
              "병장 (복무 50% 이상)",
              "상병 (복무 50% 이상)",
              "일병 (복무 50% 미만)",
              "이병 (복무 50% 미만)"
            ]
          },
          {
            id: "used_leave",
            title: "구직청원휴가 사용 경험",
            type: "radio",
            options: ["처음 신청", "재신청"]
          },
          {
            id: "consultation_type",
            title: "선호하는 상담 방식",
            type: "radio",
            options: ["비대면 (화상/전화)", "대면 상담"]
          }
        ],
        result: {
          title: "구직청원휴가 신청이 가능합니다!",
          subtitle: "50% 이상 복무하신 분은 모두 신청 가능하며, 저희가 도와드리겠습니다.",
          cta: "상담 예약하러 가기"
        }
      },
      "startup": {
        questions: [
          {
            id: "startup_stage",
            title: "현재 창업 준비 단계는?",
            type: "radio",
            options: ["아이디어 구상", "사업계획서 작성", "자금 조달", "실행 단계"]
          },
          {
            id: "startup_field",
            title: "희망하는 창업 분야는?",
            type: "radio",
            options: ["IT/테크", "요식업", "유통/판매", "서비스업", "기타"]
          },
          {
            id: "startup_experience",
            title: "창업 경험이 있으신가요?",
            type: "radio",
            options: ["처음 도전", "경험 있음", "현재 운영 중"]
          },
          {
            id: "startup_support",
            title: "필요한 지원 분야는?",
            type: "radio",
            options: ["자금 지원", "멘토링", "공간 지원", "네트워킹"]
          }
        ],
        result: {
          title: "창업 지원 프로그램에 참여 가능합니다!",
          subtitle: "군 복무 중에도 창업 준비를 체계적으로 도와드립니다.",
          cta: "창업 상담 예약하기"
        }
      },
      "education": {
        questions: [
          {
            id: "edu_target",
            title: "준비하는 입시 유형은?",
            type: "radio",
            options: ["대학 편입", "대학원 진학", "공무원 시험", "자격증 취득"]
          },
          {
            id: "edu_field",
            title: "희망하는 전공/분야는?",
            type: "radio",
            options: ["인문계열", "자연계열", "공학계열", "예체능계열", "기타"]
          },
          {
            id: "edu_preparation",
            title: "현재 준비 정도는?",
            type: "radio",
            options: ["기초 학습 중", "심화 학습 중", "실전 연습 중", "막 시작"]
          },
          {
            id: "edu_schedule",
            title: "목표 시기는?",
            type: "radio",
            options: ["올해 하반기", "내년 상반기", "내년 하반기", "미정"]
          }
        ],
        result: {
          title: "입시 준비 지원이 가능합니다!",
          subtitle: "군 복무와 병행하며 체계적인 입시 준비를 도와드립니다.",
          cta: "입시 상담 예약하기"
        }
      }
    },
    // 기본 form (backward compatibility)
    form: {
      questions: [
        {
          id: "branch",
          title: "군종을 선택해주세요",
          type: "radio",
          options: ["육군", "해군", "공군", "해병대"]
        },
        {
          id: "rank",
          title: "현재 계급 및 복무 현황",
          type: "radio",
          options: [
            "병장 (복무 50% 이상)",
            "상병 (복무 50% 이상)",
            "일병 (복무 50% 미만)",
            "이병 (복무 50% 미만)"
          ]
        },
        {
          id: "used_leave",
          title: "구직청원휴가 사용 경험",
          type: "radio",
          options: ["처음 신청", "재신청"]
        },
        {
          id: "consultation_type",
          title: "선호하는 상담 방식",
          type: "radio",
          options: ["비대면 (화상/전화)", "대면 상담"]
        }
      ],
      result: {
        title: "구직청원휴가 신청이 가능합니다!",
        subtitle: "50% 이상 복무하신 분은 모두 신청 가능하며, 저희가 도와드리겠습니다.",
        cta: "상담 예약하러 가기"
      }
    }
  },

  // 서류 샘플 섹션
  documentSamples: {
    title: "실제 발급되는 서류",
    subtitle: "부대 제출용 공식 서류를 미리 확인하세요",
    documents: [
      {
        id: "consultation-record",
        title: "상담내역서",
        description: "발급처, 담당자, 상담 일시·내용 요약",
        features: ["공식 서명/직인", "문의처 포함", "진위확인 QR코드"],
        image: "assets/images/certification_3.jpeg",
        sample: true
      },
      {
        id: "certificate",
        title: "수료증",
        description: "상담/교육 수료 시 발급되는 공식 증명서",
        features: ["수료과정명", "교육시간", "고유번호", "발급일자"],
        image: "assets/images/certification_1.jpeg",
        sample: true
      },
      {
        id: "reservation-confirm",
        title: "예약확정서",
        description: "상담 예정 확인서 (필요시 발급)",
        features: ["예약 일시/장소", "신청자 정보", "예약번호"],
        image: "assets/images/certification_2.png",
        sample: true
      }
    ]
  },

  // 프로세스 안내
  process: {
    title: "구직청원휴가 신청 가이드라인",
    subtitle: "간단한 5단계로 구직청원휴가 완성",
    steps: [
      {
        id: "check-permission",
        title: "지휘관 확인",
        description: "부대 내 지휘관에게 구직청원휴가 가능 여부 확인하기"
      },
      {
        id: "schedule-consultation",
        title: "상담 예약",
        description: "상담 기관에 상담가능 일정 확인 및 예약하기"
      },
      {
        id: "submit-confirmation",
        title: "예정확인서 제출",
        description: "(필요 시) 상담 예정확인서 제출하기"
      },
      {
        id: "attend-consultation",
        title: "상담 받기",
        description: "예약일자에 상담받기"
      },
      {
        id: "submit-certificates",
        title: "서류 제출",
        description: "인증서류(수료증, 상담 내역서) 부대에 제출하기"
      }
    ]
  },

  // 가격 및 패키지
  pricing: [
    {
      title: "1일 구직청원휴가 상담",
      subtitle: "",
      price: "",
      unit: "",
      popular: false,
      features: [
        "상담예정확인서, 진행과정 템플릿 발급",
        "병 경험 및 사회 역량 기반 개인 역량 분석 보고서 발급",
        "진행과정 수료증 발급",
        "기본 서류 가이드",
        "24시간 카톡 지원"
      ],
      limitations: [],
      cta: "1일 과정 선택",
      guarantee: ""
    },
    {
      title: "2일 구직청원휴가 상담",
      subtitle: "",
      price: "",
      unit: "",
      popular: true,
      features: [
        "상담예정확인서, 진행과정 템플릿 발급",
        "병 경험 및 사회 역량 기반 개인 역량 분석 보고서 발급",
        "진행과정 수료증 발급",
        "기본 서류 가이드",
        "24시간 카톡 지원",
        "필요시 약식진행"
      ],
      limitations: [],
      cta: "2일 과정 선택",
      guarantee: ""
    }
  ],

  // 후기 섹션
  reviews: {
    title: "실제 이용 후기",
    subtitle: "구직청원휴가를 성공적으로 받으신 분들의 생생한 후기",
    cta: "더 많은 후기 보기",
    samples: [
      {
        name: "김○○ 병장",
        branch: "육군",
        text: "처음에는 복잡할 줄 알았는데 정말 간단했어요. 상담도 친절하고 서류도 바로 나와서 부대에서 바로 승인받았습니다.",
        date: "2024.01.15"
      },
      {
        name: "이○○ 상병",
        branch: "해군",
        text: "다른 곳은 비싸던데 여기는 가격도 합리적이고 정말 빨라요. 당일에 모든 서류 받아서 놀랐습니다.",
        date: "2024.01.10"
      }
    ]
  },

  // FAQ
  faq: [
    // 정보형 FAQ (NEW) - 스키마에 포함
    {
      q: "구직청원휴가란 무엇인가요?",
      a: "구직청원휴가는 의무복무 중인 현역 장병이 취업 준비 활동을 위해 사용할 수 있는 신설된 특별휴가입니다. 군인의 지위 및 복무에 관한 기본법 시행령 제12조에 따라 의무복무기간 중 최대 2일까지 사용 가능합니다."
    },
    {
      q: "구직청원휴가 신청 자격은 어떻게 되나요?",
      a: "구직 청원휴가는 현재 계급과 무관하게, 의무복무기간의 2분의 1(50%) 이상을 마친 병사가 신청 가능합니다. 육군 기준 약 9개월, 해군 기준 약 10개월, 공군 기준 약 11개월 이상 복무한 병사가 해당됩니다."
    },
    {
      q: "구직청원휴가는 최대 며칠까지 사용 가능한가요?",
      a: "의무복무기간 중 최대 2일까지 사용 가능합니다. 1일씩 분할 사용하거나 2일 연속 사용이 가능하며, 부대 상황과 관할 부대 지휘관 재량에 따라 결정됩니다."
    },
    {
      q: "구직청원휴가로 할 수 있는 활동은 무엇인가요?",
      a: "취업상담, 채용시험 응시, 현장채용행사 참석, 기업 면접, 직업훈련 상담, 창업 관련 교육 참가 등 구직과 관련된 모든 활동이 가능합니다."
    },
    {
      q: "구직청원휴가 신청 시 필요한 서류는 무엇인가요?",
      a: "신청 전에는 상담예정확인서나 면접확인서 등이 필요할 수 있으며, 사용 후에는 상담내역서, 수료증, 참석확인서 등 실제 구직활동을 증명할 수 있는 서류를 부대에 제출해야 합니다."
    },
    {
      q: "어떤 기관에서 구직청원휴가 상담을 받을 수 있나요?",
      a: "워크넷, 고용24 등 정부 운영 취업지원 사이트와 전국 일자리센터, 국방전직교육원, 그리고 청년취업진흥교육원과 같은 청년 취업 상담 전문업체에서 상담 및 증빙서류 발급 서비스를 받을 수 있으며, 휴가 발급에 대한 부분은 지휘관의 재량입니다."
    },
    // 서비스 관련 FAQ - 스키마에서 제외
    {
      q: "비대면 상담도 가능한가요?",
      a: "가능합니다. 저희 청년취업진흥교육원에서는 나라를 위해 열심히 복무해주시는 국군 장병님들에게 최대한 편의를 제공하기 위해서 비대면 상담도 함께 진행을 하고있습니다."
    },
    {
      q: "상담가능한 일정은 어떻게 되나요?",
      a: "장병분들께서 원하시는 일정에 진행하실 수 있습니다. 대면 상담은 월-토요일 09:00 ~ 18:00, 비대면 상담은 카카오톡 채널로 연락주시면 다른 상담과 겹치지 않는 선에서 언제든지 예약진행을 도와드리고 있습니다."
    },
    {
      q: "당일 예약도 가능한가요?",
      a: "가능합니다. 국군 장병님들에게 최대한 편의를 제공하기 위해 장병분들에 한해 당일 예약도 받고 있습니다."
    },
    {
      q: "꼭 상담 예정확인서를 제출해야하나요?",
      a: "부대에 따라 다릅니다. 하지만, 저희 청년취업진흥교육원에서는 예약이 확정되는 대로 항상 상담 예정확인서를 보내드리기 때문에 걱정하지 않으셔도 됩니다."
    },
    {
      q: "인증 서류는 어떤 자료들이 발급되나요?",
      a: "세 가지의 인증 서류가 발급됩니다. 예약 확정 시 보내드리는 '상담 예정확인서'와 상담 완료 후 드리는 '상담내역서'와 '수료증'를 발급해드립니다. 최근 부대에서 본인 내용이 포함된 상담내역서를 제출하라는 경우가 더러 있는데, 이 부분까지 '상담내역서'에서 제공해드리니 걱정하지 않으셔도 됩니다."
    },
    {
      q: "상담 소요 시간은 어떻게 되나요?",
      a: "소중한 휴가 시간에 시간을 내서 오신 장병분들을 마음을 누구보다 잘 이해하기 때문에, 최대한 장병분들의 요구에 따라 상담을 진행하고 있습니다. 상담을 신청한 장병분의 요청에 따라 실속있는 과정제 초점을 맞춰 최대한 간결하게 진행하기도 하고, 구체적인 상담을 원하신다면 충분한 시간을 들여 상담을 진행하고 있습니다."
    },
    {
      q: "상담 일정 변경이 가능한가요?",
      a: "가능합니다! 기존 예정일 기준 2일 전까지 연락주시면 상담 일정 변경이 가능합니다."
    },
    {
      q: "상담 문의는 어떻게 하나요?",
      a: "카카오톡에서 '청년취업진흥교육원'을 검색하시고, 카카오톡 채널로 문의를 주시면 바로 예약 상담을 진행해드리고 있습니다. 모바일 접속 시에는 블로그 프로필에 카카오톡 채널 링크 를 통해서, 데스크탑 접속시에는 블로그 상단 버튼 클릭 시 바로 카카오톡 채널로 문의가능하니 참고해주세요."
    },
    {
      q: "비용이 발생하나요?",
      a: "비용이 발생합니다. 다만, 국군 장병분께서 진행하시는 '구직 관련 상담'인 만큼 다른 상담에 비해 매우 적은 비용만 받고 진행하고 있습니다. 상담 횟수에 따라 가격이 상이하기 때문에, 이 부분은 '청년취업진흥교육원' 카카오톡 채널로 문의주시면 바로 답변드리겠습니다."
    }
  ],

  // 카카오 배너
  kakaoBanner: {
    title: "카카오톡으로\n빠른 상담",
    caption: "구직청원휴가 관련\n궁금한 점을\n바로 해결하세요",
    phoneMock: "assets/images/mockup_jinheung.png",
    cta: "카카오톡 상담하기"
  },

  // 최종 CTA
  finalCta: {
    title: "지금 바로 구직청원휴가\n신청하세요",
    subtitle: "50% 이상 복무하신 분들께\n취업 | 창업 컨설팅 | 군 경험 기반 개인 역량 분석표 제공",
    cta: "구직청원휴가 자가진단 하기"
  },

  // 푸터
  footer: {
    description: "2030 청년들을 위한 일자리 정보 포털",
    copyright: "© 2024 청춘도약일자리교육원. All rights reserved.",
    links: [
      { text: "이용약관", url: "#" },
      { text: "개인정보처리방침", url: "#" },
      { text: "사업자정보", url: "#" }
    ]
  },

  // 증빙 자료 (기존 슬라이더)
  proofs: {
    title: "실제 서류 첨삭 사례",
    subtitle: "합격자들의 생생한 후기",
    images: [
      "assets/images/certification_1.jpeg",
      "assets/images/certification_2.png",
      "assets/images/certification_3.jpeg"
    ]
  }
};

// 전역 접근을 위한 별칭
const config = window.__SITE_CONFIG__;