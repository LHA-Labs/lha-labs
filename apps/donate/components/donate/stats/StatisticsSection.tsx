import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import wallet from '../../../public/assets/wallet.png';
import ProgressLevel from './ProgressLevel';

export default function StatisticSection() {
  const { formatMessage, formatNumber, formatDate } = useIntl();
  //TODO: INTERGRATE FINANCE STATS HERE
  const financeStats = {
    target: 4000000,
    received: 150400,
    donationEndDate: new Date('24 August 2024 10:00').toISOString(),
  };
  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 2,
        background: '#F5F5F590',
        padding: { mobile: '20px 32px', laptop: '24px 118px' },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          alignItems: 'end',
          gridTemplateColumns: { mobile: '1fr', laptop: 'auto auto 1fr' },
          justifyItems: { mobile: 'center', laptop: 'end' },
          gap: '30px',
        }}
      >
        <Box sx={{ display: { laptop: 'block', mobile: 'none' } }}>
          <Image src={wallet} alt="Porte monnaie" />
        </Box>
        <Box>
          <Typography variant="h3" sx={{ color: 'var(--body)', padding: 0 }}>
            {formatMessage({ id: 'targetAmount' })}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: 'var(--titleActive)', padding: 0 }}
          >
            {formatNumber(financeStats.target, {
              style: 'currency',
              currency: 'xaf',
            })}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'var(--placeholder)', padding: 0 }}
          >
            {`${formatMessage({ id: 'endsOn' })} ${formatDate(
              financeStats.donationEndDate,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
              }
            )}`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: 'var(--placeholder)', padding: 0 }}
          >
            {formatMessage({ id: 'amountReceived' })}
          </Typography>
          <Typography variant="h2" sx={{ color: 'var(--success)', padding: 0 }}>
            {formatNumber(financeStats.received, {
              style: 'currency',
              currency: 'xaf',
            })}
          </Typography>
        </Box>
      </Box>
      <ProgressLevel
        progress={(financeStats.received / financeStats.target) * 100}
      />
    </Box>
  );
}
