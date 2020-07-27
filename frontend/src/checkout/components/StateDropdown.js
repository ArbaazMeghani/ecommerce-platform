import React from 'react'
import { Grid, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'

const states =[
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]

export default function StateDropdown({field, value, updateValue}) {
  return (
    <Grid item>
      <FormControl required style={{width: "65px"}}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          required
          value={value}
          onChange={(event) => updateValue(field, event.target.value, (value) => true)}
        >
          {states.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)}
        </Select>
      </FormControl>
    </Grid>
  )
}