import previous from '@iconify-icons/fluent/chevron-left-32-regular';
import next from '@iconify-icons/fluent/chevron-right-32-regular';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import SectionHeader from '../SectionHeader';
import CampaignCard, { Campaign } from './CampaignCard';

function ActiveCampaigns() {
  const { formatMessage } = useIntl();
  const campaigns: Campaign[] = [
    {
      title: 'Opération 1 orphelin = 1 pack scolaire',
      date: new Date('14 August 2022 8:00'),
      images: [],
      link: 'https://google.com',
      place: 'Douala, Cameroun',
      description:
        "Joignez-vous à nous dans cette initiative significative et faites une différence concrète dans la vie d'un enfant.  Joignez-vous à nous dans cette initiative significative.",
    },
    {
      title: 'Opération 1 orphelin = 1 pack scolaire',
      date: new Date('14 August 2022 8:00'),
      images: [],
      link: 'https://google.com',
      place: 'Douala, Cameroun',
      description:
        "Joignez-vous à nous dans cette initiative significative et faites une différence concrète dans la vie d'un enfant.  Joignez-vous à nous dans cette initiative significative.",
    },
  ];

  const [activeCampaignIndex, setActiveCampaignIndex] = useState<number>(0);

  function handleNext() {
    setActiveCampaignIndex((prev) => {
      if (prev + 2 <= campaigns.length) return prev + 1;
      return prev;
    });
  }

  function handlePrevious() {
    setActiveCampaignIndex((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return prev;
    });
  }

  function computeProgress() {
    return ((activeCampaignIndex + 1) / campaigns.length) * 100;
  }

  return (
    <Box
      component="section"
      sx={{
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
        display: 'grid',
        rowGap: { laptop: 4, mobile: 2.6 },
        backgroundImage: 'url(/assets/campaigns_bg.png)',
        backgroundPosition: '0 -280px',
      }}
    >
      <SectionHeader
        title="activeCampaigns"
        subtitle="activeCampaignsSubtitle"
      />
      <Box key={activeCampaignIndex} data-aos={'flip-left'}>
        <CampaignCard {...campaigns[activeCampaignIndex]} />
      </Box>
      <Box sx={{ display: 'grid', rowGap: 2 }}>
        <LinearProgress
          variant="buffer"
          value={computeProgress()}
          valueBuffer={computeProgress() + 20}
        />
        <Box
          sx={{
            justifySelf: 'center',
            display: 'grid',
            justifyContent: 'center',
            gridAutoFlow: 'column',
            columnGap: 2,
            alignItems: 'center',
          }}
        >
          <Tooltip title={formatMessage({ id: 'previous' })}>
            <IconButton
              size="small"
              onClick={handlePrevious}
              sx={{ background: '#F5F5F5' }}
            >
              <Icon icon={previous} fontSize={24} color="var(--primary)" />
            </IconButton>
          </Tooltip>
          <Tooltip title={formatMessage({ id: 'next' })}>
            <IconButton
              size="small"
              onClick={handleNext}
              sx={{ background: '#F5F5F5' }}
            >
              <Icon icon={next} fontSize={24} color="var(--primary)" />
            </IconButton>
          </Tooltip>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ justifySelf: 'center' }}
        >
          {formatMessage({ id: 'viewAll' })}
        </Button>
      </Box>
    </Box>
  );
}

export default ActiveCampaigns;
