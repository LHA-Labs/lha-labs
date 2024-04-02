import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function AboutUsHeader() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: { mobile: '12px 32px', laptop: '0 207px' },
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {formatMessage({ id: 'aboutUsHeaderTitle' })}
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        {formatMessage({ id: 'aboutUsSubtitle1' })}
        <Typography component="span" color="primary">
          {` ${formatMessage({ id: 'aboutUsSubtitle2' })}`}
        </Typography>
      </Typography>
    </Box>
  );
}
