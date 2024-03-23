import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './imageGrid.module.css';

export default function HeroImageGrid() {
  const { formatMessage } = useIntl();
  return (
    <Box className={styles.grid_container}>
      <Box>
        <Image
          src="/assets/International-Day-of-the-African-Child-781x441.jpg"
          alt="Image 1"
          style={{ objectFit: 'cover' }}
          width={100}
          height={100}
        />
      </Box>
      <Box className={styles.image_item}>
        <Box>
          <Image
            src="/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg"
            alt="Image 2"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
        <Box className={styles.image_item_centered}>
          <Image
            src="/assets/portrait-little-smiley-boy-outdoor_23-2148852691.jpg"
            alt="Image 3"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
        <Box>
          <Image
            src="/assets/téléchargement.jpeg"
            alt="Image 4"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
      </Box>
      <Box className={styles.flexbox_img}>
        <Image
          src="/assets/UN0640668.jpeg"
          alt="Image 5"
          style={{ objectFit: 'cover' }}
          width={100}
          height={100}
        />
      </Box>
      <Box className={styles.support_msg}>
        <Image
          src="/assets/91e902c4aaf9e2b81b6b8c4fec3a99e8.png"
          alt="Image 6"
          width={20}
          height={20}
        />
        <Box>
          <Typography variant="caption">
            {formatMessage({ id: 'itIsTime' })}
          </Typography>
          <Typography variant="caption">
            {formatMessage({ id: 'toChangeA' })}
          </Typography>
          <Typography variant="caption" color="primary">
            {formatMessage({ id: 'childsLife' })}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      {/* <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="Image 7" width={30} height={30} /> */}
    </Box>
  );
}
