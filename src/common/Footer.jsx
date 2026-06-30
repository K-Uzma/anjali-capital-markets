import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Divider,
  Stack,
  Grid,
  alpha,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  YouTube,
  StarOutline,
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../theme";

const SERVICES = [
  { label: "Home", href: "/" },
  { label: "Live Account", href: "#" },
  { label: "How to Deposit", href: "#" },
  { label: "How to Withdraw", href: "#" },
  { label: "Fees & Charges", href: "#" },
  { label: "Contact Us", href: "#" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Risk Disclosure Policy", href: "#" },
  { label: "Regulations for Non-Trading Operations", href: "#" },
  { label: "Client Agreement", href: "#" },
  { label: "Complaints Management Policy", href: "#" },
];

const PLATFORM = [
  { label: "MT5", href: "#" },
  { label: "Fix API", href: "#" },
  { label: "Tools", href: "#" },
];

const SOCIAL = [
  {
    icon: <Facebook sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "Facebook",
    gradientFrom: "#1877f2",
    gradientTo: "#0d5fc2",
  },
  {
    icon: <Instagram sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "Instagram",
    gradientFrom: "#f09433",
    gradientTo: "#c12f94",
  },
  {
    icon: <LinkedIn sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "LinkedIn",
    gradientFrom: "#0077b5",
    gradientTo: "#00a0dc",
  },
  {
    icon: <Telegram sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "Telegram",
    gradientFrom: "#2aabee",
    gradientTo: "#1a7fc1",
  },
  {
    icon: <StarOutline sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "Trustpilot",
    gradientFrom: "#00b67a",
    gradientTo: "#007a52",
  },
  {
    icon: <YouTube sx={{ fontSize: "1.1rem" }} />,
    href: "#",
    label: "YouTube",
    gradientFrom: "#ff4e45",
    gradientTo: "#c1001f",
  },
];

const CONTACT_ITEMS = [
  {
    icon: <LocationOnOutlined sx={{ fontSize: "0.9rem" }} />,
    text: "Level 7, ICONEBENE, Lot B441, Rue de l'Institut, Ebene 72201, Mauritius",
  },
  {
    icon: <EmailOutlined sx={{ fontSize: "0.9rem" }} />,
    text: "info@anjalicapitalmarkets.com",
    href: "mailto:info@anjalicapitalmarkets.com",
  },
  {
    icon: <PhoneOutlined sx={{ fontSize: "0.9rem" }} />,
    text: "+230 490 4300",
    href: "tel:+2304904300",
  },
];

const FooterLinkColumn = ({ title, links }) => (
  <Box>
    <Typography
      sx={{
        color: "#111827",
        fontWeight: 600,
        mb: 2.5,
        fontSize: "0.875rem",
        letterSpacing: 0.5,
        textTransform: "uppercase",
        position: "relative",
        pb: 1.5,
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 24,
          height: 2,
          background: ACM_COLORS.orange,
          borderRadius: 1,
        },
      }}
    >
      {title}
    </Typography>
    <Stack spacing={1.25}>
      {links.map((link) => (
        <MuiLink
          key={link.label}
          component={Link}
          to={link.href}
          underline="none"
          sx={{
            color: "rgba(0,0,0,0.65)",
            fontSize: "0.855rem",
            lineHeight: 1.5,
            transition: "color 0.2s, padding-left 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            "&:hover": {
              color: ACM_COLORS.orange,
              pl: 0.5,
            },
          }}
        >
          {link.label}
        </MuiLink>
      ))}
    </Stack>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "#f8f9fa",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Top gradient accent */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${ACM_COLORS.orange} 30%, ${ACM_COLORS.mediumPurple} 70%, transparent)`,
      }}
    />

    {/* Faint bg glow */}
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.08)} 0%, transparent 65%)`,
        bottom: -200,
        left: -100,
        pointerEvents: "none",
      }}
    />

    <Container
      maxWidth="xl"
      sx={{ pt: { xs: 7, md: 10 }, pb: 0, px: { xs: 2, md: 3 } }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* Brand Column */}
        <Grid size={{ xs: 12, md: 3.5 }} data-aos="fade-right">
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "inline-flex", mb: 2.5, textDecoration: "none" }}
          >
            <Box
              component="img"
              src="/logo.svg"
              alt="Anjali Capital Markets"
              sx={{ height: 28, width: "auto" }}
            />
          </Box>

          <Typography
            sx={{
          color: "rgba(0,0,0,0.6)",
          fontSize: "0.855rem",
          lineHeight: 1.85,
          mb: 3,
          maxWidth: 280,
            }}
          >
            Empowering traders worldwide with institutional-grade access to
            global financial markets — gold, forex, indices, and more.
          </Typography>

          {/* Social Icons — gradient expand menu */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {SOCIAL.map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--gf": s.gradientFrom, "--gt": s.gradientTo }}
                sx={{
                  position: "relative",
                  width: 36,
                  height: 36,
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  textDecoration: "none",
                  flexShrink: 0,
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  transition:
                    "width 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.45s ease",
                  cursor: "pointer",
                  // gradient overlay
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "100px",
                    background:
                      "linear-gradient(45deg, var(--gf), var(--gt))",
                    opacity: 0,
                    transition: "opacity 0.45s ease",
                    zIndex: 0,
                  },
                  "&:hover": {
                    width: 120,
                    boxShadow: "0 8px 24px -4px var(--gf)",
                  },
                  "&:hover::before": { opacity: 1 },
                  "&:hover .s-icon": { transform: "scale(0)", opacity: 0 },
                  "&:hover .s-label": { transform: "scale(1)", opacity: 1 },
                }}
              >
                {/* Icon */}
                <Box
                  className="s-icon"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(0,0,0,0.45)",
                    transform: "scale(1)",
                    opacity: 1,
                    transition: "transform 0.25s ease, opacity 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </Box>

                {/* Label */}
                <Typography
                  className="s-label"
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    color: "#fff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                    transform: "scale(0)",
                    opacity: 0,
                    transition:
                      "transform 0.25s ease 0.1s, opacity 0.25s ease 0.1s",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Services */}
        <Grid size={{ xs: 6, sm: 3, md: 1.8 }} data-aos="fade-down">
          <FooterLinkColumn title="Services" links={SERVICES} />
        </Grid>

        {/* Legal */}
        <Grid size={{ xs: 6, sm: 3, md: 2.7 }} data-aos="fade-up">
          <FooterLinkColumn title="Legal" links={LEGAL} />
        </Grid>

        {/* Platform */}
        <Grid size={{ xs: 6, sm: 3, md: 1.5 }} data-aos="fade-down">
          <FooterLinkColumn title="Platform" links={PLATFORM} />
        </Grid>

        {/* Company / Contact */}
        <Grid size={{ xs: 12, sm: 6, md: 2.5 }} data-aos="fade-left">
          <Typography
            sx={{
              color: "#111827",
              fontWeight: 600,
              mb: 2.5,
              fontSize: "0.875rem",
              letterSpacing: 0.5,
              textTransform: "uppercase",
              position: "relative",
              pb: 1.5,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 24,
                height: 2,
                background: ACM_COLORS.orange,
                borderRadius: 1,
              },
            }}
          >
            Company
          </Typography>

          <Typography
            sx={{             color: "#111827", fontWeight: 600, fontSize: "0.875rem", mb: 2 }}
          >
            Anjali Capital Markets
          </Typography>

          <Stack spacing={2}>
            {CONTACT_ITEMS.map((item, i) => (
              <Box
                key={i}
                sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    color: ACM_COLORS.orange,
                    mt: 0.1,
                    flexShrink: 0,
                    opacity: 0.85,
                  }}
                >
                  {item.icon}
                </Box>
                {item.href ? (
                  <MuiLink
                    href={item.href}
                    underline="none"
                    sx={{
                      color: "rgba(0,0,0,0.65)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      "&:hover": { color: ACM_COLORS.orange },
                      transition: "color 0.2s",
                    }}
                  >
                    {item.text}
                  </MuiLink>
                ) : (
                  <Typography
                    sx={{
                      color: "rgba(0,0,0,0.65)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </Typography>
                )}
              </Box>
            ))}

            {/* Registration */}
            <Box
              sx={{
                mt: 0.5,
                p: 1.5,
                background: alpha("#000", 0.03),
                border: `1px solid ${alpha("#000", 0.07)}`,
                borderRadius: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: ACM_COLORS.orange,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                Registration
              </Typography>
              <Typography
                sx={{               color: "rgba(0,0,0,0.65)", fontSize: "0.8rem" }}
              >
                221983 GBC
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ mt: 7, borderColor: alpha("#000", 0.06) }} />

      {/* Bottom bar */}
      <Box
        data-aos="fade-up"
        sx={{
          py: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{ color: "rgba(0,0,0,0.5)", fontSize: "0.78rem" }}
        >
          © {new Date().getFullYear()} Anjali Capital Markets Ltd. All rights
          reserved.
        </Typography>
        <Stack
          direction="row"
          spacing={2.5}
          flexWrap="wrap"
          justifyContent="center"
        >
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Risk Disclosure", href: "#" },
            { label: "Complaints", href: "#" },
          ].map((link) => (
            <MuiLink
              key={link.label}
              component={Link}
              to={link.href}
              underline="none"
              sx={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "0.775rem",
                "&:hover": { color: ACM_COLORS.orange },
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </MuiLink>
          ))}
        </Stack>
      </Box>

      {/* Risk Disclaimer */}
      <Box
        sx={{
          borderTop: `1px solid ${alpha("#000", 0.05)}`,
          py: 3,
          px: { xs: 0, md: 0 },
        }}
      >
        <Typography
          sx={{
            color: "rgba(0,0,0,0.45)",
            fontSize: "0.71rem",
            lineHeight: 1.9,
            maxWidth: "100%",
          }}
        >
          <Box
            component="span"
            sx={{ color: "rgba(0,0,0,0.65)", fontWeight: 600 }}
          >
            Risk Warning:{" "}
          </Box>
          Trading CFDs and FX carries significant risk. OTC derivatives are
          leveraged products and can result in losses which exceed deposits.
          Please ensure you fully understand the risks involved and seek
          independent advice if necessary. Anjali Capital Markets is registered
          in Mauritius (Registration No. 221983 GBC). Services are not available
          to residents of the USA, Japan, UAE, Russia, and certain other
          jurisdictions.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
