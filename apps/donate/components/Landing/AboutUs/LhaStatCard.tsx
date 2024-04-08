import { shortenNumber } from '@lha-labs/utils';
import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { ILetsHelpStat } from '../../../services/stats';

export default function LhaStatCard({ label, value, unit }: ILetsHelpStat) {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '30px',
          lineHeight: '36px',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        +{`${shortenNumber(value)} ${unit ?? ''}`}
      </Typography>
      <Typography
        sx={{
          fontSize: '13px',
          fontWeight: 'var(--semiBold)',
          lineHeight: '12px',
          padding: '3px',
          backgroundColor: 'rgba(165, 0, 0, 0.2)',
          width: 'fit-content',
          color: '#333',
          borderRadius: 0.5,
        }}
      >
        {formatMessage({ id: label })}
      </Typography>
    </Box>
  );
}
