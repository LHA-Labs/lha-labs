import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useIntl } from 'react-intl';
import donateHeaderBg from '../../assets/donateHeaderBg.png';

export default function DonatePresentationSection() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        position: 'relative',
        height: '30vh',
        overflow: 'hidden',
        marginBottom: '45px',
      }}
    >
      <Image
        src={donateHeaderBg}
        alt="Join Us Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          backgroundColor: 'rgba(165, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 3,
          color: '#FFF',
        }}
      >
        <Typography variant="h1" color="offWhite" sx={{ color: 'white' }}>
          {formatMessage({ id: 'contributionCollective' })}
        </Typography>
      </Box>
    </Box>
  );
}
