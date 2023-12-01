import { useState } from 'react';
import { Box, Button } from '@mui/material';
import FadedImageComponent from '../Components/FadedImageComponent';
import Image from '../Components/Image';

import AnimationImage from '../assets/animation-component.png';
import image1 from '../assets/Animation/1/imagen.png';
import image2 from '../assets/Animation/2/imagen.png';
import image3 from '../assets/Animation/3/imagen.png';
import image4 from '../assets/Animation/4/imagen.png';
import Logo4 from '../assets/Animation/4/LOGO.png';
import boton4 from '../assets/Animation/4/BOTON.png';
import texto4 from '../assets/Animation/4/texto-inferior-imagen.png';
import alcancia4 from '../assets/Animation/4/alcancia.png';

const validTheLenght = (valueDisplayed: number, ImagesArray: any[]) => {
  if (valueDisplayed >= ImagesArray.length - 1) return 0;
  return valueDisplayed + 1;
};
const FirstImage = <FadedImageComponent src={image1} />;
const SecondImage = <FadedImageComponent src={image2} />;
const ThirdImage = <FadedImageComponent src={image3} />;
const FourthImage = <FadedImageComponent src={image4} />;

const ArrayImages: any[] = [FirstImage, SecondImage, ThirdImage, FourthImage];

export default function Animation() {
  const [displayed, setDisplayed] = useState(0);
  const FadedImage = ({ displayed }: { displayed: number }) => {
    return <>{ArrayImages[displayed]}</>;
  };
  return (
    <>
      {/* <Button
        onClick={() => {
          console.log(displayed);
          setDisplayed(validTheLenght(displayed, ArrayImages));
          console.log(displayed);
        }}
      >
        siguiente
      </Button> */}

      <Image src={AnimationImage} />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ width: '55.4%' }}>
          <Image src={Logo4} p="200px"></Image>
          <Image src={alcancia4}></Image>
          <Image src={boton4}></Image>
        </Box>
        <Box sx={{ width: '45%' }}>
          <FadedImage displayed={displayed} />
        </Box>
      </Box>
    </>
  );
}
