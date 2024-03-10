import { Box, Button, Fab, Typography } from "@mui/material";
import ImageGrid from "../imageGid";

export default function Welcome_view() {
    return (
        <Box component='section' sx={{ position: "relative" }}>
            <Typography variant="h2" sx={{
                fontFamily: "Montserrat",
                lineHeight: "36px",
                fontSize: "30px",
                letterSpacing: "-0.02em",
                textAlign: "left",
            }}> Giving Hope, Emplowerment, Love and Purpose.</Typography>
            <Typography variant="h5" sx={{
                fontFamily: "Montserrat",
                lineHeight: "20px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0em",
                textAlign: "left"
            }}> Nurturing Lives, Inspiring Futures: Transformative Initiative That Illuminate Paths, Foster Growth, Cultivate Affection, And Instill Purposeful Living For.</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: "space-between"
            }}>
                <Button variant="contained">Faire un don</Button>
                <Button variant="contained" color="secondary">Nous joindre</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageGrid />
            </Box>
            <Fab variant="extended" color="primary" sx={{
                position: 'absolute',
                bottom: '60px',
                right: '10px',
                width: "-webkit-fill-available",
                fontWeight: 600,
                fontFamily: "Montserrat",
                fontSize: "18px",
                lineHeight: "16px",
                textTransform: "lowercase"
            }}>
                Faire un don
            </Fab>
        </Box>
    )
}