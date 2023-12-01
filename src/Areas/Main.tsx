import { Box, Button } from '@mui/material';
import MainImg from '../assets/main-component.png';
import Image from '../Components/Image';

export default function Main() {
  return (
    <>
      <Box sx={{ position: 'absolute', pt: '20%', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '18%' }}>
          <Box>
            <CustomButton colorVariant="fire">¿Qué puedo hacer?</CustomButton>
          </Box>
          <Box>
            <CustomButton colorVariant="aqua">Recomendaciones Vacaciones</CustomButton>
          </Box>
          <Box>
            <CustomButton colorVariant="plant">Beneficios</CustomButton>
          </Box>
        </Box>
      </Box>
      <Image src={MainImg} />
    </>
  );
}

const CustomButton = ({ children, colorVariant }: { children: any; colorVariant: any }) => {
  return (
    <Button
      variant="contained"
      color={colorVariant}
      sx={{
        borderRadius: '8px',
        borderWidth: '1px',
        fontWeight: 'normal',
        float: 'right',
        fontSize: '14px',
        height: '60px',
        minWidth: '160px',
        maxWidth: '200px',
        textAlign: 'center',
      }}
      href="#"
    >
      {children}
    </Button>
  );
};
