import { Box, Typography } from '@mui/material';
import React from 'react';

interface ButtonsProps {
  label: string;
  isPrimary: boolean;
}

const PrimaryButton: React.FC<ButtonsProps> = ({ label, isPrimary }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '15px 36px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '50px',
        background: isPrimary
          ? 'var(--Primary, #A50000)'
          : 'var(--bachground, #F5F5F5)',
        // borderRadius:isRounded? '50px' : ''
      }}
    >
      <Typography
        sx={{
          color: isPrimary
            ? 'var(--off-white, #FFF)'
            : 'var(--Titre-active, #333)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          cursor: 'pointer',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '16px',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default PrimaryButton;
