import { Box } from '@mui/material';
import React from 'react';
import OurPartnersPresentation from './OurPartnersPresentation';
import OurSponsorsSection from './OurSponsorsSection';
import BecomeSponsorsSection from './BecomeSponsorsSection';

export default function OurPartners() {
  return (
    <Box>
      <OurPartnersPresentation />
      <OurSponsorsSection />
      <BecomeSponsorsSection />
    </Box>
  );
}
