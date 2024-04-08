import { Box, Button, Input, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import joinUsBackground from '../../assets/joinUsBackground.png';

export default function JoinUsSection() {
  const { formatMessage } = useIntl();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '50vh',
        overflow: 'hidden',
        marginBottom:"80px"
      }}
    >
      <Image
        src={joinUsBackground}
        alt="Join Us Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          backgroundColor: 'rgba(165, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 3,
          color: '#FFF',
        }}
      >
        <Typography variant="h1" color="offWhite" sx={{ color: 'white' }}>
          {formatMessage({ id: 'joinUsTitle' })}
        </Typography>
        <Input
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          sx={{
            borderRadius: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '6px 16px',
            margin: '10px 0',
            color: '#FFF',
            '&::placeholder': {
              color: 'white',
            },
            width: '800px',
            borderBottom: 0,
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: '50px' }}
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
    </Box>
  );
}
