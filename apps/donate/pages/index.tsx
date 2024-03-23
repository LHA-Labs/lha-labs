import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <AboutUs />
    </Box>
  );
}

export default Index;
