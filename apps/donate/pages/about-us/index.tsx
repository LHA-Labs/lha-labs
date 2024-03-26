import { Box } from '@mui/material';
import React from 'react';
// import OurTeamSection from './OurTeamSection';
import LhaPresentationSection from '../../components/about-us/LhaPresentationSection';
import AboutUsHeader from '../../components/about-us/AboutUsHeader';

export default function AboutUs() {
  return (
    <Box sx={{ padding: '32px 0 0 0' }}>
      <AboutUsHeader />
      <LhaPresentationSection />
      {/* <OurTeamSection /> */}
    </Box>
  );
}
