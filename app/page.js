import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Home() {
  const navPoints = [
    { label: "Profil Desa", href: "#profil" },
    { label: "Kondisi Umum", href: "#kondisi" },
    { label: "Struktur Organisasi", href: "/struktur" },
  ];

  return (
    <div>
      <div id="navbar">
        <Navbar navPoints={navPoints} />
      </div>
      <div id="profil" className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          PROFIL DESA DONOYUDAN
        </h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex justify-center">
          <img
            src="/images/desa-asset/donoyudan.jpg"
            alt="Profil Desa Donoyudan"
            className="w-full md:w-1/2 h-auto mb-4 rounded-lg shadow-lg"
          />
        </div>
        <p className="text-justify border border-gray-800 rounded-lg p-5">
          <span className="font-semibold text-xl">Desa Donoyudan</span>{" "}
          merupakan desa yang penduduknya sebagian besar petani. Jumlah penduduk
          pada tanggal 14 November 2023 adalah sejumlah 5285 jiwa, terbagi
          Laki-laki = 2651 Jiwa dan Perempuan = 2634 jiwa. 1655 KK, terbagi
          dalam 3 Kabayanan dan 18 RT. Sebagian besar dengan mata pencaharian 
          sebagai buruh tani dan penggarap. Namun, meskipun mata pencaharian rata-rata 
          penduduk masih rendah, desa Donoyudan mempunyai masyarakat dengan tingkat 
          kepedulian yang cukup tinggi. Desa Donoyudan yang terletak di Kecamatan 
          Kalijambe berusaha melaksanakan Pemerintahan Desa dengan semangat Otonomi 
          Desa dengan berupaya mengatur dan mengurus rumah tangga Desa atas dasar 
          musyawarah mufakat serta inisiatif dan prakarsa dari masyarakat dalam rangka 
          mendukung pelaksanaan pembangunan di Desa Donoyudan.
        </p>
      </div>
      <div id="kondisi" className="p-4 bg-gray-200">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          KONDISI UMUM DESA DONOYUDAN
        </h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col space-y-4">
          <div
            id="geografis"
            className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold mb-2">Geografis</h3>
            <p>Luas wilayah Desa Donoyudan: 384.3480 Ha</p>
            <ul className="list-disc pl-5">
              <li>Tanah Pekarangan: 82.0000 Ha</li>
              <li>Tanah Sawah: 194.0000 Ha</li>
              <li>Tanah Tegalan: 64.0000 Ha</li>
              <li>Lain-lain: 44.3480 Ha</li>
            </ul>
            <hr className="border-gray-300 my-4" />
            <p>Batas Wilayah Desa Donoyudan:</p>
            <ul className="list-disc pl-5">
              <li>Sebelah Utara: Desa Wonorejo</li>
              <li>Sebelah Timur: Desa Sambirembe</li>
              <li>Sebelah Selatan: Desa Keden</li>
              <li>Sebelah Barat: Wilayah Boyolali</li>
            </ul>
          </div>
          <div
            id="demografis"
            className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold mb-2">Demografis</h3>
            <p>Jumlah Penduduk Desa Donoyudan Tahun 2023:</p>
            <ul className="list-disc pl-5">
              <li>Laki-laki: 2651 Jiwa</li>
              <li>Perempuan: 2634 Jiwa</li>
              <li>Jumlah KK: 1665 KK</li>
              <li>Jumlah RT: 18</li>
              <li>Jumlah Kebayan: 3</li>
            </ul>
          </div>
          <div
            id="kependudukan"
            className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold mb-2">Kependudukan</h3>
            <p>Jumlah Penduduk Desa Menurut Usia:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300">No</th>
                    <th className="py-2 px-4 border-b border-gray-300">Kelompok Umur (tahun)</th>
                    <th className="py-2 px-4 border-b border-gray-300">Laki-laki</th>
                    <th className="py-2 px-4 border-b border-gray-300">Perempuan</th>
                    <th className="py-2 px-4 border-b border-gray-300">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { no: 1, ageGroup: '0 s/d 1', male: 53, female: 56, total: 109 },
                    { no: 2, ageGroup: '2 s/d 4', male: 65, female: 75, total: 140 },
                    { no: 3, ageGroup: '5 s/d 9', male: 198, female: 192, total: 390 },
                    { no: 4, ageGroup: '10 s/d 14', male: 194, female: 185, total: 379 },
                    { no: 5, ageGroup: '15 s/d 19', male: 205, female: 202, total: 407 },
                    { no: 6, ageGroup: '20 s/d 24', male: 191, female: 222, total: 413 },
                    { no: 7, ageGroup: '25 s/d 29', male: 190, female: 175, total: 365 },
                    { no: 8, ageGroup: '30 s/d 34', male: 195, female: 212, total: 407 },
                    { no: 9, ageGroup: '35 s/d 39', male: 192, female: 242, total: 434 },
                    { no: 10, ageGroup: '40 s/d 44', male: 194, female: 195, total: 389 },
                    { no: 11, ageGroup: '45 s/d 49', male: 195, female: 196, total: 391 },
                    { no: 12, ageGroup: '50 s/d 54', male: 146, female: 144, total: 290 },
                    { no: 13, ageGroup: '55 s/d 59', male: 123, female: 120, total: 243 },
                    { no: 14, ageGroup: '60 s/d 64', male: 85, female: 90, total: 175 },
                    { no: 15, ageGroup: '65 s/d 69', male: 86, female: 87, total: 173 },
                    { no: 16, ageGroup: '70 s/d 74', male: 74, female: 74, total: 148 },
                    { no: 17, ageGroup: '75+', male: 142, female: 174, total: 316 },
                  ].map((row) => (
                    <tr key={row.no}>
                      <td className="py-2 px-4 border-b border-gray-300">{row.no}</td>
                      <td className="py-2 px-4 border-b border-gray-300">{row.ageGroup}</td>
                      <td className="py-2 px-4 border-b border-gray-300">{row.male}</td>
                      <td className="py-2 px-4 border-b border-gray-300">{row.female}</td>
                      <td className="py-2 px-4 border-b border-gray-300">{row.total}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2" className="py-2 px-4 border-b border-gray-300 font-bold">JUMLAH</td>
                    <td className="py-2 px-4 border-b border-gray-300 font-bold">2651</td>
                    <td className="py-2 px-4 border-b border-gray-300 font-bold">2634</td>
                    <td className="py-2 px-4 border-b border-gray-300 font-bold">5285</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Mata Pencaharian:</p>
            <ul className="list-disc pl-5">
              <li>Petani: 557</li>
              <li>Buruh Tani & Harian Lepas: 992</li>
              <li>Buruh Industri: 368</li>
              <li>Pedagang: 256</li>
              <li>Pegawai Negeri Sipil: 93</li>
              <li>TNI/POLRI: 12</li>
              <li>Dokter: 1</li>
              <li>Pensiunan: 130</li>
              <li>Pamong Desa: 11</li>
              <li>Lainnya: 1.018</li>
              <li>Belum Bekerja: 1.847</li>
            </ul>
            <p className="mt-4">Penduduk Menurut Agama:</p>
            <p>
              Penduduk desa Donoyudan yang berjumlah 5285 jiwa semua beragama
              Islam.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
