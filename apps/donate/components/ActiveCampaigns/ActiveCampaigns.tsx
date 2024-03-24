import { Box } from '@mui/material';
import SectionHeader from '../Landing/SectionHeader';
import CampaignCard, { Campaign } from './CampaignCard';

function ActiveCampaigns() {
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
  ];
  return (
    <Box
      component="section"
      sx={{
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
        display:'grid',
        rowGap:{laptop:4, mobile:2.6}
      }}
    >
      <SectionHeader
        title="activeCampaigns"
        subtitle="activeCampaignsSubtitle"
      />
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} campaign={campaign} />
      ))}
    </Box>
  );
}

export default ActiveCampaigns;
