import { Grid } from '@mui/material'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <form>
        <Grid>
            <Grid item xs= {12} sx = {{mt:2}}>
                <TextField label = "Correo" type="email" placeholder = "correo@google.com" fullWidth></TextField>
            </Grid>

            <Grid item xs= {12} sx = {{mt:2}}>
                <TextField label = "Contraseña" type="password" placeholder = "correo@google.com" fullWidth></TextField>
            </Grid>

            <Grid>
                <Grid>
                    
                </Grid>
            </Grid>

        </Grid>
      </form>
    </div>
  )
}

export default LoginPage
