export type ProjectStatus = 'planning' | 'development' | 'testing' | 'released';

export type Project = {
  id: string;
  name: string;
  description: string;
  businessArea: string;
  status?: ProjectStatus;
  image: string;
  externalLink: string;
  isPublic: boolean;
};

export const projects: Project[] = [
  {
    id: 'poker-ev-trainer',
    name: '포커 EV 교육 시뮬레이션',
    description: '포커 상황별 선택지와 기대값(EV)을 비교하며 의사결정 원리를 익히는 교육용 애플리케이션을 개발하고 있습니다. 실제 금전 거래 기능은 제공하지 않습니다.',
    businessArea: 'Software & Applications',
    status: 'development',
    image: '/images/poker-ev.svg',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'sword-enhancement-game',
    name: '검 강화 게임',
    description: '리듬 기반 제작과 성장, 이용자 간 대전을 결합한 디지털 게임의 구조를 기획하고 있습니다.',
    businessArea: 'Digital Platforms',
    status: 'planning',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'trading-automation',
    name: '주식·코인 자동매매 시스템',
    description: '주식과 가상자산의 시세를 분석하고, 사전에 설정한 전략과 조건에 따라 주문을 자동화하는 시스템입니다.',
    businessArea: 'Software & Applications',
    status: 'planning',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'resale-price-search',
    name: '해외 리셀 중개사이트 시세 비교 검색 프로그램',
    description: '해외 리셀 중개사이트의 상품 가격을 한곳에서 검색하고, 환율과 배송비를 반영해 구매 비용을 비교하는 프로그램입니다.',
    businessArea: 'E-Commerce',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'youtube-automation',
    name: '유튜브 자동화 프로그램',
    description: '영상에서 하이라이트를 추출하고 자막, 번역, 썸네일, 예약 게시 작업을 자동화하는 프로그램입니다.',
    businessArea: 'AI & Automation',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'card-pack-inventory',
    name: '카드팩 판매 및 재고 검색 프로그램',
    description: '트레이딩 카드팩을 검색하고 구매할 수 있는 판매 기능과 상품별 재고를 관리하는 기능을 한곳에 모은 프로그램입니다.',
    businessArea: 'E-Commerce',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'brand-investment-distribution',
    name: '브랜드 투자·유통',
    description: '성장 가능성이 있는 브랜드의 투자와 협업을 검토하고, 상품의 판매 채널을 넓히는 프로젝트입니다.',
    businessArea: 'E-Commerce',
    image: '',
    externalLink: '',
    isPublic: true,
  },
  {
    id: 'video-production-distribution',
    name: '영상 제작·유통',
    description: '디지털 영상의 기획과 제작부터 채널별 배포까지 연계하는 프로젝트입니다.',
    businessArea: 'Digital Platforms',
    status: 'planning',
    image: '',
    externalLink: '',
    isPublic: true,
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  planning: '기획 중',
  development: '개발 중',
  testing: '테스트 중',
  released: '출시',
};

export const publicProjects = projects.filter((project) => project.isPublic);
