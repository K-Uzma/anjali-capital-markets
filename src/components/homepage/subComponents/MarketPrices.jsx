import { useState, useEffect, useCallback } from "react";
import { Box, Container, Typography, alpha } from "@mui/material";
import { TrendingUp, TrendingDown, ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";
import CustomCaption from "../../../common/CustomCaption";

/* ─── Static market data ────────────────────────────────────── */
const MARKET_DATA = {
  Stocks: [
    {
      id: "SPX",
      name: "SpaceX",
      ticker: "SPACEX",
      price: 153.23,
      change: +0.23,
      pct: +0.15,
      high: 158.4,
      low: 148.51,
      w52l: 135.0,
      w52h: 225.64,
      up: true,
    },
    {
      id: "TSLA",
      name: "Tesla, Inc.",
      ticker: "TSLA",
      price: 379.71,
      change: +4.59,
      pct: +1.22,
      high: 387.8,
      low: 368.6,
      w52l: 288.77,
      w52h: 498.83,
      up: true,
    },
    {
      id: "AAPL",
      name: "Apple Inc.",
      ticker: "AAPL",
      price: 283.78,
      change: +8.63,
      pct: +3.14,
      high: 285.95,
      low: 274.21,
      w52l: 199.26,
      w52h: 317.4,
      up: true,
    },
    {
      id: "MSFT",
      name: "Microsoft Corp.",
      ticker: "MSFT",
      price: 372.97,
      change: +20.14,
      pct: +5.71,
      high: 376.61,
      low: 355.43,
      w52l: 349.2,
      w52h: 555.45,
      up: true,
    },
    {
      id: "GOOG",
      name: "Alphabet Inc.",
      ticker: "GOOGL",
      price: 337.39,
      change: -6.32,
      pct: -1.84,
      high: 346.36,
      low: 330.2,
      w52l: 169.94,
      w52h: 408.61,
      up: false,
    },
    {
      id: "IBM",
      name: "IBM",
      ticker: "IBM",
      price: 271.63,
      change: +13.36,
      pct: +5.18,
      high: 273.14,
      low: 258.28,
      w52l: 212.34,
      w52h: 332.46,
      up: true,
    },
  ],
  Crypto: [
    {
      id: "BTC",
      name: "Bitcoin",
      ticker: "BTC/USD",
      price: 67420.0,
      change: +1220.0,
      pct: +1.84,
      high: 68100.0,
      low: 65800.0,
      w52l: 38500.0,
      w52h: 73800.0,
      up: true,
    },
    {
      id: "ETH",
      name: "Ethereum",
      ticker: "ETH/USD",
      price: 3520.5,
      change: +84.2,
      pct: +2.45,
      high: 3610.0,
      low: 3380.0,
      w52l: 1820.0,
      w52h: 4090.0,
      up: true,
    },
    {
      id: "BNB",
      name: "BNB",
      ticker: "BNB/USD",
      price: 612.4,
      change: +4.75,
      pct: +0.78,
      high: 625.0,
      low: 598.0,
      w52l: 320.0,
      w52h: 725.0,
      up: true,
    },
    {
      id: "SOL",
      name: "Solana",
      ticker: "SOL/USD",
      price: 185.3,
      change: +5.62,
      pct: +3.12,
      high: 192.0,
      low: 178.0,
      w52l: 68.0,
      w52h: 213.0,
      up: true,
    },
    {
      id: "XRP",
      name: "XRP",
      ticker: "XRP/USD",
      price: 0.6842,
      change: -0.0086,
      pct: -1.24,
      high: 0.712,
      low: 0.665,
      w52l: 0.412,
      w52h: 0.883,
      up: false,
    },
    {
      id: "ADA",
      name: "Cardano",
      ticker: "ADA/USD",
      price: 0.483,
      change: +0.0046,
      pct: +0.95,
      high: 0.501,
      low: 0.468,
      w52l: 0.284,
      w52h: 0.712,
      up: true,
    },
  ],
  ETFs: [
    {
      id: "SPY",
      name: "SPDR S&P 500 ETF",
      ticker: "SPY",
      price: 545.32,
      change: +4.62,
      pct: +0.85,
      high: 548.9,
      low: 539.1,
      w52l: 430.22,
      w52h: 562.45,
      up: true,
    },
    {
      id: "QQQ",
      name: "Invesco QQQ Trust",
      ticker: "QQQ",
      price: 478.64,
      change: +5.32,
      pct: +1.12,
      high: 483.2,
      low: 471.5,
      w52l: 352.15,
      w52h: 492.8,
      up: true,
    },
    {
      id: "VTI",
      name: "Vanguard Total Market",
      ticker: "VTI",
      price: 254.18,
      change: +1.83,
      pct: +0.72,
      high: 256.4,
      low: 251.3,
      w52l: 206.45,
      w52h: 261.8,
      up: true,
    },
    {
      id: "GLD",
      name: "SPDR Gold Shares",
      ticker: "GLD",
      price: 225.4,
      change: +0.85,
      pct: +0.38,
      high: 226.8,
      low: 222.6,
      w52l: 180.2,
      w52h: 232.5,
      up: true,
    },
    {
      id: "IWM",
      name: "iShares Russell 2000",
      ticker: "IWM",
      price: 198.75,
      change: -0.48,
      pct: -0.24,
      high: 201.3,
      low: 196.5,
      w52l: 163.8,
      w52h: 226.2,
      up: false,
    },
    {
      id: "EEM",
      name: "iShares MSCI Emerging",
      ticker: "EEM",
      price: 42.85,
      change: +0.24,
      pct: +0.56,
      high: 43.4,
      low: 42.2,
      w52l: 36.8,
      w52h: 46.9,
      up: true,
    },
  ],
  Commodities: [
    {
      id: "XAU",
      name: "Gold",
      ticker: "XAU/USD",
      price: 2318.4,
      change: +7.9,
      pct: +0.34,
      high: 2325.6,
      low: 2295.1,
      w52l: 1820.0,
      w52h: 2431.5,
      up: true,
    },
    {
      id: "XAG",
      name: "Silver",
      ticker: "XAG/USD",
      price: 28.45,
      change: -0.06,
      pct: -0.21,
      high: 29.1,
      low: 27.9,
      w52l: 22.3,
      w52h: 32.5,
      up: false,
    },
    {
      id: "WTI",
      name: "WTI Crude Oil",
      ticker: "WTI/USD",
      price: 78.34,
      change: -0.4,
      pct: -0.51,
      high: 80.12,
      low: 77.65,
      w52l: 63.2,
      w52h: 95.18,
      up: false,
    },
    {
      id: "NG",
      name: "Natural Gas",
      ticker: "NG/USD",
      price: 2.84,
      change: +0.035,
      pct: +1.23,
      high: 2.91,
      low: 2.72,
      w52l: 1.65,
      w52h: 3.72,
      up: true,
    },
    {
      id: "HG",
      name: "Copper",
      ticker: "HG/USD",
      price: 4.85,
      change: +0.032,
      pct: +0.67,
      high: 4.92,
      low: 4.76,
      w52l: 3.62,
      w52h: 5.2,
      up: true,
    },
    {
      id: "XPT",
      name: "Platinum",
      ticker: "XPT/USD",
      price: 1042.5,
      change: -9.2,
      pct: -0.88,
      high: 1065.0,
      low: 1028.0,
      w52l: 878.0,
      w52h: 1114.0,
      up: false,
    },
  ],
  Currencies: [
    {
      id: "EU",
      name: "Euro",
      ticker: "EUR/USD",
      price: 1.08542,
      change: +0.0013,
      pct: +0.12,
      high: 1.0898,
      low: 1.0789,
      w52l: 1.0601,
      w52h: 1.1139,
      up: true,
    },
    {
      id: "GB",
      name: "British Pound",
      ticker: "GBP/USD",
      price: 1.27183,
      change: -0.00102,
      pct: -0.08,
      high: 1.2785,
      low: 1.2652,
      w52l: 1.2299,
      w52h: 1.3142,
      up: false,
    },
    {
      id: "JP",
      name: "Japanese Yen",
      ticker: "USD/JPY",
      price: 149.62,
      change: +0.51,
      pct: +0.34,
      high: 150.45,
      low: 148.9,
      w52l: 141.35,
      w52h: 158.44,
      up: true,
    },
    {
      id: "AU",
      name: "Australian Dollar",
      ticker: "AUD/USD",
      price: 0.6521,
      change: -0.00098,
      pct: -0.15,
      high: 0.6578,
      low: 0.6483,
      w52l: 0.627,
      w52h: 0.69,
      up: false,
    },
    {
      id: "CH",
      name: "Swiss Franc",
      ticker: "USD/CHF",
      price: 0.89234,
      change: +0.0008,
      pct: +0.09,
      high: 0.8978,
      low: 0.8865,
      w52l: 0.855,
      w52h: 0.9245,
      up: true,
    },
    {
      id: "CA",
      name: "Canadian Dollar",
      ticker: "USD/CAD",
      price: 1.3654,
      change: -0.003,
      pct: -0.22,
      high: 1.3712,
      low: 1.3602,
      w52l: 1.3288,
      w52h: 1.39,
      up: false,
    },
  ],
  Bonds: [
    {
      id: "US10",
      name: "US 10Y T-Note",
      ticker: "US10Y",
      price: 4.285,
      change: -0.042,
      pct: -0.97,
      high: 4.312,
      low: 4.241,
      w52l: 3.622,
      w52h: 5.021,
      up: false,
    },
    {
      id: "US2",
      name: "US 2Y T-Note",
      ticker: "US2Y",
      price: 4.651,
      change: -0.018,
      pct: -0.39,
      high: 4.678,
      low: 4.618,
      w52l: 4.12,
      w52h: 5.302,
      up: false,
    },
    {
      id: "US30",
      name: "US 30Y T-Bond",
      ticker: "US30Y",
      price: 4.542,
      change: -0.031,
      pct: -0.68,
      high: 4.58,
      low: 4.51,
      w52l: 3.81,
      w52h: 5.18,
      up: false,
    },
    {
      id: "DE10",
      name: "Germany 10Y Bund",
      ticker: "DE10Y",
      price: 2.312,
      change: -0.028,
      pct: -1.2,
      high: 2.348,
      low: 2.285,
      w52l: 1.882,
      w52h: 3.024,
      up: false,
    },
    {
      id: "GB10",
      name: "UK 10Y Gilt",
      ticker: "GB10Y",
      price: 4.125,
      change: -0.015,
      pct: -0.36,
      high: 4.148,
      low: 4.092,
      w52l: 3.49,
      w52h: 4.823,
      up: false,
    },
    {
      id: "JP10",
      name: "Japan 10Y JGB",
      ticker: "JP10Y",
      price: 0.925,
      change: +0.008,
      pct: +0.87,
      high: 0.935,
      low: 0.912,
      w52l: 0.502,
      w52h: 1.108,
      up: true,
    },
  ],
  Funds: [
    {
      id: "VNG",
      name: "Vanguard 500 Index",
      ticker: "VFIAX",
      price: 465.2,
      change: +3.12,
      pct: +0.67,
      high: 468.4,
      low: 460.8,
      w52l: 368.5,
      w52h: 481.2,
      up: true,
    },
    {
      id: "FCF",
      name: "Fidelity Contrafund",
      ticker: "FCNTX",
      price: 182.45,
      change: +1.24,
      pct: +0.68,
      high: 183.9,
      low: 180.2,
      w52l: 145.3,
      w52h: 188.6,
      up: true,
    },
    {
      id: "PIM",
      name: "Pimco Total Return",
      ticker: "PTTRX",
      price: 8.92,
      change: -0.03,
      pct: -0.33,
      high: 8.96,
      low: 8.88,
      w52l: 8.42,
      w52h: 9.58,
      up: false,
    },
    {
      id: "TRP",
      name: "T.Rowe Price Growth",
      ticker: "TRBCX",
      price: 104.3,
      change: +2.18,
      pct: +2.13,
      high: 105.6,
      low: 102.8,
      w52l: 82.4,
      w52h: 108.9,
      up: true,
    },
    {
      id: "BLK",
      name: "BlackRock Global Alloc",
      ticker: "MDLOX",
      price: 22.65,
      change: +0.42,
      pct: +1.89,
      high: 22.9,
      low: 22.3,
      w52l: 18.8,
      w52h: 23.6,
      up: true,
    },
    {
      id: "AMG",
      name: "American Growth Fund",
      ticker: "AGTHX",
      price: 68.9,
      change: +1.85,
      pct: +2.76,
      high: 69.5,
      low: 67.8,
      w52l: 54.2,
      w52h: 72.4,
      up: true,
    },
  ],
};

const TABS = [
  "Stocks",
  "Crypto",
  "ETFs",
  "Commodities",
  "Currencies",
  "Bonds",
  "Funds",
];

/* format price per category */
const fmtPrice = (val, cat) => {
  if (cat === "Currencies") return val.toFixed(5);
  if (cat === "Bonds") return `${val.toFixed(3)}%`;
  if (cat === "Crypto" && val < 10) return `$${val.toFixed(4)}`;
  if (val >= 1000)
    return `$${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${val.toFixed(2)}`;
};

const fmtChange = (val, cat) => {
  if (cat === "Currencies") return val.toFixed(5);
  if (cat === "Bonds") return val.toFixed(3);
  if (Math.abs(val) < 0.01) return val.toFixed(4);
  if (Math.abs(val) >= 100) return val.toFixed(2);
  return val.toFixed(2);
};

/* ── 52-week range mini bar ────────────────────────────────── */
const RangeBar = ({ price, w52l, w52h, up, cat }) => {
  const pct = Math.min(
    100,
    Math.max(0, ((price - w52l) / (w52h - w52l)) * 100),
  );
  const color = up ? "#66bb6a" : "#ef5350";
  const isYield = cat === "Bonds";
  const fmt = (v) => {
    if (isYield) return `${v.toFixed(3)}%`;
    if (cat === "Currencies") return v.toFixed(4);
    if (v >= 1000)
      return `$${v.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
    return `$${v.toFixed(2)}`;
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
      <Typography
        sx={{
          fontSize: "0.72rem",
          color: ACM_COLORS.textMuted,
          flexShrink: 0,
          display: { xs: "none", lg: "block" },
        }}
      >
        {fmt(w52l)}
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: 4,
          borderRadius: 2,
          background: alpha("#fff", 0.08),
          position: "relative",
          minWidth: 60,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${pct}%`,
            borderRadius: 2,
            background: color,
            transition: "width 0.4s ease",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: `${pct}%`,
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            border: `2px solid ${ACM_COLORS.cardBg}`,
            boxShadow: `0 0 4px ${color}`,
            transition: "left 0.4s ease",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "0.72rem",
          color: ACM_COLORS.textMuted,
          flexShrink: 0,
          display: { xs: "none", lg: "block" },
        }}
      >
        {fmt(w52h)}
      </Typography>
    </Box>
  );
};

/* ── Table header ──────────────────────────────────────────── */
const COLS = [
  { label: "Name", sx: { flex: "2 1 0", minWidth: 0 } },
  {
    label: "Change",
    sx: {
      width: 120,
      textAlign: "right",
      display: { xs: "none", sm: "block" },
    },
  },
  { label: "Price", sx: { width: 120, textAlign: "right" } },
  {
    label: "High",
    sx: {
      width: 110,
      textAlign: "right",
      display: { xs: "none", md: "block" },
    },
  },
  {
    label: "Low",
    sx: {
      width: 110,
      textAlign: "right",
      display: { xs: "none", md: "block" },
    },
  },
  {
    label: "52-Week Range",
    sx: { width: 220, display: { xs: "none", md: "block" } },
  },
];

/* ── Main component ────────────────────────────────────────── */
const MarketPrices = () => {
  const [activeTab, setActiveTab] = useState("Stocks");
  const [rows, setRows] = useState(MARKET_DATA["Stocks"]);
  const [flashId, setFlashId] = useState(null);

  /* switch tab */
  const handleTab = useCallback((tab) => {
    setActiveTab(tab);
    setRows(MARKET_DATA[tab].map((r) => ({ ...r })));
    setFlashId(null);
  }, []);

  /* live tick */
  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const row = prev[idx];
        const sign = row.up ? 1 : -1;
        const nudge = (Math.random() * 0.0004 + 0.0001) * row.price * sign;
        const newPrice = +(row.price + nudge).toPrecision(7);
        const newChange = +(row.change + nudge).toPrecision(5);
        const newPct = +((newChange / (newPrice - newChange)) * 100).toFixed(2);
        const updated = prev.map((r, i) =>
          i !== idx
            ? r
            : {
                ...r,
                price: newPrice,
                change: newChange,
                pct: newPct,
                up: newChange >= 0,
              },
        );
        setFlashId(row.id);
        setTimeout(() => setFlashId(null), 400);
        return updated;
      });
    }, 1100);
    return () => clearInterval(id);
  }, [activeTab]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(180deg, #f0f2f5 0%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          right: "-8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(ACM_COLORS.orange, 0.06)} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0%",
          left: "-10%",
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
        {/* ── Header ── */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <CustomCaption text="Live Data" />

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography
                data-aos="fade-left"
                variant="h2"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.4rem", md: "3rem" },
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                }}
              >
                Today&apos;s Global{" "}
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
                  Market Prices
                </Box>
              </Typography>
              <Typography
                data-aos="fade-right"
                sx={{
                  color: ACM_COLORS.textMuted,
                  fontSize: { xs: "0.875rem", md: "0.95rem" },
                  mt: 1,
                }}
              >
                Track prices for stocks, crypto, ETFs, commodities, currencies,
                bonds, and funds in one place.
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
                pb: 0.5,
                flexShrink: 0,
                "&:hover svg": { transform: "translateX(4px)" },
                "& svg": { transition: "transform 0.2s" },
              }}
            >
              Show all <ArrowForward sx={{ fontSize: "1rem" }} />
            </Box>
          </Box>
        </Box>

        {/* ── Main card ── */}
        <Box
          data-aos="flip-down"
          data-aos-delay="100"
          sx={{
            borderRadius: 3,
            border: `1px solid ${alpha("#000", 0.08)}`,
            background: `#ffffff`,
            overflow: "hidden",
            boxShadow: `0 4px 24px rgba(0,0,0,0.08)`,
          }}
        >
          {/* ── Tabs ── */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              borderBottom: `1px solid ${alpha("#000", 0.07)}`,
              px: { xs: 1, md: 2 },
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              background: alpha("#000", 0.02),
            }}
          >
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <Box
                  key={tab}
                  onClick={() => handleTab(tab)}
                  sx={{
                    px: { xs: 1.5, md: 2.5 },
                    py: 1.75,
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                    fontWeight: active ? 600 : 400,
                    color: active ? ACM_COLORS.orange : ACM_COLORS.textMuted,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    position: "relative",
                    transition: "color 0.2s",
                    userSelect: "none",
                    "&:hover": {
                      color: active
                        ? ACM_COLORS.orange
                        : ACM_COLORS.textPrimary,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      borderRadius: "2px 2px 0 0",
                      background: ACM_COLORS.orange,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.25s ease",
                    },
                  }}
                >
                  {tab}
                </Box>
              );
            })}
          </Box>

          {/* ── Column headers ── */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: { xs: 2, md: 3 },
              py: 1.25,
              borderBottom: `1px solid ${alpha("#000", 0.06)}`,
              background: alpha("#000", 0.02),
            }}
          >
            {COLS.map((col) => (
              <Typography
                key={col.label}
                sx={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: ACM_COLORS.textMuted,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  ...col.sx,
                }}
              >
                {col.label}
              </Typography>
            ))}
          </Box>

          {/* ── Rows ── */}
          <div key={activeTab}>
            {rows.map((row, idx) => {
              const flashing = flashId === row.id;
              return (
                <Box
                  key={row.id}
                  component={Link}
                  to="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, md: 3 },
                    py: { xs: 1.6, md: 2 },
                    borderBottom:
                      idx < rows.length - 1
                        ? `1px solid ${alpha("#000", 0.045)}`
                        : "none",
                    background: flashing
                      ? alpha(row.up ? "#4caf50" : "#f44336", 0.07)
                      : "transparent",
                    transition: "background 0.3s ease",
                    textDecoration: "none",
                    "&:hover": { background: alpha(ACM_COLORS.orange, 0.05) },
                    "&:hover .row-name": {
                      background:
                        "linear-gradient(135deg, #db7146 0%, #c44d8e 55%, #7950bf 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                  }}
                >
                  {/* Name + ticker */}
                  <Box sx={{ flex: "2 1 0", minWidth: 0, pr: 2 }}>
                    <Typography
                      className="row-name"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                        color: "#111827",
                        WebkitTextFillColor: "#111827",
                        background: "none",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        color: ACM_COLORS.textMuted,
                        fontFamily: "monospace",
                      }}
                    >
                      {row.ticker}
                    </Typography>
                  </Box>

                  {/* Change */}
                  <Box
                    sx={{
                      width: 120,
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 0.5,
                    }}
                  >
                    {row.up ? (
                      <TrendingUp
                        sx={{ fontSize: "0.9rem", color: "#66bb6a" }}
                      />
                    ) : (
                      <TrendingDown
                        sx={{ fontSize: "0.9rem", color: "#ef5350" }}
                      />
                    )}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: row.up ? "#66bb6a" : "#ef5350",
                          fontFamily: "monospace",
                          lineHeight: 1.2,
                        }}
                      >
                        {row.up ? "+" : ""}
                        {fmtChange(row.change, activeTab)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.68rem",
                          color: row.up ? "#66bb6a" : "#ef5350",
                          fontFamily: "monospace",
                          opacity: 0.8,
                        }}
                      >
                        {row.up ? "+" : ""}
                        {row.pct.toFixed(2)}%
                      </Typography>
                    </Box>
                  </Box>

                  {/* Price */}
                  <Box sx={{ width: 120, textAlign: "right" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                        fontWeight: 700,
                        color: flashing
                          ? row.up
                            ? "#66bb6a"
                            : "#ef5350"
                          : "#111827",
                        fontFamily: "monospace",
                        transition: "color 0.3s",
                      }}
                    >
                      {fmtPrice(row.price, activeTab)}
                    </Typography>
                  </Box>

                  {/* High */}
                  <Box
                    sx={{
                      width: 110,
                      textAlign: "right",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#66bb6a",
                        fontFamily: "monospace",
                      }}
                    >
                      {fmtPrice(row.high, activeTab)}
                    </Typography>
                  </Box>

                  {/* Low */}
                  <Box
                    sx={{
                      width: 110,
                      textAlign: "right",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#ef5350",
                        fontFamily: "monospace",
                      }}
                    >
                      {fmtPrice(row.low, activeTab)}
                    </Typography>
                  </Box>

                  {/* 52-week range */}
                  <Box
                    sx={{
                      width: 220,
                      display: { xs: "none", md: "block" },
                      pl: 2,
                    }}
                  >
                    <RangeBar
                      price={row.price}
                      w52l={row.w52l}
                      w52h={row.w52h}
                      up={row.up}
                      cat={activeTab}
                    />
                  </Box>
                </Box>
              );
            })}
          </div>

          {/* ── Card footer ── */}
          <Box
            sx={{
              px: { xs: 2, md: 3 },
              py: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${alpha("#000", 0.06)}`,
              background: alpha("#000", 0.02),
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4caf50",
                  boxShadow: "0 0 0 2px rgba(76,175,80,0.25)",
                  animation: "mpulse 2s ease infinite",
                  "@keyframes mpulse": {
                    "0%,100%": { boxShadow: "0 0 0 2px rgba(76,175,80,0.25)" },
                    "50%": { boxShadow: "0 0 0 5px rgba(76,175,80,0.08)" },
                  },
                }}
              />
              <Typography
                sx={{ fontSize: "0.75rem", color: ACM_COLORS.textMuted }}
              >
                Live prices · Updated every second
              </Typography>
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                color: ACM_COLORS.orange,
                fontSize: "0.75rem",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              View full market <ArrowForward sx={{ fontSize: "0.8rem" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketPrices;
