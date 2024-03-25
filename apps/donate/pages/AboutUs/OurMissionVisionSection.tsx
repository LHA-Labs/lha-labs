import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import missionIcon from '../../assets/mission.png';
import visionIcon from '../../assets/vision-strategique.png';

export default function OurMissionVisionSection() {
  const { formatMessage } = useIntl();

  interface elmt {
    title: string;
    paragraph: string;
  }
  const element: elmt[] = [
    {
      title: 'Mission',
      paragraph:
        'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality.At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future.',
    },
    {
      title: 'Value',
      paragraph:
        'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality. At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future.',
    },
  ];

  const redElement: elmt[] = [
    {
      title: 'Vision',
      paragraph:
        'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality.At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future.',
    },
    {
      title: 'Purpose',
      paragraph:
        'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality. At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future.',
    },
  ];

  return (
    <Box
    sx={{
      marginBottom: '80px',
    }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          padding: '0px 118px',
          justifyContent: 'space-between',
        }}
      >
        {/* {element.map(({ title, paragraph }, index) => ( */}
        <Box
          // key={index}
          color="background"
          sx={{
            width: '50%',
            backgroundColor: '#F5F5F5',
            padding: '28px 46px',
          }}
        >
          <Box
            sx={{
              height: '78px',
              width: '78px',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Image src={missionIcon} alt="Our Mission" />
          </Box>
          <Typography variant="h3" sx={{ color: '#A50000' }}>
            {formatMessage({ id: `${element[0].title}` })}
          </Typography>
          <Typography variant="body2" sx={{ color: '#000' }}>
            {formatMessage({ id: `${element[0].paragraph}` })}
          </Typography>
        </Box>
        {/* ))} */}
        <Box
          sx={{
            width: '50%',
            backgroundColor: '#A50000',
            padding: '28px 46px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            color="background"
            sx={{
              backgroundColor: '#FFF',
              borderRadius: '50%',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Image src={visionIcon} alt="Our Vision" />
          </Box>
          <Typography variant="h3" color="white" sx={{}}>
            {formatMessage({ id: `${redElement[0].title}` })}
          </Typography>
          <Typography variant="body2" color="white" sx={{}}>
            {formatMessage({ id: `${redElement[0].paragraph}` })}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          padding: '0px 118px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '50%',
            backgroundColor: '#A50000',
            padding: '28px 46px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            color="background"
            sx={{
              backgroundColor: '#FFF',
              borderRadius: '50%',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Image src={visionIcon} alt="Our Vision" />
          </Box>
          <Typography variant="h3" color="white" sx={{}}>
            {formatMessage({ id: `${redElement[1].title}` })}
          </Typography>
          <Typography variant="body2" color="white" sx={{}}>
            {formatMessage({ id: `${redElement[1].paragraph}` })}
          </Typography>
        </Box>
        {/* {element.map(({ title, paragraph }, index) => ( */}
        <Box
          // key={index}
          color="background"
          sx={{
            width: '50%',
            backgroundColor: '#F5F5F5',
            padding: '28px 46px',
          }}
        >
          <Box
            sx={{
              height: '78px',
              width: '78px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignContent: 'center',
            }}
          >
            <Image src={missionIcon} alt="Our Mission" />
          </Box>
          <Typography variant="h3" sx={{ color: '#A50000' }}>
            {formatMessage({ id: `${element[1].title}` })}
          </Typography>
          <Typography variant="body2" sx={{ color: '#000' }}>
            {formatMessage({ id: `${element[1].paragraph}` })}
          </Typography>
        </Box>
        {/* ))} */}
      </Box>
    </Box>
  );
}
