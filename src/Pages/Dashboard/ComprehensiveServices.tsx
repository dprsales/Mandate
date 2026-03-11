import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const steps = [
  { num: "01", title: "Strategy", desc: "Market analysis & positioning" },
  { num: "02", title: "Marketing", desc: "Brand & demand generation" },
  { num: "03", title: "Lead Generation", desc: "Qualified pipeline building" },
  { num: "04", title: "Channel Partners", desc: "Network activation" },
  { num: "05", title: "Sales Conversion", desc: "Deal closing excellence" },
  { num: "06", title: "CRM Reporting", desc: "Analytics & optimization" },
];

const ComprehensiveServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ background: "#050505", py: 12 }}>
      <Container maxWidth="xl">

        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg,#7a5a22,#e3bf72,#7a5a22)",
              margin: "0 auto 20px",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: 32, md: 42 },
              color: "#fff",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Sales Ecosystem Model
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#94a3b8",
              fontSize: 16,
            }}
          >
            Our proven framework for building high-performance sales organizations
          </Typography>
        </Box>

        {/* FLOW */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>

              {/* CARD */}
              <Box
                sx={{
                  width: isMobile ? "100%" : 120,
                  maxWidth: isMobile ? 320 : "none",
                  height: 140,
                  borderRadius: "12px",
                  p: 2,
                  background: "linear-gradient(145deg,#171717,#222)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#c6a15b",
                    fontSize: 14,
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {step.num}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: 18,
                    color: "#fff",
                    mb: 1,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: 13,
                    color: "#94a3b8",
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>

              {/* ARROWS */}
              {index !== steps.length - 1 && (
                isMobile ? (
                  <ArrowDownwardIcon
                    sx={{
                      color: "#c6a15b",
                      fontSize: 28,
                      my: 1,
                    }}
                  />
                ) : (
                  <ArrowForwardIcon
                    sx={{
                      color: "#c6a15b",
                      fontSize: 26,
                    }}
                  />
                )
              )}

            </React.Fragment>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default ComprehensiveServices;