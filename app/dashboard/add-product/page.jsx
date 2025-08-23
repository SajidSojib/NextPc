'use client'
import React from 'react'
import Dashboard from './Form';
import { SessionProvider } from 'next-auth/react';

export default function AddProduct() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
