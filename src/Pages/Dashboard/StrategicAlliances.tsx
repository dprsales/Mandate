
import { Box, Container, GridLegacy as Grid, Typography } from "@mui/material";
import { charminar } from "../../assets";


const items = [
  {
    title: "Banks & Financial Institutions",
    desc: "Strategic partnerships for financing and buyer enablement",
  },
  {
    title: "Investor Networks",
    desc: "Access to institutional capital and investment opportunities",
  },
  {
    title: "Broker Networks",
    desc: "Activated ecosystem of professional brokers and agents",
  },
  {
    title: "Channel Partners",
    desc: "Complementary service providers and strategic alliances",
  },
  {
    title: "Marketing Vendors",
    desc: "Integrated technology and creative partners",
  },
];

const StrategicAlliances = () => {
  return (
    <Box
      sx={{
        background: "#050505",
        py: 12,
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: 36, md: 48 },
              fontWeight: 600,
              color: "#fff",
              mb: 2,
            }}
          >
            Strategic Alliances & Partnerships
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: 18,
              color: "#94a3b8",
            }}
          >
            A robust ecosystem of partners amplifying your project's reach and impact
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 3,
                  mb: 5,
                }}
              >
                {/* GOLD LINE */}
                <Box
                  sx={{
                    width: "3px",
                    height: "50px",
                    background: "#c6a15b",
                    borderRadius: "2px",
                    mt: "5px",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#fff",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#94a3b8",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={charminar}
              sx={{
                width: "100%",
                borderRadius: "14px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              }}
            />
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default StrategicAlliances;