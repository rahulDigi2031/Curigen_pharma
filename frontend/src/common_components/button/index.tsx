import React from "react";
import {
  Button as MuiButton,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { ButtonTypes } from "./types";

const Button: React.FC<ButtonTypes> = ({
  variant = "contained",
  children,
  onClick,
  disabled = false,
  loading = false,
  sx,
  color = "primary",
}) => {
  const theme = useTheme();

  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        ...(variant === "contained" && {
          backgroundColor: theme.palette.primary.dark,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }),
        ...sx,
      }}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MuiButton>
  );
};

export default Button;
