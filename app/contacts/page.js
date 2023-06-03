"use client";
import MobileMenu from "@/components/MobileMenu";
import React from "react";
import Image from "next/image";

const page = () => {
  // function mapOpen() {
  // const mapWin = window.open(
  //   "https://www.google.com/maps/d/embed?mid=1e3wCGSf0WLV-87OjVt8506W0S_s&hl=en&ehbc=2E312F",
  //   "_parent"
  // );
  // }
  return (
    <>
      <div
        className="container"
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Image src="/images/map.jpg" alt="map" width={1000} height={1000} />
      </div>
      <MobileMenu />
    </>
  );
};

export default page;
