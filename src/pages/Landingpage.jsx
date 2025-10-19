import React from "react";
import { Link, Links } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section
          className="flex flex-col md:flex-row items-center justify-between flex-1 bg-gray-50 px-8 py-16 bg-gray-900"
          style={{
            backgroundImage:
              'url("https://euristiq.com/wp-content/webp-express/webp-images/uploads/2023/10/guide-to-automated-inventory-management.png.webp")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:"overlay"
          }}
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simplify Your Inventory Management
            </h2>
            <p className="text-white mb-6">
              Track your products, suppliers, and stock levels in real-time.
              Manage everything efficiently from one dashboard.
            </p>
            <Link
              to={"/add"}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3176/3176365.png"
              alt="Inventory Illustration"
              className="w-80 h-80 object-contain"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-900 py-16 px-8 " >
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl shadow shadow hover:bg-gray-800 bg-white/20 hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold mb-3 text-yellow-500">
                {" "}
                Product Tracking
              </h4>
              <p className="text-white">
                Keep tabs on all your items with real-time quantity and movement
                updates.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow shadow hover:bg-gray-800 bg-white/20 hover:scale-105 transition-all ">
              <h4 className="text-xl font-semibold mb-3 text-yellow-500">
                Analytics Dashboard
              </h4>
              <p className="text-white">
                Gain insights into stock trends, best sellers, and restocking
                needs.
              </p>
            </div>
            <div className="p-6 border rounded-2xl shadow hover:bg-gray-800 transition duration-300 bg-white/20 hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold mb-3 text-yellow-500">
                {" "}
                Supplier Management
              </h4>
              <p className="text-white">
                Manage suppliers, orders, and purchase records from one place.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landingpage;
