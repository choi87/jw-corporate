export type ProjectStatus = 'planning' | 'development' | 'testing' | 'released';

export type Project = {
  id: string;
  name: string;
  description: string;
  businessArea: string;
  status: ProjectStatus;
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
    isPublic: false,
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  planning: '기획 중',
  development: '개발 중',
  testing: '테스트 중',
  released: '출시',
};

export const publicProjects = projects.filter((project) => project.isPublic);
