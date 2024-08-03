"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, ChartDataLabels);

function Home() {
  const navPoints = [
    { label: "Profil Desa", href: "#profil" },
    { label: "Kondisi Umum", href: "#kondisi" },
    { label: "Struktur Organisasi", href: "/struktur" },
    { label: "Artikel", href: "/artikel" },
  ];

  const geografisData = {
    labels: ["Tanah Pekarangan", "Tanah Sawah", "Tanah Tegalan", "Lain-lain"],
    datasets: [
      {
        label: "Luas Wilayah (Ha)",
        data: [82.0, 194.0, 64.0, 44.348],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const geografisOptions = {
    maintainAspectRatio: false,
  };

  const totalGenderData = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [2651, 2634],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const totalGenderOptions = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: 'black',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${value}\n(${percentage})`;
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw;
            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
            const percentage = ((value / total) * 100).toFixed(2) + "%";
            return `${label}: ${value} (${percentage})`;
          },
        },
      },
    },
  };

  const demografisData = {
    labels: [
      "0 s/d 1",
      "2 s/d 4",
      "5 s/d 9",
      "10 s/d 14",
      "15 s/d 19",
      "20 s/d 24",
      "25 s/d 29",
      "30 s/d 34",
      "35 s/d 39",
      "40 s/d 44",
      "45 s/d 49",
      "50 s/d 54",
      "55 s/d 59",
      "60 s/d 64",
      "65 s/d 69",
      "70 s/d 74",
      "75+",
    ],
    datasets: [
      {
        label: "Laki-laki",
        data: [
          53, 65, 198, 194, 205, 191, 190, 195, 192, 194, 195, 146, 123, 85, 86,
          74, 142,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Perempuan",
        data: [
          56, 75, 192, 185, 202, 222, 175, 212, 242, 195, 196, 144, 120, 90, 87,
          74, 174,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const demografisOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const mataPencaharianData = {
    labels: [
      "Belum Bekerja",
      "Lainnya",
      "Buruh Tani & Harian Lepas",
      "Petani",
      "Buruh Industri",
      "Pedagang",
      "Pensiunan",
      "Pegawai Negeri Sipil",
      "Pamong Desa",
      "TNI/POLRI",
      "Dokter",
    ],
    datasets: [
      {
        label: "Jumlah",
        data: [1847, 1018, 992, 557, 368, 256, 130, 93, 11, 12, 1],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const mataPencaharianOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div id="navbar">
        <Navbar navPoints={navPoints} />
      </div>
      <div id="profil" className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          DESA DONOYUDAN
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
          sebagai buruh tani dan penggarap. Namun, meskipun mata pencaharian
          rata-rata penduduk masih rendah, desa Donoyudan mempunyai masyarakat
          dengan tingkat kepedulian yang cukup tinggi. Desa Donoyudan yang
          terletak di Kecamatan Kalijambe berusaha melaksanakan Pemerintahan
          Desa dengan semangat Otonomi Desa dengan berupaya mengatur dan
          mengurus rumah tangga Desa atas dasar musyawarah mufakat serta
          inisiatif dan prakarsa dari masyarakat dalam rangka mendukung
          pelaksanaan pembangunan di Desa Donoyudan.
        </p>
      </div>
      <div id="kondisi" className="p-4 bg-gray-200">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          KONDISI UMUM DESA DONOYUDAN
        </h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row">
            <div
              id="geografis"
              className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-2">Geografis</h3>
              <div className="w-full h-64">
                <Pie data={geografisData} options={geografisOptions} />
              </div>
            </div>
            <div
              id="batas-wilayah"
              className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white md:w-1/2 mt-4 md:mt-0 md:ml-4"
            >
              <h3 className="text-xl font-bold mb-2">Batas Wilayah Desa Donoyudan</h3>
              <ul className="list-disc pl-5">
                <li>Sebelah Utara: Desa Wonorejo</li>
                <li>Sebelah Timur: Desa Sambirembe</li>
                <li>Sebelah Selatan: Desa Keden</li>
                <li>Sebelah Barat: Wilayah Boyolali</li>
              </ul>
            </div>
          </div>
          <div
            id="demografis"
            className="p-4 border border-gray-800 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold mb-2">Demografis</h3>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
              <div className="w-full md:w-1/2 h-64 mb-4">
                <Pie data={totalGenderData} options={totalGenderOptions} />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <p className="text-lg font-bold">Jumlah KK</p>
                  <p className="text-3xl font-bold">1665</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">Jumlah RT</p>
                  <p className="text-3xl font-bold">18</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">Jumlah Kebayan</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">Penduduk Menurut Agama</p>
                  <p className="text-3xl font-bold">Islam: 5285 (100%)</p>
                </div>
              </div>
            </div>
            <hr className="border-gray-300 my-4" />
            <p>Jumlah Penduduk Desa Donoyudan Tahun 2023:</p>
            <div className="w-full h-64">
              <Bar data={demografisData} options={demografisOptions} />
            </div>
            <hr className="border-gray-300 my-4" />
            <p className="mt-4">Mata Pencaharian:</p>
            <div className="w-full h-64">
              <Bar data={mataPencaharianData} options={mataPencaharianOptions} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
