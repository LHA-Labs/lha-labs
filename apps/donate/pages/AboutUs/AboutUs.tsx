import { Box } from '@mui/material';
import React from 'react';
import OurTeamSection from './OurTeamSection';
import LhaPresentationSection from './LhaPresentationSection';

export default function AboutUs() {
  return (
    <Box>
      <LhaPresentationSection />
      <OurTeamSection />
    </Box>
  );
}
