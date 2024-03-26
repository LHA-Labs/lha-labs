import { Box } from '@mui/material';
import AboutUs from '../components/AboutUs/AboutUs';
import ActiveCampaigns from '../components/ActiveCampaigns/ActiveCampaigns';
import DonorsSection from '../components/Donors/Donors';
import HeroSection from '../components/HeroSection/HeroSection';
import GallerySection from '../components/gallery/Gallery';
import Sponsors from '../components/sponsors';
import PreFooter from '../components/Landing/PreFooter';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0 0 0' }}>
      <HeroSection />
      <AboutUs />
      <ActiveCampaigns />
      <GallerySection />
      <DonorsSection />
      <Sponsors />
      <PreFooter />
    </Box>
  );
}

export default Index;
