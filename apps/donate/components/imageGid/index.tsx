import { Box } from "@mui/material";
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
                    <Image src="/assets/portrait-little-smiley-boy-outdoor_23-2148852691.jpg" alt="Image 2" width={100} height={100} />
                </Box>
                <Box >
                    <Image src="/assets/téléchargement.jpeg" alt="Image 2" width={100} height={100} />
                </Box>
            </Box>
            <Box >
                <Image src="/assets/UN0640668.jpeg" alt="Image 2" width={100} height={100} />
            </Box>
        </Box>
    )
}