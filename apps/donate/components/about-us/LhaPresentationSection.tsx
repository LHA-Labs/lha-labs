import { Box } from '@mui/system';
import Image from 'next/image';
import imgOfTeam1 from '../../public/assets/managing_team_1.png';
import imgOfTeam2 from '../../public/assets/managing_team_2.png';

export default function LhaPresentationSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { laptop: '1fr 1fr 1fr', mobile: '1fr' },
        columnGap: 2,
        padding: { mobile: '0 32px', laptop: '0 118px' },
      }}
    >
      <Image
        src={imgOfTeam1}
        alt="Managing team"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />

      <Box
        sx={{
          display: { laptop: 'grid', mobile: 'none' },
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

      <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
        <Image
          src={imgOfTeam1}
          alt="Managing team"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
