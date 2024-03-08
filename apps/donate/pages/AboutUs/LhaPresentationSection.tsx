import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import imgOfTeam1 from '../../assets/imgOfTeam1.png';
import imgOfTeam2 from '../../assets/imgOfTeam2.png';

export default function LhaPresentationSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '30px',
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          padding: '0px 207px',
          flexDirection: 'column',
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
      <Box
        sx={{
          display: 'flex',
          gridTemplateRows: '1fr 2fr 1fr',
          height: '100%',
          width: '100%',
          padding: '0px 118px',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ height: '100%', width: '100%' }}>
          <Image src={imgOfTeam1} alt="Image 1" />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            justifyContent: 'space-between',
            gap: '2px',
            height: '100%',
            width: '100%',
          }}
        >
          <Image src={imgOfTeam2} alt="Image 2" />
          <Image src={imgOfTeam2} alt="Image 3" />
        </Box>

        <Box sx={{ height: '100%', width: '100%' }}>
          <Image src={imgOfTeam1} alt="Image 4" />
        </Box>
      </Box>
      <Box>stat</Box>
    </Box>
  );
}
