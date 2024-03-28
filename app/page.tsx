import Tile from "@/app/ui/Tile";
import NineTiles from "@/app/ui/NineTiles";
import Link from "next/link";
import Card from "./ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5">
      <p className="text-center mb-8">
        Bienvenue sur ce site dédié à l&apos;explication des règles du mahjong japonais ou 
        riichi mahjong de façon la plus simple et la plus concise possible.
      </p>
      <Card title="aucun" style="none">
        <p>
          Le but du jeu est de marquer un maximum de points en dévoilant une main valide 
          de 14 tuiles contenant sauf exception 4 combinaisons de tuiles (brelans, carrés ou suites) 
          et d&apos;une paire.
        </p>
        <p>
          Pour être valide, une main doit contenir au moins un&nbsp;
          <Link key="Yaku" href="/yaku" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">yaku</em>
          </Link>
          .
        </p>
      </Card>
      <Card title="Les types de tuiles" style="none">
        <p className="mt-8">Il existe trois familles de tuiles numérotées de 1 à 9 :</p>
        <div className="flex items-center max-[1525px]:flex-col justify-between my-2">
          <p className="me-4 max-[1525px]:self-start min-[1525px]:mb-1">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            Les cercles
            <span className="hidden min-[535px]:inline"> :</span>
          </p>
          <NineTiles
            tile1="Pin1"
            tile2="Pin2"
            tile3="Pin3"
            tile4="Pin4"
            tile5="Pin5"
            tile6="Pin6"
            tile7="Pin7"
            tile8="Pin8"
            tile9="Pin9"
          />
        </div>
        <div className="flex items-center max-[1525px]:flex-col justify-between my-2">
          <p className="me-4 max-[1525px]:self-start min-[1525px]:mb-1">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            Les bambous
            <span className="hidden min-[535px]:inline"> :</span>
          </p>
          <NineTiles
            tile1="Sou1"
            tile2="Sou2"
            tile3="Sou3"
            tile4="Sou4"
            tile5="Sou5"
            tile6="Sou6"
            tile7="Sou7"
            tile8="Sou8"
            tile9="Sou9"
          />
        </div>
        <div className="flex items-center max-[1525px]:flex-col justify-between my-2">
          <p className="me-2 max-[1525px]:self-start min-[1525px]:mb-1">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            Les caractères
            <span className="hidden min-[535px]:inline"> :</span>
          </p>
          <NineTiles
            tile1="Man1"
            tile2="Man2"
            tile3="Man3"
            tile4="Man4"
            tile5="Man5"
            tile6="Man6"
            tile7="Man7"
            tile8="Man8"
            tile9="Man9"
          />
        </div>
        <div className="flex max-[1755px]:flex-col items-center justify-between my-2">
          <p className="me-4 max-[1755px]:self-start min-[1755px]:mb-1">
            Parmi ces familles, on peut trouver un exemplaire d&apos;un cinq rouge
            <span className="hidden min-[278px]:inline"> :</span>
          </p>
          <div className="flex gap-1">
            <Tile tile="Pin5-Dora"/>
            <Tile tile="Sou5-Dora"/>
            <Tile tile="Man5-Dora"/>
          </div>
        </div>
        <p>Les tuiles 1 et 9 sont appelées les tuiles terminales ou extrémités.</p>
        <p className="mt-8">Il existe deux types d&apos;honneurs :</p>
        <div className="flex max-[1585px]:flex-col items-center justify-between my-2">
          <p className="me-4 max-[1585px]:self-start min-[1585px]:mb-1">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            Les vents (dans l&apos;ordre : Est, Sud, Ouest, Nord)
            <span className="hidden min-[278px]:inline"> :</span>
          </p>
          <div className="flex gap-1">
            <Tile tile="Ton"/>
            <Tile tile="Nan"/>
            <Tile tile="Shaa"/>
            <Tile tile="Pei"/>
          </div>
        </div>
        <div className="flex max-[1465px]:flex-col items-center justify-between my-2">
          <p className="me-4 max-[1465px]:self-start min-[1465px]:mb-1">
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            Les dragons (dans l&apos;ordre : Rouge, Blanc, Vert)
            <span className="hidden min-[278px]:inline"> :</span>
          </p>
          <div className="flex gap-1">
            <Tile tile="Chun"/>
            <Tile tile="Haku"/>
            <Tile tile="Hatsu"/>
          </div>  
        </div>
      </Card>
    </main>
  );
}
