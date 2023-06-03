import React from "react";

const page = () => {
  const mapOpen = () => {
    window.open(
      "https://www.google.com/maps/d/embed?mid=1e3wCGSf0WLV-87OjVt8506W0S_s&hl=en&ehbc=2E312F",
      "_blank"
    );
  };
  return (
    <>
      <h1>Contacts</h1>
      <div
        style={{ width: "800px", height: "800px", border: "1px solid black" }}
      ></div>
    </>
  );
};

export default page;
