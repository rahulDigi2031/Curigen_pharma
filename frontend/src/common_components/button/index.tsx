import React from "react";
import { Button as MuiButton, CircularProgress, useTheme } from "@mui/material";
import { ButtonTypes } from "./types";


const Button: React.FC<ButtonTypes> = ({
  variant = "contained",
  children,
  onClick,
  disabled = false,
  loading = false,
  css,
}) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MuiButton>
  );
};

export default Button;

