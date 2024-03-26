import { theme } from '@lha-labs/theme';
import { shortenNumber } from '@lha-labs/utils';
import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import SectionHeader from '../SectionHeader';
import { ILetsHelpStat, useStats } from '../../../services/stats';

function AboutUs() {
  const { formatMessage } = useIntl();
  const letsHelpStatistics: ILetsHelpStat[] = useStats();
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.common.inputBackground,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
      }}
    >
      <SectionHeader title={'aboutUs'} subtitle="aboutUsSectionSubtitle" />
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
            <Button variant="contained">
              {formatMessage({ id: 'joinUs' })}
            </Button>
            <Button variant="contained" color="secondary">
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
