import { Box } from '@mui/material';
import SectionHeader from '../Landing/SectionHeader';
import InfoBienfaiteur from '../infoBienfaiteur';

interface BienfaiteursInterface {
  name: string;
  image: string;
  profession: string;
}

const bienfaiteurData: BienfaiteursInterface[] = [
  {
    name: 'Poukam pierre',
    image: '/assets/International-Day-of-the-African-Child-781x441.jpg',
    profession: 'Software developer',
  },
  {
    name: 'Cyntiche nguemete',
    image: '/assets/UN0640668.jpeg',
    profession: 'Entrepreneur',
  },
  {
    name: 'Jessica Nguena',
    image:
      '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
    profession: 'DEV',
  },
  {
    name: 'Poukam pierre',
    image: '/assets/International-Day-of-the-African-Child-781x441.jpg',
    profession: 'Software developer',
  },
  {
    name: 'Cyntiche nguemete',
    image: '/assets/UN0640668.jpeg',
    profession: 'Entrepreneur',
  },
  {
    name: 'Jessica Nguena',
    image:
      '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
    profession: 'DEV',
  },
  {
    name: 'Jessica Nguena',
    image:
      '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
    profession: 'DEV',
  },
];

function OurBienfaiteurs() {
  return (
    <Box p={1.5}>
      <SectionHeader title="Our Bienfaiteurs" subtitle=" " />
      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: 'inherit',
          backgroundImage:
            'linear-gradient(to right, var(--primary) 27%, rgba(0,0,0,0) 27%)',
          position: 'relative',
          margin: '20px 0',
        }}
      >
        {bienfaiteurData.map(({ name, image, profession }, index) => (
          <Box key={index}>
            <InfoBienfaiteur
              name={name}
              image={image}
              profession={profession}
            />
          </Box>
        ))}
        <Box
          sx={{
            width: '100%',
            height: '100px',
            position: 'absolute',
            bottom: 0,
            backgroundImage:
              'linear-gradient(to top, white 10%, rgba(0,0,0,0) )',
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default OurBienfaiteurs;
