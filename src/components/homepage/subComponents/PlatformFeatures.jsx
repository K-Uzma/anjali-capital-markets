import { Box, Container, Typography, alpha } from "@mui/material";
import {
  BoltOutlined,
  VerifiedUserOutlined,
  TrendingUpOutlined,
  CategoryOutlined,
  SupportAgentOutlined,
  DevicesOutlined,
  ArrowForward,
  PeopleAltOutlined,
  BarChartOutlined,
  AccessTimeOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";
import CustomCaption from "../../../common/CustomCaption";

/* ─── Feature cards ─────────────────────────────────────────── */
const FEATURES = [
  {
    Icon: BoltOutlined,
    title: "Easy Payment",
    accent: "#f7b731",
    desc: "Easier payments with many options to sell or buy on our platform.",
  },
  {
    Icon: VerifiedUserOutlined,
    title: "High Security",
    accent: "#4caf50",
    desc: "Security system with high technology and encryption of every user’s data.",
  },
  {
    Icon: TrendingUpOutlined,
    title: "Best Ecosystem",
    accent: "#5ba4f5",
    desc: "Streamlined services with full support for your convenience.",
  },
];

/* ─── Card component ────────────────────────────────────────── */
const FeatureCard = ({ Icon, title, accent, desc, delay, wide = false }) => (
  <Box
    data-aos="flip-up"
    data-aos-delay={Math.round((delay ?? 0) * 1000)}
    sx={{
      cursor: "pointer",
      position: "relative",
      borderRadius: 3,
      border: `1px solid ${alpha("#000", 0.06)}`,
      borderLeft: `3px solid ${alpha(accent, 0.4)}`,
      background: `#ffffff`,
      p: { xs: 3, md: wide ? 4 : 3.5 },
      overflow: "hidden",
      gridColumn: wide ? { lg: "span 2" } : "span 1",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      transition:
        "transform 0.28s ease, box-shadow 0.28s ease, border-left-color 0.28s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        borderLeftColor: accent,
        boxShadow: `0 24px 52px rgba(0,0,0,0.38), -3px 0 0 ${accent}, 0 0 0 1px ${alpha(accent, 0.1)}`,
        "& .fc-learn": { opacity: 1, transform: "translateY(0)" },
        "& .fc-icon": {
          background: alpha(accent, 0.18),
          borderColor: alpha(accent, 0.35),
        },
        "& .fc-title": { color: accent },
      },
    }}
  >
    {/* Icon + accent label */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
      <Box
        className="fc-icon"
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: alpha(accent, 0.1),
          border: `1px solid ${alpha(accent, 0.2)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.28s, border-color 0.28s",
        }}
      >
        <Icon sx={{ fontSize: "1.35rem", color: accent }} />
      </Box>
      <Typography
        className="fc-title"
        sx={{
          flex: 1,
          fontSize: wide ? "1.25rem" : "1rem",
          fontWeight: 700,
          color: "#111827",
          lineHeight: 1.3,
          transition: "color 0.25s",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
    </Box>

    {/* Description */}
    <Typography
      sx={{
        fontSize: "0.845rem",
        color: ACM_COLORS.textMuted,
        lineHeight: 1.8,
        flex: 1,
        position: "relative",
        zIndex: 1,
      }}
    >
      {desc}
    </Typography>

    {/* Learn more — reveals on hover */}
    <Box
      className="fc-learn"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mt: 2,
        color: accent,
        fontSize: "0.78rem",
        fontWeight: 600,
        opacity: 0,
        transform: "translateY(6px)",
        transition: "opacity 0.25s, transform 0.25s",
        "& svg": { fontSize: "0.8rem" },
      }}
    >
      Learn more <ArrowForward />
    </Box>
  </Box>
);

/* ─── Main section ──────────────────────────────────────────── */
const PlatformFeatures = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      background: `linear-gradient(180deg, #f0f2f5 0%, #ffffff 100%)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Dot-grid background pattern */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${alpha("#000", 0.05)} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        pointerEvents: "none",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />

    {/* Side glows */}
    <Box
      sx={{
        position: "absolute",
        top: "10%",
        left: "-12%",
        width: 480,
        height: 480,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.14)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: "5%",
        right: "-10%",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.06)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />

    <Container
      maxWidth="xl"
      sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}
    >
      {/* ── Centered header ── */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
        <CustomCaption text="Why Choose ACM" />

        <Typography
          data-aos="fade-right"
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.15,
            mb: 2,
          }}
        >
          Best Features For{" "}
          <Box
            component="span"
            sx={{
              color: ACM_COLORS.orange,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -5,
                left: 0,
                width: "100%",
                height: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${ACM_COLORS.orange}, transparent)`,
              },
            }}
          >
            Traders
          </Box>{" "}
          Convenience
        </Typography>

        <Typography
          data-aos="fade-left"
          sx={{
            color: ACM_COLORS.textMuted,
            fontSize: { xs: "0.9rem", md: "1rem" },
            maxWidth: 540,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Platform advantages built to make trading faster, safer, and more
          accessible — for beginners and professionals alike.
        </Typography>
      </Box>

      {/* ── Feature bento grid ── */}
      {/* Row 1: Wide card (2col) + regular card */}
      {/* Row 2: regular + regular + wide card (2col) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {FEATURES.map((feat, i) => (
          <FeatureCard
            key={feat.title}
            {...feat}
            delay={i * 0.08}
            wide={false}
          />
        ))}
      </Box>
    </Container>
  </Box>
);

export default PlatformFeatures;
