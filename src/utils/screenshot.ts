/**
 * Generate screenshot URL for a website using Microlink API
 * The API returns the actual screenshot URL from their CDN
 */
export function getScreenshotUrl(url: string, options?: {
  width?: number;
  height?: number;
  fullPage?: boolean;
  device?: 'mobile' | 'desktop';
  delay?: number; // Delay in milliseconds before taking screenshot
}): string {
  const width = options?.device === 'mobile' ? 375 : (options?.width || 1920);
  const height = options?.device === 'mobile' ? 812 : (options?.height || 1080);
  const fullPage = options?.fullPage || false;
  const delay = options?.delay || 2000; // Default 2 seconds delay

  // Using Microlink.io - this returns the CDN URL directly
  const params = new URLSearchParams({
    url: url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url', // This returns the direct image URL
    'viewport.width': width.toString(),
    'viewport.height': height.toString(),
    'viewport.deviceScaleFactor': options?.device === 'mobile' ? '2' : '1',
    'viewport.isMobile': options?.device === 'mobile' ? 'true' : 'false',
    'viewport.hasTouch': options?.device === 'mobile' ? 'true' : 'false',
    delay: delay.toString(), // Wait before taking screenshot
    ...(fullPage && { fullPage: 'true' }),
  });

  return `https://api.microlink.io/?${params.toString()}`;
}

/**
 * Alternative: Using Screenshotone (requires API key but better quality)
 * This returns the image directly, not a JSON response
 * Sign up at https://screenshotone.com for free tier
 */
export function getScreenshotUrlPro(url: string, apiKey: string, options?: {
  width?: number;
  height?: number;
  format?: 'jpg' | 'png' | 'webp';
  blockAds?: boolean;
  device?: 'mobile' | 'desktop';
}): string {
  const width = options?.device === 'mobile' ? 375 : (options?.width || 1920);
  const height = options?.device === 'mobile' ? 812 : (options?.height || 1080);
  const format = options?.format || 'jpg';
  const blockAds = options?.blockAds ?? true;

  const params = new URLSearchParams({
    url: url,
    viewport_width: width.toString(),
    viewport_height: height.toString(),
    device_scale_factor: options?.device === 'mobile' ? '2' : '1',
    format: format,
    block_ads: blockAds.toString(),
    block_cookie_banners: 'true',
    access_key: apiKey,
  });

  return `https://api.screenshotone.com/take?${params.toString()}`;
}
