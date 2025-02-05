"serve-only"
import Navbar from '@/components/Navbar'
import { NextRequest } from 'next/server';
import React from 'react'

function page(request:NextRequest) {
  const token = request.cookies?.get('connect.sid')?.value
  console.log("token",token)

  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
    </div>
  )
}

export default page