"use client"
import React from 'react';
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
  const path = usePathname();   
  return(
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>{path ==="/"?"*":""}
        <li><Link href="/about-us">About Us</Link></li>{path ==="/about-us"?"*":""}
      </ul>
    </nav>
  )
}