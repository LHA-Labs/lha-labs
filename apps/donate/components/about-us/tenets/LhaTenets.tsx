import { Box } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import TenetCard from './TenetCard';

export interface Tenet {
  icon: ReactNode;
  title: string;
  description: string | Array<string>;
  colored?: boolean;
}
export default function LhaTenets() {
  const element: Tenet[] = [
    {
      icon: (
        <Image
          src="/assets/mission.png"
          alt="Our Mission"
          height={60}
          width={60}
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '100%',
            padding: '5px',
          }}
        />
      ),
      title: 'ourMission',
      description:
        "At Let's help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality.",
    },
    {
      icon: (
        <Image
          src="/assets/vision.png"
          alt="Our Mission"
          height={78}
          width={78}
          style={{
            padding: '15px',
            borderRadius: '100%',
            backgroundColor: 'white',
          }}
        />
      ),
      title: 'ourVision',
      description: [
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
      ],
      colored: true,
    },
    {
      icon: (
        <Image
          src="/assets/purpose.png"
          alt="Our Mission"
          height={78}
          width={78}
          style={{
            padding: '15px',
            borderRadius: '60%',
            backgroundColor: 'white',
          }}
        />
      ),
      title: 'ourPurpose',
      description: [
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
        "At let's Help Association, our mission is to empower lives through compassionate initiatives. By promoting education",
      ],
      colored: true,
    },
    {
      icon: (
        <Image
          src="/assets/mission.png"
          alt="Our Mission"
          height={60}
          width={60}
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '100%',
            padding: '5px',
          }}
        />
      ),
      title: 'ourValues',
      description:
        "At Let's help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more resilient future. Join us on this journey to build a world of hope and equality.",
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { laptop: 'repeat(2, 1fr)' },
        borderRadius: '20px',
        padding: { mobile: '0px', laptop: '0 118px' },
      }}
    >
      {element.map((tenet, index) => (
        <TenetCard {...tenet} index={index} key={index} />
      ))}
    </Box>
  );
}
