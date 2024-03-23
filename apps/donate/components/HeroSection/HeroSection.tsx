import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import HeroImageGrid from './HeroImageGrid/HeroImageGrid';

export default function HeroSection() {
  const { formatMessage } = useIntl();
  return (
    <Box component="section">
      <Typography
        variant="h2"
        sx={{
          lineHeight: '36px',
          fontSize: '30px',
          letterSpacing: '-0.02em',
          textAlign: 'left',
          color: '#333',
        }}
      >
        {formatMessage({ id: 'heroSectionTitle' })}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          lineHeight: '20px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#666',
        }}
      >
        {formatMessage({ id: 'heroSectionSubtitle' })}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          columnGap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          disableElevation
        >
          {formatMessage({ id: 'donate' })}
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          disableElevation
          color="secondary"
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <HeroImageGrid />
      </Box>
    </Box>
  );
}
