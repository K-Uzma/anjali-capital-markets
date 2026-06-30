import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  alpha,
} from "@mui/material";
import {
  ArrowForward,
  VerifiedUser,
  TrendingUp,
  Support,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";
import heroImage from "../../../assets/home_hero_15-26.webp";
import CustomCaption from "../../../common/CustomCaption";

const STATS = [
  {
    icon: <TrendingUp sx={{ fontSize: "0.9rem" }} />,
    value: "200+",
    label: "Instruments",
  },
  {
    icon: <VerifiedUser sx={{ fontSize: "0.9rem" }} />,
    value: "1:500",
    label: "Max Leverage",
  },
  {
    icon: <Support sx={{ fontSize: "0.9rem" }} />,
    value: "24/5",
    label: "Live Support",
  },
];

const Hero = () => (
  <Box
    component="section"
    sx={{
      position: "relative",
      overflow: "hidden",
      pt: { xs: 14, md: 18 },
      pb: { xs: 10, md: 14 },
      background: `linear-gradient(135deg, #f8f9fa 0%, #ffffff 40%, #ffffff 75%, #f0f2f5 100%)`,
    }}
  >
    {/* Ambient glow — top left */}
    <Box
      sx={{
        position: "absolute",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.22)} 0%, transparent 62%)`,
        top: -320,
        left: -280,
        pointerEvents: "none",
      }}
    />

    {/* Ambient glow — bottom right */}
    <Box
      sx={{
        position: "absolute",
        width: 720,
        height: 720,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.13)} 0%, transparent 62%)`,
        bottom: -180,
        right: -180,
        pointerEvents: "none",
      }}
    />

    {/* Dot grid */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${alpha("#000", 0.06)} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)",
        pointerEvents: "none",
      }}
    />

    {/* Top accent line */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, transparent 0%, ${ACM_COLORS.orange} 30%, ${alpha(ACM_COLORS.mediumPurple, 0.8)} 65%, transparent 100%)`,
      }}
    />

    <Container
      maxWidth="xl"
      sx={{ px: { xs: 2, sm: 4, xl: 6 }, position: "relative", zIndex: 1 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 8, md: 6 },
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Copy ── */}
        <Box>
          {/* Badge */}
          <CustomCaption />

          {/* Headline */}
          <Box data-aos="fade-left" data-aos-delay="100">
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.6rem",
                  md: "4rem",
                  lg: "4.8rem",
                },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#111827",
                mb: 3,
              }}
            >
              Your Gateway
              <br />
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${ACM_COLORS.orange} 0%, #f0a070 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to Global Markets
              </Box>
            </Typography>
          </Box>

          {/* Description */}
          <Box data-aos="flip-left" data-aos-delay="180">
            <Typography
              sx={{
                color: ACM_COLORS.textMuted,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.85,
                maxWidth: 460,
                mb: 5,
              }}
            >
              Trade smarter, not harder. Save time and money with Anjali Capital
              Markets — the online trading platform that puts you in control.
            </Typography>
          </Box>

          {/* CTA Buttons */}
          <Box data-aos="fade-up-right" data-aos-delay="260">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={5}>
              <Button
                component={Link}
                to="#"
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: "1rem !important" }} />}
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  boxShadow: `0 8px 28px ${alpha(ACM_COLORS.orange, 0.45)}`,
                  "&:hover": {
                    boxShadow: `0 12px 36px ${alpha(ACM_COLORS.orange, 0.55)}`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Open Account
              </Button>
              <Button
                component={Link}
                to="#"
                variant="outlined"
                endIcon={<ArrowForward sx={{ fontSize: "1rem !important" }} />}
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: "0.92rem",
                  fontWeight: 500,
                }}
              >
                Try a Demo
              </Button>
            </Stack>
          </Box>

          {/* Stats row */}
          <Box data-aos="zoom-in" data-aos-delay="340">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, sm: 3 },
                flexWrap: "wrap",
                pt: 2.5,
                borderTop: `1px solid ${alpha("#000", 0.08)}`,
              }}
            >
              {STATS.map((s, idx) => (
                <Box
                  key={s.label}
                  sx={{ display: "flex", alignItems: "center", gap: 3 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        color: ACM_COLORS.orange,
                        display: "flex",
                        opacity: 0.9,
                      }}
                    >
                      {s.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#111827",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.68rem",
                          color: ACM_COLORS.textMuted,
                          letterSpacing: 0.3,
                          mt: 0.2,
                        }}
                      >
                        {s.label}
                      </Typography>
                    </Box>
                  </Box>
                  {idx < STATS.length - 1 && (
                    <Box
                      sx={{
                        width: "1px",
                        height: 32,
                        background: alpha("#000", 0.1),
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── RIGHT: Image ── */}
        <Box
          data-aos="fade-down-left"
          // data-aos-delay="50"
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Glow behind image */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              background: `radial-gradient(ellipse, ${alpha(ACM_COLORS.orange, 0.16)} 0%, transparent 70%)`,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Main image */}
          <Box
            component="img"
            src={heroImage}
            alt="Anjali Capital Markets trading platform"
            sx={{
              width: "100%",
              maxWidth: { xs: 380, sm: 480, md: 580 },
              height: "auto",
              display: "block",
              position: "relative",
              zIndex: 1,
              // filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
            }}
          />

          {/* Floating live badge */}
          <Box
            data-aos="fade-down"
            data-aos-delay="700"
            sx={{
              position: "absolute",
              top: { xs: "6%", md: "8%" },
              left: { xs: "2%", md: "-4%" },
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 2,
              background: alpha(ACM_COLORS.cardBg, 0.9),
              border: `1px solid ${alpha("#000", 0.1)}`,
              backdropFilter: "blur(16px)",
              // boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4caf50",
                animation: "livePulse 2s ease infinite",
                "@keyframes livePulse": {
                  "0%,100%": { boxShadow: "0 0 0 0 rgba(76,175,80,0.5)" },
                  "50%": { boxShadow: "0 0 0 5px rgba(76,175,80,0)" },
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#111827",
                letterSpacing: 0.5,
              }}
            >
              Live Trading
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>

    {/* Bottom fade */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: `linear-gradient(to bottom, transparent, #f0f2f5)`,
        pointerEvents: "none",
      }}
    />
  </Box>
);

export default Hero;
