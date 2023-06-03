"use client";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";

const Hero = () => {
  const { modalIsOpen, modalOpen } = useContext(DataContext);

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Ефективні рішення для вашого бізнесу</h1>
        <button
          onClick={() => modalIsOpen(true)}
          type="button"
          className="hero__btn"
          data-modal-open
        >
          Замовити послугу
        </button>
      </div>
    </section>
  );
};

export default Hero;
