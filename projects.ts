export type ProjectStatus = 'development' | 'planning' | 'released';
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  url?: string; // Only real and verified public URLs.
};
export const projects: Project[] = [
  {
    id: 'poker-ev-trainer',
    title: 'Poker EV Training Application',
    category: 'Software & Applications',
    description: '포커 의사결정 과정에서 기대값(EV)을 학습할 수 있도록 설계 중인 교육용 소프트웨어 프로젝트입니다. 실제 금전 거래 기능은 포함하지 않는 방향으로 개발 중입니다.',
    status: 'development',
  },
];
export const statusLabel: Record<ProjectStatus, string> = {
  development: '개발 중',
  planning: '기획 중',
  released: '출시',
};
