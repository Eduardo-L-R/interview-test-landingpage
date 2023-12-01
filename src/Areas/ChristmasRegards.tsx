import { Box } from '@mui/material';
import Image from '../assets/christmas-component.png';

export default function ChristmasRegards() {
  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
        <img src={Image} width="100%" />
      </Box>
    </>
  );
}
