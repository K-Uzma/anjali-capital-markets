import { Box } from '@mui/material';

const SuspenseLoader = () => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: (theme) => theme.zIndex.modal + 1,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    }}
  >
    <Box
      component="img"
      src="/loading.gif"
      alt="Loading"
      sx={{ width: { xs: '140px', md: '180px', lg: '220px' }, height: 'auto' }}
    />
  </Box>
);

export default SuspenseLoader;
