import previous from '@iconify-icons/fluent/chevron-left-32-regular';
import next from '@iconify-icons/fluent/chevron-right-32-regular';
import { Icon } from '@iconify/react';
import { Box, IconButton, LinearProgress, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import SectionHeader from '../SectionHeader';
import CampaignCard, { Campaign } from './CampaignCard';

function ActiveCampaigns() {
  const { formatMessage, formatDate } = useIntl();
  const campaigns: Campaign[] = [
    {
      title: 'Opération 1 orphelin = 1 pack scolaire Acte 2',
      date: new Date('24 August 2024 10:00'),
      images: ['/assets/acte2/flyer.jpg'],
      link: 'https://google.com',
      place: 'Douala, Cameroun',
      description: `Nous croyons que chaque enfant mérite une chance égale de réussir dans la vie.
        Nous croyons également que l'éducation est la clé qui libère le potentiel de chacun de nous.
        C'est dans cette logique que s'inscrit l'extension de notre dernière action reussie ; baptisé "1 Orphelin, 1 Pack Scolaire Acte 2" dans la ville de Douala ce ${formatDate(
          new Date('24 August 2024 10:00'),
          {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
          }
        )}.`,
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
      id="activeCampaign"
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
        {campaigns.length > 1 && (
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
        )}
        {
          //TODO: ALL CAMPAIGNS PAGE NOT AVAILABLE YET.
          // <Button
          //   variant="outlined"
          //   color="primary"
          //   sx={{ justifySelf: 'center' }}
          // >
          //   {formatMessage({ id: 'viewAll' })}
          // </Button>
        }
      </Box>
    </Box>
  );
}

export default ActiveCampaigns;
