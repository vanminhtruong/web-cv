import { useI18n } from 'vue-i18n'

/**
 * Composable cung cấp thông tin liên hệ cho component
 * @returns {Object} - Các thông tin liên hệ
 */
export function useContactInfo() {
  const { t } = useI18n()

  // Thông tin liên hệ cố định
  const phoneNumber = '0982743860'
  const email = 'vanminhtruong95@gmail.com'
  const githubUrl = 'https://github.com/vanminhtruong/Team03-cy.git'
  const githubUsername = 'vanminhtruong'

  // Các mục thông tin liên hệ
  const contactItems = [
    {
      id: 'phone',
      icon: 'phone',
      label: t('about.phone'),
      value: phoneNumber,
      svgPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      id: 'email',
      icon: 'email',
      label: t('about.email'),
      value: email,
      svgPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 'github',
      icon: 'github',
      label: 'GitHub',
      value: githubUsername,
      url: githubUrl,
      svgPath: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    },
    {
      id: 'address',
      icon: 'address',
      label: t('about.address'),
      value: t('about.addressValue'),
      svgPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ]

  // Các nút hành động
  const actionButtons = [
    {
      id: 'contact',
      label: t('home.contactMe'),
      href: '#contact',
      isPrimary: true,
      icon: null
    },
    {
      id: 'download-cv',
      label: t('home.downloadCV'),
      href: null, // Sẽ được set từ profileStore
      isPrimary: false,
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
    }
  ]

  return {
    phoneNumber,
    email,
    githubUrl,
    githubUsername,
    contactItems,
    actionButtons
  }
}
