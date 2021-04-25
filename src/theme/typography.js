import palette from "./palette";

const fontFamily = "'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif";

const typography = {
  fontFamily: fontFamily,
  sectionHeaderFontFamily: `'Archivo Black', ${fontFamily}`,
  h1: {
    color: palette.text.heading,
    fontWeight: 400,
    fontSize: "35px",
    lineHeight: "125%",
  },
  h2: {
    color: palette.text.heading,
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "125%",
  },
  h3: {
    color: palette.text.heading,
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "125%",
  },
  h4: {
    color: palette.text.heading,
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "140%",
  },
  h5: {
    color: palette.text.heading,
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "170%",
  },
  h6: {
    color: palette.text.heading,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "170%",
  },
  subtitle1: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "125%",
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "117%",
  },
  body1: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "117%",
  },
  body2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "14px",
  },
  button: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "12px",
  },
  caption: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "11px",
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "130%",
    textTransform: "uppercase",
  },
};

export default typography;
