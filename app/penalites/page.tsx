import Tile from "../ui/Tile";
import Link from "next/link";
import Card from "../ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <main  className="w-10/12 lg:w-4/6 xl:w-2/5">
      <Card title="aucun" style="none">
        <p className="mb-2">
          Les erreurs commises au cours du jeu peuvent être sanctionnées d&apos;une pénalité.
        </p>
        <p>Selon la gravité de l&apos;erreur, une sanction plus ou moins sévère est appliquée.</p>
      </Card>
      <Card title="Chombo" style="italic">
        <p className="mb-2">
          La pénalité <em>chombo</em> est la plus sévère. Le joueur fautif doit alors payer  
          l&apos;équivalent d&apos;un <em>mangan tsumo</em> aux autres joueurs, les mises&nbsp;
          <em>riichi</em> sont restituées et la donne en cours est redistribuée.
        </p>
        <p className="mb-2">
          En tournoi, le joueur fautif ne paie rien mais est pénalisé  au classement de 20000 points 
          (WRC ou EMA) ou 40000 points (NPM).
        </p>
        <p className="mb-2">Les infractions suivantes sont punies par <em>chombo</em> :</p>
        <div className="flex justify-center me-4 mb-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer une victoire avec une main invalide
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer une victoire avec une main sans <em>yaku</em>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer une victoire <em>ron</em> en étant <em>furiten</em>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Ne pas utiliser le bon terme pour déclarer une victoire
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer <em>riichi</em> avec une main <em>noten</em> (seulement si dévoilée)
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer un faux carré caché
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Révéler plus de 5 tuiles du mur
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Révéler plus de 5 tuiles de sa main
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Révéler au moins une tuile de la main d&apos;un adversaire
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Réclamer une tuile en étain main morte
            </li>
          </ul>
        </div>
      </Card>
      <Card title="Main morte" style="none">
        <p className="mb-2">
          Les erreurs mineures sont sanctionnées en rendant le joueur fautif main morte.
        </p>
        <p className="mb-2">
          Un joueur main morte ne peut plus voler de tuiles, être <em>tenpai</em> ou remporter la 
          donne en cours.
        </p>
        <p className="mb-2">Les infractions suivantes sont punies par main morte :</p>
        <div className="flex justify-center me-4 mb-4">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer une victoire mais ne pas révéler sa main
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer <em>riichi</em> avec une main ouverte
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Ne pas prononcer clairement <em>riichi</em> pour le déclarer
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Ne pas tourner l&apos;écart après avoir déclaré <em>riichi</em>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Avoir un nombre de tuiles anormal dans la main
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Faire un appel <em>kan</em>, <em>pon</em> ou <em>chii</em> invalide (pas de sanction 
              si corrigé avant l&apos;écart)
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Faire un appel de substitution (<em>kuikae</em>), voir section suivante
            </li>
          </ul>
        </div>
      </Card>
      <Card title="Kuikae" style="italic">
        <p className="mb-2">
          <em>Kuikae</em> ou appel de substitution désigne le fait de voler une tuile pour défausser 
          une tuile identique.
        </p>
        <p className="mb-2">
          De la même manière, il est interdit de voler une tuile pour compléter une suite et de 
          défausser la tuile opposée.
        </p>
        <p className="mb-2">
          Ainsi, si dans la main il y a cette combinaison
          <span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2">
          <Tile tile="Pin4"/>
          <Tile tile="Pin5"/>
          <Tile tile="Pin6"/>
        </div>
        <div className="flex max-[665px]:flex-col items-center mb-2 min-[665px]:ms-[113px]">
          <p className="max-[665px]:mb-1">
            Si le joueur de gauche défausse la tuile
            <span className="hidden min-[278px]:inline"> :</span>
          </p>
          <div className="ms-8">
            <Tile tile="Pin3"/>
          </div>
        </div>
        <div className="flex max-[665px]:flex-col items-center">
          <p className="max-[665px]:mb-1">
            Il est interdit de la voler pour défausser ensuite la tuile
            <span className="hidden min-[278px]:inline"> :</span>
          </p>
          <div className="ms-8">
            <Tile tile="Pin6"/>
          </div>
        </div>
      </Card>
      <Card title="Annulation de la donne" style="none">
        <p className="mb-2">La donne peut être annulée selon certaines conditions :</p>
        <div className="flex min-[595px]:ms-28 mb-4">
          <ul>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Un joueur possède au moins 9 tuiles terminales et/ou honneurs dans lors de sa première 
              pioche, il peut demander l&apos;annulation de la donne. Il peut aussi tenter&nbsp;
              <Link 
                key="Yakuman" 
                href="/yakuman" 
                className="text-green-400 hover:text-yellow-400 font-bold"
              >
                <em className="link">Kokushi Musou</em> (Les Treize Orphelins)
              </Link>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Déclarer 5 carrés au cours de la même donne
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Tous les joueurs défaussent le même vent lors du premier tour de jeu ininterrompu
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Tous les joueurs on déclaré <em>riichi</em>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Un joueur est pénalisé par <em>chombo</em>
            </li>
          </ul>
        </div>
        <p>
          En cas d&apos;annulation de la donne, aucun point n&apos;est payé (sauf <em>chombo</em>), 
          le donneur ne change pas mais le compteur de&nbsp;
          <Link 
              key="Points" 
              href="/points" 
              className="text-green-400 hover:text-yellow-400 font-bold"
            >
              <em className="link">honba</em>
          </Link>
          &nbsp;n&apos;incrémente pas non plus.
        </p>
      </Card>
    </main>
  );
}