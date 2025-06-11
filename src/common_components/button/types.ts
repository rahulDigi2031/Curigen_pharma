import { SxProps, Theme } from "@mui/material";

export interface ButtonTypes {
  variant?: "contained" | "outlined" | "text";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: SxProps<Theme>; // instead of `css`
  color?: "primary" | "secondary" | "error" | "inherit" | "success" | "info" | "warning";
}
