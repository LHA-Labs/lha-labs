import { theme } from '@lha-labs/theme';
import { Box, Button, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { ILetsHelpStat, useStats } from '../../../services/stats';
import SectionHeader from '../SectionHeader';
import LhaStatCard from './LhaStatCard';

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
          {letsHelpStatistics.map((stat, index) => (
            <LhaStatCard {...stat} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
