import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';
import DonorsSection from '../components/Donors/Donors';
import GallerySection from '../components/Gallery/Gallery';
import HeroSection from '../components/HeroSection/HeroSection';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
      <GallerySection />
      <DonorsSection />
    </Box>
  );
}

export default Index;
