import { styled } from "..";

export const Container = styled("div", {
  padding: "1rem",
  width: "100%",

  justifyContent: "space-around",

  display: "flex",
  flexDirection: "row",

  borderBottom: "1px solid white",
});

export const LeftContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const RightContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const ActionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 6,

  a: {
    cursor: "pointer",
  },
});
