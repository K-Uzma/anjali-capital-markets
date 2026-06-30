import { Box, Container, Typography, Button, alpha } from "@mui/material";
import {
  TrackChanges,
  PieChartOutline,
  TrendingUp,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";
import platformImg from "../../../assets/home_2nd_15-26.webp";
import CustomCaption from "../../../common/CustomCaption";

const FEATURES = [
  {
    Icon: TrackChanges,
    title: "Trade Tracking",
    desc: "Monitor all open positions in real time with live P&L, advanced charting, and instant price alerts.",
    accent: ACM_COLORS.orange,
  },
  {
    Icon: PieChartOutline,
    title: "Trading Portfolio",
    desc: "Manage a diversified portfolio across 200+ instruments — Forex, Stocks, Crypto and more — from one account.",
    accent: "#5ba4f5",
  },
  {
    Icon: TrendingUp,
    title: "Elevate Your Trade",
    desc: "Expert Advisors, one-click execution, and algorithmic tools engineered to sharpen every strategy.",
    accent: "#4caf50",
  },
];

const AppShowcase = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      background: `linear-gradient(180deg, #ffffff 0%, #f0f2f5 100%)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* BG glows */}
    <Box
      sx={{
        position: "absolute",
        top: "5%",
        left: "-8%",
        width: 520,
        height: 520,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.06)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: "0%",
        right: "-6%",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.12)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />

    <Container
      maxWidth="xl"
      sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 6, lg: 8 },
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Image ── */}
        <Box
          data-aos="fade-down-right"
          sx={{ position: "relative", order: { xs: 2, lg: 1 } }}
        >
          {/* Glow behind image */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              height: "70%",
              borderRadius: "50%",
              background: `radial-gradient(ellipse, ${alpha(ACM_COLORS.orange, 0.12)} 0%, transparent 70%)`,
              filter: "blur(32px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Image */}
          <Box
            component="img"
            src={platformImg}
            alt="ACM Trading Platform on laptop and mobile"
            sx={{
              width: "100%",
              maxWidth: { xs: 480, lg: "100%" },
              mx: "auto",
              display: "block",
              position: "relative",
              zIndex: 1,
              // filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.55))",
            }}
          />

          {/* Floating badge — verified */}
          <Box
            data-aos="fade-down"
            data-aos-delay="400"
            sx={{
              position: "absolute",
              top: { xs: "6%", lg: "10%" },
              left: { xs: "4%", lg: "-2%" },
              background: "#ffffff",
              border: `1px solid ${alpha(ACM_COLORS.orange, 0.2)}`,
              borderRadius: 2.5,
              px: 1.75,
              py: 1.25,
              boxShadow: `0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px ${alpha(ACM_COLORS.orange, 0.08)}`,
              backdropFilter: "blur(12px)",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CheckCircle sx={{ fontSize: "1rem", color: ACM_COLORS.orange }} />
            <Typography
              sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#111827" }}
            >
              Regulated & Secure
            </Typography>
          </Box>
        </Box>

        {/* ── RIGHT: Content ── */}
        <Box sx={{ order: { xs: 1, lg: 2 } }}>
          {/* Badge */}

          <CustomCaption text="MT5 Platform" />

          {/* Title */}
          <Box data-aos="fade-left" data-aos-delay="80">
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.2rem",
                },
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Seamless Trading,{" "}
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
                    height: 3,
                    borderRadius: 2,
                    background: `linear-gradient(90deg, ${ACM_COLORS.orange}, transparent)`,
                  },
                }}
              >
                Anytime, Anywhere
              </Box>
            </Typography>
          </Box>

          {/* Description */}
          <Box data-aos="fade-right" data-aos-delay="140">
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: ACM_COLORS.textSecondary,
                lineHeight: 1.8,
                mb: 3.5,
                maxWidth: 480,
              }}
            >
              Trade smarter, not harder. Save time and capital with Anjali
              Capital Markets — the professional platform that puts you in
              complete control of every trade.
            </Typography>
          </Box>

          {/* Feature list */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
            {FEATURES.map(({ Icon, title, desc, accent }, index) => (
              <Box
                key={title}
                data-aos="flip-left"
                data-aos-delay={index * 200}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  borderRadius: 2.5,
                  border: `1px solid ${alpha("#000", 0.06)}`,
                  background: alpha("#f8f9fa", 0.8),
                  transition: "border-color 0.25s, background 0.25s",
                  "&:hover": {
                    borderColor: alpha(accent, 0.3),
                    background: alpha("#f0f2f5", 1),
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    background: alpha(accent, 0.12),
                    border: `1px solid ${alpha(accent, 0.22)}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: "1.2rem", color: accent }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#111827",
                      mb: 0.4,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.82rem",
                      color: ACM_COLORS.textMuted,
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* CTA buttons */}
          <Box
            data-aos="zoom-out"
            data-aos-delay="300"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            <Button
              variant="contained"
              component={Link}
              to="#"
              endIcon={<ArrowForward />}
              sx={{
                px: 3.5,
                py: 1.4,
                fontSize: "0.875rem",
                fontWeight: 700,
                boxShadow: `0 8px 24px ${alpha(ACM_COLORS.orange, 0.38)}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 32px ${alpha(ACM_COLORS.orange, 0.48)}`,
                },
              }}
            >
              Open Account
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="#"
              sx={{
                px: 3.5,
                py: 1.4,
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default AppShowcase;
