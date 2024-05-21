import { Box } from '@mui/material';
import CampaignObjectives from '../../components/donate/CampaignObjectives';
import DonateHeader from '../../components/donate/DonateHeader';
// import Donations from '../../components/donate/Donations';
import StatisticsSection from '../../components/donate/stats/StatisticsSection';

export default function Donate() {
  return (
    <Box>
      <DonateHeader />
      <Box>
        <CampaignObjectives />
        <StatisticsSection />
        {/* <Donations /> */}
      </Box>
    </Box>
  );
}
