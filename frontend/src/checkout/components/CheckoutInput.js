import React from 'react'
import { TextField, Grid } from '@material-ui/core'

export default function CheckoutInput({field, label, type, value, updateValue, validate = (value) => true}) {
  return (
    <Grid item>
      <TextField id="standard-basic" 
        label={label}
        type={type}
        value={value} 
        onChange={(event) => updateValue(field, event.target.value, validate)} 
        required 
      /> 
    </Grid>
  )
}