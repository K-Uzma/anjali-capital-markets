import { useState } from "react";
import { Box, Container, Typography, Chip, alpha } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { ACM_COLORS } from "../../../theme";

const CATEGORIES = [
  "All",
  "General",
  "Trading",
  "Deposits & Withdrawals",
  "Platform",
];

const FAQ_DATA = [
  {
    category: "General",
    question: "What is Anjali Capital Markets?",
    answer:
      "Anjali Capital Markets (ACM) is a global multi-asset broker offering trading in Forex, Commodities, Indices, Stocks, and Cryptocurrencies. We provide competitive spreads, deep liquidity, and a secure trading environment regulated to the highest standards.",
  },
  {
    category: "General",
    question: "How do I open a live trading account?",
    answer:
      "Opening an account is simple. Click 'Open Account', fill in your personal details, verify your identity with a government-issued ID and proof of address, fund your account, and start trading. The entire process typically takes less than 10 minutes.",
  },
  {
    category: "General",
    question: "Is ACM regulated?",
    answer:
      "Yes. Anjali Capital Markets operates under a strict regulatory framework ensuring client funds are held in segregated accounts, negative balance protection is enforced, and all transactions adhere to AML/KYC compliance requirements.",
  },
  {
    category: "Trading",
    question: "What leverage does ACM offer?",
    answer:
      "ACM offers leverage up to 1:500 depending on the instrument and your account type. Retail clients receive leverage up to 1:30 on major Forex pairs under standard regulations. Professional clients may qualify for higher leverage upon request.",
  },
  {
    category: "Trading",
    question: "What are the trading hours?",
    answer:
      "Forex markets are available 24 hours a day, 5 days a week (Sunday 5pm ET to Friday 5pm ET). Commodities, Indices, and Stocks follow their respective exchange hours. Cryptocurrency markets trade 24/7.",
  },
  {
    category: "Trading",
    question: "What spreads does ACM offer?",
    answer:
      "ACM offers some of the tightest spreads in the industry — EUR/USD spreads from as low as 0.0 pips on our Pro account and from 0.6 pips on our Standard account. Spreads vary by instrument and market conditions.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "What deposit methods are supported?",
    answer:
      "We support Bank Wire Transfer, Visa/Mastercard, and various e-wallets. Deposits via card and e-wallets are processed instantly, while bank wires typically clear within 1–3 business days. All deposits are free of charge from our side.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "How long do withdrawals take?",
    answer:
      "Withdrawal requests are processed within 24 hours on business days. E-wallets and card reversals typically arrive within 1–3 business days. Bank wire transfers may take up to 5 business days depending on your banking institution.",
  },
  {
    category: "Deposits & Withdrawals",
    question: "Is there a minimum deposit?",
    answer:
      "The minimum deposit for a Standard account is $100. The Pro account requires a minimum of $1,000. There is no minimum for subsequent deposits once your account is active.",
  },
  {
    category: "Platform",
    question: "Which trading platforms does ACM support?",
    answer:
      "ACM provides MetaTrader 5 (MT5) — the industry's most advanced multi-asset platform — and FIX API connectivity for institutional and algorithmic traders requiring low-latency direct market access.",
  },
  {
    category: "Platform",
    question: "Can I use automated trading (EAs) on ACM?",
    answer:
      "Yes. MT5 fully supports Expert Advisors (EAs), algorithmic trading scripts, and custom indicators. Our infrastructure is optimized for low-latency execution to support automated strategies effectively.",
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    sx={{
      borderRadius: 2,
      overflow: "hidden",
      border: `1px solid ${isOpen ? alpha(ACM_COLORS.orange, 0.35) : alpha("#000", 0.07)}`,
      background: isOpen
        ? `linear-gradient(135deg, #ffffff, #f8f9fa)`
        : "#ffffff",
      transition:
        "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
      boxShadow: isOpen
        ? `0 4px 24px ${alpha(ACM_COLORS.orange, 0.1)}, 0 0 0 1px ${alpha(ACM_COLORS.orange, 0.08)}`
        : "none",
      "&:hover": {
        borderColor: isOpen
          ? alpha(ACM_COLORS.orange, 0.35)
          : alpha("#000", 0.14),
        background: isOpen ? undefined : alpha("#000", 0.02),
      },
    }}
  >
    {/* Question Row */}
    <Box
      onClick={onToggle}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: { xs: 2.5, md: 3 },
        py: { xs: 2, md: 2.5 },
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Typography
        sx={{
          fontWeight: isOpen ? 600 : 500,
          fontSize: { xs: "0.9rem", md: "0.975rem" },
          color: isOpen ? "#111827" : ACM_COLORS.textSecondary,
          lineHeight: 1.5,
          transition: "color 0.2s",
          flex: 1,
        }}
      >
        {item.question}
      </Typography>

      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: isOpen ? ACM_COLORS.orange : alpha("#000", 0.06),
          border: `1px solid ${isOpen ? ACM_COLORS.orange : alpha("#000", 0.1)}`,
          transition: "background 0.25s, border-color 0.25s",
        }}
      >
        {isOpen ? (
          <RemoveIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />
        ) : (
          <AddIcon sx={{ fontSize: "0.9rem", color: ACM_COLORS.textMuted }} />
        )}
      </Box>
    </Box>

    {/* Answer */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <Box
            sx={{
              px: { xs: 2.5, md: 3 },
              pb: { xs: 2.5, md: 3 },
              pt: 0,
            }}
          >
            <Box
              sx={{
                height: 1,
                background: `linear-gradient(90deg, ${alpha(ACM_COLORS.orange, 0.4)}, transparent)`,
                mb: 2,
              }}
            />
            <Typography
              sx={{
                color: ACM_COLORS.textSecondary,
                fontSize: { xs: "0.855rem", md: "0.9rem" },
                lineHeight: 1.8,
              }}
            >
              {item.answer}
            </Typography>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  </Box>
);

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(0);

  const filtered =
    activeCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((f) => f.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        background: `linear-gradient(180deg, #f0f2f5 0%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-15%",
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
          bottom: "5%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(ACM_COLORS.mediumPurple, 0.12)} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
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
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: ACM_COLORS.orange,
                boxShadow: `0 0 8px ${alpha(ACM_COLORS.orange, 0.7)}`,
              }}
            />
            <Typography
              sx={{
                color: ACM_COLORS.orange,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Got Questions?
            </Typography>
          </Box>

          <Typography
            data-aos="fade-right"
            variant="h2"
            sx={{
              fontSize: { xs: "1.85rem", sm: "2.4rem", md: "3rem" },
              fontWeight: 700,
              color: "#111827",
              mb: 1.5,
              lineHeight: 1.2,
            }}
          >
            Frequently Asked{" "}
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
              Questions
            </Box>
          </Typography>

          <Typography
            data-aos="fade-left"
            sx={{
              color: ACM_COLORS.textMuted,
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            Everything you need to know about trading with Anjali Capital
            Markets. Can&apos;t find your answer? Contact our support team.
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box
          data-aos="flip-up"
          data-aos-delay="100"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => handleCategoryChange(cat)}
                sx={{
                  fontWeight: isActive ? 600 : 400,
                  fontSize: "0.8rem",
                  px: 1,
                  height: 36,
                  borderRadius: "100px",
                  background: isActive
                    ? ACM_COLORS.orange
                    : alpha("#000", 0.06),
                  color: isActive ? "#fff" : ACM_COLORS.textSecondary,
                  border: `1px solid ${isActive ? ACM_COLORS.orange : alpha("#000", 0.1)}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: isActive
                      ? "#c4633e"
                      : alpha(ACM_COLORS.orange, 0.1),
                    borderColor: ACM_COLORS.orange,
                    color: isActive ? "#fff" : ACM_COLORS.orange,
                  },
                  "& .MuiChip-label": { px: 1.25 },
                }}
              />
            );
          })}
        </Box>

        {/* FAQ List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {filtered.map((item, idx) => (
                <FAQItem
                  key={`${activeCategory}-${idx}`}
                  item={item}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default FAQ;
