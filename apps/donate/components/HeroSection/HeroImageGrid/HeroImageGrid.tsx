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
          src="/assets/child1.jpg"
          alt="child needing help"
          style={{ objectFit: 'cover' }}
          width={100}
          height={100}
        />
      </Box>
      <Box className={styles.image_item}>
        <Box>
          <Image
            src="/assets/child2.jpg"
            alt="child needing help"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
        <Box className={styles.image_item_centered}>
          <Image
            src="/assets/child3.jpg"
            alt="child needing help"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
        <Box>
          <Image
            src="/assets/child5.jpeg"
            alt="child needing help"
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
          />
        </Box>
      </Box>
      <Box className={styles.flexbox_img}>
        <Image
          src="/assets/child4.jpeg"
          alt="child needing help"
          style={{ objectFit: 'cover' }}
          width={100}
          height={100}
        />
      </Box>
      <Box className={styles.support_msg}>
        <Image
          src="/assets/heart.png"
          alt="love heart"
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
