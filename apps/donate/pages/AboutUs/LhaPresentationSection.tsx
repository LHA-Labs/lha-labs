import { Box, Typography } from '@mui/material';
import React from 'react';

export default function LhaPresentationSection() {
  return (
    <Box>
      <Box
        sx={{
          display: 'inline-flex',
          padding: '0px 207px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography variant="h1" component="h2" sx={{ textAlign: 'center' }}>
          Welcome to Let’s Help Association, where passion meets purpose
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          At the heart of our journey is a commitment to making a meaningful
          difference. Discover who we are, our story, and the collective{' '}
          <Typography variant="body1" color="primary">
            positive change and inspire hope.
          </Typography>
        </Typography>
      </Box>
      <Box>photo</Box>
      <Box>stat</Box>
    </Box>
  );
}
