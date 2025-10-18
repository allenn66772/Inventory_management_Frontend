import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Button, Typography, Grid, Container } from "@mui/material";
import { allDataAPI } from "../service/allAPI";

function Productpage() {
  const [userData, setUserData] = useState([]);

  // Fetch all data
  const getAllData = async () => {
    try {
      const result = await allDataAPI();
      console.log("Raw API result:", result);

      if (result.status === 200) {
        // console.log("Fetched data:", JSON.stringify(result.data, null, 2));
        setUserData(result.data);
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

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Product Inventory
        </Typography>

        <Box sx={{ textAlign: "right", mb: 2 }}>
          
          <Button
            variant="outlined"
            component={Link}
            to="/"
            sx={{ textTransform: "none" }}
          >
            ← Back
          </Button>
        </Box>

        {userData && userData.length > 0 ? (
          <Grid container spacing={4}>
            {userData.map((item, index) => (
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

                  <Box sx={{ mt: 3 }}>
                    <div className="flex gap-4">
                      <Button sx={{backgroundColor:"yellow",color:"black"}} variant="contained">Edit</Button>
                      <Button sx={{backgroundColor:"red"}} variant="contained">Delete</Button>
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
    </Container>
  );
}

export default Productpage;
