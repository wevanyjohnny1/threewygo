import { styled } from "..";

export const CourseTitleBox = styled("div", {
  padding: "2rem",
  width: "60vw",

  borderRadius: 6,

  alignItems: "center",

  backgroundColor: "rgba(0, 0, 0, 0.6)",

  marginBottom: 32,

  strong: {
    fontSize: "$lg",
  },
});

export const DescriptionBox = styled("div", {
  padding: "2rem",
  width: "60vw",

  borderRadius: 6,

  alignItems: "center",

  backgroundColor: "rgba(0, 0, 0, 0.2)",

  marginBottom: 32,

  strong: {
    fontSize: "$lg",
  },
});

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  marginLeft: "auto",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "3rem",
});

export const LessonsContainer = styled("div", {
  width: "60vw",
  alignItems: "center",

  cursor: "pointer",
});

export const Lesson = styled("a", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  borderBottom: "1px solid white",

  "&:hover": {
    borderBottomColor: `$green300`,

    svg: {
      fill: `$green300`,
    },

    strong: {
      color: `$green300`,
    },
  },

  variants: {
    color: {
      green: {
        borderBottomColor: "$green300",
        svg: {
          fill: `$green300`,
        },
        strong: {
          color: `$green300`,
        },
        color: "white",
      },
      normal: {},
    },
  },
});
