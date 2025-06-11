import React from 'react';
import { Box } from '@mui/material';
import { BackgroundImageProps } from './types';

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  height = '100vh',
  width = '100%',
  children,
  css,
  overlayColor,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        width,
        position: 'relative',
        ...css,
      }}
    >
      {overlayColor && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: overlayColor,
            zIndex: 1,
          }}
        />
      )}
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
    </Box>
  );
};

export default BackgroundImage;
