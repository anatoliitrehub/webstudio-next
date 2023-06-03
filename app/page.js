"use client";
// import Image from 'next/image'
import Clients from "@/components/Clients";
import Employments from "@/components/Employments";
import Hero from "@/components/Hero";
import MobileMenu from "@/components/MobileMenu";
import ModalForm from "@/components/ModalForm";
import Principles from "@/components/Principles";
import Team from "@/components/Team";
import React from "react";

export default function Home() {
  // const { mobileOpen, modalOpen } = useContext(DataContext);
  return (
    <>
      <Hero />
      <Principles />
      <Employments />
      <Team />
      <Clients />
      <ModalForm />
      <MobileMenu />
    </>
  );
}
