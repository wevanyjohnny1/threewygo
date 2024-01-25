import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  marginLeft: "auto",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: 656,

  "@media screen and (min-width: 240px)": {
    maxWidth: "calc(100vw - ((100vw - 400px) / 2))",
    minHeight: 300,
  },

  "@media screen and (min-width: 480px)": {
    maxWidth: "calc(100vw - ((100vw - 480px) / 2))",
    minHeight: 400,
  },

  "@media screen and (min-width: 768px)": {
    maxWidth: "calc(100vw - ((100vw - 768px) / 2))",
    minHeight: 400,
  },

  "@media screen and (min-width: 1180px)": {
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    minHeight: 656,
  },
});

export const Course = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  minWidth: "32.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: 400,
    height: 400,
    objectFit: "fill",
  },

  "@media screen and (min-width: 480px)": {
    minWidth: "20.5rem",
    img: {
      width: 200,
      height: 200,
      objectFit: "fill",
    },
  },

  "@media screen and (min-width: 768px)": {
    minWidth: "23.5rem",
    img: {
      width: 270,
      height: 270,
      objectFit: "fill",
    },
  },

  "@media screen and (min-width: 1180px)": {
    minWidth: "32.5rem",
    img: {
      width: 400,
      height: 400,
      objectFit: "fill",
    },
  },

  header: {
    position: "absolute",
    top: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    strong: {
      fontSize: "$lg",
      textAlign: "center",
    },

    span: {
      fontSize: "$lg",
      fontWeight: "bold",
      color: "$green300",
      textAlign: "center",
    },

    "@media screen and (min-width: 480px)": {
      padding: "1rem",

      strong: {
        fontSize: "$md",
      },

      span: {
        fontSize: "$md",
      },
    },

    "@media screen and (min-width: 1180px)": {
      padding: "2rem",

      strong: {
        fontSize: "$lg",
      },

      span: {
        fontSize: "$lg",
      },
    },
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    strong: {
      fontSize: "$lg",
      textAlign: "center",
    },

    span: {
      fontSize: "$lg",
      fontWeight: "bold",
      color: "$green300",
      textAlign: "center",
    },

    "@media screen and (min-width: 480px)": {
      padding: "1rem",

      strong: {
        fontSize: "$md",
      },

      span: {
        fontSize: "$md",
      },
    },

    "@media screen and (min-width: 1180px)": {
      padding: "2rem",

      strong: {
        fontSize: "$lg",
      },

      span: {
        fontSize: "$lg",
      },
    },
  },
});
