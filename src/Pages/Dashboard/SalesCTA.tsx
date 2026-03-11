
import { Box, Container, Typography, Button } from "@mui/material";
import { charminar } from "../../assets";


const SalesCTA = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${charminar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
        }}
      />

      {/* CONTENT */}
      <Container sx={{ position: "relative", zIndex: 2 }}>

        {/* GOLD LINE */}
        <Box
          sx={{
            width: 60,
            height: 3,
            margin: "0 auto 22px",
            borderRadius: "2px",
            background:
              "linear-gradient(90deg,#7a5a22,#e3bf72,#7a5a22)",
          }}
        />

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontSize: { xs: 34, md: 48 },
            color: "#fff",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Build a Powerful Sales Ecosystem
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: 17,
            color: "#cbd5e1",
            maxWidth: 640,
            margin: "0 auto",
            mb: 4,
            lineHeight: 1.7,
          }}
        >
          Let's discuss how strategic sales architecture can transform your
          project's market performance and profitability.
        </Typography>

        {/* CTA BUTTON */}
        <Button
          sx={{
            backgroundColor: "#c6a15b",
            color: "#000",
            px: 4,
            py: 1.5,
            fontFamily: "Inter",
            fontWeight: 500,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: 15,
            boxShadow: "none",
            transition: "all .3s ease",

            "&:hover": {
              backgroundColor: "#b8944c",
              boxShadow: "0 0 20px rgba(198,161,91,0.6)",
            },
          }}
        >
          Request Strategic Consultation
        </Button>

      </Container>
    </Box>
  );
};

export default SalesCTA;