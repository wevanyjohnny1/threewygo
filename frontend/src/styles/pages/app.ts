import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "64vw",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",

  "@sm": {
    maxWidth: "80vw",
    padding: "1rem",
  },

  a: {
    display: "flex",
    cursor: "pointer",
    color: `$gray100`,

    alignItems: "center",

    textDecoration: "none",

    "&:hover": {
      color: `$green300`,
    },
  },
});
