import { Box, Divider, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import SponsorLogo from '../Landing/sponsors/SponsorLogo';
import { SponsorMessage } from './OurSponsorsSection';
import RepresentativeCard from './RepresentativeCard';

export default function SponsorCard({
  message,
  representative,
  sponsorImageRef,
  sponsorName,
}: SponsorMessage) {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 3,
        justifyItems: 'center',
      }}
    >
      <Box
        sx={{
          justifySelf: 'stretch',
          display: 'grid',
          alignItems: 'start',
          gridTemplateColumns: '1fr auto',
          justifyItems: 'start',
          columnGap: 1,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
          }}
        >
          <RepresentativeCard
            {...representative}
            title={`${representative.title} ${sponsorName}`}
          />
          <Typography variant="body1" sx={{ color: '#666666' }}>
            {formatMessage({ id: message })}
          </Typography>
        </Box>
        <SponsorLogo logo_ref={sponsorImageRef} name={sponsorName} size={190} />
      </Box>
      <Divider sx={{ width: '85%' }} />
    </Box>
  );
}
