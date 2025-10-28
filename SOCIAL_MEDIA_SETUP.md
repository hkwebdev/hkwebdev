# Social Media Metadata Setup

Your Astro site now has comprehensive social media metadata support for LinkedIn, Twitter, and Facebook sharing. Here's how to use and customize it:

## Configuration

### 1. Update Social Media Handles

Edit `src/consts.ts` to add your actual social media handles:

```typescript
export const SOCIAL_MEDIA = {
	twitter: '@yourtwitterhandle',
	facebook: 'yourfacebookpage',
	linkedin: 'company/yourcompany',
	github: '[yourgithub](https://github.com/hkwebdev/hkwebdev)'
};
```

### 2. Facebook App ID (Optional)

If you have a Facebook App ID for better analytics, add it to `src/components/BaseHead.astro`:

```html
<meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
```

## Using Enhanced Metadata in Blog Posts

Your blog posts now support additional frontmatter fields for better social sharing:

```markdown
---
title: 'Your Blog Post Title'
description: 'A compelling description for social media'
pubDate: 'Jan 30 2025'
updatedDate: 'Feb 01 2025'
heroImage: '/your-featured-image.jpg'
author: 'Author Name'
tags: ['webdev', 'astro', 'javascript']
draft: false
---
```

## What's Included

### Open Graph (Facebook/LinkedIn)
- ✅ `og:type` - Set to "article" for blog posts, "website" for pages
- ✅ `og:title` - Page/post title
- ✅ `og:description` - Page/post description
- ✅ `og:image` - Featured image
- ✅ `og:image:alt` - Image alt text
- ✅ `og:site_name` - Your site name
- ✅ `og:locale` - Language locale
- ✅ `og:author` - Author for articles
- ✅ `og:published_time` - Publication date
- ✅ `og:modified_time` - Last modified date
- ✅ `og:section` - Content section (e.g., "blog")
- ✅ `og:tag` - Content tags

### Twitter Cards
- ✅ `twitter:card` - Large image card
- ✅ `twitter:site` - Your Twitter handle
- ✅ `twitter:creator` - Content creator handle
- ✅ `twitter:title` - Tweet title
- ✅ `twitter:description` - Tweet description
- ✅ `twitter:image` - Tweet image
- ✅ `twitter:image:alt` - Image alt text

### LinkedIn
- ✅ `linkedin:owner` - LinkedIn company page

### Structured Data (Schema.org)
- ✅ JSON-LD structured data for rich snippets
- ✅ BlogPosting schema for articles
- ✅ WebSite schema for regular pages
- ✅ Author and publisher information

## Testing Your Social Media Cards

### Facebook Sharing Debugger
Visit: https://developers.facebook.com/tools/debug/
Enter your URL to see how it appears when shared on Facebook.

### Twitter Card Validator
Visit: https://cards-dev.twitter.com/validator
Enter your URL to preview Twitter cards.

### LinkedIn Post Inspector
Visit: https://www.linkedin.com/post-inspector/
Enter your URL to see LinkedIn sharing preview.

## Image Recommendations

### Optimal Image Sizes
- **Facebook/LinkedIn**: 1200 x 630 pixels
- **Twitter**: 1200 x 675 pixels (16:9 ratio)

### Image Requirements
- File format: JPG, PNG, or WebP
- File size: Under 5MB
- Minimum size: 200 x 200 pixels

## Example Usage

### Basic Page (using default metadata)
```astro
---
import BaseHead from '../components/BaseHead.astro';

const title = "About Us";
const description = "Learn more about HK Web Dev community";
---
<html>
  <head>
    <BaseHead title={title} description={description} />
  </head>
  <!-- rest of page -->
</html>
```

### Enhanced Article Page
```astro
---
import BaseHead from '../components/BaseHead.astro';

const title = "Advanced Astro Techniques";
const description = "Discover advanced patterns for building with Astro";
const image = "/featured-images/astro-advanced.jpg";
const author = "Jane Developer";
const tags = ["astro", "webdev", "javascript"];
---
<html>
  <head>
    <BaseHead 
      title={title}
      description={description}
      image={image}
      author={author}
      articleType="article"
      publishedTime="2025-01-30T10:00:00Z"
      section="tutorials"
      tags={tags}
    />
  </head>
  <!-- rest of page -->
</html>
```

## Troubleshooting

### Images Not Showing
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/`
- Check image file sizes and formats

### Social Media Cards Not Updating
- Use the debugging tools mentioned above
- Social platforms cache cards for 24-48 hours
- Force refresh using the debugging tools

### Missing Information
- Check that all required frontmatter fields are present
- Verify social media handles in `consts.ts`
- Ensure your site URL is correctly configured in `astro.config.mjs`