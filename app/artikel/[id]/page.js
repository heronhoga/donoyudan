"use client";

import { articles } from '../../data/articles.js';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import { useParams } from 'next/navigation.js';
import Image from 'next/image';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const navPoints = [{ label: "Kembali ke Daftar Artikel", href: "/artikel" }];

  return (
    <div>
      <div id="navbar">
        <Navbar navPoints={navPoints} />
      </div>

      <div id="article" className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          {article.title}
        </h2>
        <hr className="border-gray-300 mb-4" />

        {article.photo && (
          <div className="mb-4">
            <Image 
              src={article.photo}
              alt={article.title}
              width={800}
              height={450}
              className="w-full h-auto rounded"
            />
          </div>
        )}

        <div className="bg-white p-4 rounded shadow text-justify">
          <p>{article.fullText}</p>
          <hr className="border-gray-300 my-4" />
          <p className="text-right italic">narasumber: {article.narasumber}</p>
          <p className="text-right italic">Penulis: {article.penulis}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
