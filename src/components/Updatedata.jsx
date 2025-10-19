import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { updateDataAPI } from "../service/allAPI"; // <-- your update API

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function Updatedata({ open, handleClose, productData, refreshData }) {
 const [userInput,setUserInput]= useState({
     productDetails:{
       product:'',
       quantity:'',
       vendor:'',
       location:'',
       category:''
     }
   })

  // 🧠 Whenever productData changes, bind it to formData
  useEffect(() => {
    if (productData) {
      setUserInput(productData);
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const result = await updateDataAPI(userInput.id, userInput);
      console.log("Updated successfully:", result);
      refreshData(); // reload list after update
      handleClose();
    } catch (error) {
      console.error("Error updating:", error);
      alert("Failed to update product");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <Box sx={style}>
        <Typography id="edit-modal-title" variant="h6" gutterBottom>
          Edit Product
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Product Name"
          name="product"
          value={userInput.product}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Quantity"
          name="quantity"
          value={userInput.quantity}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Vendor"
          name="vendor"
          value={userInput.vendor}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Location"
          name="location"
          value={userInput.location}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Category"
          name="category"
          value={userInput.category}
          onChange={handleChange}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button onClick={handleClose} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Updatedata;
