import { Box } from '@mui/material';
import AboutUsHeader from '../../components/about-us/AboutUsHeader';
import JoinUsPreFooter from '../../components/about-us/JoinUsPreFooter';
import LhaPresentationSection from '../../components/about-us/LhaPresentationSection';
import LhaStats from '../../components/about-us/LhaStats';
import OurTeamSection from '../../components/about-us/OurTeamSection';
import LhaTenets from '../../components/about-us/tenets/LhaTenets';

export default function AboutUs() {
  return (
    <Box
      sx={{
        padding: '32px 0 0 0',
        display: 'grid',
        rowGap: { mobile: 1, laptop: 2 },
      }}
    >
      <AboutUsHeader />
      <LhaPresentationSection />
      <LhaStats />
      <LhaTenets />
      <OurTeamSection />
      <JoinUsPreFooter />
    </Box>
  );
}
