import { Box } from '@mui/material';
import React from 'react';
import OurPartnersHeader from './OurPartnersHeader';
import OurSponsorsSection from './OurSponsorsSection';
import BecomeSponsorsSection from './BecomeSponsorsSection';

export default function OurPartners() {
  return (
    <Box>
      <OurPartnersHeader />
      <OurSponsorsSection />
      <BecomeSponsorsSection />
    </Box>
  );
}
