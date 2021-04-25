import { fade } from "@material-ui/core/styles/colorManipulator";

import palette from "../palette";

const MuiButton = {
  root: {
    borderRadius: "8px",
  },
  contained: {
    backgroundColor: palette.secondary.main,
    color: palette.secondary.contrastText,
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
    "&:hover": {
      backgroundColor: palette.secondary.light,
      "@media (hover: none)": {
        backgroundColor: palette.secondary.main,
      },
    },
  },
  outlined: {
    color: palette.secondary.main,
    borderColor: palette.secondary.main,
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
    "&:hover": {
      borderColor: palette.secondary.light,
      backgroundColor: fade(palette.secondary.light, 0.15),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
  text: {
    color: palette.primary.main,
  },
};

export default MuiButton;
