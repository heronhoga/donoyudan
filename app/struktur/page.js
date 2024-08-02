"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Struktur() {
  const navPoints = [{ label: "Kembali ke Beranda", href: "/" }];
  const [selectedCategory, setSelectedCategory] = useState('Pemerintahan Desa');
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef(null);

  const categories = [
    'Pemerintahan Desa',
    'Badan Permusyawaratan Desa (BPD)',
    'Lembaga Pemberdayaan Masyarakat Desa (LPMD)',
    'Pengurus PKK Desa Donoyudan',
  ];

  const content = {
    'Pemerintahan Desa': (
      <div>
        <p>Kepala Desa: Poniman, SH</p>
        <p>Sekretaris Desa: Agus Sugiyanto</p>
        <p>Kebayan 1: Maryono</p>
        <p>Kebayan 2: Ariyono</p>
        <p>Kebayan 3: Muhkhlisin</p>
        <p>Kasi Pemerintahan: Danang Setiyabudi</p>
        <p>Kasi Kesra: Lasiman</p>
        <p>Kasi Pelayanan: Kuat Alfian Usman</p>
        <p>Kaur Tata Usaha dan Umum: Lilies Ekowati Setyoningsih</p>
        <p>Kaur Keuangan: Muhafidl Ali Imron</p>
        <p>Kaur Perencanaan: Rohani</p>
      </div>
    ),
    'Badan Permusyawaratan Desa (BPD)': (
      <div>
        <p>Ketua: Taufiq Winarno, S.Pd</p>
        <p>Wakil: Aris Setyawan, S.Pd</p>
        <p>Sekretaris: Mahfut Amrullah, S.Pd.I</p>
        <p>Ketua Bidang Penyelenggaraan Pemerintah Desa dan Pembinaan Kemasyarakatan: Rohmadi</p>
        <p>Anggota: 1. Emi Minarni</p>
        <p>2. Fatah Prihariadin</p>
        <p>Ketua Bidang Pembangunan Desa dan Pemberdayaan Masyarakat Desa: Siswanto</p>
        <p>Anggota: 1. Muh. Supriyanto</p>
        <p>2. Yusup</p>
      </div>
    ),
    'Lembaga Pemberdayaan Masyarakat Desa (LPMD)': (
      <div>
        <p>Ketua: Drs. H. WS Gunawan, M.Pd</p>
        <p>Wakil Ketua: H. Gunawan, S.Pd</p>
        <p>Sekretaris: M. Ali Imron, SP</p>
        <p>Bendahara: Sriyono, ST., M.Pd</p>
        <p>Bidang Agama, Kesra dan Sosial: H. Surat Luqman</p>
        <p>Bidang Lingkungan Hidup: Jupri</p>
        <p>Bidang Kantibmas: Muh. Sulaiman</p>
        <p>Bidang Pendidikan: H. Sunarno, S.Pd</p>
        <p>Bidang Pemberdayaan Perempuan: Siti Nurhidayati, SE</p>
        <p>Bidang Pemuda dan Olahraga: Muhroni</p>
        <p>Bidang Kesehatan: H. Suramin, SK</p>
        <p>Bidang Pembangunan: Amirul Mukminin</p>
      </div>
    ),
    'Pengurus PKK Desa Donoyudan': (
      <div>
        <p>Pembina: Poniman, SH</p>
        <p>Ketua: Siti Nurhidayati, SE</p>
        <p>Wakil Ketua: Hj. Sumiyati</p>
        <p>Sekretaris I: Maghfiroh, S.Ag</p>
        <p>Sekretaris II: Lilies Ekowati Setyoningsih, S.Pd</p>
        <p>Bendahara I: Fatmawati</p>
        <p>Bendahara II: Fitri Wiji Lestari</p>
        <p>Ketua Pokja I: Emi Minarni</p>
        <p>Wakil Ketua Pokja I: Windarti, S.Pd.I</p>
        <p>Sekretaris Pokja I: Endang Purwaningsih</p>
        <p>Anggota Pokja I: Supriati, S.Pd., M.P</p>
        <p>Ketua Pokja II: Hj. Sofiatun Umroh</p>
        <p>Wakil Ketua Pokja II: Hanik Rofiah, S.Pd.I</p>
        <p>Sekretaris Pokja II: Sri Lestari</p>
        <p>Anggota Pokja II: Wuri Puji Lestari, S.Si</p>
        <p>Ketua Pokja III: Nanik Rahayuningsih</p>
        <p>Wakil Ketua Pokja III: Jati Ernawati</p>
        <p>Sekretaris Pokja III: Siti Nurjanah</p>
        <p>Anggota Pokja III: Sri Murtini Rofiq</p>
        <p>Ketua Pokja IV: Sri Wayuningsih, A.Md.Keb</p>
        <p>Wakil Ketua Pokja IV: Umi Sa'adah</p>
        <p>Sekretaris Pokja IV: Siti Barokah</p>
        <p>Anggota Pokja IV: Eka Astriani, A.Md.Kep</p>
      </div>
    ),
  };

  useEffect(() => {
    const checkOverflow = () => {
      const container = containerRef.current;
      if (container) {
        setIsOverflowing(container.scrollWidth > container.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <div>
      <Navbar navPoints={navPoints} />
      <div id="struktur" className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          STRUKTUR ORGANISASI DESA DONOYUDAN
        </h2>
        <hr className="border-gray-300 mb-4" />
        <div
          ref={containerRef}
          className={`mb-4 ${isOverflowing ? 'overflow-x-auto' : ''} whitespace-nowrap`}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`inline-block px-4 py-2 m-2 ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-black border'
              } rounded-lg`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div>{content[selectedCategory]}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Struktur;
