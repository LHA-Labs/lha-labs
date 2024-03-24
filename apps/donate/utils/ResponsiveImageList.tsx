import { Box, ImageList } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ResponsiveImageListProps extends PropsWithChildren {
  desktopCols?: number;
  mobileCols?: number;
  gap?: number;
  variant?: 'masonry' | 'quilted' | 'standard' | 'woven';
}
export default function ResponsiveImageList({
  children,
  desktopCols = 4,
  mobileCols = 3,
  gap = 4,
  variant = 'masonry',
  ...props
}: ResponsiveImageListProps) {
  return (
    <>
      <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
        <ImageList variant={variant} cols={desktopCols} gap={gap}>
          {children as JSX.Element}
        </ImageList>
      </Box>
      <Box sx={{ display: { mobile: 'block', laptop: 'none' } }}>
        <ImageList variant={variant} cols={mobileCols} gap={gap}>
          {children as JSX.Element}
        </ImageList>
      </Box>
    </>
  );
}
