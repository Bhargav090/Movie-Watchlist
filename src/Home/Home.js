import React from 'react'
import Navbar from '../Navbar'
import Movies from './Movies'
export default function Home() {
  return (
    <div>
        <Navbar />
        <div>
          <Movies />
        </div>
    </div>
  )
}
