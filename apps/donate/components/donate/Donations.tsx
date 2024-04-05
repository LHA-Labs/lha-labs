import { Box, Typography } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';

export default function Donations() {
  const {formatMessage} = useIntl()
  return (
    <Box
      sx={{
        display: 'grid',
        padding: { mobile: '0 32px', laptop: '24px 118px' },
        rowGap: 2,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: 1,
          justifyItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: 'var(--primary)', padding: 0, textAlign: 'center' }}
        >
          {formatMessage({id:'lhaDonationList'})}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: 'var(--body)', padding: 0, textAlign: 'center' }}
        >
          {formatMessage({id:'resultOfOurEsteemedDonators'})}
        </Typography>
      </Box>
      <Box>table</Box>
    </Box>
  );
}
