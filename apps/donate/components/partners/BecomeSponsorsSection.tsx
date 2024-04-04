import { Box } from '@mui/material';
import SectionHeader from '../Landing/SectionHeader';
import LhaContact from './becomePartner/LhaContact';
import NewPartnerForm from './becomePartner/NewPartnerForm';

export default function BecomeSponsorsSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        rowGap: 3,
        padding: { mobile: '0px 32px', laptop: '0px 118px' },
      }}
    >
      <SectionHeader title="interested" subtitle={'becomeSponsorSubtitle'} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { laptop: '1fr auto', mobile: '1fr' },
          justifySelf: 'stretch',
        }}
      >
        <NewPartnerForm />
        <LhaContact />
      </Box>
    </Box>
  );
}
