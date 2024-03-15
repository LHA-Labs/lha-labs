import { Box } from '@mui/material';
import React from 'react';
import DonatePresentationSection from './DonatePresentationSection';
import CampaignsNameSection from './CampaignsNameSection';
import StatisticSection from './StatisticSection';
import ContributionTable from './ContributionTable';

export default function Donate() {
  return (
    <Box>
      <DonatePresentationSection />
      <Box
        sx={{
          display: ' flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '45px',
        }}
      >
        <CampaignsNameSection />
        <StatisticSection />
        <ContributionTable />
      </Box>
    </Box>
  );
}
