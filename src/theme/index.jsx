import { createTheme } from '@mui/material/styles'

export const ACM_COLORS = {
  deepPurple: '#2d233b',
  orange: '#db7146',
  mediumPurple: '#574c66',
  darkBg: '#1e1829',
  cardBg: '#3a2f4d',
  surfaceBg: '#251e32',
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#f5f5f5',
  midGrey: '#9e9e9e',
  darkGrey: '#424242',
  borderLight: 'rgba(255,255,255,0.08)',
  textMuted: 'rgba(255,255,255,0.55)',
  textSecondary: 'rgba(255,255,255,0.75)',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#db7146',
      light: '#e8926f',
      dark: '#b85a35',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#574c66',
      light: '#7a6d8a',
      dark: '#2d233b',
      contrastText: '#ffffff',
    },
    background: {
      default: '#2d233b',
      paper: '#3a2f4d',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.75)',
      disabled: 'rgba(255,255,255,0.35)',
    },
    grey: {
      50: '#f8f8f8',
      100: '#f0f0f0',
      200: '#e0e0e0',
      300: '#bdbdbd',
      400: '#9e9e9e',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#303030',
      900: '#1a1a1a',
    },
    divider: 'rgba(255,255,255,0.08)',
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
    '0 1px 3px rgba(0,0,0,0.3)',
    '0 2px 6px rgba(0,0,0,0.35)',
    '0 4px 12px rgba(0,0,0,0.4)',
    '0 6px 16px rgba(0,0,0,0.45)',
    '0 8px 24px rgba(0,0,0,0.5)',
    '0 10px 28px rgba(0,0,0,0.5)',
    '0 12px 32px rgba(0,0,0,0.55)',
    '0 14px 36px rgba(0,0,0,0.55)',
    '0 16px 40px rgba(0,0,0,0.6)',
    '0 18px 44px rgba(0,0,0,0.6)',
    '0 20px 48px rgba(0,0,0,0.65)',
    '0 22px 52px rgba(0,0,0,0.65)',
    '0 24px 56px rgba(0,0,0,0.7)',
    '0 26px 60px rgba(0,0,0,0.7)',
    '0 28px 64px rgba(0,0,0,0.7)',
    '0 30px 68px rgba(0,0,0,0.75)',
    '0 32px 72px rgba(0,0,0,0.75)',
    '0 34px 76px rgba(0,0,0,0.75)',
    '0 36px 80px rgba(0,0,0,0.8)',
    '0 38px 84px rgba(0,0,0,0.8)',
    '0 40px 88px rgba(0,0,0,0.8)',
    '0 42px 92px rgba(0,0,0,0.85)',
    '0 44px 96px rgba(0,0,0,0.85)',
    '0 48px 100px rgba(0,0,0,0.9)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          background: '#2d233b',
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: '#1e1829' },
        '::-webkit-scrollbar-thumb': {
          background: '#574c66',
          borderRadius: 3,
        },
        '::-webkit-scrollbar-thumb:hover': { background: '#db7146' },
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
        root: { borderColor: 'rgba(255,255,255,0.08)' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
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
          background: '#3a2f4d',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.75rem',
        },
      },
    },
  },
})

export default theme
