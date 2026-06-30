import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MARKET_DATA = [
  { symbol: "Apple Inc.", price: 283.78, change: 8.63, changePercent: 3.14 },
  { symbol: "Alphabet Inc. (Google)", price: 337.39, change: -6.32, changePercent: -1.84 },
  { symbol: "Microsoft Corp.", price: 372.97, change: 20.14, changePercent: 5.71 },
  { symbol: "Tesla, Inc.", price: 379.71, change: 4.59, changePercent: 1.22 },
  { symbol: "Bitcoin", price: 60121.99, change: 647.97, changePercent: 1.08 },
  { symbol: "ETH/USD", price: 1583.45, change: -28.32, changePercent: -1.76 },
  { symbol: "Gold", price: 2345.67, change: 12.45, changePercent: 0.53 },
  { symbol: "Silver", price: 28.94, change: -0.34, changePercent: -1.16 },
  { symbol: "S&P 500", price: 5218.43, change: 31.77, changePercent: 0.61 },
  { symbol: "NASDAQ", price: 16421.82, change: -54.28, changePercent: -0.33 },
];

const TickerItem = ({ item }) => {
  const isPositive = item.change >= 0;
  const color = isPositive ? "#16a34a" : "#dc2626";
  const ArrowIcon = isPositive ? ArrowDropUpIcon : ArrowDropDownIcon;

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: 3,
        height: 36,
        borderRight: "1px solid #e5e7eb",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <Typography sx={{ fontSize: "0.78rem", fontWeight: 500, color: "#1f2937", mr: 0.5 }}>
        {item.symbol}
      </Typography>
      <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, color: "#111827" }}>
        ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", color }}>
        <ArrowIcon sx={{ fontSize: "1rem", mx: "-2px" }} />
        <Typography sx={{ fontSize: "0.78rem", fontWeight: 500, color }}>
          {Math.abs(item.change).toFixed(2)}
        </Typography>
        <Typography sx={{ fontSize: "0.78rem", fontWeight: 500, color, ml: 0.4 }}>
          {isPositive ? "+" : ""}{item.changePercent.toFixed(2)}%
        </Typography>
      </Box>
    </Box>
  );
};

const MarketTicker = () => {
  const [paused, setPaused] = useState(false);

  return (
    <Box
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        height: 36,
        overflow: "hidden",
        cursor: "pointer",
        position: "sticky",
        top: { xs: 64, md: 72 },
        zIndex: 1199,
        "@keyframes ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: "ticker 35s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...MARKET_DATA, ...MARKET_DATA].map((item, index) => (
          <TickerItem key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default MarketTicker;
