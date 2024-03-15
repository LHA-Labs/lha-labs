import { Box } from '@mui/material';
import React from 'react';
import DonatePresentationSection from './DonatePresentationSection';
import CampaignsNameSection from './CampaignsNameSection';
import StatisticSection from './StatisticSection';

export default function Donate() {
  return (
    <Box>
      <DonatePresentationSection />
      <CampaignsNameSection />
      <StatisticSection />
    </Box>
  );
}
