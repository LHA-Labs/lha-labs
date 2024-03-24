import { Box } from '@mui/material';
import SectionHeader from '../Landing/SectionHeader';
import DonorCard from './DonorCard';
import { useIntl } from 'react-intl';

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
  const {formatMessage} = useIntl()
  return (
    <Box sx={{ padding: { mobile: '12px 32px', laptop: '48px 118px' } }}>
      <SectionHeader
        title={formatMessage({id:'ourDonors'})}
        subtitle={formatMessage({id:'ourDonorsSubtitle'})}
      />
      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: 'inherit',
          position: 'relative',
          margin: '20px 0',
        }}
      >
        <Box sx={{ display: 'grid', rowGap: 2 }}>
          {donors.map(({ name, image }, index) => (
            <DonorCard key={index} name={name} image={image} />
          ))}
        </Box>
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
