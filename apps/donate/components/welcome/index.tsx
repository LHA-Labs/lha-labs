import { Box, Button, Fab, Typography } from '@mui/material';
import ImageGrid from '../imageGid';
import { useIntl } from 'react-intl';

export default function HeroSection() {
  const { formatMessage } = useIntl();
  return (
    <Box component="section" sx={{ position: 'relative' }}>
      <Typography
        variant="h2"
        sx={{
          lineHeight: '36px',
          fontSize: '30px',
          letterSpacing: '-0.02em',
          textAlign: 'left',
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
        }}
      >
        {formatMessage({ id: 'heroSectionSubtitle' })}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained">{formatMessage({ id: 'donate' })}</Button>
        <Button variant="contained" color="secondary">
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageGrid />
      </Box>
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: 'absolute',
          bottom: '60px',
          right: '10px',
          width: '-webkit-fill-available',
          fontWeight: 600,
          fontFamily: 'Montserrat',
          fontSize: '18px',
          lineHeight: '16px',
          textTransform: 'lowercase',
        }}
      >
        {formatMessage({ id: 'donate' })}
      </Fab>
    </Box>
  );
}
