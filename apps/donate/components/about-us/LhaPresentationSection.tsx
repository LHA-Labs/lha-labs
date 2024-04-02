import { Box } from '@mui/system';
import Image from 'next/image';
import imgOfTeam1 from '../../public/assets/managing_team_1.png';
import imgOfTeam2 from '../../public/assets/managing_team_2.png';

export default function LhaPresentationSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: 2,
          padding: { mobile: '12px 32px', laptop: '48px 118px' },
        }}
      >
        <Image
          src={imgOfTeam1}
          alt="Managing team"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: 2,
            height: '100%',
            width: '100%',
          }}
        >
          <Image
            src={imgOfTeam2}
            alt="Managing team"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <Image
            src={imgOfTeam2}
            alt="Managing team"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Image
          src={imgOfTeam1}
          alt="Managing team"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
