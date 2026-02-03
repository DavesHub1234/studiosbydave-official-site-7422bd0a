

# Homepage Headline Update Plan

## Overview
Update the main hero section headline to a new two-part structure with distinct sizing for visual hierarchy.

---

## Current vs. New Copy

### Current Headline
> "We Don't Just Build You a Website. We Build Something GREAT Together!"

### New Headline Structure
- **Main (large):** "We Don't Just Build Your Website or App."
- **Sub (slightly smaller):** "We build the online engine that gets your business found, trusted, and hired by local customers."

---

## Implementation Details

### File to Modify
`src/components/HeroSection.tsx`

### Changes
1. **Update the `<h1>` element (lines 74-77)** to display the new main headline text
2. **Add a subheadline** directly below using a `<p>` tag with slightly smaller but still prominent styling
3. **Apply appropriate text sizing:**
   - Main headline: Keep current `lg:text-5xl text-5xl` bold styling
   - Subheadline: Use `lg:text-2xl text-xl` for a noticeable but smaller size

### Styling Approach
- The main headline retains the existing large, bold white text
- The subheadline will use a slightly smaller font size with the same white color but potentially slightly reduced opacity (e.g., `text-white/95`) for visual hierarchy
- Both will remain within the existing pixie dust effect area

### Additional Consideration
The existing supporting paragraph below ("We build opportunity! Specialized web development...") may need to be reviewed since the new subheadline covers similar ground. For now, I'll preserve it, but you can let me know if you'd like to remove or adjust it.

---

## Technical Summary

```text
HeroSection.tsx
├── Lines 74-77: Replace h1 content with new main headline
└── After h1: Add new <p> subheadline with lg:text-2xl text-xl styling
```

