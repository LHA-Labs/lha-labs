import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';
import HeroSection from '../components/HeroSection/HeroSection';
import Gallery_view from '../components/gallery/inde';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
      <Gallery_view />
    </Box>
  );
}

export default Index;
