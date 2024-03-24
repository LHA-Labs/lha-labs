import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import HeroSection from '../components/HeroSection/HeroSection';
import OurCampaigns from '../components/campaigns';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <OurCampaigns />
    </Box>
  );
}

export default Index;
