import { useEffect, useState } from 'react';
import { Box, Button, Fade } from '@mui/material';
import FadedImageComponent from '../Components/FadedImageComponent';
import Image from '../Components/Image';

// import AnimationImage from '../assets/animation-component.png';
import Logo from '../assets/Animation/4/LOGO.png';
// import textoImagen from '../assets/Animation/4/texto-inferior-imagen.png';
import image1 from '../assets/Animation/1/imagen.png';
import image2 from '../assets/Animation/2/imagen.png';
import image3 from '../assets/Animation/3/imagen.png';
import image4 from '../assets/Animation/4/imagen.png';
import mach1 from '../assets/Animation/1/mach.png';
import alcancia2 from '../assets/Animation/2/alcancia.png';
import mach3 from '../assets/Animation/3/mach.png';
import alcancia4 from '../assets/Animation/4/alcancia.png';

const validTheLenght = (valueDisplayed: number, ImagesArray: any[]) => {
  if (valueDisplayed >= ImagesArray.length - 1) return 0;
  return valueDisplayed + 1;
};
const FirstImage = <FadedImageComponent src={image1} />;
const SecondImage = <FadedImageComponent src={image2} />;
const ThirdImage = <FadedImageComponent src={image3} />;
const FourthImage = <FadedImageComponent src={image4} />;

const FirstText = <FadedImageComponent src={mach1} />;
const SecondText = <FadedImageComponent src={alcancia2} />;
const ThirdText = <FadedImageComponent src={mach3} />;
const FourthText = <FadedImageComponent src={alcancia4} />;

const ArrayImages: any[] = [FirstImage, SecondImage, ThirdImage, FourthImage];
const ArrayTexts: any[] = [FirstText, SecondText, ThirdText, FourthText];

export default function Animation() {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayed(validTheLenght(displayed, ArrayImages));
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [displayed]);
  const FadedImage = ({ displayed }: { displayed: number }) => {
    return <>{ArrayImages[displayed]}</>;
  };
  const TextImage = ({ displayed }: { displayed: number }) => {
    return (
      <>
        {ArrayTexts[displayed]}
        <Fade in={true} timeout={800}>
          <Box pt={'18px'}>
            <Button
              variant="outlined"
              color="day"
              sx={{
                borderRadius: '120px',
                borderWidth: '1px',
                fontWeight: 'bold',
                float: 'right',
                fontSize: '12px',
                height: '35px',
                minWidth: '120px',
              }}
            >
              Ver más
            </Button>
          </Box>
        </Fade>
      </>
    );
  };
  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', height: '540px' }}>
        <Box sx={{ width: '55.4%' }}>
          <Box px={'44px'} pb={'80px'} pt={'28px'}>
            <Image src={Logo}></Image>
          </Box>
          <Box px="80px">
            <TextImage displayed={displayed} />
          </Box>
        </Box>
        <Box
          sx={{ width: '45%' }}
          onClick={() => {
            setDisplayed(validTheLenght(displayed, ArrayImages));
          }}
        >
          <FadedImage displayed={displayed} />
        </Box>
      </Box>
    </>
  );
}
