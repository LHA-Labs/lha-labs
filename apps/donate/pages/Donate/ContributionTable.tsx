import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ContributionTable() {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '0px 118px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: ' center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Typography variant="h1" sx={{ color: 'var(--primary)' }}>
          Liste des contributions de Let’s Help Association
        </Typography>
        <Typography variant="h5" sx={{ color: 'var(--body)' }}>
          Liste des contributions de Let’s Help Association
        </Typography>
      </Box>
      <Box>table</Box>
    </Box>
  );
}
