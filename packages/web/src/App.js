import React, { useCallback, useState } from 'react';
import './App.css';
import { TextField, Select, Button, MenuItem } from '@material-ui/core'
import { getCost } from './api'

function App() {

  const [orderData, setOrderData] = useState({
    packageId: 1
  })

  const [cost, setCost] = useState()

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const { cost } = await getCost(orderData)
      console.log('cost returned is', cost)
      // @TODO: Handle errors and display to user
      setCost(cost)
    },
    [orderData],
  )

  const updateField = (key) => (e) => {
    setOrderData({
      ...orderData, 
      [key]: e.target.value
    })
  }

  // @TODO: Add validation to fields, pull Select options from an API
  return (
    <div className="App">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <TextField label="Postcode" name="postcode" onChange={updateField("postcode")} />
          <TextField type="number" label="Quantity" name="quantity" onChange={updateField("quantity")} />
          <Select className="select" defaultValue="none" placeholder="Package" label="Package" name="packageId" onChange={updateField("packageId")}>
            <MenuItem value="none" disabled>
              Select Package...
            </MenuItem>
            <MenuItem value="1">One off at £40/bottle</MenuItem>
            <MenuItem value="2">Rolling at £30/bottle</MenuItem>
            <MenuItem value="3">6 month at £20/bottle</MenuItem>
            <MenuItem value="4">12 month at £18/bottle</MenuItem>
            <MenuItem value="5">18 month at £15/bottle</MenuItem>
          </Select>
          <div className="action">
          <Button color="primary" variant="contained" className="button" fullWidth type="submit">Calculate</Button>
          </div>
          {cost && (
            <div className="cost">
              Your cost is: {cost}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App
