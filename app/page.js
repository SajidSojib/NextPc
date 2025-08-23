import Banner from '@/components/Bnanner'
import Highlight from '@/components/Highlight'
import React from 'react'

// app/page.jsx
export const metadata = {
  title: "NextPC",
  description: "Your trusted computer shop since 2025",
};

export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <Highlight></Highlight>
    </div>
  )
}
