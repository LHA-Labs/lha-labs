import { Box, Divider, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

interface sectionHeaderProps {
  title: string;
  subtitle: string;
}
export default function SectionHeader({ title, subtitle }: sectionHeaderProps) {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        padding: '10px 0',
        display: 'grid',
        justifyItems: 'center',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          color: 'var(--primary)',
          fontWeight: 'var(--medium)',
        }}
      >
        {formatMessage({ id: title })}
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'var(--semiBold)',
          fontSize: '20px',
          lineHeight: '24px',
          color: 'var(--titleActive)',
        }}
      >
        {formatMessage({ id: subtitle })}
      </Typography>
      <Divider
        sx={{
          border: '1px solid var(--primary)',
          width: '90px',
          marginTop: '10px',
        }}
      />
    </Box>
  );
}
