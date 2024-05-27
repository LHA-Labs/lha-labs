import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import SectionHeader from '../SectionHeader';
import SponsorLogo from './SponsorLogo';

export interface Sponsor {
  name: string;
  logo_ref: string;
  website?: string;
}

function Sponsors() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();
  const assoication_whatsapp = '+33780772986';
  const tags = `#lha #destitute-children #lha-sponsor #sourire-aux-orphelins`;
  const becomePartnerMessage = `${formatMessage({
    id: 'becomePartnerMessageHeader',
  })}\n\n${formatMessage({
    id: 'becomePartnerMessageBody',
  })}\n\n${formatMessage({
    id: 'becomePartnerMessageFooter',
  })}\n\n${tags}`;

  const [fullUrl, setFullUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  const sponsors: Sponsor[] = [
    {
      logo_ref: '/assets/logo_asbed.jpg',
      name: 'ASBED',
      website: 'https://asbedworld.org/',
    },
    {
      logo_ref: '/assets/logo_hopehome.png',
      name: 'HopeHome',
      website: 'https://www.facebook.com/SCIhopehome',
    },
    {
      logo_ref: '/assets/logo_ispa.png',
      name: 'ISPA',
      website: 'https://www.facebook.com/ispaacademy',
    },
    {
      logo_ref: '/assets/logo_hif.png',
      name: 'Hope Investment Fund',
      website: 'https://google.com',
    },
    {
      logo_ref: '/assets/logo_glom.png',
      name: 'GLOM',
      website: '#',
    },
    {
      logo_ref: '/assets/logo_danla_hair.png',
      name: 'GLOM',
      website: 'https://www.facebook.com/danllaHairr',
    },
  ];
  return (
    <Box
      component="section"
      id="sponsors"
      sx={{
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
        display: 'grid',
        rowGap: { laptop: 4, mobile: 2.6 },
      }}
    >
      <SectionHeader
        title={'ourPartners'}
        subtitle={'ourSponsorsSectionSubtitle'}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 150px))',
          justifyContent: 'center',
          rowGap: 3,
          columnGap: 5,
        }}
      >
        {sponsors.map((sponsor, index) => (
          <SponsorLogo {...sponsor} key={index} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        <Button
          component="a"
          target="_blank"
          variant="contained"
          color="primary"
          href={`https://api.whatsapp.com/send/?phone=${assoication_whatsapp}&text=${encodeURIComponent(
            `${becomePartnerMessage}\n${fullUrl}${
              fullUrl.includes('#') ? '' : '#sponsors'
            }`
          )}`}
          sx={{ textAlign: 'center' }}
        >
          {formatMessage({ id: 'becomePartner' })}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => push('/join-us')}
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
    </Box>
  );
}

export default Sponsors;
