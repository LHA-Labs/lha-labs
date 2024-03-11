import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import missionIcon from '../../assets/mission.png';
import visionIcon from '../../assets/vision-strategique.png';

export default function OurMissionVisionSection() {
  const { formatMessage } = useIntl();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        padding: '0px 118px',
        justifyContent: 'space-between',
      }}
    >
      <Box
        color="body"
        sx={{
          width: '50%',
          backgroundColor: 'body',
          padding: '28px 46px',
        }}
      >
        <Image src={missionIcon} alt="Our Mission" />
        <Typography variant="h3" sx={{ color: '#A50000', marginTop: 2 }}>
          Mission
        </Typography>
        <Typography variant="body2" sx={{ color: '#000', marginTop: 2 }}>
          {formatMessage({ id: 'missionDescription' })}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '50%',
          backgroundColor: '#A50000',
          padding: '28px 46px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          color="background"
          sx={{
            backgroundColor: '#FFF',
            borderRadius: '50%',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          {' '}
          <Image src={visionIcon} alt="Our Vision" />
        </Box>
        <Typography variant="h3" color="offWhite" sx={{ marginBottom: 2 }}>
          Titre en Blanc
        </Typography>
        <Typography
          variant="body2"
          color="placeholder"
          sx={{ marginBottom: 2 }}
        >
          Élément 1
        </Typography>
      </Box>
    </Box>
  );
}
