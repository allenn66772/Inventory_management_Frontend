import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { addDataAPI } from '../service/allAPI';
import { Link } from 'react-router-dom';


function Addproduct() {
  const [userInput,setUserInput]= useState({
    productDetails:{
      product:'',
      quantity:'',
      vendor:'',
      location:'',
      category:''
    }
  })

  const handleReset =() => {
    setUserInput({
      productDetails:{
        product:'',
        quantity:'',
        vendor:'',
        location:'',
        category:''
      }

    });
  }

 const addProduct = async () => {
  const {product,quantity,vendor,location}=userInput.productDetails
  if (product && quantity && vendor && location ){
    const result =await addDataAPI(userInput.productDetails)
    console.log(result);
    handleReset()
    
  }else{
    alert("error")
  }
 }


  return (
    <>
    <Link to={"/addedproducts"} className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
            Get Started
          </Link>
        <Box
      component="section"
      sx={{
        p: 3,
        border: '1px dashed grey',
        borderRadius: 2,
        maxWidth: 600,
        margin: 'auto',
        mt: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
        <h1 className='text-2xl font-bold mb-2'>Add Your Products here</h1>
      <Grid container spacing={2}>
      
        {/* Product Name */}
        <Grid item xs={12} sm={6}>
          <TextField value={userInput.productDetails.product}onChange={(e) =>
  setUserInput({
    ...userInput,
    productDetails: {
      ...userInput.productDetails,
      product: e.target.value,
    },
  })
}
            fullWidth
            label="Product Name"
            variant="outlined"
          />
        </Grid>

        {/* Quantity */}
        <Grid item xs={12} sm={6}>
          <TextField value={userInput.productDetails.quantity} onChange={(e) =>
  setUserInput({
    ...userInput,
    productDetails: {
      ...userInput.productDetails,
      quantity: e.target.value,
    },
  })
}
            fullWidth
            label="Quantity"
            variant="outlined"
            type="number"
          />
        </Grid>

        {/* Vendor */}
        <Grid item xs={12} sm={6}>
          <TextField value={userInput.productDetails.vendor}onChange={(e) =>
  setUserInput({
    ...userInput,
    productDetails: {
      ...userInput.productDetails,
      vendor: e.target.value,
    },
  })
}
            fullWidth
            label="Vendor"
            variant="outlined"
          />
        </Grid>

        {/* Location */}
        <Grid item xs={12} sm={6}>
          <TextField value={userInput.productDetails.location}onChange={(e) =>
  setUserInput({
    ...userInput,
    productDetails: {
      ...userInput.productDetails,
      location: e.target.value,
    },
  })
}
            fullWidth
            label="Location"
            variant="outlined"
          />
        </Grid>

        {/* category */}


             <Grid item xs={12} sm={6}>
          <TextField value={userInput.productDetails.category} onChange={(e) =>
  setUserInput({
    ...userInput,
    productDetails: {
      ...userInput.productDetails,
      category: e.target.value,
    },
  })
}
            fullWidth
            label="Category"
            variant="outlined"
            type="text"
          />
        </Grid>

        {/* Select Dropdown */}
        {/* <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              defaultValue=""
            >
              <MenuItem value={Electronics} >Electronics</MenuItem>
              <MenuItem  value={Furniture}>Furniture</MenuItem>
              <MenuItem value={Vegetables&Fruits}>Vegetables&Fruits</MenuItem>
              <MenuItem value={Clothes}>Clothes</MenuItem>
             
            </Select>
          </FormControl>
        </Grid> */}

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button onClick={addProduct}
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Addproduct