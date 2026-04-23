# Design System: Premium Dark Glass (Bac IA V2)
**Project ID:** 10143394694448243746

## 1. Visual Theme & Atmosphere
"The Digital Sanctuary". A premium, dark-mode focused aesthetic designed to minimize eye strain for late-night study sessions. It uses **Glassmorphism**, deep blacks, and teal accents to create a sophisticated, high-tech tutorial environment.

## 2. Color Palette
*   **Background (#0A0A0B / #131314):** Deep obsidian for the primary canvas.
*   **Primary Accent (#0F766E / #80d5cb):** Moroccan Teal. Represents focus and growth.
*   **Glass Surface:** `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(20px)`.
*   **On-Surface (#E5E2E3):** High legibility off-white for text.

## 3. Typography Rules
*   **Latin Text (FR / Darija):** Use **Inter** (Body) and **Manrope** (Headlines).
*   **Arabic Text (AR / Darija):** Use **IBM Plex Sans Arabic**.
*   **Mathematics:** Render all formulas via **KaTeX**. No raw monospace.
*   **Rule:** Never mix Arabic fonts with Latin text.

## 4. Component Standards
*   **Cards:** 24px corner radius, glass effect, ghost borders (`border: 1px solid rgba(255, 255, 255, 0.1)`).
*   **Avatars:** Initial-based components (e.g., "YA"). Background: `primary-container`. No stock photos.
*   **Buttons:** Premium gradients (Teal to Light Teal) with `active:scale-95` transitions.

## 5. Mandatory Cultural Rules
*   **Territorial Integrity:** ALL maps and geographic representations of Morocco MUST include the Southern Provinces (Sahara) in their entirety. No dotted lines.
*   **Vocation:** Moroccan-specific naming (2ème Bac, SM/PC/SVT, DH prices).
*   **Terminology:** 
    *   "Chapitres" (not Modules)
    *   "Exercices" (not Quiz)
    *   "Progression" (not Analytics)
    *   "IA Tuteur" (not AI Coach)

## 6. Layout Principles
*   **Logical Properties:** Use Tailwind logical classes (`ps-`, `pe-`, `start-`, `end-`) for seamless RTL/LTR support.
*   **Safe Areas:** Support for `env(safe-area-inset-bottom)` on mobile devices.
