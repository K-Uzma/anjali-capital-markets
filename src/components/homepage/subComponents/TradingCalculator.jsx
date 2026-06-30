import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  alpha,
  Button,
} from "@mui/material";
import {
  Calculate,
  ArrowForward,
  Remove,
  Add,
  RestartAlt,
  MonetizationOn,
  Percent,
  SwapHoriz,
  AccountBalance,
  CurrencyExchange,
  NightlightRound,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ACM_COLORS } from "../../../theme";

/* ─── Market / Instrument data ─────────────────────────────── */
const MARKETS = {
  Forex: {
    "EUR/USD": {
      price: 1.08542,
      spread: 0.6,
      lotSize: 100000,
      pipVal: 10,
      lev: 500,
      comm: 0,
      swap: -0.52,
      unit: "lots",
    },
    "GBP/USD": {
      price: 1.27183,
      spread: 0.8,
      lotSize: 100000,
      pipVal: 10,
      lev: 500,
      comm: 0,
      swap: -0.68,
      unit: "lots",
    },
    "USD/JPY": {
      price: 149.62,
      spread: 0.7,
      lotSize: 100000,
      pipVal: 9.2,
      lev: 500,
      comm: 0,
      swap: -0.41,
      unit: "lots",
    },
    "AUD/USD": {
      price: 0.6521,
      spread: 0.9,
      lotSize: 100000,
      pipVal: 10,
      lev: 500,
      comm: 0,
      swap: -0.38,
      unit: "lots",
    },
    "USD/CAD": {
      price: 1.3654,
      spread: 1.0,
      lotSize: 100000,
      pipVal: 7.32,
      lev: 500,
      comm: 0,
      swap: -0.44,
      unit: "lots",
    },
  },
  Stocks: {
    "Apple (AAPL)": {
      price: 283.78,
      spread: 0.05,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0.1,
      swap: -0.02,
      unit: "shares",
    },
    "Tesla (TSLA)": {
      price: 379.71,
      spread: 0.08,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0.1,
      swap: -0.025,
      unit: "shares",
    },
    "Microsoft (MSFT)": {
      price: 372.97,
      spread: 0.05,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0.1,
      swap: -0.018,
      unit: "shares",
    },
    "Alphabet (GOOGL)": {
      price: 337.39,
      spread: 0.06,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0.1,
      swap: -0.022,
      unit: "shares",
    },
  },
  Commodities: {
    "Gold (XAU/USD)": {
      price: 2318.4,
      spread: 0.3,
      lotSize: 100,
      pipVal: 1,
      lev: 200,
      comm: 0,
      swap: -1.25,
      unit: "lots",
    },
    "WTI Crude Oil": {
      price: 78.34,
      spread: 0.04,
      lotSize: 1000,
      pipVal: 0.01,
      lev: 100,
      comm: 0,
      swap: -0.65,
      unit: "lots",
    },
    "Silver (XAG/USD)": {
      price: 28.45,
      spread: 0.025,
      lotSize: 5000,
      pipVal: 5,
      lev: 200,
      comm: 0,
      swap: -0.32,
      unit: "lots",
    },
  },
  Indices: {
    "S&P 500 (SPX500)": {
      price: 5456.2,
      spread: 0.5,
      lotSize: 1,
      pipVal: 1,
      lev: 200,
      comm: 0,
      swap: -0.85,
      unit: "contracts",
    },
    "NASDAQ (NAS100)": {
      price: 19240.5,
      spread: 0.8,
      lotSize: 1,
      pipVal: 1,
      lev: 200,
      comm: 0,
      swap: -1.12,
      unit: "contracts",
    },
    "FTSE 100 (UK100)": {
      price: 8320.4,
      spread: 1.0,
      lotSize: 1,
      pipVal: 1,
      lev: 200,
      comm: 0,
      swap: -0.72,
      unit: "contracts",
    },
  },
  Crypto: {
    "Bitcoin (BTC/USD)": {
      price: 67420.0,
      spread: 50,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0,
      swap: -2.15,
      unit: "coins",
    },
    "Ethereum (ETH/USD)": {
      price: 3520.5,
      spread: 5,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0,
      swap: -1.85,
      unit: "coins",
    },
    "Solana (SOL/USD)": {
      price: 185.3,
      spread: 0.5,
      lotSize: 1,
      pipVal: 1,
      lev: 10,
      comm: 0,
      swap: -0.95,
      unit: "coins",
    },
  },
};

/* ─── Result items config ──────────────────────────────────── */
const RESULT_ITEMS = [
  {
    key: "value",
    label: "Trade Value",
    Icon: MonetizationOn,
    accent: "#5ba4f5",
  },
  { key: "comm", label: "Commission", Icon: Percent, accent: "#a07ef0" },
  { key: "spread", label: "Spread Cost", Icon: SwapHoriz, accent: "#f7b731" },
  {
    key: "leverage",
    label: "Leverage",
    Icon: AccountBalance,
    accent: "#2ecc71",
  },
  {
    key: "convFee",
    label: "Conversion Fee",
    Icon: CurrencyExchange,
    accent: "#f5a623",
  },
  {
    key: "margin",
    label: "Required Margin",
    Icon: Calculate,
    accent: "#db7146",
  },
];

/* ─── Helpers ───────────────────────────────────────────────── */
const fmt$ = (n) =>
  n >= 1000
    ? `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `$${n.toFixed(2)}`;

/* ─── Styled Select ─────────────────────────────────────────── */
const selectSx = {
  background: alpha("#f9fafb", 0.9),
  color: "#111827",
  borderRadius: 2,
  fontSize: "0.875rem",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: alpha("#000", 0.12) },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(ACM_COLORS.orange, 0.4),
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: ACM_COLORS.orange,
    borderWidth: 1,
  },
  "& .MuiSvgIcon-root": { color: "rgba(0,0,0,0.5)" },
};

const menuPropsSx = {
  PaperProps: {
    sx: {
      background: "#ffffff",
      border: `1px solid ${alpha("#000", 0.08)}`,
      borderRadius: 2,
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      mt: 0.5,
      "& .MuiMenuItem-root": {
        fontSize: "0.875rem",
        color: "rgba(0,0,0,0.7)",
        py: 1.2,
        "&:hover": {
          background: alpha(ACM_COLORS.orange, 0.08),
          color: "#000",
        },
        "&.Mui-selected": {
          background: alpha(ACM_COLORS.orange, 0.12),
          color: ACM_COLORS.orange,
        },
      },
    },
  },
};

/* ─── Main component ───────────────────────────────────────── */
const TradingCalculator = () => {
  const [market, setMarket] = useState("");
  const [instrument, setInstrument] = useState("");
  const [contracts, setContracts] = useState(1);
  const [direction, setDirection] = useState("buy");
  const [results, setResults] = useState(null);
  const [calculated, setCalculated] = useState(false);

  const instrumentList = market ? Object.keys(MARKETS[market]) : [];
  const cfg = market && instrument ? MARKETS[market][instrument] : null;

  const handleMarket = (e) => {
    setMarket(e.target.value);
    setInstrument("");
    setResults(null);
    setCalculated(false);
  };
  const stepContracts = (d) =>
    setContracts((c) => Math.max(0.01, +(c + d).toFixed(2)));

  const handleCalculate = () => {
    if (!cfg) return;
    const qty = contracts;
    const value = qty * cfg.lotSize * cfg.price;
    const comm =
      cfg.comm > 0 ? qty * cfg.lotSize * cfg.price * (cfg.comm / 100) : 0;
    const spread = cfg.spread * cfg.pipVal * qty;
    const margin = value / cfg.lev;
    const swap = Math.abs(cfg.swap) * qty;
    const convFee = 0;
    setResults({
      value,
      comm,
      spread,
      leverage: cfg.lev,
      convFee,
      margin,
      swap,
    });
    setCalculated(true);
  };

  const handleReset = () => {
    setMarket("");
    setInstrument("");
    setContracts(1);
    setDirection("buy");
    setResults(null);
    setCalculated(false);
  };

  const unit = cfg?.unit ?? "units";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(180deg, #ffffff 0%, #f0f2f5 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG glow */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 350,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${alpha(ACM_COLORS.orange, 0.04)} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, sm: 3, xl: 4 }, position: "relative", zIndex: 1 }}
      >
        {/* ── Section header ── */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Box
            data-aos="fade-left"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              background: alpha(ACM_COLORS.orange, 0.12),
              border: `1px solid ${alpha(ACM_COLORS.orange, 0.25)}`,
              borderRadius: "100px",
              px: 2.5,
              py: 0.75,
              mb: 2,
            }}
          >
            <Calculate sx={{ fontSize: "0.85rem", color: ACM_COLORS.orange }} />
            <Typography
              sx={{
                color: ACM_COLORS.orange,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Trading Calculator
            </Typography>
          </Box>
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
            Anjali Capital Markets{" "}
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
              Trading Calculator
            </Box>
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{
              color: ACM_COLORS.textMuted,
              fontSize: { xs: "0.875rem", md: "1rem" },
              maxWidth: 520,
              mx: "auto",
            }}
          >
            Calculate your hypothetical P&L, required margin, and trade costs
            before you open a position.
          </Typography>
        </Box>

        {/* ── Two-column layout ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Form card ── */}
          <Box
            data-aos="zoom-in-right"
            data-aos-delay="100"
            sx={{
              borderRadius: 3,
              border: `1px solid ${alpha("#000", 0.07)}`,
              background: `#ffffff`,
              overflow: "hidden",
            }}
          >
            {/* Card header */}
            <Box
              sx={{
                px: 3,
                py: 2.5,
                borderBottom: `1px solid ${alpha("#000", 0.06)}`,
                background: alpha("#000", 0.02),
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "1rem", fontWeight: 700, color: "#111827" }}
                >
                  Choose your points of movement
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: ACM_COLORS.textMuted,
                    mt: 0.25,
                  }}
                >
                  Fill in the fields below and hit Calculate
                </Typography>
              </Box>
              {calculated && (
                <Box
                  onClick={handleReset}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: ACM_COLORS.textMuted,
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                    transition: "color 0.2s",
                  }}
                >
                  <RestartAlt sx={{ fontSize: "0.9rem" }} /> Reset
                </Box>
              )}
            </Box>

            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {/* Market */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: ACM_COLORS.orange,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    mb: 0.75,
                  }}
                >
                  Market
                </Typography>
                <Select
                  value={market}
                  onChange={handleMarket}
                  displayEmpty
                  fullWidth
                  renderValue={(v) =>
                    v || (
                      <span style={{ color: ACM_COLORS.textMuted }}>
                        Select Market
                      </span>
                    )
                  }
                  sx={selectSx}
                  MenuProps={menuPropsSx}
                >
                  {Object.keys(MARKETS).map((m) => (
                    <MenuItem key={m} value={m}>
                      {m}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              {/* Instrument */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: ACM_COLORS.orange,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    mb: 0.75,
                  }}
                >
                  Instrument
                </Typography>
                <Select
                  value={instrument}
                  onChange={(e) => {
                    setInstrument(e.target.value);
                    setResults(null);
                    setCalculated(false);
                  }}
                  displayEmpty
                  fullWidth
                  disabled={!market}
                  renderValue={(v) =>
                    v || (
                      <span style={{ color: ACM_COLORS.textMuted }}>
                        Select an Instrument
                      </span>
                    )
                  }
                  sx={{ ...selectSx, opacity: !market ? 0.5 : 1 }}
                  MenuProps={menuPropsSx}
                >
                  {instrumentList.map((ins) => (
                    <MenuItem key={ins} value={ins}>
                      {ins}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              {/* Contract Size + Direction row */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                {/* Contract size stepper */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: ACM_COLORS.orange,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      mb: 0.75,
                    }}
                  >
                    Contract Size ({unit})
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: `1px solid ${alpha("#000", 0.12)}`,
                      borderRadius: 2,
                      overflow: "hidden",
                      background: alpha("#f9fafb", 0.9),
                      "&:focus-within": {
                        borderColor: alpha(ACM_COLORS.orange, 0.45),
                      },
                    }}
                  >
                    <Box
                      onClick={() => stepContracts(-1)}
                      sx={{
                        width: 40,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: ACM_COLORS.textMuted,
                        borderRight: `1px solid ${alpha("#000", 0.07)}`,
                        "&:hover": {
                          background: alpha(ACM_COLORS.orange, 0.1),
                          color: ACM_COLORS.orange,
                        },
                        transition: "all 0.2s",
                        flexShrink: 0,
                      }}
                    >
                      <Remove sx={{ fontSize: "1rem" }} />
                    </Box>
                    <Box
                      component="input"
                      type="number"
                      value={contracts}
                      onChange={(e) =>
                        setContracts(
                          Math.max(0.01, parseFloat(e.target.value) || 0),
                        )
                      }
                      sx={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#111827",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        textAlign: "center",
                        p: 0,
                        minWidth: 0,
                      }}
                    />
                    <Box
                      onClick={() => stepContracts(1)}
                      sx={{
                        width: 40,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: ACM_COLORS.textMuted,
                        borderLeft: `1px solid ${alpha("#000", 0.07)}`,
                        "&:hover": {
                          background: alpha(ACM_COLORS.orange, 0.1),
                          color: ACM_COLORS.orange,
                        },
                        transition: "all 0.2s",
                        flexShrink: 0,
                      }}
                    >
                      <Add sx={{ fontSize: "1rem" }} />
                    </Box>
                  </Box>
                </Box>

                {/* Direction Buy/Sell */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: ACM_COLORS.orange,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      mb: 0.75,
                    }}
                  >
                    Direction
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      border: `1px solid ${alpha("#000", 0.12)}`,
                      borderRadius: 2,
                      overflow: "hidden",
                      height: 48,
                    }}
                  >
                    {["buy", "sell"].map((d) => {
                      const active = direction === d;
                      const isBuy = d === "buy";
                      return (
                        <Box
                          key={d}
                          onClick={() => setDirection(d)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            transition: "all 0.2s",
                            background: active
                              ? isBuy
                                ? alpha("#4caf50", 0.18)
                                : alpha("#ef5350", 0.18)
                              : "transparent",
                            color: active
                              ? isBuy
                                ? "#66bb6a"
                                : "#ef5350"
                              : ACM_COLORS.textMuted,
                            borderRight: isBuy
                              ? `1px solid ${alpha("#000", 0.07)}`
                              : "none",
                            "&:hover": {
                              background: active
                                ? undefined
                                : alpha("#000", 0.04),
                            },
                          }}
                        >
                          {d.charAt(0).toUpperCase() + d.slice(1)}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>

              {/* Live price info */}
              {cfg && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    background: alpha("#000", 0.03),
                    border: `1px solid ${alpha("#000", 0.06)}`,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: ACM_COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      Current Price
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#111827",
                        fontFamily: "monospace",
                      }}
                    >
                      {instrument.includes("EUR") ||
                      instrument.includes("GBP") ||
                      instrument.includes("AUD") ||
                      instrument.includes("USD/")
                        ? ""
                        : "$"}
                      {cfg.price.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 1,
                      height: 28,
                      background: alpha("#000", 0.03),
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: ACM_COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      Spread
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: ACM_COLORS.orange,
                        fontFamily: "monospace",
                      }}
                    >
                      {cfg.spread} pips
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 1,
                      height: 28,
                      background: alpha("#000", 0.03),
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: ACM_COLORS.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      Max Leverage
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#a07ef0",
                        fontFamily: "monospace",
                      }}
                    >
                      1:{cfg.lev}
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Calculate button */}
              <Button
                variant="contained"
                fullWidth
                onClick={handleCalculate}
                disabled={!cfg}
                startIcon={<Calculate />}
                endIcon={<ArrowForward />}
                sx={{
                  background: cfg ? ACM_COLORS.orange : alpha("#000", 0.08),
                  color: cfg ? "#fff" : ACM_COLORS.textMuted,
                  borderRadius: 2,
                  py: 1.6,
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  boxShadow: cfg
                    ? `0 8px 24px ${alpha(ACM_COLORS.orange, 0.35)}`
                    : "none",
                  "&:hover": {
                    background: cfg ? "#c4633e" : undefined,
                    boxShadow: cfg
                      ? `0 12px 32px ${alpha(ACM_COLORS.orange, 0.45)}`
                      : "none",
                  },
                  "&.Mui-disabled": {
                    background: alpha("#000", 0.06),
                    color: alpha("#000", 0.25),
                  },
                  transition: "all 0.25s",
                }}
              >
                Calculate
              </Button>
            </Box>
          </Box>

          {/* ── RIGHT: Results panel (no outer card) ── */}
          <Box
            data-aos="zoom-in-left"
            data-aos-delay="100"
            sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
          >
            <>
              {!calculated ? (
                /* ── Empty state ── */
                <div exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      py: { xs: 6, md: 8 },
                      px: 3,
                      borderRadius: 3,
                      height: 490,
                      // border: `1px dashed ${alpha("#fff", 0.1)}`,
                      background: alpha("#000", 0.03),
                    }}
                  >
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "20px",
                        background: alpha(ACM_COLORS.orange, 0.08),
                        border: `1px solid ${alpha(ACM_COLORS.orange, 0.18)}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <Calculate
                        sx={{
                          fontSize: "2rem",
                          color: alpha(ACM_COLORS.orange, 0.5),
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: alpha("#000", 0.35),
                        mb: 0.75,
                      }}
                    >
                      Results will appear here
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: alpha(ACM_COLORS.textMuted, 0.6),
                        maxWidth: 260,
                        lineHeight: 1.65,
                      }}
                    >
                      Select a market and instrument, set your contract size,
                      then hit{" "}
                      <strong
                        style={{ color: ACM_COLORS.orange, opacity: 0.8 }}
                      >
                        Calculate
                      </strong>
                      .
                    </Typography>
                  </Box>
                </div>
              ) : (
                /* ── Calculated results ── */
                <div
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {/* Header row */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#4caf50",
                        boxShadow: "0 0 8px rgba(76,175,80,0.6)",
                        animation: "rPulse 2s ease infinite",
                        "@keyframes rPulse": {
                          "0%,100%": {
                            boxShadow: "0 0 6px rgba(76,175,80,0.5)",
                          },
                          "50%": { boxShadow: "0 0 14px rgba(76,175,80,0.2)" },
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: alpha("#000", 0.55),
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      Calculation Results
                    </Typography>
                    <Box
                      sx={{
                        flex: 1,
                        height: 1,
                        background: `linear-gradient(90deg, ${alpha("#fff", 0.08)}, transparent)`,
                      }}
                    />
                  </Box>

                  {/* 2×3 grid of stat boxes */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 1.5,
                    }}
                  >
                    {RESULT_ITEMS.map(({ key, label, Icon, accent }, i) => {
                      const val = results?.[key];
                      const displayVal =
                        key === "leverage" ? `1:${val}` : fmt$(val);
                      return (
                        <Box
                          key={key}
                          sx={{
                            p: { xs: 2, md: 2.5 },
                            borderRadius: 2.5,
                            border: `1px solid ${alpha(accent, 0.2)}`,
                            background: `linear-gradient(135deg, ${alpha(accent, 0.04)}, #f9fafb)`,
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: 2,
                              background: `linear-gradient(90deg, ${accent}, transparent)`,
                              borderRadius: "2.5px 2.5px 0 0",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.75,
                              mb: 1.25,
                            }}
                          >
                            <Box
                              sx={{
                                width: 26,
                                height: 26,
                                borderRadius: "8px",
                                background: alpha(accent, 0.14),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Icon
                                sx={{ fontSize: "0.85rem", color: accent }}
                              />
                            </Box>
                            <Typography
                              sx={{
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                color: alpha(accent, 0.85),
                                textTransform: "uppercase",
                                letterSpacing: 0.8,
                              }}
                            >
                              {label}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 800,
                              color: "#111827",
                              fontFamily: "monospace",
                              lineHeight: 1,
                            }}
                          >
                            {displayVal}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Overnight Swaps — full width accent row */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      p: { xs: 2, md: 2.5 },
                      borderRadius: 2.5,
                      border: `1px solid ${alpha("#ef5350", 0.2)}`,
                      background: `linear-gradient(135deg, ${alpha("#ef5350", 0.04)}, #f9fafb)`,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background:
                          "linear-gradient(90deg, #ef5350, transparent)",
                        borderRadius: "2.5px 2.5px 0 0",
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          background: alpha("#ef5350", 0.12),
                          border: `1px solid ${alpha("#ef5350", 0.2)}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <NightlightRound
                          sx={{ fontSize: "1.1rem", color: "#ef5350" }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: alpha("#ef5350", 0.85),
                            textTransform: "uppercase",
                            letterSpacing: 0.8,
                            mb: 0.2,
                          }}
                        >
                          Overnight Swaps
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.72rem",
                            color: ACM_COLORS.textMuted,
                          }}
                        >
                          Daily financing cost per night
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "#ef5350",
                        fontFamily: "monospace",
                        flexShrink: 0,
                      }}
                    >
                      -{fmt$(results.swap)}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          color: alpha("#ef5350", 0.65),
                        }}
                      >
                        /night
                      </Typography>
                    </Typography>
                  </Box>

                  {/* Disclaimer */}
                  <Typography
                    sx={{
                      fontSize: "0.68rem",
                      color: alpha(ACM_COLORS.textMuted, 0.55),
                      lineHeight: 1.65,
                      pt: 0.5,
                    }}
                  >
                    Results are indicative only. Actual costs may vary based on
                    market conditions, account type, and applicable fees. Not
                    financial advice.
                  </Typography>
                </div>
              )}
            </>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TradingCalculator;
