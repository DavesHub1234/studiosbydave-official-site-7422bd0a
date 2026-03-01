
# Fix and Test Contact Form Email Function

## Issues Found

1. **Contact form UI is missing** -- The Contact page has the form logic (schema, useForm, onSubmit) but the actual form fields and submit button are not rendered in the JSX. The form was likely removed at some point. It needs to be added back so you can actually submit from the page.

2. **CORS will block preview requests** -- The edge function's allowed origins list does not include the current Lovable preview URL (`https://id-preview--70ddf45e-...lovable.app`). Requests from the preview will be blocked. The fix is to use wildcard CORS (`*`) for the preview, or add the preview origin.

3. **Edge function still sends to david.richardson email** -- Line 176 of the edge function still sends notification emails to both `dx1creations25@gmail.com` AND `david.richardson@studiosbydave.com`. Per your earlier request, the second address should be removed (at least temporarily).

## Plan

### Step 1: Restore the contact form on the Contact page
Add back the form fields (first name, last name, email, phone, business type, message) and submit button to the Contact page JSX, wired up to the existing `onSubmit` handler that's already in the code.

### Step 2: Fix CORS in the edge function
Update the `allowedOrigins` array and CORS headers to allow requests from the Lovable preview URL. Will use a broader approach to support both preview and production domains.

### Step 3: Remove david.richardson email from edge function
Update the notification email `to` array on line 176 to only send to `dx1creations25@gmail.com`.

### Step 4: Deploy and test
Deploy the updated edge function and verify the form submits successfully from the preview.

---

### Technical Details

**Files to modify:**
- `src/pages/Contact.tsx` -- Add form JSX between the contact info section and the CTA card
- `supabase/functions/send-contact-email/index.ts` -- Fix CORS origins and remove david.richardson email

**Edge function CORS fix:**
```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
```

**Email recipient fix (line 176):**
```typescript
to: ["dx1creations25@gmail.com"],
```
