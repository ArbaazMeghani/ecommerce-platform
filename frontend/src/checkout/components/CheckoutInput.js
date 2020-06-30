import React from 'react'
import { TextField } from '@material-ui/core'

export default function CheckoutInput({label, type, value, updateValue}) {
  return <TextField id="standard-basic" label={label} type={type} value={value} onChange={(event) => updateValue(label, event.target.value)} required /> 
}