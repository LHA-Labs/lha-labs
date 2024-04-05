import { Box } from '@mui/material';
import DonateHeader from '../../components/donate/DonateHeader';
import CampaignsNameSection from './CampaignsNameSection';
import ContributionTable from './ContributionTable';
import StatisticSection from './StatisticSection';

export default function Donate() {
  return (
    <Box>
      <DonateHeader />
      <Box>
        <CampaignsNameSection />
        <StatisticSection />
        <ContributionTable />
      </Box>
    </Box>
  );
}
