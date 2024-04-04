import { Box } from '@mui/material';
import BecomeSponsorsSection from '../../components/partners/BecomeSponsorsSection';
import OurPartnersHeader from '../../components/partners/OurPartnersHeader';
import OurSponsorsSection from '../../components/partners/OurSponsorsSection';

export default function OurPartners() {
  return (
    <Box sx={{ padding: {laptop:'0 0 80px  0', mobile:'0 0 24px  0'} }}>
      <OurPartnersHeader />
      <OurSponsorsSection />
      <BecomeSponsorsSection />
    </Box>
  );
}
