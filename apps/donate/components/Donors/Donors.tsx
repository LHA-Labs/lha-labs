import { Box } from '@mui/material';
import Scrollbars from 'rc-scrollbars';
import { useIntl } from 'react-intl';
import SectionHeader from '../Landing/SectionHeader';
import DonorCard from './DonorCard';

export interface Donor {
  name: string;
  image: string;
}

const donors: Donor[] = [
  {
    name: 'Poukam pierre',
    image: '/assets/child1.jpg',
  },
  {
    name: 'Cyntiche nguemete',
    image: '/assets/child4.jpeg',
  },
  {
    name: 'Jessica Nguena',
    image: '/assets/child1.jpg',
  },
  {
    name: 'Poukam pierre',
    image: '/assets/child1.jpg',
  },
  {
    name: 'Cyntiche nguemete',
    image: '/assets/child4.jpeg',
  },
  {
    name: 'Jessica Nguena',
    image: '/assets/child1.jpg',
  },
  {
    name: 'Jessica Nguena',
    image: '/assets/child1.jpg',
  },
];

function DonorsSection() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 3,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
      }}
    >
      <SectionHeader
        title={formatMessage({ id: 'ourDonors' })}
        subtitle={formatMessage({ id: 'ourDonorsSubtitle' })}
      />
      <Box
        sx={{
          position: 'relative',
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
  );
}

export default DonorsSection;
