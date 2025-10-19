import React from "react";
import { Link, Links } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Hover Button (Top Right) */}
      <div className="w-full bg-gray-800 flex items-center justify-between px-6 py-3">
        {/* Logo / Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          InventoryPro
        </h1>

       
      </div>
    </>
  );
}

export default Header;
