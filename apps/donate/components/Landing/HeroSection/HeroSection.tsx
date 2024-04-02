import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import HeroImageGrid from './HeroImageGrid/HeroImageGrid';

export default function HeroSection() {
  const { formatMessage } = useIntl();
  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          laptop: '1fr 1.4fr',
          tablet: '1fr 1.2fr',
          mobile: 'none',
        },
        padding: { laptop: '0 118px', mobile: '0 32px' },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            lineHeight: { mobile: '36px', tablet: '56px', laptop: '70.5px' },
            fontSize: { mobile: '30px', tablet: '42px', laptop: '56px' },
            letterSpacing: '-0.02em',
            color: '#333',
          }}
        >
          {formatMessage({ id: 'heroSectionTitle' })}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            lineHeight: { mobile: '20px', tablet: '24px', laptop: '28px' },
            fontSize: { mobile: '14px', tablet: '15px', laptop: '18px' },
            fontWeight: '600',
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
          <Button variant="contained">{formatMessage({ id: 'donate' })}</Button>
          <Button variant="contained" color="secondary">
            {formatMessage({ id: 'joinUs' })}
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <HeroImageGrid />
      </Box>
    </Box>
  );
}
