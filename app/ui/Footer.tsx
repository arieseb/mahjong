'use client';

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col gap-2 text-sm text-center font-light my-2 print:hidden">
      <button className="max-[220px]:text-xs text-base hover:text-yellow-400" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} className='me-2'/>
        <span>Retour en haut de page</span>
        <FontAwesomeIcon icon={faArrowUp} className='ms-2'/>
      </button>
      <p>
        Design des tuiles par&nbsp;
        <Link 
          key="Jannchie" 
          href="https://github.com/Jannchie/riichi-mahjong-tiles" 
          className="text-green-400 hover:text-yellow-400"
        >
          @Jannchie
        </Link>
        <span className="inline min-[468px]:hidden"><br/></span>
        &nbsp;dérivé du projet inital de&nbsp;
        <Link 
          key="FluffyStuff" 
          href="https://github.com/FluffyStuff/riichi-mahjong-tiles" 
          className="text-green-400 hover:text-yellow-400"
        >
          @FluffyStuff
        </Link>
      </p>
    </footer>
  );
}

export default Footer;