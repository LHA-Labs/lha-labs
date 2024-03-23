import { theme } from '@lha-labs/theme';
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
        <Typography color="primary">About Us</Typography>
        <Typography
          textAlign="center"
          sx={{
            textAlign: 'center',
            fontWeight: 'var(--bold)',
            fontSize: '17px',
            lineHeight: '24px',
          }}
        >{`Welcome to the Let's Help Association`}</Typography>
        <Box component="span"></Box>
      </Box>
      <Typography className={styles.what_about_us}>
        {`Let's Help Association, devoted to compassion and social impact, is committed to providing meaningful assistance to communities in need. Through diverse humanitarian initiatives, the association aims to make a positive difference by offering tangible support, whether through the provision of essential resources, education, or the promotion of well-being. Together, we build bridges to a better future, one act at a time, fostering a spirit of unity and solidarity`}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained" className={styles.button}>
          Nous joindre
        </Button>
        <Button variant="contained" color="secondary" className={styles.button}>
          More about us
        </Button>
      </Box>
      <Box className={styles.rate}>
        {letsHelpStatistics.map(({ label, value, unit }, index) => (
          <Box key={index}>
            <Typography
              sx={{ fontSize: '30px', lineHeight: '36px', fontWeight: 'bold' }}
            >
              +{`${value > 999999 ? `2M` : value} ${unit ?? ''}`}
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
