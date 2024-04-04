import React from 'react';
import { Box, Typography } from '@mui/material';

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Typography
        sx={{
          color: 'var(--Primary,#A50000)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '-0.3px',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'var(--title-active,#333333)',
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '36px',
          letterSpacing: '-0.6px',
        }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          width: '89px',
          height: '2px',
          strokeWidth: '2px',
          backgroundcolor: 'var(--Primary, #A50000)',
        }}
      ><hr /></Box>
    </Box>
  );
};
export default TitleAndSubtitle;
