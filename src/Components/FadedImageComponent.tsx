import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { regularFadeTime } from '../const/fadeTimes';
export default function FadedImage({ src }: { src: string }) {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      {
        <Fade in={true} timeout={regularFadeTime}>
          <img src={src} width="100%" height="100%" />
        </Fade>
      }
    </Box>
  );
}
