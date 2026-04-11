module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}