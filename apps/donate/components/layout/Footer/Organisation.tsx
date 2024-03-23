import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function Organisation() {
  const { formatMessage } = useIntl();

  const listOrganisation: string[] = [
    'aboutUs',
    'partners',
    'makeAnonymousDonation',
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        alignContent: 'start',
        rowGap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '-0.42px',
          color: '#333',
        }}
      >
        {formatMessage({ id: 'Organisation' })}
      </Typography>
      <Box sx={{ display: 'grid', rowGap: 1 }}>
        {listOrganisation.map((title, index) => (
          <Typography key={index} sx={{ fontWeight: 600, fontSize: '14px' }}>
            {formatMessage({ id: `${title}` })}
          </Typography>
        ))}
        <Typography
          component="a"
          target="_blank"
          href="mailto:letshelp@gmail.com"
          sx={{ fontWeight: 600, fontSize: '14px' }}
        >
          letshelp@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
