import { Box } from '@mui/material';
import AboutUs from '../components/Landing/AboutUs/AboutUs';
import ActiveCampaigns from '../components/Landing/ActiveCampaigns/ActiveCampaigns';
import DonorsSection from '../components/Landing/Donors/Donors';
import GallerySection from '../components/Landing/Gallery/Gallery';
import HeroSection from '../components/Landing/HeroSection/HeroSection';
import PreFooter from '../components/Landing/PreFooter';
import Sponsors from '../components/Landing/sponsors';

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
