import Link from "next/link";
import Card from "../ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <main  className="w-10/12 lg:w-4/6 xl:w-2/5 flex-1 mt-4">
      <Card title="aucun" style="none">
        <p className="mb-8">
          Sur cette page, retrouvez des liens vers des sites qui proposent des ressources 
          intéressantes ou utiles pour perfectionner votre expérience avec le mahjong.
        </p>
        <ul className="ms-4">
          <li className="mb-2">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <Link 
              key="FFMJ" 
              href="https://web.ffmahjong.fr/" 
              className="text-green-400 hover:text-yellow-400 font-bold"
            >
              Le site de la Fédération Française de Mahjong
            </Link>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <Link 
              key="Règles FFMJ" 
              href="https://www.ffmahjong.fr/FFMJ-site/documents/riichi-fr.pdf" 
              className="text-green-400 hover:text-yellow-400 font-bold"
            >
              La traduction officielle des règles de tournoi EMA de la FFMJ
            </Link>
            </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <Link 
              key="Chuuren Potos" 
              href="http://www.chuuren.fr/" 
              className="text-green-400 hover:text-yellow-400 font-bold"
            >
              Le site du club marseillais Chuuren Potos
            </Link>
            <span className="text-sm font-light italic">
              &nbsp;(qui contient beaucoup de ressources utiles !)
            </span>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <Link 
              key="Youtube Chuuren Potos" 
              href="https://www.youtube.com/@chuurenpotosmahjongpotos7783/videos" 
              className="text-green-400 hover:text-yellow-400 font-bold"
            >
              La chaîne YouTube de Chuuren Potos
            </Link>
            <span className="text-xs font-light italic">
              &nbsp;(je conseille la série de vidéos &quot;How to play mahjong&quot; pour débuter)
            </span>     
          </li>
        </ul>
      </Card>
    </main>
  );
}