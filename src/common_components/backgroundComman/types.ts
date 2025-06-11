import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface BackgroundImageProps {
  imageUrl: string;
  height?: string | number;
  width?: string | number;
  children?: ReactNode;
  css?: SxProps;
  overlayColor?: string;
}
