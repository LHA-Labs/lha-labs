import { theme } from '@lha-labs/theme';
import { shortenNumber } from '@lha-labs/utils';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

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
      sx={{
        backgroundColor: theme.common.inputBackground,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
      }}
    >
      <Box
        sx={{
          padding: '10px 0',
          display: 'grid',
          justifyItems: 'center',
        }}
      >
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
        <Divider
          sx={{
            border: '1px solid var(--primary)',
            width: '90px',
            marginTop: '10px',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { laptop: '4.3fr 5.7fr', mobile: 'none' },
          columnGap: 5,
          alignItems: 'stretch',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 'var(--semiBold)',
              padding: '20px 0',
              lineHeight: '24px',
              textAlign: 'justify',
            }}
          >
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
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#fff',
            gap: '20px',
            margin: '20px 0',
            padding: { mobile: '10px', tablet: '20px 73px' },
            borderRadius: '10px',
          }}
        >
          {letsHelpStatistics.map(({ label, value, unit }, index) => (
            <Box key={index}>
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
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;