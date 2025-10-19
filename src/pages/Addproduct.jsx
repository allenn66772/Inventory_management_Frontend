import React, { useState } from "react";
import { addDataAPI } from "../service/allAPI";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

function Addproduct() {
  const [userInput, setUserInput] = useState({
    productDetails: {
      product: "",
      quantity: "",
      vendor: "",
      location: "",
      category: "",
    },
  });

  const handleReset = () => {
    setUserInput({
      productDetails: {
        product: "",
        quantity: "",
        vendor: "",
        location: "",
        category: "",
      },
    });
  };

  const addProduct = async () => {
    const { product, quantity, vendor, location } = userInput.productDetails;
    if (product && quantity && vendor && location) {
      const result = await addDataAPI(userInput.productDetails);
      console.log(result);
      Swal.fire({
        title: "",
        text: "Data Added Successfully",
        icon: "success",
      });
      handleReset();
    } else {
      Swal.fire({
        icon: "error",   
      title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <>
      <div
        className=" min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6"
        style={{
          backgroundImage:
            'url("https://euristiq.com/wp-content/webp-express/webp-images/uploads/2023/10/guide-to-automated-inventory-management.png.webp")',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-5xl bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-10">
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Add Your Product
          </h1>
          <p className="text-white text-center mb-8">
            Fill in the product details below to add them to your inventory.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProduct();
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Product Name
              </label>
              <input
                type="text"
                value={userInput.productDetails.product}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    productDetails: {
                      ...userInput.productDetails,
                      product: e.target.value,
                    },
                  })
                }
                className="placeholder-white text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter product name"
               
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Quantity
              </label>
              <input
                type="number"
                value={userInput.productDetails.quantity}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    productDetails: {
                      ...userInput.productDetails,
                      quantity: e.target.value,
                    },
                  })
                }
                className="placeholder-white text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter quantity"
                
              />
            </div>

            {/* Vendor */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Vendor
              </label>
              <input
                type="text"
                value={userInput.productDetails.vendor}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    productDetails: {
                      ...userInput.productDetails,
                      vendor: e.target.value,
                    },
                  })
                }
                className="placeholder-white text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Vendor name"
                
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Location
              </label>
              <input
                type="text"
                value={userInput.productDetails.location}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    productDetails: {
                      ...userInput.productDetails,
                      location: e.target.value,
                    },
                  })
                }
                className="placeholder-white text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter location"
              
              />
            </div>

            {/* Category — full width row */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1 text-white">
                Category
              </label>
              <input
                type="text"
                value={userInput.productDetails.category}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    productDetails: {
                      ...userInput.productDetails,
                      category: e.target.value,
                    },
                  })
                }
                className="placeholder-white text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter category"
               
              />
            </div>

            {/* Buttons — full width row */}
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
              >
                Add Product
              </button>

              <Link
                to="/addedproducts"
                className=" bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                 Products
              </Link>
              <Link
                to={"/"}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Back To Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
