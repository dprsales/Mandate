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
                RW Realty
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
                fontFamily: "Inter",
                color: "#9fa6b2",
                fontSize: 16,
                lineHeight: 1.4,
                mb: 2,
                maxWidth: 520,
              }}
            >
             RW Realty
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: 36, md: 42 },
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#fff",
                mb: 1,
              }}
            >
              Luxury Real Estate Sales & <br />  Strategic Advisory

            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                color: "#9fa6b2",
                fontSize: 16,
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 520,
              }}
            >
              Led by Rajiv Williams
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
              With deep expertise in luxury real estate sales, buyer psychology, and project positioning, RW Realty works closely with developers to build, manage, and optimize end-to-end sales systems.
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
                    Designing structured sales systems that drive consistent closures
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
                    Inventory Movement & Revenue Acceleration
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#9fa6b2",
                      fontSize: 15,
                      mt: 1,
                    }}
                  >
                    Improving conversion rates and reducing holding cycles
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
                   Sales Execution & Deal Control
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      color: "#9fa6b2",
                      fontSize: 15,
                      mt: 1,
                    }}
                  >
                   Managing real conversations, site visits, and closures
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