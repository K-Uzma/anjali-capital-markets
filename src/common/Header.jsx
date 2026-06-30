import React, { useState } from "react";
import MarketTicker from "./MarketTicker";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
  Divider,
  useScrollTrigger,
  alpha,
} from "@mui/material";
import {
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { ACM_COLORS } from "../theme";

const NAV_ITEMS = [
  {
    label: "Accounts",
    children: [
      { label: "Live Account", href: "#" },
      { label: "Deposits", href: "#" },
      { label: "Withdrawals", href: "#" },
      { label: "Fees & Charges", href: "#" },
    ],
  },
  {
    label: "Markets",
    children: [
      { label: "Spreads", href: "#" },
      { label: "Forex", href: "#" },
      { label: "Commodities", href: "#" },
      { label: "Indices", href: "#" },
      { label: "Stocks", href: "#" },
      { label: "Cryptocurrencies", href: "#" },
    ],
  },
  {
    label: "Platform",
    children: [
      { label: "MT5", href: "#" },
      { label: "Fix API", href: "#" },
    ],
  },
  { label: "Tools", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Logo = ({ height = 32 }) => (
  <Box
    component={Link}
    to="/"
    sx={{
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      flexShrink: 0,
    }}
  >
    <Box
      component="img"
      src="/logo.svg"
      alt="Anjali Capital Markets"
      sx={{ height, width: "auto", display: "block" }}
    />
  </Box>
);

const DesktopNavItem = ({ item, activePath }) => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const isActive = item.children
    ? item.children.some((c) => activePath.startsWith(c.href))
    : activePath === item.href;

  const navBtnSx = {
    color: isActive ? ACM_COLORS.orange : "rgba(0,0,0,0.8)",
    fontWeight: isActive ? 600 : 400,
    fontSize: "0.875rem",
    px: 1.5,
    py: 1,
    position: "relative",
    borderRadius: 1.5,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 4,
      left: "50%",
      transform: "translateX(-50%)",
      width: isActive ? "60%" : "0%",
      height: 2,
      borderRadius: 1,
      background: ACM_COLORS.orange,
      transition: "width 0.25s ease",
    },
    "&:hover": {
      color: ACM_COLORS.orange,
      background: alpha(ACM_COLORS.orange, 0.06),
      "&::after": { width: "60%" },
    },
  };

  if (!item.children) {
    return (
      <Button component={Link} to={item.href} sx={navBtnSx}>
        {item.label}
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={(e) => setAnchor(e.currentTarget)}
        endIcon={
          <KeyboardArrowDown
            sx={{
              fontSize: "0.95rem !important",
              transition: "transform 0.22s",
              transform: open ? "rotate(180deg)" : "none",
            }}
          />
        }
        sx={navBtnSx}
      >
        {item.label}
      </Button>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        elevation={0}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 210,
              background: "#ffffff",
              border: `1px solid ${alpha("#000", 0.08)}`,
              borderRadius: 2,
              boxShadow: `0 20px 60px rgba(0,0,0,0.15)`,
              overflow: "visible",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -5,
                left: 22,
                width: 10,
                height: 10,
                background: "#ffffff",
                border: `1px solid ${alpha("#000", 0.08)}`,
                borderRight: "none",
                borderBottom: "none",
                transform: "rotate(45deg)",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {item.children.map((child) => (
          <MenuItem
            key={child.label}
            component={Link}
            to={child.href}
            onClick={() => setAnchor(null)}
            sx={{
              color:
                activePath === child.href
                  ? ACM_COLORS.orange
                  : "rgba(0,0,0,0.7)",
              fontSize: "0.875rem",
              py: 1.25,
              px: 2,
              borderLeft:
                activePath === child.href
                  ? `2px solid ${ACM_COLORS.orange}`
                  : "2px solid transparent",
              transition: "all 0.15s",
              "&:hover": {
                color: "#000",
                background: alpha(ACM_COLORS.orange, 0.07),
                borderLeftColor: ACM_COLORS.orange,
              },
            }}
          >
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [riskVisible, setRiskVisible] = useState(true);
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  return (
    <>
      {/* Risk Warning Bar */}
      {riskVisible && (
        <Box
          sx={{
            background: "#f8f9fa",
            borderBottom: `1px solid ${alpha("#000", 0.05)}`,
            py: 0.6,
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            position: "relative",
            zIndex: 1300,
          }}
        >
          <Typography
            sx={{
            color: alpha("#000", 0.55),
            fontSize: "0.71rem",
            textAlign: "center",
            flex: 1,
            lineHeight: 1.4,
            }}
          >
            <Box
              component="span"
              sx={{ color: ACM_COLORS.orange, fontWeight: 600 }}
            >
              Risk Warning:{" "}
            </Box>
            Trading CFDs and FX carries significant risk. OTC derivatives are
            leveraged products and can result in losses which exceed deposits.
          </Typography>
          <IconButton
            size="small"
            onClick={() => setRiskVisible(false)}
            sx={{
              color: alpha("#000", 0.35),
              p: 0.25,
              "&:hover": { color: "#000", background: "none" },
            }}
          >
            <CloseIcon sx={{ fontSize: "0.9rem" }} />
          </IconButton>
        </Box>
      )}

      {/* Main AppBar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? alpha("#ffffff", 0.95)
            : "#ffffff",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: `1px solid ${alpha("#000", scrolled ? 0.06 : 0.07)}`,
          transition: "background 0.3s, backdrop-filter 0.3s",
          zIndex: 1200,
        }}
      >
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ px: { xs: 2, sm: 3, xl: 4 } }}
        >
          <Toolbar disableGutters sx={{ height: { xs: 64, md: 72 }, gap: 2 }}>
            <Logo height={30} />

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.25,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  activePath={location.pathname}
                />
              ))}
            </Box>

            <Box sx={{ flex: { xs: 1, lg: 0 } }} />

            {/* CTA Buttons */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                component={Link}
                to="#"
                size="small"
                sx={{
                  px: 2.5,
                  py: 0.9,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                LOGIN
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="#"
                size="small"
                sx={{
                  px: 2.5,
                  py: 0.9,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  boxShadow: `0 4px 16px ${alpha(ACM_COLORS.orange, 0.35)}`,
                  "&:hover": {
                    boxShadow: `0 6px 20px ${alpha(ACM_COLORS.orange, 0.45)}`,
                    transform: "translateY(-1px)",
                  },
                }}
              >
                OPEN ACCOUNT
              </Button>
            </Box>

            {/* Hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#000",
                ml: "auto",
                background: alpha("#000", 0.05),
                borderRadius: 1.5,
                "&:hover": { background: alpha("#000", 0.08) },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Market Ticker */}
      <MarketTicker />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 300,
              background: "#ffffff",
              color: "#000",
              borderLeft: `1px solid ${alpha("#000", 0.07)}`,
            },
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            px: 2.5,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${alpha("#000", 0.07)}`,
          }}
        >
          <Logo height={26} />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: alpha("#000", 0.6),
              "&:hover": { color: "#000", background: "none" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Nav List */}
        <List disablePadding sx={{ flex: 1, py: 1 }}>
          {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.label}>
              {item.children ? (
                <>
                  <ListItemButton
                    onClick={() =>
                      setExpanded((p) => ({
                        ...p,
                        [item.label]: !p[item.label],
                      }))
                    }
                    sx={{
                      py: 1.4,
                      px: 2.5,
                      "&:hover": { background: alpha(ACM_COLORS.orange, 0.06) },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: { fontSize: "0.9rem", fontWeight: 500 },
                      }}
                    />
                    {expanded[item.label] ? (
                      <ExpandLess sx={{ fontSize: "1.1rem", opacity: 0.6 }} />
                    ) : (
                      <ExpandMore sx={{ fontSize: "1.1rem", opacity: 0.6 }} />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={!!expanded[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List
                      disablePadding
                      sx={{ background: alpha("#000", 0.03) }}
                    >
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          component={Link}
                          to={child.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            py: 1.2,
                            pl: 4,
                            pr: 2.5,
                            borderLeft:
                              location.pathname === child.href
                                ? `2px solid ${ACM_COLORS.orange}`
                                : "2px solid transparent",
                            "&:hover": {
                              background: alpha(ACM_COLORS.orange, 0.06),
                            },
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            slotProps={{
                              primary: {
                                fontSize: "0.845rem",
                                color:
                                  location.pathname === child.href
                                    ? ACM_COLORS.orange
                                    : alpha("#000", 0.6),
                              },
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={Link}
                  to={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    py: 1.4,
                    px: 2.5,
                    borderLeft:
                      location.pathname === item.href
                        ? `2px solid ${ACM_COLORS.orange}`
                        : "2px solid transparent",
                    "&:hover": { background: alpha(ACM_COLORS.orange, 0.06) },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        fontSize: "0.9rem",
                        fontWeight: location.pathname === item.href ? 600 : 400,
                        color:
                          location.pathname === item.href
                            ? ACM_COLORS.orange
                            : "#000",
                      },
                    }}
                  />
                </ListItemButton>
              )}
              <Divider sx={{ borderColor: alpha("#000", 0.05) }} />
            </React.Fragment>
          ))}
        </List>

        {/* Drawer CTA */}
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            borderTop: `1px solid ${alpha("#000", 0.07)}`,
          }}
        >
          <Button
            variant="outlined"
            component={Link}
            to="#"
            fullWidth
            onClick={() => setDrawerOpen(false)}
            sx={{
              py: 1.1,
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
          >
            LOGIN
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="#"
            fullWidth
            onClick={() => setDrawerOpen(false)}
            sx={{
              py: 1.1,
              fontWeight: 600,
              fontSize: "0.85rem",
              boxShadow: `0 4px 14px ${alpha(ACM_COLORS.orange, 0.35)}`,
            }}
          >
            OPEN ACCOUNT
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
