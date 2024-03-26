import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import SectionHeader from '../Landing/SectionHeader';

interface Sponsor {
  name: string;
  logo_ref: string;
  website: string;
}

function Sponsors() {
  const { formatMessage } = useIntl();

  const sponsors: Sponsor[] = [
    {
      logo_ref: '/assets/logo_glom.png',
      name: 'GLOM',
      website: 'https://google.com',
    },
    {
      logo_ref: '/assets/logo_hif.png',
      name: 'Hope Investment Fund',
      website: 'https://google.com',
    },
    {
      logo_ref: '/assets/logo_hopehome.png',
      name: 'HopeHome',
      website: 'https://google.com',
    },
    {
      logo_ref: '/assets/logo_asbed.jpg',
      name: 'ASBED',
      website: 'https://google.com',
    },
  ];
  return (
    <Box p={1.5}>
      <SectionHeader
        title={'ourSponsors'}
        subtitle={'ourSponsorsSectionSubtitle'}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 150px))',
        }}
      >
        {sponsors.map(({ logo_ref, name, website }, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                border: '2px solid var(--primary)',
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
              }}
              key={index}
            >
              <Image
                src={logo_ref}
                alt={name}
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            {index !== sponsors.length - 1 && (
              <Image
                src="/assets/line_heart.png"
                alt=""
                width={60}
                height={22}
              />
            )}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: 3,
        }}
      >
        <Button variant="contained" color="primary">
          Devenier partenaire
        </Button>
        <Button variant="outlined" color="primary">
          View all
        </Button>
      </Box>
    </Box>
  );
}

export default Sponsors;