// src/app/dashboard/layout.js
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isFixed={true} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;