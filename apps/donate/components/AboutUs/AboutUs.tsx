import { theme } from '@lha-labs/theme';
import { shortenNumber } from '@lha-labs/utils';
import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import styles from './about_us.module.css';

interface ILetsHelpStat {
  label: string;
  value: number;
  unit?: string;
}
function AboutUs() {
  const { formatMessage } = useIntl();
  const letsHelpStatistics: ILetsHelpStat[] = [
    { label: 'donors', value: 100 },
    { label: 'sponsors', value: 15 },
    { label: 'orphans', value: 500 },
    { label: 'receivedDonations', value: 2000000, unit: 'XAF' },
    { label: 'partners', value: 16 },
  ];
  return (
    <Box
      component="section"
      sx={{ backgroundColor: theme.common.inputBackground, padding: 1.5 }}
    >
      <Box className={styles.about_us_title}>
        <Typography color="primary">
          {formatMessage({ id: 'aboutUs' })}
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            textAlign: 'center',
            fontWeight: 'var(--bold)',
            fontSize: '17px',
            lineHeight: '24px',
          }}
        >
          {formatMessage({ id: 'aboutUsSectionSubtitle' })}
        </Typography>
        <Box component="span"></Box>
      </Box>
      <Typography className={styles.what_about_us}>
        {formatMessage({ id: 'aboutUsMessage' })}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          columnGap: 2,
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{ borderRadius: '20px' }}
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ borderRadius: '20px' }}
        >
          {formatMessage({ id: 'moreAboutUs' })}
        </Button>
      </Box>
      <Box className={styles.rate}>
        {letsHelpStatistics.map(({ label, value, unit }, index) => (
          <Box key={index}>
            <Typography
              sx={{ fontSize: '30px', lineHeight: '36px', fontWeight: 'bold' }}
            >
              +{`${shortenNumber(value)} ${unit ?? ''}`}
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 'var(--semiBold)',
                lineHeight: '12px',
                padding: '3px',
              }}
              className={styles.text_specification}
            >
              {formatMessage({ id: label })}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AboutUs;
