import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  OutlinedInput,
  InputAdornment,
  Stack,
  Chip,
  alpha,
} from "@mui/material";
import {
  EmailOutlined as EmailIcon,
  TrendingUp,
  Bolt,
  Shield,
} from "@mui/icons-material";
import { ACM_COLORS } from "../theme";

const TRUST_PILLS = [
  {
    icon: <TrendingUp sx={{ fontSize: "0.85rem" }} />,
    label: "Market Insights",
  },
  { icon: <Bolt sx={{ fontSize: "0.85rem" }} />, label: "Trading Signals" },
  { icon: <Shield sx={{ fontSize: "0.85rem" }} />, label: "Secure" },
];

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
        background: `linear-gradient(135deg, #f0f2f5 0%, #ffffff 50%, #f8f9fa 100%)`,
        borderTop: `1px solid ${alpha("#000", 0.06)}`,
        borderBottom: `1px solid ${alpha("#000", 0.06)}`,
      }}
    >
      {/* Top accent bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${ACM_COLORS.orange} 40%, ${ACM_COLORS.mediumPurple} 70%, transparent 100%)`,
        }}
      />

      {/* Radial glow — left */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.25)} 0%, transparent 65%)`,
          top: -150,
          left: -150,
          pointerEvents: "none",
        }}
      />

      {/* Radial glow — right */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.12)} 0%, transparent 65%)`,
          bottom: -100,
          right: -80,
          pointerEvents: "none",
        }}
      />

      {/* Background logo watermark */}
      <Box
        component="img"
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        sx={{
          position: "absolute",
          right: { xs: "-10%", md: "2%" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: 340, md: 480 },
          opacity: 0.04,
          filter: "brightness(10)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Diamond grid decor */}
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            left: { xs: -40, md: 60 + i * 22 },
            top: "50%",
            width: { xs: 120, md: 160 - i * 14 },
            height: { xs: 120, md: 160 - i * 14 },
            border: `1.5px solid ${alpha(ACM_COLORS.mediumPurple, 0.2 - i * 0.04)}`,
            transform: `translateY(-50%) rotate(45deg) translate(${i * 16}px, ${i * -16}px)`,
            pointerEvents: "none",
            display: { xs: "none", sm: "block" },
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Trust pills */}
        <Stack
          data-aos="flip-up"
          direction="row"
          spacing={1}
          justifyContent="center"
          mb={3.5}
          flexWrap="wrap"
          gap={1}
        >
          {TRUST_PILLS.map((p) => (
            <Chip
              key={p.label}
              icon={p.icon}
              label={p.label}
              size="small"
              sx={{
                borderRadius: 5,
                border: "1px solid transparent",
                background:
                  "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #db7146 0%, #c44d8e 55%, #7950bf 100%) border-box",
                transition: "background 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                "&:hover": {
                  background:
                    "linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #7950bf 0%, #c44d8e 55%, #db7146 100%) border-box",
                },
                fontSize: "0.75rem",
                fontWeight: 500,
                "& .MuiChip-icon": { color: ACM_COLORS.orange },
              }}
            />
          ))}
        </Stack>

        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            data-aos="fade-right"
            variant="h3"
            sx={{
              color: "#111827",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Stay ahead of the{" "}
            <Box
              component="span"
              sx={{
                color: ACM_COLORS.orange,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: `linear-gradient(90deg, ${ACM_COLORS.orange}, transparent)`,
                  borderRadius: 1,
                },
              }}
            >
              market
            </Box>
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{
              color: "rgba(0,0,0,0.55)",
              maxWidth: 460,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.75,
            }}
          >
            Join thousands of traders and get weekly insights, market news, and
            platform updates directly in your inbox.
          </Typography>
        </Box>

        {/* Form */}
        <Box
          data-aos="fade-down"
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 580,
            mx: "auto",
            display: "flex",
            background: "#f9fafb",
            border: `1.5px solid ${focused ? ACM_COLORS.orange : alpha("#000", 0.15)}`,
            borderRadius: "100px",
            transition: "border-color 0.25s, box-shadow 0.25s",
            boxShadow: focused
              ? `0 0 0 3px ${alpha(ACM_COLORS.orange, 0.12)}`
              : "none",
            p: 0.75,
            gap: 0.5,
          }}
        >
          <OutlinedInput
            fullWidth
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="email"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon
                  sx={{ color: alpha("#000", 0.3), fontSize: "1rem", ml: 1 }}
                />
              </InputAdornment>
            }
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiInputBase-input": {
                color: "#111827",
                py: 1.5,
                fontSize: "0.9rem",
                "&::placeholder": { color: alpha("#000", 0.3), opacity: 1 },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              px: { xs: 2.5, md: 3.5 },
              py: 1.25,
              flexShrink: 0,
              whiteSpace: "nowrap",
              fontSize: "0.875rem",
              fontWeight: 600,
              boxShadow: `0 4px 16px ${alpha(ACM_COLORS.orange, 0.4)}`,
              "&:hover": {
                boxShadow: `0 6px 20px ${alpha(ACM_COLORS.orange, 0.5)}`,
                transform: "translateY(-1px)",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
