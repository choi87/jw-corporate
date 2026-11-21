/** Verified company details only. Unknown values stay empty and are omitted from the site. */
export const company = {
  legalName: '주식회사 제이더블유',
  englishName: 'JW',
  brand: 'JW',
  tagline: 'Technology for practical progress.',
  description: '소프트웨어, AI 자동화, 전자상거래 및 디지털 플랫폼 분야의 사업을 추진하고 서비스를 개발하는 주식회사 제이더블유의 공식 홈페이지입니다.',
  ceo: '',
  businessRegistrationNumber: '',
  corporateRegistrationNumber: '',
  established: '',
  address: '',
  phone: '',
  email: '',
  domain: '',
} as const;

export const contact = {
  hasEmail: !!company.email && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(company.email),
  hasPhone: !!company.phone,
};
