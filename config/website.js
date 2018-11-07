const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Matt Voorhees Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Matt', // Alternative Site title for SEO
  siteUrl: 'https://mattvoorhees.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'A collection of projects and experiences of Matt Voorhees',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@matographer', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
