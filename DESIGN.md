---
name: Neon Protocol
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ebb2ff'
  on-secondary: '#520071'
  secondary-container: '#ce5dff'
  on-secondary-container: '#480064'
  tertiary: '#e4ffdb'
  on-tertiary: '#003907'
  tertiary-container: '#00fd40'
  on-tertiary-container: '#007016'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#72ff70'
  tertiary-fixed-dim: '#00e639'
  on-tertiary-fixed: '#002203'
  on-tertiary-fixed-variant: '#00530e'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for the "Own the Code" student competition, targeting a demographic of digital natives, hackers, and builders. The brand personality is hyper-modern, technical, and high-energy, designed to evoke the feeling of entering a high-stakes terminal or a futuristic IDE.

The visual style is **Cyber-Tech Glassmorphism**. It utilizes deep, immersive backgrounds paired with high-frequency neon accents to create a sense of depth and digital urgency. UI elements should feel like holographic projections—translucent, layered, and light-emitting. The aesthetic balances the raw utility of developer tools with the polished finish of a premier esports platform.

## Colors

The palette is rooted in **Deep Space (#0A0A0F)** to maximize the luminosity of the accent colors. 

- **Primary (Electric Cyan):** Used for critical actions, active states, and primary brand indicators. It represents the "energy" of the code.
- **Secondary (Neon Purple):** Used for secondary actions, accents, and data visualization. It adds depth and a sense of "prestige" to the competitive environment.
- **Tertiary (Matrix Green):** Reserved for success states and terminal-style output.
- **Surface:** Surfaces are constructed using semi-transparent charcoal with a `backdrop-filter: blur(12px)`. Borders on these surfaces should use a low-opacity white (10%) or a subtle gradient of the primary/secondary colors.

## Typography

This design system employs a dual-typeface strategy to balance impact with utility.

**Headlines:** We use **Sora** for its aggressive, geometric wide-stance which feels architectural and futuristic. Large headlines should often be set in all-caps or with tight tracking to mimic digital signage.

**Body & Technical Data:** **JetBrains Mono** is utilized for all functional text. This typeface bridges the gap between a standard UI and a code editor, reinforcing the "Own the Code" theme. The monospaced nature ensures data-heavy lists and code snippets are perfectly aligned and legible.

## Layout & Spacing

The layout follows a **structured fluid grid** with a rigorous 4px baseline. 

- **Desktop:** 12-column grid with 24px gutters. Content is housed in glassmorphic containers that can span varying column widths.
- **Mobile:** 4-column grid with 16px gutters.
- **Rhythm:** Use spacing increments of 8px (2 units) for most component spacing to maintain a "mechanical" feel. 

Containers should feel modular, like docked panels in an IDE. Use heavy padding (32px+) inside large cards to create a premium, spacious feel despite the dark aesthetic.

## Elevation & Depth

Depth is achieved through **light emission (glow)** rather than traditional shadows. 

1.  **Base Layer:** Solid Deep Space (#0A0A0F).
2.  **Surface Layer:** Semi-transparent charcoal with `backdrop-filter: blur(16px)`.
3.  **Active Layer:** Elements at this level receive a subtle `0px 0px 15px` outer glow using the Primary or Secondary color at 30% opacity.
4.  **Borders:** Instead of heavy shadows, use 1px solid borders. For primary elements, use a linear gradient border (Cyan to Purple) to make the element "pop" from the dark background.

## Shapes

The design system uses **Soft (0.25rem)** roundedness to maintain a technical, sharp-edged feel while remaining modern. 

- **Standard Elements:** 4px radius (buttons, inputs, small chips).
- **Large Containers:** 8px radius (cards, modal overlays).
- **Accents:** Use 45-degree clipped corners (chamfers) on high-profile decorative elements or primary buttons to enhance the "cyber" aesthetic.

## Components

### Buttons
Primary buttons feature a solid Electric Cyan fill with black text for maximum contrast. Secondary buttons use a "ghost" style: a 1px Cyan border with a subtle glow on hover.

### Inputs
Input fields are dark, semi-transparent rectangles with a bottom-only 2px border that glows Cyan when focused. Labels should always be in the `label-sm` style (JetBrains Mono, Uppercase).

### Progress Bars
Progress tracks are dark charcoal. The "fill" should be a gradient from Neon Purple to Electric Cyan. Add a `box-shadow` to the fill head to create a "leading edge" glow effect.

### Cards
Cards are the primary container. They must utilize the glassmorphism effect. For "featured" competition cards, add a subtle animated gradient border that rotates slowly.

### Chips & Tags
Used for "Languages" or "Tech Stack" indicators. These should be monospaced text with a 1px border and no fill, using the color associated with the specific tech (e.g., Python blue, JS yellow) but adapted to the neon palette.