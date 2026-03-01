
# Add Google Analytics (GA4) Tracking

## Overview
This plan adds Google Analytics 4 tracking to your website using your measurement ID **G-7PYLQDFZ6M**. This will allow Google Analytics to track all page views and user interactions across your site.

## What Will Change

### File: `index.html`
Add the Google Analytics gtag.js script in the `<head>` section. This is the recommended placement by Google for accurate tracking.

The code to be added:
```html
<!-- Google Analytics (GA4) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7PYLQDFZ6M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7PYLQDFZ6M');
</script>
```

This will be placed after the resource hints section and before the Google Fonts section for optimal loading.

## What This Enables
- **Page view tracking** - Every page visit is recorded
- **User behavior insights** - See how visitors navigate your site
- **Traffic sources** - Know where your visitors come from
- **Real-time monitoring** - View active users on your site
- **Conversion tracking** - Track goals you set up in Google Analytics

## After Implementation
1. Publish the site update
2. Visit your site and navigate a few pages
3. In Google Analytics, go to **Reports → Realtime** to verify tracking is working
4. Data typically appears within 24-48 hours in standard reports

## Technical Details
- Uses the official Google gtag.js library
- Script loads asynchronously (`async`) so it won't slow down page loading
- Works with your existing Omnisend tracking without conflicts
