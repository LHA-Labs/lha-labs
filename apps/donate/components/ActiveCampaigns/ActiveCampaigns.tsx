import { Box, Divider, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import CampaignCard, { Campaign } from './CampaignCard';

function ActiveCampaigns() {
  const { formatMessage } = useIntl();
  const campaigns: Campaign[] = [
    {
      title: 'Opération 1 orphelin = 1 pack scolaire',
      date: new Date('14 Aout 2022 8:00'),
      images: [],
      link: 'https://google.com',
      place: 'Douala, Cameroun',
      description:
        "Joignez-vous à nous dans cette initiative significative et faites une différence concrète dans la vie d'un enfant.  Joignez-vous à nous dans cette initiative significative.",
    },
  ];
  return (
    <Box component="section" sx={{ padding: 1.5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <Typography
          sx={{
            color: 'var(--primary)',
            fontWeight: 'var(--medium)',
          }}
        >
          {formatMessage({ id: 'activeCampaigns' })}
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
          {formatMessage({ id: 'activeCampaignsSubtitle' })}
        </Typography>
        <Divider
          sx={{
            border: '1px solid var(--primary)',
            width: '90px',
            marginTop: '10px',
          }}
        />
      </Box>
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} campaign={campaign} />
      ))}
    </Box>
  );
}

export default ActiveCampaigns;
