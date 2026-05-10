import { Theme, ThemeOptions } from "@mui/material/styles";

const Button = (_theme: Theme): ThemeOptions["components"] => {
  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
};

export default Button;
