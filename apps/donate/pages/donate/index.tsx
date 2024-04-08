import { Box } from '@mui/material';
import DonateHeader from '../../components/donate/DonateHeader';
import CampaignObjectives from '../../components/donate/CampaignObjectives';
import Donations from '../../components/donate/Donations';
import StatisticSection from '../../components/donate/stats/StatisticSection';

export default function Donate() {
  return (
    <Box>
      <DonateHeader />
      <Box>
        <CampaignObjectives />
        <StatisticSection />
        <Donations />
      </Box>
    </Box>
  );
}
