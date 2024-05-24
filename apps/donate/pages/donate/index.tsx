import { Box } from '@mui/material';
import DonateHeader from '../../components/donate/DonateHeader';
import HowToPay from '../../components/donate/HowToPay';
import StatisticsSection from '../../components/donate/stats/StatisticsSection';

export default function Donate() {
  return (
    <Box>
      <DonateHeader />
      <Box>
        <HowToPay />
        <StatisticsSection />
      </Box>
    </Box>
  );
}
