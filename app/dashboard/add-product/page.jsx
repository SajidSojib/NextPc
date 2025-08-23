'use client'
import React from 'react'
import Dashboard from './Form';
import { SessionProvider } from 'next-auth/react';

// app/dashboard/add-product/page.jsx
export const metadata = {
  title: "NextPC | Add Product",
  description: "Add a new product to your store",
};

export default function AddProduct() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
