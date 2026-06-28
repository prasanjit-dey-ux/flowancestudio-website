# Flowance Studio - Design System

This living document outlines the visual language, typography, colors, and layout guidelines for the Flowance Studio website.

---

## 1. Palette & Colors

Our aesthetic is clean, light, and minimal, focusing on high negative space and precise hairlines.

| Role | Color Name | Hex Code | Tailwind Equivalent / Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Light Gray | `#FAFAFA` | `bg-background` (defined in `:root`) |
| **Borders & Lines** | Steel Gray | `#D2D2D2` | `border-border` / `border-[#D2D2D2]` |
| **Primary Text** | Off-Black | `#171717` | `text-foreground` |
| **Secondary Text** | Mid-Gray | `#666666` | `text-zinc-600` / `text-stone-500` |
| **Primary Accent** | Electric Blue | `#0400FF` | `text-primary` / `bg-primary` (defined in `:root`) |

---

## 2. Typography

We pair a clean, structural system sans-serif with a soft, readable body font. We strictly focus on **normal** to **medium** weights to maintain a sophisticated, print-like layout.

* **Display & Headings**: `Helvetica, Arial, sans-serif`
  * Role: Page titles, section headings, display statements.
  * Weights: Normal (`font-normal` / 400), Medium (`font-medium` / 500).
* **Body & Paragraphs**: `Inter, sans-serif`
  * Role: Body paragraphs, descriptions, metadata, button labels.
  * Weights: Normal (`font-normal` / 400), Medium (`font-medium` / 500).

---

## 3. Structural Layout

To keep the content cohesive, the entire page structure is contained within a centered main wall.

* **Container Width**: Exactly `1280px` (`max-w-[1280px]`).
* **Frame borders**: Vertical left and right borders of `#D2D2D2` (`border-x border-[#D2D2D2]`) framing the entire page.
* **Alignment**: The container is centered using `mx-auto`.

```
                  Viewport
 ┌───────────────────┬───────────────────┐
 │                   │                   │
 │                ┌──┴──┐                │
 │                │ 12  │                │
 │  Margin        │ 80  │        Margin  │
 │  (flexible)    │ px  │    (flexible)  │
 │                │     │                │
 │                │     │                │
 │                └──┬──┘                │
 │                   │                   │
 └───────────────────┴───────────────────┘
                  Centered
             Border Color: #D2D2D2
```

---

## 4. Components Thinking

### A. Navigation Bar
* Nested inside the `1280px` container.
* Height: `4rem` (`h-16`).
* Border: Bottom border `#D2D2D2` (`border-b border-[#D2D2D2]`).
* Typography: Display headings or clean uppercase/sentence case links using Inter Medium.

### B. Content Sections
* Divided by subtle horizontal rule dividers (`border-t border-[#D2D2D2]`).
* Padding: Generous but disciplined vertical spacing, e.g., `py-16` to `py-32`.
* Grid system: 12-column grids aligned with 2-column or 3-column splits to evoke editorial style sheets (e.g. split hero layout).

### C. Buttons / Call-to-Actions
* Clean, geometric rectangles with sharp or minimal border-radius (e.g., `rounded-none` or `rounded-sm`).
* Border: Solid border `#171717` or subtle background transitions.
* Hover states: Delicate background swaps, avoiding heavy shadows.

### D. FAQ Accordions (Details & Summary)
* Interactive elements implemented using semantic HTML `<details>` and `<summary>` elements to support zero-JS accordion interaction.
* Layout: Placed in a vertical stack separated by thin borders (`divide-y border-y border-[#D2D2D2]`).
* Styling: Font-display for questions, font-sans for answers, with a small rotating indicator (`group-open:rotate-45`) to reflect active status.

