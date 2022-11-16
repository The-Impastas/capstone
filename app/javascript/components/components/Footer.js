import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const Footer = () => {

  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Typography textAlign="center">
          Lovingly Created by The Impastas, LLC 2022 ©
        </Typography>
      </Paper>
    </Box>
  );
}

export default Footer