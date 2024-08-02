import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/sragen.png"
            alt="Logo Desa Donoyudan"
            className="w-10 mr-3"
          />
          <div>
            <h3 className="text-xl font-bold">Desa Donoyudan</h3>
            <p className="text-sm">Kecamatan Kalijambe, Kabupaten Sragen</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold">Kontak</h4>
          <p className="text-sm">Email: info@donoyudan.desa.id</p>
          <p className="text-sm">Telepon: (0271) 123456</p>
          <p className="text-sm">Alamat: Jl. Raya Donoyudan No. 1</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
