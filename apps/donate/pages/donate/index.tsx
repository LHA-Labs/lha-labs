import { Box } from '@mui/material';
import DonateHeader from '../../components/donate/DonateHeader';
import CampaignObjectives from '../../components/donate/CampaignObjectives';
import ContributionTable from './ContributionTable';
import StatisticSection from './StatisticSection';

export default function Donate() {
  return (
    <Box>
      <DonateHeader />
      <Box>
        <CampaignObjectives />
        <StatisticSection />
        <ContributionTable />
      </Box>
    </Box>
  );
}
