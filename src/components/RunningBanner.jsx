import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Keyframes for the running animation
const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const RunningBanner = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        py: 1, // Padding Y-axis
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          display: 'inline-block',
          animation: `${marquee} 10s linear infinite`,
        }}
      >
        We are working and soon all features will be available.
      </Typography>
    </Box>
  );
};

export default RunningBanner;