import * as Dialog from "@radix-ui/react-dialog";

import { styled } from "..";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0, 0, 0, 0.75)",
});

export const Content = styled(Dialog.Content, {
  minWidth: "32rem",
  borderRadius: 6,
  padding: "2.5rem",
  background: `$gray800`,

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  ".reports": {
    height: 58,
    marginLeft: "40%",
    border: 0,
    background: `$green500`,
    color: `$white`,
    fontWeight: "bold",
    padding: "0 1.25rem",
    borderRadius: 6,
    marginTop: "1.5rem",
    cursor: "pointer",

    "&:hover": {
      background: `$green300`,
      transition: "background-color 0.2s",
    },
  },

  ".createCourseButton": {
    height: 58,
    width: "100%",
    border: 0,
    background: `$green500`,
    color: `$white`,
    fontWeight: "bold",
    padding: "0 1.25rem",
    borderRadius: 6,
    marginTop: "1.5rem",
    cursor: "pointer",

    "&:hover": {
      background: `$green300`,
      transition: "background-color 0.2s",
    },
  },

  form: {
    marginTop: "2rem",

    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    "input,textarea": {
      borderRadius: 6,
      border: 0,
      background: `$gray900`,
      color: `$gray300`,
      padding: "1rem",

      "&::placeholder": {
        color: `$gray500`,
      },
    },

    'button[type="submit"]': {
      height: 58,
      border: 0,
      background: `$green500`,
      color: `$white`,
      fontWeight: "bold",
      padding: "0 1.25rem",
      borderRadius: 6,
      marginTop: "1.5rem",
      cursor: "pointer",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      "&:not(:disabled):hover": {
        background: `$green300`,
        transition: "background-color 0.2s",
      },

      variants: {
        color: {
          red: {
            backgroundColor: "#FF0000",
          },
        },
      },
    },
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  border: 0,
  top: "1.5rem",
  right: "1.5rem",
  cursor: "pointer",
  color: `$gray500`,
  fontSize: 0,
});
