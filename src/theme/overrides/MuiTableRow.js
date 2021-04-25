import { fade } from "@material-ui/core/styles/colorManipulator";

import palette from "../palette";

const MuiTableRow = {
  root: {
    transition: "background-color 300ms",
    "&$selected": {
      backgroundColor: palette.background.default,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: fade(palette.hover, 0.05),
      },
    },
  },
};

export default MuiTableRow;
