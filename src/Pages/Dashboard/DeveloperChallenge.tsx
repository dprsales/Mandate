
import { Box, Container, GridLegacy as Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const DeveloperChallenge = () => {
  return (
    <Box
      sx={{
        background: "#050505",
        py: 12,
      }}
    >
      <Container maxWidth="lg">

        {/* TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: { xs: 36, md: 48 },
            color: "#fff",
            fontWeight: 600,
            mb: 8,
          }}
        >
          The Developer Challenge
        </Typography>

        <Grid container spacing={4} justifyContent="center">

          {/* LEFT CARD */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
               
                borderRadius: "12px",
                p: 5,
                border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.35s ease",

                height: {xs:"auto",md:"300px"},
              }}
            >
              <Typography
                sx={{
                  color: "#c6a15b",
                  fontFamily: "Playfair Display",
                  fontSize: 22,
                  mb: 3,
                }}
              >
                Common Pain Points
              </Typography>

              {[
                "Unsold inventory accumulating",
                "Unstructured sales teams lacking direction",
                "Weak channel partner networks",
                "Inefficient marketing spend with poor ROI",
                "Poor CRM visibility and data insights",
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#c6a15b",
                      mr: 2,
                      fontSize: 18,
                    }}
                  >
                    •
                  </Typography>

                  <Typography
                    sx={{
                      color: "#d1d5db",
                      fontSize: 16,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* RIGHT CARD */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.35s ease",

                p: 5,
                height: {xs:"auto",md:"300px"},
                 borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  color: "#c6a15b",
                  fontFamily: "Playfair Display",
                  fontSize: 22,
                  mb: 3,
                }}
              >
                The RW Solution
              </Typography>

              <Typography
                sx={{
                  color: "#9ca3af",
                  fontSize: 16,
                  mb: 3,
                }}
              >
                We don't fix individual problems. We build complete systems.
              </Typography>

              {[
                "Strategic sales architecture from day one",
                "Trained, motivated sales teams",
                "Activated partner ecosystems",
                "Data-driven marketing optimization",
                "Real-time CRM intelligence and tracking",
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#c6a15b",
                      mr: 2,
                      fontSize: 20,
                      mt: "3px",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#d1d5db",
                      fontSize: 16,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default DeveloperChallenge;