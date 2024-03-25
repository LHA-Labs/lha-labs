import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';
import DonorsSection from '../components/Donors/Donors';
import HeroSection from '../components/HeroSection/HeroSection';
import GallerySection from '../components/gallery/Gallery';
import Sponsors from '../components/sponsors';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
      <GallerySection />
      <DonorsSection />
      <Sponsors />
    </Box>
  );
}

export default Index;
