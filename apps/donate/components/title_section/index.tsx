import { Box, Typography } from "@mui/material";

function SectionTitle({ title, label }: { title: string, label?: string }) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 0'
        }}>
            <Typography sx={{
                color: 'var(--primary)',
                fontWeight: 'var(--medium)',
            }}>{title}</Typography>
            <Typography sx={{
                textAlign: 'center',
                fontWeight: 'var(--semiBold)',
                fontSize: '20px',
                lineHeight: '24px',
                color: 'var(--titleActive)'

            }}>{`${label ?? ''}`}</Typography>
            <Box component='span' sx={{
                border: '1px solid var(--primary)',
                width: '90px',
                marginTop: '10px'
            }}></Box>
        </Box>

    );
}

export default SectionTitle;