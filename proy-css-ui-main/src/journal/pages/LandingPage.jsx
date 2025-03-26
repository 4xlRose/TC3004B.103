import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { Box, Typography } from "@mui/material";
import myImage from "../../assets/purple.png"

export const LandingPage = () => {
  return (
    <JournalLayout>      
      {/* */}

 

      <IconButton size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      ></IconButton>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
          <Typography variant="h4" gutterBottom>
            Bienvenido
          </Typography>
          <Box
            component="img"
            src={myImage}
            alt="Descripción de la imagen"
            sx={{
              width: "300px", // Ajusta el tamaño según necesites
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
        <AddOutlined sx={{ fontSize: 30 }} />
      

    </JournalLayout>
  )
}
