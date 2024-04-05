import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import porteMonnaie from '../../assets/porteMonnaie.png';
import ProgressLevel from '../../components/donate/stats/ProgressLevel';

export default function StatisticSection({
  progressLevel = 55,
}: {
  progressLevel?: number;
}) {
  const { formatMessage } = useIntl();
  // const financeStats = {
  //   target: 1000,
  //   received: 500,
  // };
  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 2,
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
          <Image src={porteMonnaie} alt="Porte monnaie" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h3" sx={{ color: 'var(--body)' }}>
              {formatMessage({ id: 'montantEspere' })}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '5px',
              }}
            >
              <Typography variant="h1" sx={{ color: 'var(--titleActive)' }}>
                1 000 000 fcfa
              </Typography>
              <Typography variant="h3" sx={{ color: 'var(--titleActive)' }}>
                FCFA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'var(--placeholder)' }}>
              {formatMessage({ id: 'date' })}
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
              {formatMessage({ id: 'totalEnCaisse' })}
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
              {formatMessage({ id: 'entreeMensuelle' })}
            </Typography>
            <Typography variant="h2">50 000fCFA</Typography>
          </Box>
        </Box>
      </Box>
      <ProgressLevel progress={progressLevel} />
    </Box>
  );
}
