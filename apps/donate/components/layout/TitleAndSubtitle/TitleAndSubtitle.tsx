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
        gap: '12px',
      }}
    >
      <Typography variant="h4" color="primary">
        {title}
      </Typography>
      <Typography variant="h1" color="titleActive">
        {subtitle}
      </Typography>
      <Box
        sx={{
          width: '89px',
          height: '2px',
          strokeWidth: '2px',
          backgroundcolor: 'var(--Primary, #A50000)',
        }}
      >
        <hr />
      </Box>
    </Box>
  );
};
export default TitleAndSubtitle;
