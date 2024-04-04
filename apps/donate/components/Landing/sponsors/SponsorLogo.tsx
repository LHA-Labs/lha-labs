import { Box } from '@mui/material';
import Image from 'next/image';
import { Sponsor } from '.';

interface SponsorLogo extends Sponsor {
  size?: number;
}
export default function SponsorLogo({
  logo_ref,
  name,
  website,
  size = 150,
}: SponsorLogo) {
  const imgSize = (80 * size) / 150;
  return (
    <Box
      component="a"
      href={website}
      target="_blank"
      sx={{
        justifySelf: 'center',
        border: '2px solid var(--primary)',
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
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
        width={imgSize}
        height={imgSize}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  );
}
