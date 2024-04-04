import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function DonateHeader() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        height: '298px',
        background: "url('/assets/donate_header_bg.png')",
        boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          padding: 0,
          lineHeight: '55.5px',
          textAlign: 'center',
          fontSize: { mobile: '36px', tablet: '48px' },
          width: { mobile: '100%', laptop: '50%' },
        }}
      >
        {formatMessage({ id: 'donatePageTitle' })}
      </Typography>
    </Box>
  );
}
