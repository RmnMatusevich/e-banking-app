// @flow

import palette from "../palette";

const MuiAppBar = {
  colorPrimary: {
    backgroundColor: "transparent",
    color: palette.text.heading,
    "& .Mui-selected": {
      color: palette.secondary.main,
    },
  },
};

export default MuiAppBar;
