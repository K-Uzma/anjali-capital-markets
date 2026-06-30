import { createTheme } from '@mui/material/styles'

export const ACM_COLORS = {
  // Brand
  brand: '#2d233b',
  brandLight: 'rgba(45,35,59,0.07)',
  orange: '#db7146',
  orangeLight: 'rgba(219,113,70,0.08)',
  // Surfaces (very faint purple warmth — keeps white feel)
  deepPurple: '#f8f7fb',
  mediumPurple: '#ece9f3',
  darkBg: '#f0edf6',
  cardBg: '#ffffff',
  surfaceBg: '#f8f7fb',
  // Text
  textPrimary: '#2d233b',
  textSecondary: 'rgba(45,35,59,0.65)',
  textMuted: 'rgba(45,35,59,0.65)',
  // Neutrals
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#f5f4f8',
  midGrey: '#9e9e9e',
  darkGrey: '#4a3f56',
  borderLight: 'rgba(45,35,59,0.09)',
}

const BRAND_GRADIENT = 'linear-gradient(135deg, #db7146 0%, #c44d8e 55%, #7950bf 100%)'
const BRAND_GRADIENT_HOVER = 'linear-gradient(135deg, #e5845a 0%, #d0609a 55%, #8f64cf 100%)'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#db7146',
      light: '#e8926f',
      dark: '#b85a35',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2d233b',
      light: '#4a3860',
      dark: '#1a1424',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d233b',
      secondary: 'rgba(45,35,59,0.65)',
      disabled: 'rgba(45,35,59,0.35)',
    },
    grey: {
      50: '#f8f7fb',
      100: '#f0edf6',
      200: '#e4dff0',
      300: '#cfc8df',
      400: '#a89bbf',
      500: '#7a6d8e',
      600: '#5c5070',
      700: '#423859',
      800: '#2d233b',
      900: '#1a1424',
    },
    divider: 'rgba(45,35,59,0.09)',
    action: {
      hover: 'rgba(219,113,70,0.07)',
      selected: 'rgba(219,113,70,0.13)',
      focus: 'rgba(219,113,70,0.10)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em', color: '#2d233b' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em', color: '#2d233b' },
    h3: { fontWeight: 600, color: '#2d233b' },
    h4: { fontWeight: 600, color: '#2d233b' },
    h5: { fontWeight: 600, color: '#2d233b' },
    h6: { fontWeight: 600, color: '#2d233b' },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0.3,
    },
    overline: {
      letterSpacing: 2,
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(45,35,59,0.07)',
    '0 2px 6px rgba(45,35,59,0.09)',
    '0 4px 12px rgba(45,35,59,0.09)',
    '0 6px 16px rgba(45,35,59,0.10)',
    '0 8px 24px rgba(45,35,59,0.11)',
    '0 10px 28px rgba(45,35,59,0.11)',
    '0 12px 32px rgba(45,35,59,0.12)',
    '0 14px 36px rgba(45,35,59,0.12)',
    '0 16px 40px rgba(45,35,59,0.13)',
    '0 18px 44px rgba(45,35,59,0.13)',
    '0 20px 48px rgba(45,35,59,0.14)',
    '0 22px 52px rgba(45,35,59,0.14)',
    '0 24px 56px rgba(45,35,59,0.15)',
    '0 26px 60px rgba(45,35,59,0.15)',
    '0 28px 64px rgba(45,35,59,0.16)',
    '0 30px 68px rgba(45,35,59,0.16)',
    '0 32px 72px rgba(45,35,59,0.17)',
    '0 34px 76px rgba(45,35,59,0.17)',
    '0 36px 80px rgba(45,35,59,0.18)',
    '0 38px 84px rgba(45,35,59,0.18)',
    '0 40px 88px rgba(45,35,59,0.19)',
    '0 42px 92px rgba(45,35,59,0.19)',
    '0 44px 96px rgba(45,35,59,0.20)',
    '0 48px 100px rgba(45,35,59,0.21)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          background: '#ffffff',
          overflowX: 'hidden',
          color: '#2d233b',
        },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: '#f0edf6' },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(45,35,59,0.25)',
          borderRadius: 3,
        },
        '::-webkit-scrollbar-thumb:hover': { background: 'rgba(45,35,59,0.45)' },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 28px',
          fontWeight: 600,
          fontSize: '0.875rem',
          letterSpacing: '0.4px',
          boxShadow: 'none',
          border: '2px solid transparent',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': { boxShadow: 'none', transform: 'translateY(-1px)' },
          '&:active': { transform: 'translateY(0)' },
        },
        containedPrimary: {
          background: `${BRAND_GRADIENT} padding-box, ${BRAND_GRADIENT} border-box`,
          color: '#fff',
          boxShadow: '0 4px 18px rgba(219,113,70,0.35)',
          '&:hover': {
            background: `linear-gradient(#ffffff, #ffffff) padding-box, ${BRAND_GRADIENT} border-box`,
            color: '#db7146',
            boxShadow: '0 6px 22px rgba(45,35,59,0.15)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #4a3860 0%, #7950bf 100%) padding-box, linear-gradient(135deg, #4a3860 0%, #7950bf 100%) border-box',
          color: '#fff',
          boxShadow: '0 4px 18px rgba(121,80,191,0.30)',
          '&:hover': {
            background: `linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #4a3860 0%, #7950bf 100%) border-box`,
            color: '#4a3860',
            boxShadow: '0 6px 22px rgba(121,80,191,0.18)',
          },
        },
        outlinedPrimary: {
          background: `linear-gradient(#ffffff, #ffffff) padding-box, ${BRAND_GRADIENT} border-box`,
          color: '#db7146',
          '&:hover': {
            background: `${BRAND_GRADIENT} padding-box, ${BRAND_GRADIENT} border-box`,
            color: '#fff',
            boxShadow: '0 4px 18px rgba(219,113,70,0.35)',
          },
        },
        outlinedSecondary: {
          background: `linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #4a3860 0%, #7950bf 100%) border-box`,
          color: '#4a3860',
          '&:hover': {
            background: 'linear-gradient(135deg, #4a3860 0%, #7950bf 100%) padding-box, linear-gradient(135deg, #4a3860 0%, #7950bf 100%) border-box',
            color: '#fff',
            boxShadow: '0 4px 18px rgba(121,80,191,0.30)',
          },
        },
        textPrimary: {
          color: '#db7146',
          '&:hover': {
            background: 'rgba(219,113,70,0.08)',
            transform: 'translateY(0)',
          },
        },
        textSecondary: {
          color: '#2d233b',
          '&:hover': {
            background: 'rgba(45,35,59,0.07)',
            transform: 'translateY(0)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        colorDefault: {
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(45,35,59,0.09)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: { boxShadow: '0 2px 12px rgba(45,35,59,0.08)' },
        elevation2: { boxShadow: '0 4px 16px rgba(45,35,59,0.09)' },
        elevation3: { boxShadow: '0 6px 24px rgba(45,35,59,0.10)' },
        outlined: {
          border: '1px solid rgba(45,35,59,0.10)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(45,35,59,0.08)',
          boxShadow: '0 2px 12px rgba(45,35,59,0.07)',
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
          '&:hover': {
            boxShadow: '0 8px 28px rgba(45,35,59,0.12)',
          },
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        title: { fontWeight: 600, color: '#2d233b' },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          border: '1px solid rgba(45,35,59,0.09)',
          boxShadow: '0 8px 28px rgba(45,35,59,0.12)',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(45,35,59,0.09)' },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(45,35,59,0.18)' },
            '&:hover fieldset': { borderColor: 'rgba(45,35,59,0.35)' },
            '&.Mui-focused fieldset': {
              borderColor: '#db7146',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#db7146' },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#db7146',
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'background 0.2s ease, color 0.2s ease',
          '&:hover': { background: 'rgba(45,35,59,0.07)' },
        },
        colorPrimary: {
          '&:hover': { background: 'rgba(219,113,70,0.08)' },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
        },
        colorPrimary: {
          backgroundColor: 'rgba(219,113,70,0.10)',
          color: '#b85a35',
          '&:hover': { backgroundColor: 'rgba(219,113,70,0.18)' },
        },
        colorSecondary: {
          backgroundColor: 'rgba(45,35,59,0.08)',
          color: '#2d233b',
          '&:hover': { backgroundColor: 'rgba(45,35,59,0.14)' },
        },
        outlinedPrimary: {
          borderColor: 'rgba(219,113,70,0.45)',
          color: '#db7146',
        },
        outlinedSecondary: {
          borderColor: 'rgba(45,35,59,0.3)',
          color: '#2d233b',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#2d233b',
          border: '1px solid rgba(255,255,255,0.08)',
          fontSize: '0.75rem',
          color: '#fff',
          borderRadius: 6,
          padding: '6px 10px',
        },
        arrow: { color: '#2d233b' },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: BRAND_GRADIENT,
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: 'rgba(45,35,59,0.55)',
          textTransform: 'none',
          fontSize: '0.9rem',
          '&.Mui-selected': { color: '#2d233b', fontWeight: 600 },
          '&:hover': { color: '#db7146' },
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f8f7fb',
            color: '#2d233b',
            fontWeight: 600,
            fontSize: '0.8rem',
            letterSpacing: '0.5px',
            borderBottom: '2px solid rgba(45,35,59,0.10)',
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(45,35,59,0.07)',
          color: '#2d233b',
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'rgba(45,35,59,0.025)' },
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: 'rgba(45,35,59,0.08)',
        },
        barColorPrimary: {
          background: BRAND_GRADIENT,
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: { color: '#db7146' },
        colorSecondary: { color: '#2d233b' },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'background 0.2s ease',
          '&:hover': { backgroundColor: 'rgba(45,35,59,0.06)' },
          '&.Mui-selected': {
            backgroundColor: 'rgba(219,113,70,0.10)',
            color: '#db7146',
            '&:hover': { backgroundColor: 'rgba(219,113,70,0.15)' },
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: '#db7146',
            '& + .MuiSwitch-track': { backgroundColor: '#db7146' },
          },
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        colorPrimary: { background: BRAND_GRADIENT },
        colorSecondary: { backgroundColor: '#2d233b' },
      },
    },

    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundColor: 'rgba(45,35,59,0.07)',
          color: '#2d233b',
        },
        standardWarning: {
          backgroundColor: 'rgba(219,113,70,0.10)',
          color: '#b85a35',
        },
      },
    },

    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: 'rgba(45,35,59,0.07)' },
      },
    },
  },
})

export default theme
