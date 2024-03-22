import { Box, Button, Typography } from "@mui/material";

function Join_us() {
    return (
        <Box sx={{
            backgroundImage: 'url(/assets/520aa700405e984f48689990eee14275.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '400px',
            margin: "20px 0"
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(165, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2
            }}>
                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Typography sx={{
                        fontFamily: 'MV Boli',
                        fontWeight: 'var(--regular)',
                        fontStyle: 'italic',
                        fontSize: '21px',
                        lineHeight: '31px',
                        textAlign: 'center',
                        color: 'var(--inputBackground)'
                    }}>HELP US BUILD COMMUNITY FOR OUR CHILDREN AND OUR ORPHAN</Typography>
                    <Box textAlign="center">
                        <Button variant="contained" color="secondary"> Join us</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default Join_us;