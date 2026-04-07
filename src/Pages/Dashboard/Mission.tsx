
import { Box, Container, GridLegacy as Grid, Typography } from "@mui/material";
import { mission } from "../../assets";


const Mission = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${mission})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 14,
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={10}>
          
          {/* LEFT - MISSION */}
          <Grid item xs={12} md={6}>
            {/* Gold line */}
            <Box
              sx={{
                width: 50,
                height: 3,
                mb: 3,
                background:
                  "linear-gradient(90deg,#c6a15b 0%,#e6c27a 50%,#c6a15b 100%)",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: 34,
                color: "#fff",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Our Mission
            </Typography>

            <Typography
            variant="body2"
              sx={{
                
                fontSize: 17,
                color: "#cbd5e1",
                lineHeight: 1.8,
                mb: 1,
              }}
            >
              To build <b>high-performance sales ecosystems</b> for real estate developers that go beyond marketing ,
creating<b> structured, scalable, and conversion-driven sales environments.</b>
            </Typography>

            <Typography
            variant="body2"
              sx={{
                
                fontSize: 16,
                color: "#9ca3af",
                lineHeight: 1.8,
              }}
            >
              
            </Typography>
          </Grid>

          {/* RIGHT - VISION */}
          <Grid item xs={12} md={6}>
            {/* Gold line */}
            <Box
              sx={{
                width: 50,
                height: 3,
                mb: 3,
                background:
                  "linear-gradient(90deg,#c6a15b 0%,#e6c27a 50%,#c6a15b 100%)",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: 34,
                color: "#fff",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Our Vision
            </Typography>

            <Typography
            variant="body2"
              sx={{
                
                fontSize: 17,
                color: "#cbd5e1",
                lineHeight: 1.8,
                mb: 1,
              }}
            >
              To redefine how luxury real estate is sold,
through better systems, stronger positioning, and sharper sales execution.
            </Typography>

           
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;