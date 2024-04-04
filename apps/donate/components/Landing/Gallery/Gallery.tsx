/* eslint-disable @next/next/no-img-element */
import { theme } from '@lha-labs/theme';
import { Box, Button, ImageListItem, Tab, Tabs } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useIntl } from 'react-intl';
import ResponsiveImageList from '../../../utils/ResponsiveImageList';
import SectionHeader from '../SectionHeader';

type TabComponent = Record<number, ReactNode>;
export default function GallerySection() {
  const { formatMessage } = useIntl();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabTitles = ['photos'];
  const galleryImages = [
    '/assets/child1.jpg',
    '/assets/child2.jpg',
    '/assets/child3.jpg',
    '/assets/child4.jpeg',
    '/assets/child1.jpg',
    '/assets/child2.jpg',
    '/assets/child3.jpg',
    '/assets/child4.jpeg',
  ];

  const tabComponent: TabComponent = {
    0: (
      <ResponsiveImageList>
        {galleryImages.map((imageRef, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${imageRef}`}
              src={`${imageRef}`}
              alt="Let's help association gallery picture"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ResponsiveImageList>
    ),
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.common.inputBackground,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
        display: 'grid',
        rowGap: 2,
        backgroundImage: 'url(/assets/gallery_bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px 50%',
      }}
    >
      <SectionHeader title={'gallery'} subtitle={'gallerySectionSubtitle'} />
      <Box sx={{ display: 'grid', rowGap: 2 }}>
        <Tabs
          value={activeTabIndex}
          onChange={(_, tabIndex) => setActiveTabIndex(tabIndex)}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabTitles.map((tabTitle, index) => (
            <Tab
              disableRipple
              key={index}
              label={formatMessage({ id: tabTitle })}
            />
          ))}
        </Tabs>
        {tabComponent[activeTabIndex]}
      </Box>
      <Button variant="outlined" color="primary" sx={{ justifySelf: 'center' }}>
        {formatMessage({ id: 'viewAll' })}
      </Button>
    </Box>
  );
}
