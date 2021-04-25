// @flow

import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const offWhite = "#fcfcfc";
const light = "#f6f8f9";
const black = "#000000";

const skyBlue = "#00A0FF";
const skyBlueShade = "#0097f6";
const skyBlueHover = "#f2f9fd";
const nearBlack = "#000100";
const dark = "#0f1c24";
const darkGray = "#404040";
const gunmetal = "#545e63";
const darkMidGray = "#707070";
const midGray = "#a0a0a0";
const lightMidGray = "#c0c0c0";
const darkBlueGray = "#4C7386";
const glitter = "#E5EAFA";
const navy = "#0A0C36";
const successGreen = "#2ac08e";
const successGreenDark = "#00992F";
const errRed = "#fb3030";
const errRedHover = "#fb0100";
const divider = "#E0E6ED";
const lightSelection = "rgba(0, 1, 0, 0.04)";
const forestGreen = "#2EA439";
const hotPink = "#FF6392";
const gold = "#F2CD5D";
const lightGray = "#75828a";
const gunMetal = "#545e63";

const intercom = "#334bfa";
const linkedIn = "#0e76a8";

const palette = {
  black,
  white,
  offWhite,
  toolbar: white,
  primary: {
    contrastText: white,
    dark: navy,
    main: navy,
    light: navy,
  },
  secondary: {
    contrastText: white,
    dark: skyBlueShade,
    main: skyBlueShade,
    light: skyBlue,
  },
  tertiary: {
    contrastText: nearBlack,
    dark: glitter,
    main: glitter,
    light: glitter,
  },
  success: {
    contrastText: white,
    dark: successGreenDark,
    main: successGreen,
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: errRed,
    main: errRed,
    light: errRed,
    hover: errRedHover,
  },
  text: {
    primary: nearBlack,
    heading: dark,
    secondary: darkBlueGray,
    lightPrimary: gunmetal,
    link: darkBlueGray,
  },
  background: {
    default: "#fff",
    paper: white,
  },
  hover: skyBlueHover,
  icon: {
    active: skyBlueShade,
    inactive: navy,
  },
  divider,
  lightMidGray,
  midGray,
  darkMidGray,
  darkGray,
  lightSelection,
  hotPink,
  forestGreen,
  gold,
  lightGray,
  dark,
  gunMetal,
  light,
  intercom,
  linkedIn,
};

export default palette;
