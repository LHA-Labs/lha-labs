import { Box, Divider } from '@mui/material';
import Image from 'next/image';
import ImgFooter from '../../../assets/ImgFooter.png';
import GetInTouch from './GetInTouch';
import GetInvolved from './GetInvolved';
import Organisation from './Organisation';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        padding: { laptop: '0 118px 56px 118px', mobile: '0 24px 12px 24px' },
        display: 'grid',
        rowGap: '56px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          columnGap: {laptop:5, mobile: 3},
          alignItems: 'center',
        }}
      >
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid #E0E0E0' }}
        />
        <Image
          src={ImgFooter}
          alt="Img Footer"
          style={{ width: '75px', height: 'auto' }}
        />
        <Divider
          orientation="horizontal"
          sx={{ border: '1px solid #E0E0E0' }}
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: 'none',
            laptop: '4.7fr 3.1fr 2.2fr',
          },
          rowGap: 5,
          // gridAutoFlow: 'column',
          columnGap: 3,
        }}
      >
        <GetInvolved />
        <GetInTouch />
        <Organisation />
      </Box>
    </Box>
  );
}
