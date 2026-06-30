import { createTheme } from '@mui/material/styles'

export const ACM_COLORS = {
  deepPurple: '#f8f9fa',
  orange: '#db7146',
  mediumPurple: '#e9ecef',
  darkBg: '#f0f2f5',
  cardBg: '#ffffff',
  surfaceBg: '#f8f9fa',
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#f5f5f5',
  midGrey: '#9e9e9e',
  darkGrey: '#424242',
  borderLight: 'rgba(0,0,0,0.08)',
  textMuted: 'rgba(0,0,0,0.55)',
  textSecondary: 'rgba(0,0,0,0.75)',
}

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
      main: '#6b7280',
      light: '#9ca3af',
      dark: '#4b5563',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: 'rgba(0,0,0,0.75)',
      disabled: 'rgba(0,0,0,0.35)',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    divider: 'rgba(0,0,0,0.08)',
    action: {
      hover: 'rgba(219,113,70,0.08)',
      selected: 'rgba(219,113,70,0.15)',
      focus: 'rgba(219,113,70,0.12)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
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
    '0 1px 3px rgba(0,0,0,0.08)',
    '0 2px 6px rgba(0,0,0,0.1)',
    '0 4px 12px rgba(0,0,0,0.1)',
    '0 6px 16px rgba(0,0,0,0.12)',
    '0 8px 24px rgba(0,0,0,0.12)',
    '0 10px 28px rgba(0,0,0,0.13)',
    '0 12px 32px rgba(0,0,0,0.13)',
    '0 14px 36px rgba(0,0,0,0.14)',
    '0 16px 40px rgba(0,0,0,0.14)',
    '0 18px 44px rgba(0,0,0,0.15)',
    '0 20px 48px rgba(0,0,0,0.15)',
    '0 22px 52px rgba(0,0,0,0.16)',
    '0 24px 56px rgba(0,0,0,0.16)',
    '0 26px 60px rgba(0,0,0,0.17)',
    '0 28px 64px rgba(0,0,0,0.17)',
    '0 30px 68px rgba(0,0,0,0.18)',
    '0 32px 72px rgba(0,0,0,0.18)',
    '0 34px 76px rgba(0,0,0,0.19)',
    '0 36px 80px rgba(0,0,0,0.19)',
    '0 38px 84px rgba(0,0,0,0.2)',
    '0 40px 88px rgba(0,0,0,0.2)',
    '0 42px 92px rgba(0,0,0,0.21)',
    '0 44px 96px rgba(0,0,0,0.21)',
    '0 48px 100px rgba(0,0,0,0.22)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          background: '#ffffff',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: '#f1f1f1' },
        '::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: 3,
        },
        '::-webkit-scrollbar-thumb:hover': { background: '#a1a1a1' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 26px',
          fontWeight: 600,
          fontSize: '0.875rem',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          background: '#db7146',
          '&:hover': { background: '#c4633e' },
        },
        outlinedPrimary: {
          borderColor: '#db7146',
          color: '#db7146',
          '&:hover': {
            borderColor: '#db7146',
            background: 'rgba(219,113,70,0.1)',
          },
        },
        textPrimary: {
          color: '#db7146',
          '&:hover': { background: 'rgba(219,113,70,0.08)' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(0,0,0,0.08)' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(0,0,0,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.3)' },
            '&.Mui-focused fieldset': { borderColor: '#db7146' },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#1f2937',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.75rem',
          color: '#fff',
        },
      },
    },
  },
})

export default theme
