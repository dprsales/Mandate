import { Box, Typography, Button, Container } from "@mui/material";
import { herosec } from "../../assets";

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                backgroundImage: `url(${herosec})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Dark Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.55)",
                }}
            />

            {/* Content */}
            <Container
                maxWidth="md"
                sx={{
                    position: "relative",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                {/* Small line */}
                <Box
                    sx={{
                        width: 60,
                        height: 3,
                        backgroundColor: "#c8a45c",
                        margin: "0 auto 20px",
                    }}
                />

                {/* Heading */}
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '16px', md: '100px' },
                        fontWeight: 600,
                        lineHeight: 1,
                        mb: 3,
                    }}
                >
                    Strategic Sales &
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '16px', md: '100px' },
                        fontWeight: 600,
                        lineHeight: 1,
                        mb: 3,
                    }}
                >
                    Marketing <span style={{ color: '#c8a45d' }}>Mandates</span>
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{

                        fontSize: "18px",
                        opacity: 0.9,
                        mb: 4,
                    }}
                >
                    Helping developers build powerful sales ecosystems and liquidate
                    inventory faster through strategic positioning and market leadership.
                </Typography>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 ,mt:4}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#C6A15B",
                            color: "#111",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            textTransform: "none",
                            px: 4,
                            py: 1.5,
                            borderRadius: "8px",
                            boxShadow: "none",

                            "&:hover": {
                                backgroundColor: "#b8924f",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Request Mandate Consultation
                    </Button>

                    <Button
                        // variant="outlined"
                        sx={{
                            border: "1px solid rgba(255,255,255,0.35)",
                            color: "#fff",
                            fontFamily: "Inter",
                            textTransform: "none",
                            px: 4,
                            py: 1.5,
                            borderRadius: "8px",
                            backdropFilter: "blur(2px)",
                            background:"transparent",

                            "&:hover": {
                                backgroundColor: "color-mix(in oklab, #2a2a2a 50%, transparent)",
                                border: "1px solid rgba(255,255,255,0.6)",
                            },
                        }}
                    >
                        View Services →
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;