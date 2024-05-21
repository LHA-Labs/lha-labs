import { Box, Divider, Typography } from '@mui/material';
import SponsorLogo from '../Landing/sponsors/SponsorLogo';
import RepresentativeCard, { Representative } from './RepresentativeCard';

export interface SponsorMessage {
  representative: Representative;
  sponsorName: string;
  sponsorImageRef: string;
  message: string;
}
export default function SponsorCard({
  message,
  representative,
  sponsorImageRef,
  sponsorName,
}: SponsorMessage) {
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
          gridTemplateColumns: { laptop: '1fr auto', mobile: '1fr' },
          justifyItems: 'start',
          columnGap: 1,
          rowGap: 3,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            order: { laptop: -1, mobile: 1 },
          }}
        >
          <RepresentativeCard
            {...representative}
            title={`${representative.title} ${sponsorName}`}
          />
          <Typography variant="body1" sx={{ color: '#666666' }}>
            {message}
          </Typography>
        </Box>
        <SponsorLogo logo_ref={sponsorImageRef} name={sponsorName} size={190} />
      </Box>
      <Divider sx={{ width: '85%' }} />
    </Box>
  );
}
