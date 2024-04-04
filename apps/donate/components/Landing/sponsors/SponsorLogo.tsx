import { Box } from '@mui/material';
import { Sponsor } from '.';
import Image from 'next/image';

interface SponsorLogo extends Sponsor {
  height?: number;
  width?: number;
}
export default function SponsorLogo({
  logo_ref,
  name,
  website,
  height = 80,
  width = 80,
}: SponsorLogo) {
  return (
    <Box
      component="a"
      href={website}
      target="_blank"
      sx={{
        border: '2px solid var(--primary)',
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        '&:hover': {
          transition: '0.4s',
          boxShadow:
            '0px 8px 18px -6px rgba(24, 44, 75, 0.12), 0px 12px 42px -4px rgba(24, 44, 75, 0.12)',
          backgroundColor: '#a500000f',
        },
      }}
    >
      <Image
        src={logo_ref}
        alt={name}
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  );
}
