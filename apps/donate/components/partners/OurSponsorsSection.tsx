import { Box } from '@mui/material';
import SectionHeader from '../Landing/SectionHeader';
import SponsorCard from './SponsorCard';

export interface Representative {
  imageRef: string;
  title: string;
  name: string;
}
export interface SponsorMessage {
  representative: Representative;
  sponsorName: string;
  sponsorImageRef: string;
  message: string;
}
export default function OurSponsorsSection() {
  const sponsors: SponsorMessage[] = [
    {
      message:
        'Nurturing Lives, Inspiring Futures: Transformative Initiatives that Illuminate Paths, Foster Growth, Cultivate Affection, and Instill Purposeful Living for All. Nurturing Lives, Inspiring Futures: Transformative Initiatives that Illuminate Paths, Foster Growth, Cultivate Affection, and Instill Purposeful Living for All. Nurturing Lives, Inspiring Futures:',
      representative: {
        imageRef: '/assets/LorrainPic.png',
        name: 'Tchakoumi Lorrain',
        title: 'CEO',
      },
      sponsorName: 'GLOM LLC',
      sponsorImageRef: '/assets/logo_glom.png',
    },
    {
      message:
        'Nurturing Lives, Inspiring Futures: Transformative Initiatives that Illuminate Paths, Foster Growth, Cultivate Affection, and Instill Purposeful Living for All. Nurturing Lives, Inspiring Futures: Transformative Initiatives that Illuminate Paths, Foster Growth, Cultivate Affection, and Instill Purposeful Living for All. Nurturing Lives, Inspiring Futures:',
      representative: {
        imageRef: '/assets/child4.jpeg',
        name: 'Nguemete Joseph',
        title: 'CEO',
      },
      sponsorName: 'Hope Home LLC',
      sponsorImageRef: '/assets/logo_hopehome.png',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        rowGap: 3,
        padding: { mobile: '0px 32px', laptop: '0px 118px' },
      }}
    >
      <SectionHeader
        title={'ourSponsors'}
        subtitle={'ourSponsorsSectionSubtitle'}
      />
      <Box sx={{ justifySelf: 'stretch', display: 'grid', rowGap: 3 }}>
        {sponsors.map((sponsor, index) => (
          <SponsorCard {...sponsor} key={index} />
        ))}
      </Box>
    </Box>
  );
}
