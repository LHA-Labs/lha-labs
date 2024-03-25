import { Box } from '@mui/material';
import React from 'react';
import OurTeamSection from './OurTeamSection';
import LhaPresentationSection from './LhaPresentationSection';
import OurMissionVisionSection from './OurMissionVisionSection';
import JoinUsSection from './JoinUsSection';

export default function AboutUs() {
  return (
    <Box
    sx={{gap:'80px'}}
    >
      <LhaPresentationSection />
      <OurMissionVisionSection />
      <OurTeamSection />
      <JoinUsSection />
    </Box>
  );
}
