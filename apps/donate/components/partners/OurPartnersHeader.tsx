import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function OurPartnersHeader() {
  const { formatMessage } = useIntl();

  return (
    <Box
      sx={{
        padding: { mobile: '30px 0', tablet: '103px 0' },
        background: "url('/assets/our_partners_header_bg.png')",
        boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        height: '428px',
        rowGap: 1.2,
      }}
    >
      <Typography variant="h1" sx={{ color: 'white', padding: 0 }}>
        {formatMessage({ id: 'ourPartners' })}
      </Typography>
      <Typography
        sx={{
          color: '#FFF',
          textAlign: 'center',
          width: { mobile: '90%', laptop: '50%' },
        }}
      >
        {formatMessage({ id: 'ourPartnersSubtitle' })}
      </Typography>
    </Box>
  );
}
