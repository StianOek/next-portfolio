# Dynamic Website Screenshots

Your portfolio now uses dynamic screenshots that automatically update when your project websites change!

## How It Works

Instead of manually capturing and updating screenshots, the portfolio fetches live screenshots from your websites using the **Microlink.io API**.

## Current Setup

- **Zeipt**: Uses dynamic screenshot from `https://zeipt.com`
- **Ihlenslk**: Uses dynamic screenshot from `https://ihlenslk.no`
- Other projects: Still use static images (can be converted)

## Benefits

✅ **Always up-to-date**: Screenshots automatically reflect current website design  
✅ **No manual work**: No need to capture and upload new images  
✅ **Consistent quality**: All screenshots have the same dimensions and quality  
✅ **Easy maintenance**: Just update the URL if the domain changes

## Free Tier Limits

**Microlink.io Free Tier:**
- 50 requests per day
- Perfect for portfolio sites with moderate traffic
- Screenshots are cached by browsers

## Upgrade Options

If you need more requests or better quality:

### 1. **Microlink.io Pro** ($9/month)
- 10,000 requests/month
- Better caching
- Priority support

### 2. **Screenshotone.com** (Free tier available)
- 100 screenshots/month free
- Better quality and customization
- Can block ads/cookie banners

To use Screenshotone:
```typescript
// In .env.local
SCREENSHOTONE_API_KEY=your_api_key

// In src/data/projects.ts
import { getScreenshotUrlPro } from '@/utils/screenshot';

heroImage: getScreenshotUrlPro(
  'https://ihlenslk.no',
  process.env.SCREENSHOTONE_API_KEY!
),
```

### 3. **ApiFlash** ($9/month)
- 1,000 screenshots/month
- High quality
- Fast response times

## Converting More Projects

To convert a project to use dynamic screenshots:

```typescript
{
  slug: 'my-project',
  // ... other fields
  heroImage: getScreenshotUrl('https://myproject.com'),
  images: [
    getScreenshotUrl('https://myproject.com'),
    getScreenshotUrl('https://myproject.com/about'),
    '/static-image.png', // Can mix static and dynamic
  ],
  useDynamicScreenshot: true,
}
```

## Caching

Screenshots are cached by:
1. **Browser cache**: Reduces API calls
2. **CDN cache**: Microlink caches screenshots
3. **Next.js Image Optimization**: Optimizes and caches images

## Fallback Strategy

If the API is down or rate-limited, you can:
1. Keep static images as fallback
2. Use Next.js Image component's error handling
3. Implement a fallback in the component

## Testing

Test the screenshot URLs directly:
- Zeipt: https://api.microlink.io/?url=https://zeipt.com&screenshot=true&meta=false&embed=screenshot.url
- Ihlenslk: https://api.microlink.io/?url=https://ihlenslk.no&screenshot=true&meta=false&embed=screenshot.url

## Notes

- Screenshots are taken at 1920x1080 resolution
- First load might be slower (screenshot generation)
- Subsequent loads are fast (cached)
- Works great for public websites
- May not work for sites requiring authentication
