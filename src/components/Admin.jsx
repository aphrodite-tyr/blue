import React, { useState } from "react";
import Calender from "./Calender";
import MapView from "./MapView";

function Admin() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mt-10 mb-10">Admin Menu</h1>
          <Calender/>
          <button 
            className="btn btn-primary w-full mt-6"
          >
            Tentukan tanggal
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Admin;