import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Scrollbars from 'rc-scrollbars';
import { useIntl } from 'react-intl';
import SectionHeader from '../SectionHeader';
import DonorCard from './DonorCard';

export interface Donor {
  name: string;
  image: string;
}
const donors: Donor[] = [
  {
    name: 'Ulriche Nguemete',
    image: '',
  },
  {
    name: 'Daniella Gassant',
    image: '',
  },
  {
    name: 'Lesley Kengah',
    image: '',
  },
  {
    name: 'Isabelle Essama',
    image: '',
  },
  {
    name: 'Cyntiche Nguemete',
    image: '',
  },
  {
    name: 'Bolivan Donfack',
    image: '',
  },
  {
    name: 'Lorena Kuitchou',
    image: '',
  },
  {
    name: 'Vigne Paul',
    image: '',
  },
  {
    name: 'Samira Tientcheu',
    image: '',
  },
  {
    name: 'Dassi Daril',
    image: '',
  },
  {
    name: 'Alyson Djoumatchoua',
    image: '',
  },
  {
    name: 'Ange Noubissie',
    image: '',
  },
  {
    name: 'Emmanuel Tientcheu',
    image: '',
  },
  {
    name: 'Chistianne Possi',
    image: '',
  },
  {
    name: 'Danielle Nguemete',
    image: '',
  },
  {
    name: 'Darelle Talla',
    image: '',
  },
  {
    name: 'Dharol Fotsing',
    image: '',
  },
  {
    name: 'Esteva Tiako',
    image: '',
  },
  {
    name: 'Fatima Lele',
    image: '',
  },
  {
    name: 'Hilarie Fotso',
    image: '',
  },
  {
    name: 'Ines Ankene',
    image: '',
  },
  {
    name: 'Ivan Bosso',
    image: '',
  },
  {
    name: 'Jennifer Tchami',
    image: '',
  },
  {
    name: 'Jessica Nguena',
    image: '',
  },
  {
    name: 'Leticia Kuemo',
    image: '',
  },
  {
    name: 'Negou Zidane',
    image: '',
  },
  {
    name: 'Nikita Tchana',
    image: '',
  },
  {
    name: 'Presley Talla',
    image: '',
  },
  {
    name: 'Scott Nyadjeu',
    image: '',
  },
  {
    name: 'Stelane Mbeh',
    image: '',
  },
  {
    name: 'Deuga Ulrich',
    image: '',
  },
  {
    name: 'Yannick Feuyou',
    image: '',
  },
  {
    name: 'Famille Kouatchoua',
    image: '',
  },
  {
    name: 'Famille Yonga',
    image: '',
  },
  {
    name: 'Famille Youmbi',
    image: '',
  },
  // {
  //   name: 'Armand Meppa',
  //   image: '',
  // },
  // {
  //   name: 'Dylane Bengono',
  //   image: '',
  // },
  // {
  //   name: 'Kengne David',
  //   image: '',
  // },
  // {
  //   name: 'Kuidja Marco',
  //   image: '',
  // },
  // {
  //   name: 'Desmond Nde',
  //   image: '',
  // },
  // {
  //   name: 'Vidal Tchapleu',
  //   image: '',
  // },
];

function DonorsSection() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 3,
      }}
    >
      <Box
        sx={{
          padding: { mobile: '12px 32px 0 32px', laptop: '48px 118px 0 118px' },
          display: 'grid',
          rowGap: 3,
        }}
      >
        <SectionHeader title={'ourDonors'} subtitle={'ourDonorsSubtitle'} />
        <Box
          sx={{
            position: 'relative',
            display: { mobile: 'block', laptop: 'none' },
          }}
        >
          <Scrollbars
            universal
            autoHide
            style={{ height: donors.length > 7 ? '587px' : donors.length * 86 }}
          >
            <Box sx={{ display: 'grid', rowGap: 2 }}>
              {donors.map(({ name, image }, index) => (
                <DonorCard key={index} name={name} image={image} />
              ))}
            </Box>
          </Scrollbars>
          <Box
            sx={{
              backgroundColor: 'var(--primary)',
              width: '70px',
              position: 'absolute',
              left: 0,
              height: '100%',
              borderRadius: '52px',
              top: 0,
              zIndex: -100,
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '100px',
              position: 'absolute',
              bottom: 0,
              backgroundImage:
                'linear-gradient(to top, white 10%, rgba(0,0,0,0) )',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: { mobile: 'none', laptop: 'block' },
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            padding: '0 118px 0px 118px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'var(--primary)',
              height: '90px',
              borderRadius: '80px',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
          }}
        >
          <Scrollbars autoHide universal autoHeight>
            <Box
              sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                columnGap: 3,
                alignItems: 'center',
              }}
            >
              {donors.map(({ name, image }, index) => (
                <DonorCard key={index} name={name} image={image} />
              ))}
            </Box>
          </Scrollbars>
        </Box>
      </Box>
      <Box
        sx={{
          justifySelf: 'center',
          padding: { mobile: '0 32px 32px 32px', laptop: '48px 118px 0 118px' },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => push('/join-us')}
        >
          {formatMessage({ id: 'joinUs' })}
        </Button>
      </Box>
    </Box>
  );
}

export default DonorsSection;
