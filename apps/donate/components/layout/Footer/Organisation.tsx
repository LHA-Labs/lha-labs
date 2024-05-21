import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function Organisation() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  const listOrganisation: { title: string; action: () => void }[] = [
    { title: 'aboutUs', action: () => push('/about-us') },
    { title: 'partners', action: () => push('/#sponsors') },
    { title: 'makeAnonymousDonation', action: () => push('/donate') },
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
        {formatMessage({ id: 'organisation' })}
      </Typography>
      <Box sx={{ display: 'grid', rowGap: 1 }}>
        {listOrganisation.map(({ title, action }, index) => (
          <Typography
            key={index}
            onClick={action}
            sx={{
              fontWeight: 600,
              fontSize: '14px',
              color: '#333',
              cursor: 'pointer',
            }}
          >
            {formatMessage({ id: `${title}` })}
          </Typography>
        ))}
        <Typography
          component="a"
          target="_blank"
          href="mailto:letshelp@gmail.com"
          sx={{ fontWeight: 600, fontSize: '14px', color: '#333' }}
        >
          letshelp@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
