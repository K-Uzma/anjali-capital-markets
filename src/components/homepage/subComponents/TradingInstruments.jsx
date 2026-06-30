import { useState, useEffect } from "react";
import { Box, Container, Typography, alpha } from "@mui/material";
import {
  ShowChart,
  Leaderboard,
  CurrencyExchange,
  Bolt,
  BarChart,
  CurrencyBitcoin,
  Diamond,
  TrendingUp,
  TrendingDown,
  ArrowForward,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";

/* ─── Sparkline paths (viewBox "0 0 120 36") ──────────────── */
const UP_PATHS = [
  "M0,30 L13,24 L26,27 L39,17 L52,21 L65,11 L78,15 L91,7 L104,10 L120,4",
  "M0,28 L16,20 L32,24 L48,14 L64,18 L80,8  L96,11 L120,3",
  "M0,32 L12,28 L24,30 L38,20 L52,23 L66,13 L80,16 L94,7  L120,5",
];
const DOWN_PATHS = [
  "M0,6  L13,12 L26,8  L39,18 L52,14 L65,24 L78,20 L91,30 L104,26 L120,32",
  "M0,4  L16,10 L32,6  L48,16 L64,12 L80,22 L96,18 L120,30",
  "M0,5  L12,10 L24,7  L38,17 L52,13 L66,23 L80,19 L94,28 L120,33",
];

/* ─── Instrument data ──────────────────────────────────────── */
const INITIAL_INSTRUMENTS = [
  {
    id: "usa",
    category: "USA Shares",
    ticker: "AAPL",
    price: 283.78,
    change: +1.24,
    pct: +0.44,
    up: true,
    Icon: ShowChart,
    accent: "#4a8fd9",
    sparkIdx: 0,
  },
  {
    id: "uae",
    category: "UAE Shares",
    ticker: "ETISALAT",
    price: 14.82,
    change: -0.18,
    pct: -1.20,
    up: false,
    Icon: Leaderboard,
    accent: "#2ecc71",
    sparkIdx: 0,
  },
  {
    id: "forex",
    category: "Forex",
    ticker: "EUR/USD",
    price: 1.08542,
    change: +0.00130,
    pct: +0.12,
    up: true,
    Icon: CurrencyExchange,
    accent: "#5ba4f5",
    sparkIdx: 1,
  },
  {
    id: "energy",
    category: "Energy",
    ticker: "USOIL",
    price: 78.34,
    change: -0.40,
    pct: -0.51,
    up: false,
    Icon: Bolt,
    accent: "#f5a623",
    sparkIdx: 1,
  },
  {
    id: "indices",
    category: "Indices",
    ticker: "SPX500",
    price: 5456.20,
    change: +42.18,
    pct: +0.78,
    up: true,
    Icon: BarChart,
    accent: "#a07ef0",
    sparkIdx: 2,
  },
  {
    id: "crypto",
    category: "Crypto",
    ticker: "BTC/USD",
    price: 67420.00,
    change: +1220.00,
    pct: +1.84,
    up: true,
    Icon: CurrencyBitcoin,
    accent: "#f7b731",
    sparkIdx: 2,
  },
  {
    id: "commodities",
    category: "Commodities",
    ticker: "XAU/USD",
    price: 2318.40,
    change: +7.90,
    pct: +0.34,
    up: true,
    Icon: Diamond,
    accent: "#e8b923",
    sparkIdx: 0,
  },
];

const fmtPx = (val, cat) => {
  if (cat === "Forex") return val.toFixed(5);
  if (val >= 1000)     return val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return val.toFixed(2);
};

const fmtChg = (val, cat) => {
  const sign = val >= 0 ? "+" : "";
  if (cat === "Forex") return sign + val.toFixed(5);
  return sign + val.toFixed(2);
};

/* ─── Card ─────────────────────────────────────────────────── */
const InstrumentCard = ({ inst, flash }) => {
  const { Icon, accent, up, id, sparkIdx } = inst;
  const color     = up ? "#66bb6a" : "#ef5350";
  const sparkPath = up
    ? UP_PATHS[sparkIdx % UP_PATHS.length]
    : DOWN_PATHS[sparkIdx % DOWN_PATHS.length];

  return (
    <Box
      component={Link}
      to="#"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        border: `1px solid ${alpha("#fff", 0.07)}`,
        background: `linear-gradient(160deg, ${alpha(ACM_COLORS.cardBg, 0.92)} 0%, ${alpha(ACM_COLORS.surfaceBg, 0.92)} 100%)`,
        textDecoration: "none",
        position: "relative",
        transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
        /* Left accent bar */
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: 3,
          background: `linear-gradient(180deg, ${accent}, transparent)`,
          borderRadius: "3px 0 0 3px",
          opacity: 0,
          transition: "opacity 0.28s",
        },
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: alpha(accent, 0.35),
          boxShadow: `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${alpha(accent, 0.12)}`,
          "&::before": { opacity: 1 },
        },
        "&:hover .card-learn": { color: accent },
        "&:hover .card-arrow": { transform: "translateX(4px)" },
      }}
    >
      {/* ── Top: icon + label ── */}
      <Box sx={{ p: "22px 22px 16px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1.5 }}>
        {/* Icon box */}
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: "14px",
            background: alpha(accent, 0.12),
            border: `1px solid ${alpha(accent, 0.22)}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 4px 16px ${alpha(accent, 0.18)}`,
            transition: "box-shadow 0.28s",
          }}
        >
          <Icon sx={{ fontSize: "1.55rem", color: accent }} />
        </Box>

        {/* Category + ticker */}
        <Box sx={{ flex: 1, pt: 0.25 }}>
          <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: accent, textTransform: "uppercase", letterSpacing: 0.8, mb: 0.25 }}>
            {inst.category}
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: alpha("#fff", 0.55), fontFamily: "monospace", letterSpacing: 0.5 }}>
            {inst.ticker}
          </Typography>
        </Box>

        {/* Change badge — top right */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.3,
            background: alpha(color, 0.1),
            border: `1px solid ${alpha(color, 0.22)}`,
            borderRadius: "100px",
            px: 0.9,
            py: 0.35,
            flexShrink: 0,
          }}
        >
          {up
            ? <TrendingUp sx={{ fontSize: "0.7rem", color }} />
            : <TrendingDown sx={{ fontSize: "0.7rem", color }} />
          }
          <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, color, fontFamily: "monospace" }}>
            {up ? "+" : ""}{inst.pct.toFixed(2)}%
          </Typography>
        </Box>
      </Box>

      {/* ── Price ── */}
      <Box sx={{ px: "22px", pb: 1.5 }}>
        <Typography
          sx={{
            fontSize: "1.55rem",
            fontWeight: 800,
            color: flash ? color : "#fff",
            fontFamily: "monospace",
            lineHeight: 1,
            transition: "color 0.35s",
          }}
        >
          {inst.category === "Forex" ? "" : "$"}{fmtPx(inst.price, inst.category)}
        </Typography>
        <Typography sx={{ fontSize: "0.7rem", color: alpha(color, 0.75), fontFamily: "monospace", mt: 0.5 }}>
          {fmtChg(inst.change, inst.category)} today
        </Typography>
      </Box>

      {/* ── Sparkline ── */}
      <Box
        sx={{
          px: "22px",
          pb: 0,
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          "& svg": { display: "block", width: "100%", overflow: "visible" },
        }}
      >
        <svg viewBox="0 0 120 36" preserveAspectRatio="none" style={{ height: 48 }}>
          <defs>
            <linearGradient id={`g-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.28" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${sparkPath} L120,36 L0,36 Z`} fill={`url(#g-${id})`} />
          <polyline
            points={sparkPath.replace(/[ML]/g, "").trim()}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </Box>

      {/* ── Footer ── */}
      <Box
        sx={{
          px: "22px",
          py: 1.75,
          borderTop: `1px solid ${alpha("#fff", 0.05)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className="card-learn"
          sx={{ fontSize: "0.78rem", fontWeight: 600, color: ACM_COLORS.textMuted, transition: "color 0.22s" }}
        >
          Learn more
        </Typography>
        <ArrowForward
          className="card-arrow"
          sx={{ fontSize: "0.9rem", color: ACM_COLORS.textMuted, transition: "transform 0.22s, color 0.22s" }}
        />
      </Box>
    </Box>
  );
};

/* ─── Main component ───────────────────────────────────────── */
const TradingInstruments = () => {
  const [instruments, setInstruments] = useState(INITIAL_INSTRUMENTS);
  const [flashId, setFlashId]         = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setInstruments(prev => {
        const idx  = Math.floor(Math.random() * prev.length);
        const item = prev[idx];
        const sign = item.up ? 1 : -1;
        const nudge = (Math.random() * 0.0004 + 0.0001) * item.price * sign;
        const newPrice  = +(item.price + nudge).toPrecision(7);
        const newChange = +(item.change + nudge).toPrecision(5);
        const newPct    = +((newChange / (newPrice - newChange)) * 100).toFixed(2);
        const updated   = prev.map((r, i) =>
          i !== idx ? r : { ...r, price: newPrice, change: newChange, pct: newPct, up: newChange >= 0 }
        );
        setFlashId(item.id);
        setTimeout(() => setFlashId(null), 450);
        return updated;
      });
    }, 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(180deg, ${ACM_COLORS.darkBg} 0%, ${ACM_COLORS.deepPurple} 100%)`,
        position: "relative",
        overflow: "hidden",
        "& .swiper-pagination-bullet": {
          background: alpha("#fff", 0.2),
          opacity: 1,
          width: 7,
          height: 7,
          transition: "all 0.25s",
        },
        "& .swiper-pagination-bullet-active": {
          background: ACM_COLORS.orange,
          width: 22,
          borderRadius: 4,
          boxShadow: `0 0 8px ${alpha(ACM_COLORS.orange, 0.6)}`,
        },
        "& .swiper-button-prev, & .swiper-button-next": { display: "none" },
      }}
    >
      {/* subtle bg glow */}
      <Box sx={{ position: "absolute", top: "10%", right: "-8%", width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.04)} 0%, transparent 70%)`, pointerEvents: "none" }} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: { sm: "flex-end" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 2,
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, background: alpha(ACM_COLORS.orange, 0.12), border: `1px solid ${alpha(ACM_COLORS.orange, 0.25)}`, borderRadius: "100px", px: 2.5, py: 0.75, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: ACM_COLORS.orange, boxShadow: `0 0 8px ${alpha(ACM_COLORS.orange, 0.7)}` }} />
              <Typography sx={{ color: ACM_COLORS.orange, fontSize: "0.75rem", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>
                200+ Instruments
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.85rem", sm: "2.4rem", md: "3rem" }, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
              Explore Our Variety of{" "}
              <Box component="span" sx={{ color: ACM_COLORS.orange, position: "relative", "&::after": { content: '""', position: "absolute", bottom: -4, left: 0, width: "100%", height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${ACM_COLORS.orange}, transparent)` } }}>
                Trading Instruments
              </Box>
            </Typography>
            <Typography sx={{ color: ACM_COLORS.textMuted, fontSize: { xs: "0.875rem", md: "0.95rem" }, mt: 1.5, maxWidth: 540 }}>
              Trade stocks, forex, commodities, crypto and more — from a single account with ultra-tight spreads.
            </Typography>
          </Box>

          {/* Nav arrows */}
          <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
            {[{ cls: "ti-prev", Icon: ChevronLeft }, { cls: "ti-next", Icon: ChevronRight }].map(({ cls, Icon: NavIcon }) => (
              <Box
                key={cls}
                className={cls}
                sx={{
                  width: 42, height: 42, borderRadius: "12px",
                  border: `1px solid ${alpha("#fff", 0.1)}`,
                  background: alpha(ACM_COLORS.cardBg, 0.5),
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "all 0.2s",
                  color: ACM_COLORS.textMuted,
                  "&:hover": { borderColor: ACM_COLORS.orange, background: alpha(ACM_COLORS.orange, 0.1), color: ACM_COLORS.orange },
                }}
              >
                <NavIcon />
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Swiper ── */}
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{ ".swiper": { pb: "46px" } }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            navigation={{ prevEl: ".ti-prev", nextEl: ".ti-next" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              480:  { slidesPerView: 1.7, spaceBetween: 16 },
              640:  { slidesPerView: 2.3, spaceBetween: 18 },
              900:  { slidesPerView: 3.3, spaceBetween: 20 },
              1200: { slidesPerView: 4.3, spaceBetween: 22 },
              1400: { slidesPerView: 4.7, spaceBetween: 24 },
            }}
          >
            {instruments.map((inst) => (
              <SwiperSlide key={inst.id}>
                <InstrumentCard inst={inst} flash={flashId === inst.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* ── CTA ── */}
        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{ textAlign: "center", mt: 1 }}
        >
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
              border: `1px solid ${alpha(ACM_COLORS.orange, 0.25)}`,
              borderRadius: "100px",
              px: 3,
              py: 1,
              background: alpha(ACM_COLORS.orange, 0.06),
              transition: "all 0.2s",
              "& svg": { transition: "transform 0.2s" },
              "&:hover": { background: alpha(ACM_COLORS.orange, 0.12), borderColor: alpha(ACM_COLORS.orange, 0.5) },
              "&:hover svg": { transform: "translateX(4px)" },
            }}
          >
            View All Instruments <ArrowForward sx={{ fontSize: "0.9rem" }} />
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default TradingInstruments;
