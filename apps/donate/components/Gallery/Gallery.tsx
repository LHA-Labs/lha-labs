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

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

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
function CustomTabPanel(props: TabPanelProps) {
  const { children, index, value } = props;
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function GallerySection() {
  const { formatMessage } = useIntl();
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.common.inputBackground,
        padding: { mobile: '12px 32px', laptop: '48px 118px' },
      }}
    >
      <SectionHeader
        title={formatMessage({ id: 'gallery' })}
        subtitle={formatMessage({ id: 'gallerySectionSubtitle' })}
      />
      <Box>
        <Box sx={{ padding: 1.5 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label="Photos"
              sx={{
                '.MuiTab-labelIcon': {
                  fontWeight: 'var(--semiBold)',
                },
              }}
            />
            <Tab label="Vidéos" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          hello 2
        </CustomTabPanel>
      </Box>
      <Box display="flex" justifyContent="center" padding={3}>
        <Button variant="outlined" color="primary">
          View all
        </Button>
      </Box>
    </Box>
  );
}
