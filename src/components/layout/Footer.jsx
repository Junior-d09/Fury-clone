// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t mt-12 py-6">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center text-gray-600">
//           <p>© 2025 Start Creating Your Stunning Website, Today!</p>
//           <p className="text-sm mt-2">
//             CLonnage d&aposun template web moderne, par Christ_Junior.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo + description */}
        <div>
          <h2 className="text-2xl font-bold mb-2 font-[var(--font-arima)]">Fury</h2>
          <p className="text-gray-400">
            Votre destination pour la musique, le sport et les produits gaming.  
            Explorez, découvrez et amusez-vous !
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Liens</h3>
          <ul className="flex flex-col gap-2">
            {/* <li><Link href="">Accueil</Link></li> */}
            <li><Link href="#">Produits</Link></li>
            <li><Link href="#">Musique</Link></li>
            <li><Link href="#">Sport</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-400 mb-2">Inscrivez-vous pour recevoir les dernières nouveautés</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button type="submit" className="px-4 py-2 bg-pink-600 rounded-r-md hover:bg-pink-700 transition">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        &copy; {new Date().getFullYear()} Fury. Tous droits réservés.
      </div>
    </footer>
  )
}
