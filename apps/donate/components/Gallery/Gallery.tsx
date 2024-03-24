/* eslint-disable @next/next/no-img-element */
import { theme } from '@lha-labs/theme';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import SectionHeader from '../Landing/SectionHeader';

const galleryImages = [
  '/assets/International-Day-of-the-African-Child-781x441.jpg',
  '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
  '/assets/UN0640668.jpeg',
  '/assets/téléchargement.jpeg',
  '/assets/International-Day-of-the-African-Child-781x441.jpg',
  '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
  '/assets/UN0640668.jpeg',
  '/assets/téléchargement.jpeg',
];

export default function GallerySection() {
  const { formatMessage } = useIntl();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabTitles = ['photos', 'videos'];

  const tabComponent: Record<number, React.ReactNode> = {
    0: (
      <Box sx={{ width: 'auto', height: 'auto', overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
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
        </ImageList>
      </Box>
    ),
    1: 'Hello world',
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.common.inputBackground,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
        display: 'grid',
        rowGap: 2,
      }}
    >
      <SectionHeader
        title={formatMessage({ id: 'gallery' })}
        subtitle={formatMessage({ id: 'gallerySectionSubtitle' })}
      />
      <Box sx={{ display: 'grid', rowGap: 2 }}>
        <Tabs
          value={activeTabIndex}
          onChange={(_, tabIndex) => setActiveTabIndex(tabIndex)}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabTitles.map((tabTitle, index) => (
            <Tab key={index} label={formatMessage({ id: tabTitle })} />
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
