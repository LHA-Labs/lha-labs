import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function GetInvolved() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: '#333',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '-0.42px',
        }}
      >
        {formatMessage({ id: 'getInvolved' })}
      </Typography>
      <Typography
        sx={{
          color: '#666',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '28px',
          width: {
            mobile: '100%',
            laptop: '70%',
          },
        }}
      >
        {formatMessage({
          id: 'getInvolvedMessage',
        })}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: 2,
          justifySelf: {
            mobile: 'stretch',
            laptop: 'start',
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => push('/donate')}
        >
          {formatMessage({ id: 'makeADonation' })}
        </Button>
        <Button
          onClick={() => push('/join-us')}
          variant="contained"
          color="inherit"
          sx={{ color: '#333' }}
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
    </Box>
  );
}
