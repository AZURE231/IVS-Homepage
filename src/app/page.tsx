"use client"
import Advantages from "@/components/Advantages/Advantages";
import BusinessFeature from "@/components/BusinessFeature/BusinessFeature";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Partner from "@/components/Partner/Partner";
import Products from "@/components/Products/Products";


export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Products/>
      <BusinessFeature/>
      <Advantages/>
      <Partner/>
    </>
  )
}
