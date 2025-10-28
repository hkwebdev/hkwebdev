// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'HK Web Dev';
export const SITE_DESCRIPTION = 'Hong Kong Web Development Community - Connecting developers, sharing knowledge, and building the future of web development in Hong Kong. What\'s happening in web development. JavaScript trends and frameworks. Backend technologies. Noteworthy project. Creative development. And more.';

// Social Media Configuration
export const SOCIAL_MEDIA = {
	twitter: '@hkwebdev',
	facebook: 'hkwebdev',
	linkedin: 'company/hkwebdev',
	github: 'hkwebdev'
};

// SEO Configuration
export const SEO_CONFIG = {
	siteName: SITE_TITLE,
	defaultImage: '/hkwd-logo-header.jpg',
	defaultAuthor: 'HK Web Dev Team',
	locale: 'en_US',
	twitterCardType: 'summary_large_image' as const
};
