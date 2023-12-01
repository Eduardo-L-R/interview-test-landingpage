import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
export default function FadedImage({ src }: { src: string }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Fade in={true} timeout={500}>
        <img src={src} width="100%" />
      </Fade>
    </Box>
  );
}
