import React from 'react'
import { TextField, Grid } from '@material-ui/core'

export default function CheckoutInput({label, type, value, updateValue}) {
  return (
    <Grid item>
      <TextField id="standard-basic" 
        label={label}
        type={type}
        value={value} 
        onChange={(event) => updateValue(label, event.target.value)} 
        required 
      /> 
    </Grid>
  )
}