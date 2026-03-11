
import {
  Box,
  Container,
  GridLegacy as Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ContactSection = () => {
  return (
    <Box
      sx={{
        background: "#050505",
        pt: 12,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* LEFT SIDE */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: 30,
                color: "#fff",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Get in Touch
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 16,
                color: "#94a3b8",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 360,
              }}
            >
              Ready to transform your real estate project's sales performance?
              Let's start a conversation.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: 14,
                  mb: 1,
                }}
              >
                Email
              </Typography>

              <Typography
                sx={{
                  color: "#c6a15b",
                  fontSize: 15,
                }}
              >
                connect@rajivwilliams.com
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: 14,
                  mb: 1,
                }}
              >
                Website
              </Typography>

              <Typography
                sx={{
                  color: "#c6a15b",
                  fontSize: 15,
                }}
              >
                www.rajivwilliams.com
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT SIDE FORM */}
          <Grid item xs={12} md={7}>
            <Box component="form">

              {/* NAME */}
              <Typography
                sx={{ color: "#fff", fontSize: 14, mb: 1 }}
              >
                Name
              </Typography>

              <TextField
                fullWidth
                placeholder="Your name"
                variant="outlined"
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background:
                      "linear-gradient(145deg,#141414,#1c1c1c)",
                    color: "#fff",
                  },
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                }}
              />

              {/* EMAIL */}
              <Typography
                sx={{ color: "#fff", fontSize: 14, mb: 1 }}
              >
                Email
              </Typography>

              <TextField
                fullWidth
                placeholder="your@email.com"
                variant="outlined"
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background:
                      "linear-gradient(145deg,#141414,#1c1c1c)",
                    color: "#fff",
                  },
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                }}
              />

              {/* MESSAGE */}
              <Typography
                sx={{ color: "#fff", fontSize: 14, mb: 1 }}
              >
                Message
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Tell us about your project..."
                variant="outlined"
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background:
                      "linear-gradient(145deg,#141414,#1c1c1c)",
                    color: "#fff",
                  },
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                }}
              />

              {/* BUTTON */}
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#c6a15b",
                  color: "#000",
                  py: 1.6,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: 15,
                  fontWeight: 500,

                  "&:hover": {
                    backgroundColor: "#b8944c",
                  },
                }}
              >
                Send Message
              </Button>

            </Box>
          </Grid>

        </Grid>

        {/* FOOTER */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            mt: 10,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#64748b",
              fontSize: 14,
            }}
          >
            © 2026 Rajiv Williams. All rights reserved. | Sales & Marketing
            Mandate for Real Estate Developers
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default ContactSection;