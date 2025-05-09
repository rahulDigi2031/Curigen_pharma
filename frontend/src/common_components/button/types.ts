import { SxProps } from "@mui/material";

export interface ButtonTypes {
  variant?: "text" | "contained" | "outlined";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  css?: SxProps;
}
