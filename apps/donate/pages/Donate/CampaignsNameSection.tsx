import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import campaignsNameImg from '../../assets/campaignsNameImg.png';
import { useIntl } from 'react-intl';

export default function CampaignsNameSection() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 118px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '4px',
        }}
      >
        <Typography variant="h4" sx={{ color: 'var(--primary)' }}>
          {formatMessage({ id: 'campaignsName' })}
        </Typography>
        <Typography variant="h2" sx={{ color: 'var(--titleActive)' }}>
          {formatMessage({ id: 'NameOfCampaign' })}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src={campaignsNameImg} alt="Campaigns Name Imgage"></Image>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '200px',
            background: 'rgba(206, 0, 0, 0.10)',
            padding: '10px',
          }}
        >
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {formatMessage({ id: 'campaignNameText' })}L{' '}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ borderRadius: '50px' }}
          >
            {formatMessage({ id: 'viewObjective' })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
