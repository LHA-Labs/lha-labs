import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './imageGrid.module.css';

export default function HeroImageGrid() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Box sx={{ display: { laptop: 'block', mobile: 'none' } }}>
        <Box className={styles.grid_container}>
          <Box sx={{ boxShadow: 'none !important', position: 'relative' }}>
            <Box
              sx={{
                borderBlock: '5px solid #fff',
                borderLeft: '5px solid #fff',
                borderRadius: '10% 0 0 10%',
                boxShadow: '0px 0px 18px -10px red',
              }}
            >
              <Image
                src="/assets/child1.jpg"
                alt="child needing help"
                style={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '10%',
                  borderBottomLeftRadius: '10%',
                }}
                width={140}
                height={140}
              />
            </Box>

            <Image
              src="/assets/heroStar.png"
              width={100}
              height={100}
              alt="star"
              style={{ position: 'absolute', left: -60, bottom: '-140px' }}
            />
          </Box>
          <Box className={styles.image_item}>
            <Box>
              <Image
                src="/assets/child2.jpg"
                alt="child needing help"
                style={{ objectFit: 'cover' }}
                width={140}
                height={140}
              />
            </Box>
            <Box className={styles.image_item_centered}>
              <Image
                src="/assets/child3.jpg"
                alt="child needing help"
                style={{ objectFit: 'cover' }}
                width={140}
                height={140}
              />
            </Box>
            <Box>
              <Image
                src="/assets/child5.jpeg"
                alt="child needing help"
                style={{ objectFit: 'cover' }}
                width={140}
                height={140}
              />
            </Box>
          </Box>
          <Box className={styles.flexbox_img}>
            <Image
              src="/assets/child4.jpeg"
              alt="child needing help"
              style={{ objectFit: 'cover' }}
              width={140}
              height={140}
            />
          </Box>
          <Box className={styles.support_msg}>
            <Image
              src="/assets/heart.png"
              alt="love heart"
              width={40}
              height={40}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: 'black', fontWeight: 700 }}
              >
                {formatMessage({ id: 'itIsTime' })}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'black', fontWeight: 700 }}
              >
                {formatMessage({ id: 'toChangeA' })}
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                {formatMessage({ id: 'childsLife' })}
              </Typography>
            </Box>
          </Box>
          {/* <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="Image 7" width={30} height={30} /> */}
        </Box>
      </Box>

      <Box sx={{ display: { laptop: 'none', mobile: 'block' } }}>
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
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: 'black' }}
              >
                {formatMessage({ id: 'itIsTime' })}
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: 'black' }}
              >
                {formatMessage({ id: 'toChangeA' })}
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                {formatMessage({ id: 'childsLife' })}
              </Typography>
            </Box>
          </Box>
          {/* <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="Image 7" width={30} height={30} /> */}
        </Box>
      </Box>
    </>
  );
}
