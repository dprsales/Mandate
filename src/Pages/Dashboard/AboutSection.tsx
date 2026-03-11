import { Box, Container, GridLegacy as Grid, Typography } from "@mui/material";

const gold = "#c6a15b";

 const MentorSection=() =>{
  return (
    <Box
      sx={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 4,
           position: "relative",
      }}
    >
       <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70%",
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(198,161,91,0.5), transparent)",
    }}
  />

      <Container maxWidth="lg">
        
        
        <Grid container spacing={8} alignItems="center">
          
          
          {/* LEFT CARD */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 420,
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg, #3a2b12 0%, #0b0b0b 70%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Circle */}
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  border: `1px solid ${gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: gold,
                  fontSize: 34,
                  fontFamily: "Playfair Display",
                }}
              >
                RW
              </Box>

              {/* Name */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 28,
                  color: gold,
                  fontFamily: "Inter",
                  fontSize: 14,
                }}
              >
                Rajiv Williams
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={6}>
            
            {/* GOLD LINE */}
            {/* <Box
              sx={{
                width: 50,
                height: 3,
                backgroundColor: gold,
                mb: 3,
              }}
            /> */}

            {/* HEADING */}
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: 36, md: 48 },
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#fff",
                mb: 3,
              }}
            >
              Real Estate Mentor & <br /> Brand Strategist
            </Typography>

            {/* PARAGRAPH */}
            <Typography
              sx={{
                fontFamily: "Inter",
                color: "#9fa6b2",
                fontSize: 16,
                lineHeight: 1.7,
                mb: 5,
                maxWidth: 520,
              }}
            >
              With over 10 years of experience in real estate development and
              sales strategy, Rajiv Williams has mentored dozens of developers
              and entrepreneurs in building scalable sales ecosystems.
            </Typography>

            {/* FEATURE LIST */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              
              {/* ITEM 1 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 3,
                    backgroundColor: gold,
                    borderRadius: "2px",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: 26,
                      color: gold,
                      fontWeight: 600,
                    }}
                  >
                    Sales Ecosystem Architecture
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#9fa6b2",
                      fontSize: 15,
                      mt: 1,
                    }}
                  >
                    Building independent, high-performance sales organizations
                  </Typography>
                </Box>
              </Box>

              {/* ITEM 2 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 3,
                    backgroundColor: gold,
                    borderRadius: "2px",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: 26,
                      color: gold,
                      fontWeight: 600,
                    }}
                  >
                    Cost Optimization & Profit Maximization
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#9fa6b2",
                      fontSize: 15,
                      mt: 1,
                    }}
                  >
                    Strategic approaches to improve developer margins and ROI
                  </Typography>
                </Box>
              </Box>

              {/* ITEM 3 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 3,
                    backgroundColor: gold,
                    borderRadius: "2px",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontSize: 26,
                      color: gold,
                      fontWeight: 600,
                    }}
                  >
                    Leadership Development
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#9fa6b2",
                      fontSize: 15,
                      mt: 1,
                    }}
                  >
                    Mentoring teams to achieve excellence in sales execution
                  </Typography>
                </Box>
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default MentorSection