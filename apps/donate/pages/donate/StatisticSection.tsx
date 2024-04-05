import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import porteMonnaie from '../../assets/porteMonnaie.png';
import { useIntl } from 'react-intl';

export default function StatisticSection() {
  const {formatMessage}= useIntl();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '1512px',
        height: 'auto',
        gap: '32px',
        padding: '24px 118px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--background)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          <Image src={porteMonnaie} alt="Porte monnaie"></Image>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h3" sx={{ color: 'var(--body)' }}>
              {formatMessage({id:"montantEspere"})}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '5px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'var(--titleActive)' }}>
                1 000 000
              </Typography>
              <Typography variant="h3" sx={{ color: 'var(--titleActive)' }}>
                FCFA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'var(--placeholder)' }}>
              {formatMessage({id:"date"})}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '100px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h5" sx={{ color: 'var(--placeholder)' }}>
              {formatMessage({id:"totalEnCaisse"})}
            </Typography>
            <Typography variant="h2" sx={{ color: 'var(--success)' }}>
              500 000fCFA
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h5" sx={{ color: 'var(--placeholder)' }}>
              {formatMessage({id:"entreeMensuelle"})}
            </Typography>
            <Typography variant="h2">50 000fCFA</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '39px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        <Typography variant="body2" sx={{ color: 'var(--primary)' }}>
          50%
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: '15px',
            borderRadius: '50px',
            background: 'var(--line)',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '15px',
              borderRadius: '50px',
              background: 'var(--primary)',
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
