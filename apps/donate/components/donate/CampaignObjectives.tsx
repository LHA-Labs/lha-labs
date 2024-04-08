import arrowRight from '@iconify-icons/fluent/arrow-up-right-32-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import ping from '../../public/assets/ping.png';

export default function CampaignObjectives() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        columnGap: 3,
        justifyItems: 'end',
        padding: { mobile: '0 32px', laptop: '45px 118px' },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: '4px',
        }}
      >
        <Typography variant="h4" sx={{ color: 'var(--primary)', padding: 0 }}>
          {formatMessage({ id: 'campaignName' })}
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: 'var(--titleActive)', padding: 0 }}
        >
          1 Orphelin 1 Pack Scolaire
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
        }}
      >
        <Image src={ping} alt="ping" />
        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '200px',
            background: 'rgba(206, 0, 0, 0.10)',
            padding: '10px',
            gridTemplateColumns: '1fr auto',
          }}
        >
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {formatMessage({ id: 'objectiveMessage' })}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<Icon icon={arrowRight} color="white" />}
          >
            {formatMessage({ id: 'getObjectives' })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
