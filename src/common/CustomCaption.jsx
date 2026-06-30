import { Box, Typography, alpha } from "@mui/material";
import React from "react";
import { ACM_COLORS } from "../theme";
import { GlassButton } from "../components/glassButton/GlassButtonDemo";
// import "../components/glassButton/GlassButton.css";

const CustomCaption = ({ text = "Regulated Global Broker" }) => {
  return (
    <Box data-aos="fade-right">
      <GlassButton size="default">
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACM_COLORS.orange,
            boxShadow: `0 0 10px ${ACM_COLORS.orange}`,
            animation: "heroPulse 2s ease infinite",
            "@keyframes heroPulse": {
              "0%,100%": {
                boxShadow: `0 0 0 0 ${alpha(ACM_COLORS.orange, 0.5)}`,
              },
              "50%": {
                boxShadow: `0 0 0 5px ${alpha(ACM_COLORS.orange, 0)}`,
              },
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: ACM_COLORS.orange,
            letterSpacing: 1.8,
            textTransform: "uppercase",
          }}
        >
          {text}
        </Typography>
      </GlassButton>
      {/* <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 0.6,
          mb: 3.5,
          borderRadius: "100px",
          border: "2px solid transparent",
          background:
            "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #db7146 0%, #c44d8e 55%, #7950bf 100%) border-box",
          transition: "background 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "default",
          "&:hover": {
            background:
              "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #7950bf 0%, #c44d8e 55%, #db7146 100%) border-box",
          },
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACM_COLORS.orange,
            boxShadow: `0 0 10px ${ACM_COLORS.orange}`,
            animation: "heroPulse 2s ease infinite",
            "@keyframes heroPulse": {
              "0%,100%": {
                boxShadow: `0 0 0 0 ${alpha(ACM_COLORS.orange, 0.5)}`,
              },
              "50%": {
                boxShadow: `0 0 0 5px ${alpha(ACM_COLORS.orange, 0)}`,
              },
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: ACM_COLORS.orange,
            letterSpacing: 1.8,
            textTransform: "uppercase",
          }}
        >
          {text}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default CustomCaption;
