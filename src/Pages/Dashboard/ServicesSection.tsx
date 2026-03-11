
import {
    Box,
    Container,
    GridLegacy as Grid,
    Typography,
    Paper
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import GroupsIcon from "@mui/icons-material/Groups";
import HubIcon from "@mui/icons-material/Hub";
import InsightsIcon from "@mui/icons-material/Insights";

const services = [
    {
        title: "Custom Sales Mechanism Design",
        desc: "Tailored sales strategies aligned with your project positioning and market dynamics",
        icon: <SettingsIcon />,
    },
    {
        title: "Enhanced Customer Experience",
        desc: "End-to-end buyer journey optimization from awareness to closing",
        icon: <PsychologyIcon />,
    },
    {
        title: "CRM & HRM Technology",
        desc: "Implementation of advanced systems for sales tracking and team management",
        icon: <StorageIcon />,
    },
    {
        title: "Vendor Management Services",
        desc: "Streamlined vendor coordination and performance optimization",
        icon: <GroupsIcon />,
    },
    {
        title: "Channel Partner Network",
        desc: "Activation and management of high-performing channel partner ecosystems",
        icon: <HubIcon />,
    },
    {
        title: "Sales Tracking & Reporting",
        desc: "Real-time analytics and performance dashboards for data-driven decisions",
        icon: <InsightsIcon />,
    },
    {
        title: "Data-Driven Marketing",
        desc: "Strategic campaigns powered by market insights and buyer behavior analysis",
        icon: <InsightsIcon />,
    },
    {
        title: "Strategic Alliances",
        desc: "Partnerships with banks, investors, and industry leaders for market expansion",
        icon: <InsightsIcon />,
    },
    {
        title: "Brand Strategy & Positioning",
        desc: "Market differentiation and premium brand establishment",
        icon: <InsightsIcon />,
    },
    {
        title: "Corporate Communication",
        desc: "Strategic messaging and stakeholder engagement programs",
        icon: <InsightsIcon />,
    },
    {
        title: "Leadership Mentoring",
        desc: "Executive coaching for sales teams and project leadership",
        icon: <InsightsIcon />,
    },
    {
        title: "Sales Team Training",
        desc: "Comprehensive training programs for high-performance sales execution",
        icon: <InsightsIcon />,
    },

];

const ServicesSection = () => {
    return (
        <Box sx={{ background: "#050505", py: 4 }}>

            <Container maxWidth="lg">

                {/* HEADER */}
                <Box sx={{ textAlign: "center", mb: 8 }}>

                    {/* GOLD LINE */}
                    <Box
                        sx={{
                            width: 60,
                            height: 3,
                            margin: "0 auto 20px",
                            borderRadius: "2px",
                            background:
                                "linear-gradient(90deg,#7a5a22,#e3bf72,#7a5a22)",
                        }}
                    />

                    <Typography
                        sx={{
                            fontFamily: "Playfair Display",
                            fontSize: { xs: 34, md: 46 },
                            fontWeight: 600,
                            color: "#fff",
                            mb: 2,
                        }}
                    >
                        Comprehensive Services
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            color: "#94a3b8",
                            maxWidth: 600,
                            margin: "0 auto",
                            fontSize: 16,
                        }}
                    >
                        End-to-end solutions designed to maximize sales performance and developer profitability
                    </Typography>

                </Box>

                {/* CARDS */}
                <Grid container spacing={4}>

                    {services.map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>

                            <Paper
                                elevation={0}
                                sx={{
                                    height: "150px",
                                    p: 3,
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    background: "linear-gradient(145deg,#141414,#1a1a1a)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",   // vertical center
                                    alignItems: "start",       // horizontal center
                                    textAlign: "center",
                                    transition: "all 0.35s ease",

                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 0 25px rgba(198,161,91,0.35)",
                                        border: "1px solid rgba(198,161,91,0.4)",
                                    },
                                }}
                            >

                                {/* ICON BOX */}
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "10px",
                                        mb: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "linear-gradient(145deg,#2a2114,#1a1a1a)",
                                        color: "#c6a15b",
                                    }}
                                >
                                    {service.icon}
                                </Box>

                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        fontFamily: "Playfair Display",
                                        fontSize: 20,
                                        color: "#c6a15b",
                                        fontWeight: 600,
                                        mb: 1.5,
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                {/* DESCRIPTION */}
                                <Typography
                                    sx={{
                                        fontFamily: "Inter",
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                        color: "#94a3b8",
                                        textAlign:'start'
                                    }}
                                >
                                    {service.desc}
                                </Typography>

                            </Paper>

                        </Grid>
                    ))}

                </Grid>

            </Container>
        </Box>
    );
};

export default ServicesSection;