import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray900: "#121214",
      gray800: "#202024",
      gray500: "#A9A9A9",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",
    },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },

    breakpoints: {
      // @ts-ignore
      $sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
      // @ts-ignore
      $md: (rule) => `@media (min-width: 1024px) { ${rule} }`,
      // @ts-ignore
      $lg: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    },

    media: {
      sm: "(min-width: 576px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
      xl: "(min-width: 1280px)",
    },
  },
});

export type BreakpointKeys = keyof typeof config.media;
