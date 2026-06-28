# Landing Page Rules

## Layout
- Max content width is 1280px (Tailwind `max-w-7xl`), centered with `mx-auto`.
- Page background and full-width sections stretch edge to edge; only the inner content is capped.
- Add horizontal padding so content never touches the screen edge on mobile (e.g. `px-4 md:px-6`).
- Cap paragraph/text blocks at a readable width (`max-w-prose` or ~65ch), even inside the 1280px container.

## Spacing & sizing
- Stay on the Tailwind scale (4, 8, 12, 16, 24, 32...) by default for spacing, sizing, and gaps.
- Use arbitrary values (e.g. `w-[1280px]`) only when the design genuinely needs an off-scale value.
- Use px for layout, spacing, and widths.
- Let Tailwind handle font sizing with its text classes (`text-base`, `text-lg`, etc.); do not hard-code px font sizes, as Tailwind outputs rem for accessibility.

## Responsiveness
- Mobile-first: design and build for small screens first, then scale up.
- Use Tailwind breakpoints consistently: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- Pixel-perfect means matching the mockup's spacing and proportions, not locking fixed widths that break responsiveness.

## Content style
- No em dashes in copy.
- No emoji in text.