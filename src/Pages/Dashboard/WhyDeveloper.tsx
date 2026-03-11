
import { Box, Container, GridLegacy as Grid, Typography } from "@mui/material";
import { hitechcity } from "../../assets";


const features = [
  {
    num: "01",
    title: "Faster Inventory Liquidation",
    desc: "Strategic sales mechanisms designed to accelerate project sales velocity and reduce carrying costs",
  },
  {
    num: "02",
    title: "Strong Channel Networks",
    desc: "Access to our extensive network of high-performing channel partners and sales professionals",
  },
  {
    num: "03",
    title: "Data-Driven Marketing",
    desc: "Marketing campaigns backed by market research, buyer insights, and performance analytics",
  },
  {
    num: "04",
    title: "CRM-Enabled Tracking",
    desc: "Real-time visibility into sales pipeline, conversion metrics, and team performance",
  },
  {
    num: "05",
    title: "Leadership Mentoring",
    desc: "Direct access to strategic guidance for your sales teams and project leadership",
  },
  {
    num: "06",
    title: "Proven Track Record",
    desc: "Years of successful engagements with premium real estate developers across India",
  },
];

const WhyDevelopers = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${hitechcity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        height: "100vh",
         backgroundAttachment: "fixed",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              width: 60,
              height: 3,
              margin: "0 auto 10px",
              background:
                "linear-gradient(90deg,#7a5a22,#e3bf72,#7a5a22)",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: 36, md: 48 },
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Why Developers Choose Us
          </Typography>
        </Box>

        {/* FEATURE GRID */}
        <Grid container spacing={4}>

          {features.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>

              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  p: 4,
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.35s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 0 25px rgba(198,161,91,0.35)",
                    border: "1px solid rgba(198,161,91,0.4)",
                  },
                }}
              >

                {/* NUMBER BADGE */}
                <Box
                  sx={{
                    minWidth: 46,
                    height: 46,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(145deg,#3a2b12,#1a1a1a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c6a15b",
                    fontWeight: 600,
                  }}
                >
                  {item.num}
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: 20,
                      color: "#fff",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#94a3b8",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

              </Box>

            </Grid>
          ))}

        </Grid>
      </Container>
    </Box>
  );
};

export default WhyDevelopers;