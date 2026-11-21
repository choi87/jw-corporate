/** Official verified details only. Leave unknown values empty; they will not appear publicly. */
export const company = {
  legalName: '주식회사 제이더블유',
  englishName: 'JW Co., Ltd.', // Brand display name only; verify legal English name before using in legal documents.
  brand: 'JW',
  tagline: 'Technology for practical progress.',
  description: '소프트웨어, AI 자동화, 전자상거래 및 디지털 플랫폼 분야를 탐구하고 개발하는 기업입니다.',
  ceo: '',
  registrationNumber: '',
  address: '',
  established: '',
  phone: '',
  email: '', // Publish ONLY after the mailbox is created and incoming mail is tested.
  domain: '', // Set to the actual verified corporate domain (without https://).
} as const;
export const contact = {
  hasEmail: !!company.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(company.email),
  hasPhone: !!company.phone,
};
