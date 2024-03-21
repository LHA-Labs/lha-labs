import { Box, Button, Typography } from "@mui/material";
import styles from './about_us.module.css'
import { theme } from "@lha-labs/theme";
import SectionTitle from "../title_section";

function About_us() {
    const about_us_infos: { label: string, value: number }[] = [
        { label: "Benevoles", value: 100 },
        { label: "Sponsors", value: 15 },
        { label: "Orphelins", value: 500 },
        { label: "Don reçu", value: 2000000 },
        { label: "Partenaires", value: 16 },
        { label: "Dons émis", value: 2000000 },
    ]
    return (
        <Box component="section" sx={{ backgroundColor: theme.common.inputBackground, padding: 1.5 }}>
            <SectionTitle title='About us' label="Welcome to the Let's Help Association" />
            <Typography className={styles.what_about_us}>
                {`Let's Help Association, devoted to compassion and social impact, is committed to providing meaningful assistance to communities in need. Through diverse humanitarian initiatives, the association aims to make a positive difference by offering tangible support, whether through the provision of essential resources, education, or the promotion of well-being. Together, we build bridges to a better future, one act at a time, fostering a spirit of unity and solidarity`}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: "space-between"
            }}>
                <Button variant="contained" className={styles.button}>Nous joindre</Button>
                <Button variant="contained" color="secondary" className={styles.button}>More about us</Button>
            </Box>
            <Box className={styles.rate}>
                {about_us_infos.map(({ label, value }, index) => (
                    <Box key={index}>
                        <Typography sx={{ fontSize: '30px', lineHeight: '36px', fontWeight: 'var(--bold)', color: 'var(--titleActive)' }}>+{value > 999999 ? `2M` : value}</Typography>
                        <Typography sx={{ fontSize: '13px', fontWeight: 'var(--semiBold)', lineHeight: '12px', padding: '3px' }} className={styles.text_specification}>{label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default About_us;