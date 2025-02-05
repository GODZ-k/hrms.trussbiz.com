"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const router = useRouter()
    const redirect_uri = encodeURIComponent(window.location.origin)
    console.log(redirect_uri)
  return (
    <div>
      <button className=' bg-blue-600 text-white px-3 py-2 p-2 rounded-md' onClick={()=> {
        router.push(`http://auth.localhost:3000/auth/login?redirect=${redirect_uri}`)
      }}>
        login
      </button>
      <button className=' bg-blue-600 text-white px-3 py-2 p-2 rounded-md' onClick={()=> {
        router.push(`http://auth.localhost:3000/auth/login?redirect=${redirect_uri}`)
      }}>
        sign up
      </button>
      <button className=' bg-blue-600 text-white px-3 py-2 p-2 rounded-md' onClick={()=> {
        router.push(`http://auth.localhost:3000/auth/sign-up?redirect=${redirect_uri}`)
      }}>
        Logout
      </button>
    </div>
  )
}

export default Navbar