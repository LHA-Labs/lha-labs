import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection/HeroSection';
import About_us from '../components/about_us';

export function Index() {
  return (
    <Box sx={{ padding: '32px 0' }}>
      <HeroSection />
      <About_us />
    </Box>
  );
}

export default Index;
