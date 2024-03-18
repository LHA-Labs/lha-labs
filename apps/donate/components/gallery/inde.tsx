import { theme } from "@lha-labs/theme";
import { Box, Tab, Tabs } from "@mui/material";
import * as React from 'react';
import { useState } from "react";
import SectionTitle from "../title_section";

interface TabPanelProps {
    children: React.ReactNode,
    index: number,
    value: number
}

// const itemData = [
//     {
//         img: '/assets/International-Day-of-the-African-Child-781x441.jpg',
//         title: 'Bed',
//     },
//     {
//         img: '/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg',
//         title: 'Books',
//     },
//     {
//         img: '/assets/UN0640668.jpeg',
//         title: 'Sink',
//     },
//     {
//         img: '/assets/téléchargement.jpeg',
//         title: 'Kitchen',
//     }
// ];
function CustomTabPanel(props: TabPanelProps) {
    const { children, index, value } = props
    return (
        <Box
            role='tabpanel'
            hidden={value !== index}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Gallery_view() {
    const [value, setValue] = useState<number>(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box component='section' sx={{ backgroundColor: theme.common.inputBackground }}>
            <SectionTitle title="Gallery" label="Our Valued PartnerShips in Making a Difference" />
            <Box >
                <Box sx={{ padding: 1.5 }}>
                    <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
                        <Tab label="Photos" {...a11yProps(0)} sx={{
                            '.MuiTab-labelIcon': {
                                fontWeight: 'var(--semiBold)'
                            }
                        }} />
                        <Tab label="Vidéos" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    hello 1
                    {/* <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        width={188}
                                        height={250}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>hello 2</CustomTabPanel>
            </Box>
        </Box>
    );
}