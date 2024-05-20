import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function JoinUsPreFooter() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  return (
    <Box
      sx={{
        height: '428px',
        background: "url('/assets/join_us_bg.png')",
        boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: { mobile: '30px 0', tablet: '103px 0' },
        gap: { mobile: '32px', tablet: '24px' },
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
      }}
    >
      <Typography
        sx={{
          padding: { mobile: 0, tablet: '29px 0' },
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'MV Boli',
          fontSize: { mobile: '36px', tablet: '48px' },
          fontWeight: 400,
          lineHeight: '45.5px',
          width: { mobile: '100%', laptop: '50%' },
        }}
      >
        {formatMessage({ id: 'joinUsPreFooterMessage' })}
      </Typography>
      <Button
        onClick={() => push('/join-us')}
        variant="contained"
        size="large"
        color="inherit"
        sx={{ color: 'black' }}
      >
        {formatMessage({ id: 'joinUs' })}
      </Button>
    </Box>
  );
}
