import { Box, Typography } from "@mui/material";
import Image from "next/image"
import styles from "./imageGrid.module.css"

export default function ImageGrid() {
    return (
        <Box className={styles.grid_container}>
            <Box >
                <Image src="/assets/International-Day-of-the-African-Child-781x441.jpg" alt="Image 1" width={100} height={100} />
            </Box>
            <Box className={styles.image_item}>
                <Box >
                    <Image src="/assets/InternationalAfricanChild-InPage-PaulMbonankiraTearfund.jpg" alt="Image 2" width={100} height={100} />
                </Box>
                <Box className={styles.image_item_centered}>
                    <Image src="/assets/portrait-little-smiley-boy-outdoor_23-2148852691.jpg" alt="Image 3" width={100} height={100} />
                </Box>
                <Box >
                    <Image src="/assets/téléchargement.jpeg" alt="Image 4" width={100} height={100} />
                </Box>
            </Box>
            <Box className={styles.flexbox_img}>
                <Image src="/assets/UN0640668.jpeg" alt="Image 5" width={100} height={100} />
            </Box>
            <Box className={styles.support_msg}>
                <Image src="/assets/91e902c4aaf9e2b81b6b8c4fec3a99e8.png" alt="Image 6" width={20} height={20} />
                <Box>
                    <Typography variant="caption">It Is Time</Typography>
                    <Typography variant="caption">To Change A </Typography>
                    <Typography variant="caption" color="primary">{`Child's Life`}</Typography>
                </Box>
                <Box></Box>
            </Box>
            {/* <Image src="/assets/3031c3fd3a0775273647780e4e0a3523.png" alt="Image 7" width={30} height={30} /> */}
        </Box>
    )
}