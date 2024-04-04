import { Box } from '@mui/material';
import React from 'react';
import OurPartnersHeader from '../../components/partners/OurPartnersHeader';
import OurSponsorsSection from '../../components/partners/OurSponsorsSection';
import BecomeSponsorsSection from '../../components/partners/BecomeSponsorsSection';

export default function OurPartners() {
  return (
    <Box>
      <OurPartnersHeader />
      <OurSponsorsSection />
      <BecomeSponsorsSection />
    </Box>
  );
}
