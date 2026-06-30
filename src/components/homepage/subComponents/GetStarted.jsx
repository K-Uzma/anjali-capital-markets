import { Box, Container, Typography, Button, alpha } from "@mui/material";
import {
  PersonAddAlt1,
  AccountBalanceWallet,
  RocketLaunch,
  ArrowForward,
  CheckCircleOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";
import CustomCaption from "../../../common/CustomCaption";

const STEPS = [
  {
    num: "01",
    icon: PersonAddAlt1,
    title: "Create Account",
    desc: "Open an Anjali Capital Markets account in minutes with our simple online form. Submit your ID and proof of address to verify in under 10 minutes.",
    bullets: [
      "Free registration",
      "Identity verified in <10 min",
      "No hidden fees",
    ],
    accent: "#db7146",
  },
  {
    num: "02",
    icon: AccountBalanceWallet,
    title: "Deposit Funds",
    desc: "Fund your account quickly and securely via bank transfer, debit/credit card, or e-wallet. All deposits are fee-free from our side.",
    bullets: [
      "Instant card & e-wallet deposits",
      "Bank transfer 1–3 days",
      "Min. $100 to start",
    ],
    accent: "#9c6fcb",
  },
  {
    num: "03",
    icon: RocketLaunch,
    title: "Start Trading",
    desc: "Access 200+ instruments across Forex, Stocks, Commodities, Indices and Crypto on MT5 — from desktop or mobile, 24/5.",
    bullets: ["200+ instruments", "Leverage up to 1:500", "MT5 on all devices"],
    accent: "#4caf50",
  },
];

const GetStarted = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      background: `linear-gradient(180deg, #ffffff 0%, #f0f2f5 100%)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container
      maxWidth="xl"
      sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}
    >
      {/* ── Header ── */}
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
        <CustomCaption text="Quick Start" />

        <Typography
          data-aos="fade-right"
          variant="h2"
          sx={{
            fontSize: { xs: "1.85rem", sm: "2.4rem", md: "3rem" },
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Follow Our Easy Steps &{" "}
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
            Start Trading
          </Box>
        </Typography>

        <Typography
          data-aos="fade-left"
          sx={{
            color: ACM_COLORS.textMuted,
            fontSize: { xs: "0.875rem", md: "1rem" },
            maxWidth: 500,
            mx: "auto",
            lineHeight: 1.75,
          }}
        >
          Get up and running in three simple steps. No experience required — our
          team is here every step of the way.
        </Typography>
      </Box>

      {/* ── Steps ── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 3, md: 2 },
          position: "relative",
        }}
      >
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Box
              key={step.num}
              data-aos="flip-right"
              data-aos-delay={idx * 150}
              sx={{
                position: "relative",
                zIndex: 1,
                borderRadius: 3,
                border: `1px solid ${alpha("#000", 0.07)}`,
                background: `#ffffff`,
                p: { xs: 3, md: 3.5 },
                overflow: "hidden",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: alpha(step.accent, 0.35),
                  boxShadow: `0 24px 48px rgba(0,0,0,0.35), 0 0 0 1px ${alpha(step.accent, 0.15)}`,
                },
                /* Accent top bar */
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${step.accent}, transparent)`,
                  borderRadius: "12px 12px 0 0",
                },
              }}
            >
              {/* Large background number */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: 16,
                  fontSize: "7rem",
                  fontWeight: 900,
                  color: alpha("#000", 0.03),
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.num}
              </Typography>

              {/* Icon circle */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "18px",
                  background: alpha(step.accent, 0.12),
                  border: `1px solid ${alpha(step.accent, 0.25)}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                  position: "relative",
                  "&::after": {
                    content: `"${step.num}"`,
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: step.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: "24px",
                    textAlign: "center",
                    boxShadow: `0 2px 8px ${alpha(step.accent, 0.5)}`,
                  },
                }}
              >
                <Icon sx={{ fontSize: "1.75rem", color: step.accent }} />
              </Box>

              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#111827",
                  mb: 1,
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.845rem",
                  color: ACM_COLORS.textMuted,
                  lineHeight: 1.75,
                  mb: 2.5,
                }}
              >
                {step.desc}
              </Typography>

              {/* Bullet list */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                {step.bullets.map((b) => (
                  <Box
                    key={b}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleOutline
                      sx={{
                        fontSize: "0.9rem",
                        color: step.accent,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        color: ACM_COLORS.textSecondary,
                      }}
                    >
                      {b}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Step connector arrow — mobile */}
              {idx < STEPS.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    mt: 2,
                    color: alpha(step.accent, 0.5),
                  }}
                >
                  <ArrowForward
                    sx={{ fontSize: "1.1rem", transform: "rotate(90deg)" }}
                  />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* ── Trust strip ── */}
      <Box
        data-aos="fade-up"
        data-aos-delay="300"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2.5, md: 4 },
          mt: 4,
        }}
      >
        {[
          "No Commission",
          "Segregated Funds",
          "24/5 Support",
          "Regulated Broker",
        ].map((label) => (
          <Box
            key={label}
            sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
          >
            <CheckCircleOutline
              sx={{ fontSize: "0.85rem", color: alpha(ACM_COLORS.orange, 0.7) }}
            />
            <Typography
              sx={{ fontSize: "0.78rem", color: ACM_COLORS.textMuted }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default GetStarted;
