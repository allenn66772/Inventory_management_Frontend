import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Typography} from "@mui/material";
import { allDataAPI, deleteAllData } from "../service/allAPI";
import Updatedata from "../components/Updatedata"; // adjust path if needed

function Productpage() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //  Fetch all data
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

  // Filter by category
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

  //  Open update modal
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  // Delete product
  const dataDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const result = await deleteAllData(id);
        console.log("Deleted:", result);
        getAllData(); // Refresh data
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Failed to delete product");
      }
    }
  };

  return (
    <>
      <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6"
      style={{
        backgroundImage:
          "url('https://euristiq.com/wp-content/webp-express/webp-images/uploads/2023/10/guide-to-automated-inventory-management.png.webp')",
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Product Inventory
        </h1>
      </div>

      {/* Filter + Back */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-48 md:w-56 p-2 rounded-md bg-white/80 text-gray-800 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
        </select>

        <Link
          to="/add"
          className="px-6 py-2 bg-white/80 text-gray-800 font-semibold rounded-md shadow-md hover:bg-yellow-400 hover:text-black transition"
        >
          ← Back
        </Link>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/20 border border-white/30 p-6 rounded-2xl shadow-lg text-white hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-2xl font-bold mb-2">{item.product || "Unnamed Product"}</h2>
              <p className="text-sm">
                <strong>Quantity:</strong> {item.quantity || "N/A"}
              </p>
              <p className="text-sm mt-1">
                <strong>Vendor:</strong> {item.vendor || "N/A"}
              </p>
              <p className="text-sm mt-1">
                <strong>Location:</strong> {item.location || "N/A"}
              </p>
              <p className="text-sm mt-1">
                <strong>Category:</strong> {item.category || item.type || "N/A"}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4 justify-center">
                <button
                  onClick={() => handleOpen(item)}
                  className="px-4 py-2 rounded-md font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => dataDelete(item.id)}
                  className="px-4 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <Typography
            variant="body1"
            sx={{ mt: 5, color: "white", textAlign: "center", width: "100%" }}
          >
            No product history found.
          </Typography>
        )}
      </div>

      {/* Modal */}
      <Updatedata
        open={open}
        handleClose={handleClose}
        productData={selectedProduct}
        refreshData={getAllData}
      />
    </div>
    </>
  );
}

export default Productpage;
