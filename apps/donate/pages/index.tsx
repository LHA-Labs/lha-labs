import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';
import HeroSection from '../components/HeroSection/HeroSection';
import GallerySection from '../components/Gallery/Gallery';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
      <GallerySection />
    </Box>
  );
}

export default Index;
