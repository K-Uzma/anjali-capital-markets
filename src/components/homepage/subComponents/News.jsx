import { Box, Container, Typography, Grid, alpha } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";

import imgGold from "../../../assets/news/magnific_ultrarealistic-macro-fina_ohcQgHv829-1782652806820.webp";
import imgForex from "../../../assets/news/US-dollar-set-for-best-weekly-gain-as-ECB,-BOE-hold-rates-1770460792786.jpeg";
import imgCrypto from "../../../assets/news/iStock-1413623848-1781115665976.webp";
import imgIndices from "../../../assets/news/iStock-922734814-1781099101782.webp";
import imgEconomy from "../../../assets/news/iStock-2230431546-1781100310324.webp";
import imgOil from "../../../assets/news/iStock-1821850030-1781082830880.webp";
import imgEth from "../../../assets/news/iStock-1248262649-1778583674871.webp";
import imgGbp from "../../../assets/news/ChatGPT-Image-Feb-4,-2026,-05_10_23-PM-1770218040755.png";
import imgTanker from "../../../assets/news/iStock-2167350087-1781164384234.webp";

const NEWS = [
  {
    id: 1,
    tag: "Gold",
    title: "Gold Surges Past $2,320 as Risk-Off Sentiment Grips Global Markets",
    excerpt:
      "XAU/USD climbed to a three-week high as geopolitical tensions and weak US jobs data fuelled safe-haven demand across asset classes. Analysts are now targeting $2,360 on a confirmed breakout above the key resistance zone, citing strong central-bank buying and record ETF inflows as structural tailwinds that could sustain the rally well into Q3 2026.",
    date: "Jun 28, 2026",
    readTime: "4 min",
    img: imgGold,
    featured: true,
  },
  {
    id: 2,
    tag: "Forex",
    title: "Fed Holds Rates Steady — Dollar Softens on Inflation Cool-Off",
    date: "Jun 28, 2026",
    img: imgForex,
  },
  {
    id: 3,
    tag: "Crypto",
    title: "Bitcoin Reclaims $67K as Spot ETF Inflows Hit Monthly Record",
    date: "Jun 27, 2026",
    img: imgCrypto,
  },
  {
    id: 4,
    tag: "Indices",
    title: "S&P 500 Notches Fresh All-Time High on Semiconductor Rally",
    date: "Jun 27, 2026",
    img: imgIndices,
  },
  {
    id: 5,
    tag: "Economy",
    title: "ECB Minutes Signal Caution on Further Rate Cuts in Q3 2026",
    date: "Jun 26, 2026",
    img: imgEconomy,
  },
  {
    id: 6,
    tag: "Oil",
    title:
      "WTI Crude Slips Below $79 on OPEC+ Output Uncertainty Ahead of July Meet",
    date: "Jun 26, 2026",
    img: imgOil,
  },
  {
    id: 7,
    tag: "Crypto",
    title: "Ethereum Breaks $3,500 as DeFi Total Value Locked Hits 2024 Highs",
    date: "Jun 25, 2026",
    img: imgEth,
  },
  {
    id: 8,
    tag: "Oil",
    title:
      "Oil Tanker Demand Surges as Iran Closes Strait of Hormuz Threat Escalates",
    date: "Jun 25, 2026",
    img: imgTanker,
  },
  {
    id: 9,
    tag: "Forex",
    title:
      "GBP/USD Tests 1.2750 Resistance as UK CPI Beats Forecasts by Wide Margin",
    date: "Jun 24, 2026",
    img: imgGbp,
  },
];

const TAG_COLORS = {
  Forex: "#42a5f5",
  Gold: "#ffd54f",
  Crypto: "#ce93d8",
  Economy: "#ef5350",
  Indices: "#db7146",
  Oil: "#ff8a65",
};

const featured = NEWS[0];
const smallCards = NEWS.slice(1, 9);
const row1 = smallCards.slice(0, 4);
const row2 = smallCards.slice(4, 8);

/* ── Featured Article ─────────────────────────────────────── */
const FeaturedCard = () => (
  <Box
    data-aos="zoom-out-up"
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      mb: { xs: 4, md: 5 },
      gap: 0,
      overflow: "hidden",
      borderRadius: 2,
      border: `1px solid ${alpha("#000", 0.07)}`,
      "&:hover .feat-thumb": { transform: "scale(1.04)" },
    }}
  >
    {/* Left: Image */}
    <Box
      component={Link}
      to="#"
      sx={{
        flexShrink: 0,
        width: { xs: "100%", md: "44%" },
        minHeight: { xs: 220, sm: 280, md: 340 },
        position: "relative",
        overflow: "hidden",
        display: "block",
        textDecoration: "none",
        background: alpha("#000", 0.04),
      }}
    >
      <Box
        className="feat-thumb"
        component="img"
        src={featured.img}
        alt={featured.title}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
    </Box>

    {/* Right: Text */}
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: { xs: 2.5, md: 3.5, lg: 4.5 },
        background: "#f9fafb",
      }}
    >
      {/* Tag */}
      <Typography
        sx={{
          fontSize: "0.72rem",
          fontWeight: 700,
          color: TAG_COLORS[featured.tag] ?? ACM_COLORS.orange,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        {featured.tag}
      </Typography>

      {/* Title */}
      <Typography
        component={Link}
        to="#"
        sx={{
          display: "block",
          fontWeight: 700,
          fontSize: {
            xs: "1.1rem",
            sm: "1.35rem",
            md: "1.6rem",
            lg: "1.85rem",
          },
          color: "#111827",
          lineHeight: 1.25,
          mb: 2,
          textDecoration: "none",
          transition: "color 0.2s",
          "&:hover": { color: ACM_COLORS.orange },
        }}
      >
        {featured.title}
      </Typography>

      {/* Excerpt */}
      <Typography
        sx={{
          color: ACM_COLORS.textMuted,
          fontSize: { xs: "0.85rem", md: "0.9rem" },
          lineHeight: 1.8,
          mb: 3,
          display: "-webkit-box",
          WebkitLineClamp: { xs: 3, md: 6 },
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {featured.excerpt}
      </Typography>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          pt: 2,
          borderTop: `1px solid ${alpha("#000", 0.07)}`,
        }}
      >
        <Typography sx={{ fontSize: "0.75rem", color: ACM_COLORS.textMuted }}>
          {featured.date} &nbsp;·&nbsp; {featured.readTime} read
        </Typography>
        <Box
          component={Link}
          to="#"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            color: ACM_COLORS.orange,
            fontSize: "0.82rem",
            fontWeight: 600,
            textDecoration: "none",
            "& svg": {
              fontSize: "0.85rem !important",
              transition: "transform 0.2s",
            },
            "&:hover svg": { transform: "translateX(4px)" },
          }}
        >
          Read Article <ArrowForward />
        </Box>
      </Box>
    </Box>
  </Box>
);

/* ── Small card ───────────────────────────────────────────── */
const SmallCard = ({ item, delay = 0 }) => {
  const tagColor = TAG_COLORS[item.tag] ?? ACM_COLORS.orange;
  return (
    <Box data-aos="zoom-in" data-aos-delay={Math.round((delay ?? 0) * 1000)}>
      <Box
        component={Link}
        to="#"
        sx={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          "&:hover .sc-img": { transform: "scale(1.05)" },
          "&:hover .sc-title": { color: ACM_COLORS.orange },
        }}
      >
        {/* Thumbnail */}
        <Box
          sx={{
            position: "relative",
            paddingTop: "65%",
            overflow: "hidden",
            borderRadius: 1.5,
            mb: 1.25,
          }}
        >
          <Box
            className="sc-img"
            component="img"
            src={item.img}
            alt={item.title}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          />
        </Box>

        {/* Tag */}
        <Typography
          sx={{
            fontSize: "0.65rem",
            fontWeight: 700,
            color: tagColor,
            letterSpacing: 1,
            textTransform: "uppercase",
            mb: 0.5,
          }}
        >
          {item.tag}
        </Typography>

        {/* Title */}
        <Typography
          className="sc-title"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.88rem" },
            color: "#111827",
            lineHeight: 1.45,
            mb: 0.75,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.2s",
          }}
        >
          {item.title}
        </Typography>

        {/* Date */}
        <Typography sx={{ fontSize: "0.68rem", color: ACM_COLORS.textMuted }}>
          {item.date}
        </Typography>
      </Box>
    </Box>
  );
};

/* ── Section ──────────────────────────────────────────────── */
const News = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      background: `linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background glows */}
    <Box
      sx={{
        position: "absolute",
        top: "4%",
        left: "-10%",
        width: 460,
        height: 460,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.06)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: "6%",
        right: "-8%",
        width: 380,
        height: 380,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.1)} 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
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

    <Container
      maxWidth="xl"
      sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 2,
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box>
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
            Latest Financial Markets & Economy{" "}
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
              News
            </Box>
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{
              color: ACM_COLORS.textMuted,
              fontSize: { xs: "0.82rem", md: "0.88rem" },
              lineHeight: 1.6,
              maxWidth: 580,
            }}
          >
            Daily coverage of the news that moves stocks, currencies,
            commodities, crypto, central banks, and the global economy.
          </Typography>
        </Box>

        <Box
          component={Link}
          to="#"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: ACM_COLORS.orange,
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            pb: { sm: 0.5 },
            flexShrink: 0,
            "&:hover svg": { transform: "translateX(4px)" },
            "& svg": { transition: "transform 0.2s" },
          }}
        >
          View all news <ArrowForward sx={{ fontSize: "1rem" }} />
        </Box>
      </Box>

      {/* ── Featured ── */}
      <FeaturedCard />

      {/* ── Row 1: 4 cards ── */}
      <Grid
        container
        spacing={{ xs: 2.5, md: 3 }}
        sx={{ mb: { xs: 3, md: 3.5 } }}
      >
        {row1.map((item, idx) => (
          <Grid key={item.id} size={{ xs: 6, sm: 6, md: 3 }}>
            <SmallCard item={item} delay={idx * 0.07} />
          </Grid>
        ))}
      </Grid>

      {/* ── Row 2: 4 cards ── */}
      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {row2.map((item, idx) => (
          <Grid key={item.id} size={{ xs: 6, sm: 6, md: 3 }}>
            <SmallCard item={item} delay={idx * 0.07 + 0.1} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default News;
