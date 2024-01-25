import { styled } from "..";

export const FileContainer = styled("div", {});

export const PreviewHeader = styled("div", {
  position: "relative",
});

export const DropzoneContainer = styled("div", {
  padding: "14px 16px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  cursor: "pointer",
  border: `2px dashed`,
  borderColor: `$green300`,
  marginTop: 6,

  img: {
    borderRadius: 4,
    objectFit: "contain",
    maxHeight: 110,
  },

  strong: {
    fontSize: "14px",
    color: `$gray300`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});
