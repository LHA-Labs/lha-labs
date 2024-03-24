import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import HeroSection from '../components/HeroSection/HeroSection';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
    </Box>
  );
}

export default Index;
