import { Box } from '@mui/material';
import React from 'react';
import DonatePresentationSection from './DonatePresentationSection';
import CampaignsNameSection from './CampaignsNameSection';

export default function Donate() {
  return (
    <Box>
      <DonatePresentationSection />
      <CampaignsNameSection />
    </Box>
  );
}
