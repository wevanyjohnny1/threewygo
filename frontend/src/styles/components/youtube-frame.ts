import { styled } from "..";

export const VideoBox = styled("div", {
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative",
  height: 0,

  iframe: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
