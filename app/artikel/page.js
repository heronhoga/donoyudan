import Link from "next/link";
import { articles } from "../data/articles.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Artikel() {
  const navPoints = [{ label: "Kembali ke Beranda", href: "/" }];

  return (
    <div>
      <div id="navbar">
        <Navbar navPoints={navPoints} />
      </div>

      <div id="profil" className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center italic">
          ARTIKEL
        </h2>
        <hr className="border-gray-300 mb-4" />
        <div>
          {articles.map((article) => (
            <div key={article.id} className="mb-4 p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p>{article.snippet}</p>
              <Link href={`/artikel/${article.id}`} className="text-blue-500">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
