import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import ourPartnersBg from '../../assets/ourPartnersBg.png';

export default function OurPartnersPresentation() {
  const { formatMessage } = useIntl();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '40vh',
        overflow: 'hidden',
        marginBottom: '80px',
      }}
    >
      <Image
        src={ourPartnersBg}
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
          {formatMessage({ id: 'ourPartners' })}
        </Typography>
        <Typography variant="h3" color="offWhite" sx={{ color: 'white' }}>
          {formatMessage({ id: 'partnersDescription' })}
        </Typography>
      </Box>
    </Box>
  );
}
