# Theme Structure & Design System Blueprint

This document outlines the core architectural and aesthetic pillars of **thebigdev**. This is a "living breathing" design system designed for a premium, high-conversion agency experience.

## 1. Typography System
The app uses a strict two-font hierarchy to balance technical precision with modern elegance.

| Type | Font Family | Purpose | Characteristics |
| :--- | :--- | :--- | :--- |
| **Display** | `"Space Grotesk"` | Headlines, Branded UI | Geometric, high readability, ultra-bold weights for hero sections. |
| **Body** | `"Inter"` | Content, Inputs, Buttons | Neutral, optimized for UI legibility at small sizes. |

### Typography Scale
- **Heading XL**: `Text-8xl`, Bold, Leading-0.95 (Ultra-tight for hero impact).
- **Heading LG**: `Text-6xl`, Bold, Leading-1.
- **Button Text**: `10px - 11px`, Black (900), `tracking-[0.3em]`, All-Caps.

---

## 2. Color Palette (The "Lava & Graphite" Scheme)
The theme relies on high-contrast HSL values to maintain a moody, premium feel.

| Variable | HSL Value | hex (Approx) | Role |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 6%` | `#0f0f0f` | Main canvas |
| `--primary` | `14 100% 56%` | `#fb4e1a` | Brand Orange (Actionable) |
| `--foreground` | `0 0% 100%` | `#ffffff` | Primary text |
| `--card` | `0 0% 9%` | `#171717` | Surface depth |
| `--muted` | `0 0% 15%` | `#262626` | UI borders & sub-text backgrounds |
| `--border` | `0 0% 18%` | `#2e2e2e` | Structural lines |

### Key Gradients
- **Orange Gradient**: `linear-gradient(135deg, hsl(14 100% 56%), hsl(25 100% 65%))`

---

## 3. Core Aesthetic Principles (What Makes it "Tick")

### A. Texture & Grain
The app uses a **Filmic Grain Overlay** on the `body::after` element.
- **Implementation**: SVG Turbulence filter at 0.04 opacity.
- **Result**: A tactile, analog feel that breaks the "digital flatness" of standard web apps.

### B. The Custom Cursor
The app replaces the native OS cursor with a reactive `CursorFollower` component.
- **Logic**: Native cursor is hidden (`cursor: none`) on desktop.
- **Benefit**: Allows the cursor to react to hover states with size changes or color inversions, deepening immersion.

---

## 4. Interaction Language

### A. The "Fill-Up" Button
Buttons don't just "glow"—they physically fill.
- **Class**: `.btn-fill-up`
- **Logic**: An absolute-positioned layer translates from `101%` to `0%` on Y-axis.
- **Psychology**: Provides a sense of "charging up" a commitment.

### B. The "Lurking Conversion" Effect
A specific behavioral trigger for the Calendly widget.
- **Logic**: When a user reaches high-intent areas (like pricing or contact), the widget metamorphosizes.
- **State Change**: It transitions from a standard bottom-right badge to a **centered, pulsing, floating circular orb**.
- **Animation**: `float-pulse` (scales and pulses orange shadows).

### C. Motion Guidelines
- **Page Transitions**: `AnimatePresence` (wait mode) with sliding/fade transitions.
- **Keyframes**:
    - `marquee`: Continuous horizontal scroll for branding strips.
    - `glow-pulse`: Subtle breathing effect for primary accents.

---

## 5. Layout Constants
- **Section Padding**: Standardized at `px-6 md:px-12 lg:px-20 xl:px-32`.
- **Corner Radius**: Sharp but refined. `--radius: 0.25rem` (4px) for a modern, architectural look.
- **Container**: Max-width `1400px`, centered.

---

## 6. Global Functional Components
- **Preloader**: Gates the experience until critical assets are ready.
- **Audio Player**: Adds "Atmospheric Audio" to create a sensory-complete environment.
- **Smooth Scroll**: Localized scroll-to-top on route changes.
