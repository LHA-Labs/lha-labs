import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import SectionHeader from '../Landing/SectionHeader';

const styleImgContainer = {
  border: '2px solid var(--primary)',
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const styleImgGroup = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
function Sponsors() {
  const { formatMessage } = useIntl();
  return (
    <Box p={1.5}>
      <SectionHeader
        title={formatMessage({ id: 'ourSponsors' })}
        subtitle={formatMessage({ id: 'ourSponsorsSectionSubtitle' })}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: '20px 0',
        }}
      >
        <Box sx={styleImgGroup}>
          <Box sx={styleImgContainer}>
            <Image src="/assets/logo_glom.png" alt="" width={80} height={80} />
          </Box>
          <Image src="/assets/line_heart.png" alt="" width={70} height={30} />
          <Box sx={styleImgContainer}>
            <Image src="/assets/logo_hif.png" alt="" width={80} height={80} />
          </Box>
        </Box>
        <Box sx={styleImgGroup}>
          <Box sx={styleImgContainer}>
            <Image
              src="/assets/logo_hopehome.png"
              alt=""
              width={80}
              height={80}
            />
          </Box>
          <Image src="/assets/line_heart.png" alt="" width={70} height={30} />
          <Box sx={styleImgContainer}>
            <Image src="/assets/logo_asbed.jpg" alt="" width={80} height={80} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: 3,
        }}
      >
        <Button variant="contained" color="primary">
          Devenier partenaire
        </Button>
        <Button variant="outlined" color="primary">
          View all
        </Button>
      </Box>
    </Box>
  );
}

export default Sponsors;
