import Link from "next/link";
import Image from "next/image";
import FuTable from "./ui/FuTable";
import FuHanTable from "./ui/FuHanTable";
import ManTable from "./ui/ManTable";
import Card from "../ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5">
      <Card title="aucun" style="none">
        <p className="mb-2">
          En règle générale, les joueurs commencent la partie avec 25000 points.
        </p>
        <p className="mb-2">
          Pour le comptage des points, on utilise des bâtonnets appelés <em>tenbou</em> :
        </p>
        <div className="flex justify-center">
          <ul className="flex flex-col items-center w-2/3 min-[800px]:ms-16">
            <li className="w-full">
              <div className="
                flex max-[800px]:flex-col xl:max-[1655px]:flex-col min-[800px]:gap-2 
                xl:max-[1655px]:gap-2 items-center
              ">
                <Image 
                  src="/tenbou100.png" 
                  alt="Tenbou de 100 points" 
                  width="180" 
                  height="17" 
                  className="h-[17px]"
                />
                <span className="justify-self-right max-[800px]:mb-2">
                  Tenbou valant 100 points
                </span>
              </div>
            </li>
            <li className="w-full">
              <div className="
                flex max-[800px]:flex-col xl:max-[1655px]:flex-col min-[800px]:gap-2 items-center
              ">
                <Image 
                  src="/tenbou1000.png" 
                  alt="Tenbou de 1000 points" 
                  width="180" 
                  height="17" 
                  className="h-[17px]"
                />
                <span className="max-[800px]:mb-2">Tenbou valant 1000 points</span>
              </div>
            </li>
            <li className="w-full">
              <div className="
                flex max-[800px]:flex-col xl:max-[1655px]:flex-col min-[800px]:gap-2 items-center
              ">
                <Image 
                  src="/tenbou5000.png" 
                  alt="Tenbou de 5000 points" 
                  width="180" 
                  height="17" 
                  className="h-[17px]"
                />
                <span className="max-[800px]:mb-2">Tenbou valant 5000 points</span>
              </div>
            </li>
            <li className="w-full">
              <div className="
                flex max-[800px]:flex-col xl:max-[1655px]:flex-col min-[800px]:gap-2 items-center
              ">
                <Image 
                  src="/tenbou10000.png" 
                  alt="Tenbou de 10000 points" 
                  width="180" 
                  height="17" 
                  className="h-[17px]"
                />
                <span className="max-[800px]:mb-2">Tenbou valant 10000 points</span>
              </div>
            </li>
          </ul>
        </div>
      </Card>
      <Card title="Honba" style="italic">
        <p className="mb-2">
          Le <em>honba</em> est un pot de points qui s&apos;accumulent à chaque fois que :
        </p>
        <div className="flex justify-center">
          <ul className="mb-2">
            <li><FontAwesomeIcon icon={faCaretRight} className='me-2'/>la donne est nulle</li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>le donneur remporte la donne
            </li>
          </ul>
        </div>
        <p className="mb-2">
          Dès qu&apos;un joueur ordinaire remporte la donne, il est payé et le compteur est remis à 
          zéro.
        </p>
        <p className="mb-2">
          C&apos;est le donneur qui tient le décompte du <em>honba</em>, il place un tenbou de 100
          points pour chaque <em>honba</em> à sa droite.
        </p>
        <p>
          Chaque <em>honba</em> vaut 300 points qui sont payés dans leur intégralité par le joueur
          responsable d&apos;une victoire sur <em>ron</em> ou par tous les joueurs à hauteur de 100
          points chacun par <em>honba</em> en cas de <em>tsumo</em>.
        </p>
      </Card>
      <Card title="Calcul des points" style="none">
        <p className="mb-2">
          Il faut toujours évaluer la forme de la main qui rapporte le plus de points.
        </p>
        <p>
          Pour calculer la valeur d&apos;une main, il y a deux types de points à prendre en compte : 
          les <em>Han</em> et les <em>Fu</em>.  
        </p>
      </Card>
      <Card title="Han" style="italic">
        <p>
          On commence par évaluer le nombre de <em>Han</em> en comptant le nombre de&nbsp;
          <Link key="Yaku" href="/yaku" className="text-green-400 hover:text-yellow-400 font-bold">
            <em>yaku</em>
          </Link>
          &nbsp;(au moins un, sinon la main n&apos;est pas valide) et les&nbsp;
          <Link key="Dora" href="/dora" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">dora</em>
          </Link>.
        </p>
      </Card>
      <Card title="Fu" style="italic">
        <p>
          Ensuite, il faut déterminer la valeur en <em>Fu</em> de la main, sauf si elle vaut 5&nbsp;
          <em>Han</em> ou plus.
        </p>
        <p className="mb-2">Les <em>Fu</em> sont toujours arrondis à la dizaine supérieure.</p>
        <p className="mb-4">
          Chaque combinaison présente dans la main peut rapporter des <em>Fu</em>, sauf les suites, 
          qui ne valent rien. Les combinaisons valent plus de points si elles n&apos;ont pas été 
          exposées.
        </p>
        <div className="flex justify-center">
          <FuTable />
        </div>
        <p className="mb-2">D&apos;autres conditions rapportent des <em>Fu</em> :</p>
        <div className="flex justify-end me-4 mb-4">
          <ul className="w-4/5">
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Le simple fait d&apos;avoir remporté la main octroie 20 <em>Fu</em>. Si la victoire a 
              eu lieu en en déclarant <em>ron</em> avec une main fermée, cette valeur est portée à 
              30 <em>Fu</em>.
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Si la main a été remportée sur <em>tsumo</em> et que le yaku&nbsp;
              <Link 
                key="1 Han" 
                href="/1han" 
                className="text-green-400 hover:text-yellow-400 font-bold"
              >
                <em className="link">Pinfu</em>
              </Link>
              &nbsp;n&apos;est pas réclamé, 2 <em>Fu</em> supplémentaires sont accordés.
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Gagner sur une attente unique rapporte 2 <em>Fu</em>. Être en attente sur la paire, au
              centre d&apos;une suite ou au bord (sur le 3 pour 123 ou sur le 7 pour 789) sont des 
              attentes uniques.
            </li>
          </ul>
        </div>
        <p>
          Gagner avec le yaku&nbsp;
          <Link key="2 Han" href="/2han" className="text-green-400 hover:text-yellow-400 font-bold">
              <em className="link">Chiitoitsu</em> (Sept Paires)
          </Link>
          &nbsp;rapporte la valeur forfaitaire de 25 <em>Fu</em> et n&apos;est jamais arrondie.
        </p>
      </Card>
      <Card title="Tableaux des points" style="none">
        <p className="mb-2">
          La méthode la plus simple pour calculer les points est d&apos;utiliser les tableaux 
          suivants :
        </p>
        <div className="flex justify-center mb-2">
          <FuHanTable />
        </div>
        <p className="text-yellow-400 print:text-orange-600 italic text-sm ms-6">
          En <span className="inline print:hidden">jaune</span>
          <span className="hidden print:inline">orange</span>, le montant payé par le joueur 
          responsable d&apos;une victoire sur ron.
        </p>
        <p className="underline italic text-sm ms-6">
          En souligné, le montant payé par le donneur sur une victoire par tsumo d&apos;un joueur 
          ordinaire.
        </p>
        <p className="italic text-sm ms-6 mb-4">
          * Généralement arrondi à Mangan.
        </p>
        <div className="flex justify-center mb-2">
          <ManTable />
        </div>
        <p className="my-4">
          Au montant calculé s&apos;ajoutent éventuellement les mises des joueurs ayant déclaré&nbsp; 
          <em>riichi</em> et les points liés au <em>honba</em>.
        </p>
        <p className="mb-2">
          Dans le cas d&apos;une donne nulle, les joueurs <em>noten</em> paient une pénalité aux 
          joueurs <em>tenpai</em> d&apos;une valeur de 3000 points. On rencontre trois cas de figure :
        </p>
        <div className="flex justify-end me-4 mb-4">
          <ul>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Si un joueur était <em>tenpai</em>, les autres lui paient chacun 1000 points
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Si deux joueurs l&apos;étaient, les deux autres leur paient 1500 points chacun
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
              Si seulement un joueur était <em>noten</em>, il paie 1000 points aux trois autres 
              joueurs
            </li>
          </ul>
        </div>
      </Card>
      <Card title="Responsabilités" style="none">
        <p className="mb-2">
          Le joueur fournissant la tuile permettant à un adversaire de gagner avec 
          l&apos;appel <em>ron</em> doit payer la totalité des points de la main.
        </p>
        <p>
          Seul le joueur fournissant le 3<sup>ème</sup> brelan/carré de dragons exposé avec 
          l&apos;appel <em>pon/kan</em> ou le 4<sup>ème</sup> brelan/carré de vents exposé avec 
          l&apos;appel <em>pon/kan</em> est tenu de payer la totalité de valeur de la main si les 
          Trois Grands Dragons ou les Quatre Grands Vents sont réclamés, même sur victoire&nbsp;
          <em>tsumo</em>.
        </p>
      </Card>
    </main>
  );
}