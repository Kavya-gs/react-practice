# React Practice

Minimal Vite + React playground with small login/register and form examples.

## Quick Start

Install deps and run the dev server:

```bash
npm install
npm run dev
```

Open the app at the port Vite shows (default http://localhost:5173).

## Day 1 — What I learned & implemented

- Where I learned: basics of React forms and using Formik for form state and validation.
- What I implemented:
  - Simple login and registration form components.
  - Formik integration for form state, validation, and submission handling.
  - Basic client-side validation and styled inputs.

## Important files
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main app container
- `src/components/` — form and auth components (e.g., `CustomLogin.jsx`, `RegisterFields.jsx`, `YtForm.jsx`)

---

## Day 2 — React Hook Form & Advanced Validation

- Where I learned: React Hook Form documentation, debugging during implementation, form state management patterns.
  - Custom validation rules: pattern matching, multiple validators per field, async validators.
  - Nested object fields (`social.twitter`, `social.facebook`).
  - Dynamic array fields with `useFieldArray` hook for reusable field instances.
  - Form state tracking: `isDirty`, `isValid`, `isSubmitted`, `isSubmitSuccessful`.
  - Conditional field behavior using `watch()` (e.g., disabling fields based on other field values).
  - Type conversion for special inputs (`valueAsNumber`, `valueAsDate`).
  - form control: `getValues()`, `setValue()`, `reset()`, `trigger()`.
  - Enhanced form styling with CSS.

### Key Features Implemented
- Email validation with regex pattern, custom validators, and async email availability check.
- Smart submit button that disables until form is valid AND user has made changes.
- Form auto-reset after successful submission using `useEffect`.
- Error handling with custom error callback.
- Helper buttons for form manipulation (Get Values, Set Value, Trigger Validation, Reset).
- Integrated Yup Validation in react hook form using yupResolver.


### Files Modified
- `src/components/YtFormNew.jsx` — Advanced form component with React Hook Form
- `src/components/YupYtForm.jsx` — React Hook Form with Yup Validations.
- `src/App.css` — Enhanced styling with flexbox, focus states, and centered layout

