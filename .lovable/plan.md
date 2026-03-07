

# Temporarily Remove AI Automations + Add Lead-Parrot Page Under Studios Gear

## What We'll Do

### 1. Hide AI Automations (keep the page file and images intact)
- **Comment out** the AI Automations entry from the `studiosWebServices` array in `Navigation.tsx` (both desktop and mobile use the same array, so one change covers both)
- **Remove** the AI Automations card from the `services` array in `ServicesSection.tsx` (homepage) — keep the `aiBackdrop` import so the image stays in the project
- **Remove** the AI Automations entry from the `services` array in `StudiosWeb.tsx` (StudiosWeb hub page)
- **Comment out** the route in `App.tsx` so the page isn't accessible but the file (`AIAutomations.tsx`) and all its images remain untouched
- **Remove** the AI Automations link from `InternalLinks.tsx`
- **Remove** from `public/sitemap.xml`

### 2. Create Lead-Parrot page under Studios Gear
- **Create** `src/pages/LeadParrot.tsx` — a dedicated page for the Lead-Parrot product, using the existing `lead-parrot.png` portfolio image and the description from the portfolio data as a starting point
- **Add route** `/studiosgear/lead-parrot` in `App.tsx`
- **Update** `StudiosGear.tsx` to replace the "Coming Soon" content with a card/link to the Lead-Parrot sub-page
- **Update Navigation** — add a collapsible dropdown for Studios Gear (similar to Studios Web) with Lead-Parrot as a sub-item, or add Lead-Parrot as a direct link; since there's only one sub-page for now, a simple link on the Studios Gear page is cleaner
- **Add** to `public/sitemap.xml`

### Technical Details

**Files to modify:**
- `src/components/Navigation.tsx` — remove AI Automations from `studiosWebServices`
- `src/components/ServicesSection.tsx` — remove AI Automations from `services` array (keep import)
- `src/pages/StudiosWeb.tsx` — remove AI Automations from services list
- `src/components/InternalLinks.tsx` — remove AI Automations link
- `src/App.tsx` — comment out AI Automations route, add Lead-Parrot route
- `public/sitemap.xml` — remove ai-automations URL, add lead-parrot URL

**Files to create:**
- `src/pages/LeadParrot.tsx` — Lead-Parrot product page with hero, features, and CTA

**Files preserved (no changes):**
- `src/pages/AIAutomations.tsx` — kept as-is for future re-enablement
- `src/assets/ai-backdrop.jpeg` — kept
- `src/assets/ai-automation-flow.png` — kept

