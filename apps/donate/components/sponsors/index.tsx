import { Box, Button } from "@mui/material";
import Image from "next/image";
import SectionHeader from "../Landing/SectionHeader";

const styleImgContainer =
{
    border: '2px solid var(--primary)',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}

const styleImgGroup = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
function Sponsors() {
    return (
        <Box p={1.5}>
            <SectionHeader title="Our Sponsors" subtitle="Our Valued Partnerships in Making a Difference" />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '20px 0'
            }}>
                <Box sx={styleImgGroup}>
                    <Box sx={styleImgContainer}>
                        <Image src="/assets/7b7fdd3d54793b9740024883f6e34a4d.png" alt="" width={80} height={80} />
                    </Box>
                    <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="" width={70} height={30} />
                    <Box sx={styleImgContainer}>
                        <Image src="/assets/9a93772d63e2561a586468531debef7d.png" alt="" width={80} height={80} />
                    </Box>
                </Box>
                <Box sx={styleImgGroup}>
                    <Box sx={styleImgContainer}>
                        <Image src="/assets/660a732da7659a4159674ddcedb323b1.png" alt="" width={80} height={80} />
                    </Box>
                    <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="" width={70} height={30} />
                    <Box sx={styleImgContainer}>
                        <Image src="/assets/de0e4e9fe8c08a5d7231f0d9ee277ea4.jpg" alt="" width={80} height={80} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: "grid",
                gridAutoFlow: 'column',
                gap: 3
            }}>
                <Button variant="contained" color="primary"> Devenier partenaire</Button>
                <Button variant="outlined" color="primary"> View all</Button>
            </Box>
        </Box>
    );
}

export default Sponsors;