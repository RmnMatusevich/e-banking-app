import palette from "../palette";

const MuiTableCell = {
  root: {
    borderBottom: `1px solid ${palette.divider}`,
  },
  // Fix a bug in Material-UI where the sizeSmall paddingCheckbox width
  // is too small.
  paddingCheckbox: {
    width: "48px !important",
  },
};

export default MuiTableCell;
