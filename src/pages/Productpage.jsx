import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Button, Typography, Grid, Container } from "@mui/material";
import { allDataAPI, deleteAllData } from "../service/allAPI";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Updatedata from "../components/Updatedata";
 // adjust path if needed

function Productpage() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch all data
  const getAllData = async () => {
    try {
      const result = await allDataAPI();
      console.log("Raw API result:", result);

      if (result.status === 200) {
        setUserData(result.data);
        setFilteredData(result.data);
      } else {
        alert("Network error while fetching data");
      }
    } catch (error) {
      alert("Error fetching data");
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  // 🔽 Filter by category
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    if (!selectedValue || selectedValue === "All") {
      setFilteredData(userData);
    } else {
      const filtered = userData.filter(
        (item) =>
          item.category?.toLowerCase() === selectedValue.toLowerCase() ||
          item.type?.toLowerCase() === selectedValue.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  // 🧠 Update (open modal)
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  // ❌ Delete
  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const result = await deleteAllData(id);
        console.log("Deleted:", result);
        getAllData();
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Failed to delete product");
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Product Inventory
        </Typography>

        <div className="mb-2 flex gap-4 justify-center">
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              label="Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            component={Link}
            to="/add"
            sx={{ textTransform: "none" }}
          >
            ← Back
          </Button>
        </div>

        {filteredData && filteredData.length > 0 ? (
          <Grid container spacing={4}>
            {filteredData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={4} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" gutterBottom>
                    {item.product || "Unnamed Product"}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantity:</strong> {item.quantity || "N/A"}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Vendor:</strong> {item.vendor || "N/A"}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Location:</strong> {item.location || "N/A"}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Category:</strong>{" "}
                    {item.category || item.type || "N/A"}
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => handleOpen(item)} // ✅ open modal for editing
                        sx={{ backgroundColor: "yellow", color: "black" }}
                        variant="contained"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => deleteData(item._id)} // ✅ delete correct item
                        sx={{ backgroundColor: "red" }}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </div>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" sx={{ mt: 5, color: "text.secondary" }}>
            No product history found.
          </Typography>
        )}
      </Box>

      {/* ✅ Moved inside the return */}
      <Updatedata
        open={open}
        handleClose={handleClose}
        productData={selectedProduct}
        refreshData={getAllData}
      />
    </Container>
  );
}

export default Productpage;
