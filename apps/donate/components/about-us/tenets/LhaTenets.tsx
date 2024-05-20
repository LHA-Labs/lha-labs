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
  const tenets: Tenet[] = [
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
      description: 'lhaMissionStatement',
    },
    {
      icon: (
        <Image
          src="/assets/vision.png"
          alt="Our Vision"
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
      description: ['lhaVision1', 'lhaVision2'],
      colored: true,
    },
    {
      icon: (
        <Image
          src="/assets/purpose.png"
          alt="Our Purpose"
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
      description: ['lhaPurpose1', 'lhaPurpose2', 'lhaPurpose3', 'lhaPurpose4'],
      colored: true,
    },
    {
      icon: (
        <Image
          src="/assets/mission.png"
          alt="Our Values"
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
      description: 'lhaValues',
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
      {tenets.map((tenet, index) => (
        <TenetCard {...tenet} index={index} key={index} />
      ))}
    </Box>
  );
}
