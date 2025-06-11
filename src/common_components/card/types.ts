import { SxProps } from '@mui/material';
import { ReactNode } from 'react'

export interface CardTypes {
  sx?: SxProps;
  variant?: "outlined" | "elevation";
  children?: ReactNode;
  title?: string
  content: ReactNode
  actions?: ReactNode
}