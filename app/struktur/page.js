import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Struktur() {
  const navPoints = [

    { label: "Kembali ke Beranda", href: "/" },
  ];
  return (
    <div>
      <Navbar navPoints={navPoints} />
      <Footer />
    </div>
  );
}

export default Struktur;
