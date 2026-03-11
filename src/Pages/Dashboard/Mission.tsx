
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
              To build structured sales ecosystems for real estate developers,
              enabling independent, high-performance sales organizations that
              drive sustainable growth and market leadership.
            </Typography>

            <Typography
            variant="body2"
              sx={{
                
                fontSize: 16,
                color: "#9ca3af",
                lineHeight: 1.8,
              }}
            >
              We believe that strategic sales architecture, combined with
              technology and human excellence, creates the foundation for
              exceptional real estate projects to thrive in competitive
              markets.
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
              To transform real estate sales through strategic innovation,
              cutting-edge technology, and visionary leadership mentoring that
              elevates the entire industry.
            </Typography>

            <Typography
            variant="body2"
              sx={{
                
                fontSize: 16,
                color: "#9ca3af",
                lineHeight: 1.8,
              }}
            >
              We envision a future where real estate developers have access to
              world-class sales expertise, enabling them to build projects that
              become landmarks in their markets.
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;