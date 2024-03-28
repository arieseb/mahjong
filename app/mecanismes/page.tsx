import Link from "next/link";
import Tile from "@/app/ui/Tile";
import BackTile from "@/app/ui/BackTile";
import RotateTile from "@/app/ui/RotateTile";
import Card from "../ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5">
      <Card title="But du jeu" style="none">
        <p className="mb-2">
          Le but du jeu est de marquer un maximum de points en dévoilant une main valide 
          de 14 tuiles contenant sauf exception 4 combinaisons de tuiles (brelans, carrés ou suites) 
          et d&apos;une paire.
        </p>
        <p>
          Pour être valide, une main doit contenir au moins un&nbsp;
          <Link key="Yaku" href="/yaku" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">yaku</em>
          </Link>.
        </p>
      </Card>
      <Card title="Tour de jeu" style="none">
        <p>
          Les joueurs vont piocher une tuile depuis le mur chacun à leur tour dans le sens inverse 
          des aiguilles d&apos;une montre. Ils défaussent ensuite une tuile qu&apos;ils rangent 
          devant eux par nombre de 6, dans l&apos;ordre de défausse de gauche à droite.
        </p>
      </Card>
      <Card title="Les Appels" style="none">
        <p className="mb-2">
          Au cours du jeu, plusieurs appels doivent être faits pour déclarer certaines actions. Ces 
          appels doivent être énoncés clairement pour que chaque joueur comprenne ce qu&apos;il se 
          passe.
        </p>
        <p className="mb-2">
          Lorsqu&apos;un appel est destiné à voler une tuile, cela doit avoir lieu au moment où il 
          se défausse de celle-ci et avant que le joueur suivant n&apos;ait pu piocher à son tour.
        </p>
        <p className="mb-2">
          Après avoir volé une tuile, il faut se défausser et le jeu reprend à partir du joueur 
          situé à droite du joueur ayant fait l&apos;appel.
        </p>
        <ul className="mb-2">
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Chii</em> permet de voler une tuile au joueur à sa gauche pour compléter une suite
          </li>
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Pon</em> permet de voler une tuile à n&apos;importe quel joueur pour compléter un 
            brelan
          </li>
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Kan</em> permet de voler une tuile à n&apos;importe quel joueur pour compléter un 
            carré, de déclarer un carré caché ou de compléter un brelan ouvert sur pioche
          </li>
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Ron</em> permet de voler une tuile à n&apos;importe quel joueur pour compléter une
            main valide (c&apos;est la seule façon de voler une tuile pour compléter une paire)
          </li>
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Tsumo</em> permet de déclarer une main valide sur pioche
          </li>
          <li>
            <FontAwesomeIcon icon={faCaretRight} className='me-2'/>
            <em>Riichi</em> permet de déclarer que l&apos;on est <em>tenpai</em> tout en misant 1000 
            points sur sa victoire
          </li>
        </ul>
        <p className="mb-2">
          Si plusieurs joueurs souhaitent voler une même tuile, <em>pon</em> est prioritaire sur&nbsp; 
          <em>chii</em> tandis que <em>ron</em> a la priorité absolue.
        </p>
        <p>Il est possible pour plusieurs joueurs de gagner sur le même appel <em>ron</em>.</p>
      </Card>
      <Card title="Les Carrés" style="none">
        <p className="mb-2">
          Les carrés sont les seules combinaisons à devoir être déclarées même sur main fermée.
        </p>
        <p>
          Il faudra alors déclarer l&apos;appel <em>kan</em> et révéler le carré tout en conservant
          les deux tuiles aux extrémités cachées
          <span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2">
          <BackTile/>
          <Tile tile="Pin4"/>
          <Tile tile="Pin4"/>
          <BackTile/>
        </div>
        <p className="mb-2">
          Lorsqu&apos;on déclare un carré, il faut piocher une tuile de remplacement dans le mur 
          mort et retourner un nouvel indicateur de&nbsp;
          <Link key="Dora" href="/dora" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">dora</em>
          </Link>
          &nbsp;supplémentaire.
        </p>
        <p>Il est interdit de déclarer plus de 4 carrés dans un donne.</p>
      </Card>
      <Card title="Exposer les combinaisons" style="none">
        <p className="mb-2">
          Certaines règles s&apos;appliquent quand un joueur expose une combinaison après un vol de 
          tuile.
        </p>
        <p className="mb-2">
          Les tuiles sont exposées à la droite du joueur, dans l&apos;ordre où elles ont été 
          déclarées.
        </p>
        <p>
          Si la tuile volée l&apos;a été au joueur de gauche, elle est placée à l&apos;horizontale, 
          à gauche de la combinaison<span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2">
          <RotateTile tile="Sou7" marginTop="mt-[7px]"/>
          <Tile tile="Sou5"/>
          <Tile tile="Sou6"/>
        </div>
        <p>
          Si la tuile volée l&apos;a été au joueur en face, elle est placée à l&apos;horizontale, au 
          centre de la combinaison<span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2">
          <Tile tile="Sou5"/>
          <RotateTile tile="Sou7" marginTop="mt-[7px]"/>
          <Tile tile="Sou6"/>
        </div>
        <p>
          Si la tuile volée l&apos;a été au joueur de droite, elle est placée à l&apos;horizontale, 
          à droite de la combinaison<span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2">
          <Tile tile="Sou5"/>
          <Tile tile="Sou6"/>
          <RotateTile tile="Sou4" marginTop="mt-[7px]"/>
        </div>
        <p>
          Dans le cas où l&apos;on complète un brelan en carré, on vient superposer la tuile à celle 
          placée à l&apos;horizontale, par exemple
          <span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex justify-center gap-1 mb-2 items-end">
          <div className="pb-[7px]">
            <Tile tile="Ton"/>
          </div>
          <div className="flex flex-col">
            <RotateTile tile="Ton" marginTop=""/>
            <RotateTile tile="Ton" marginTop="-mt-[8px] -mb-2"/>
          </div>
          <div className="pb-[7px]">
            <Tile tile="Ton"/>
          </div>
        </div>
      </Card>
      <Card title="Tenpai" style="italic">
        <p className="mb-2">
          Être <em>tenpai</em>, c&apos;est avoir une main où il ne manque plus qu&apos;une tuile 
          pour obtenir une main valide.
        </p>
        <p className="mb-2">
          Tant qu&apos;il n&apos;est pas  <em>tenpai</em>, on dit que le joueur est <em>noten</em>.
        </p>
        <p className="mb-2">
          Si on pioche la tuile manquante, on déclare tsumo et on révèle la main.
        </p>
        <p className="mb-2">
          Il est possible de voler une tuile à n&apos;importe quel joueur pour compléter sa main en 
          déclarant <em>ron</em>. Puis on révèle la main.
        </p>
        <p className="mb-2">
          Si personne ne parvient à obtenir de main gagnante avant que la dernière tuile piochée 
          soit défaussée, la donne est considérée nulle et les joueurs qui sont <em>tenpai</em> 
          &nbsp;révèlent leur main.
        </p>
        <p>
          Si lors d&apos;une donne nulle le donneur était <em>tenpai</em> ou s&apos;il a remporté la 
          donne, il reste donneur pour le tour suivant.
        </p>
      </Card>
      <Card title="Riichi" style="italic">
        <p className="mb-2">
          Un joueur peut déclarer <em>riichi</em> au moment où il devient <em>tenpai</em> avec une 
          main cachée.
        </p>
        <p className="mb-2">
          Il défausse alors sa tuile à l&apos;horizontale afin de marquer le moment où il est entré 
          dans cet état (utile pour tracer le&nbsp;
          <Link 
            key="1 Han" 
            href="/yaku/1han" 
            className="text-green-400 hover:text-yellow-400 font-bold"
          >
            <em className="link">yaku Ippatsu</em>
          </Link>
          ).
        </p>
        <p className="mb-2">
          Il place alors un&nbsp; 
          <Link 
            key="Points" 
            href="/points" 
            className="text-green-400 hover:text-yellow-400 font-bold"
          >
            <em className="link">tenbou</em>
          </Link>
          &nbsp; de 1000 points au centre de la table, représentant sa mise sur sa victoire. 
          Si la donne est nulle, la mise pourra être réclamée par le prochain joueur remportant une 
          donne.
        </p>
        <p className="mb-2">
          Un joueur déclarant <em>riichi</em> ne peut plus changer sa main. Il peut cependant 
          déclarer <em>kan</em> pour compléter un brelan caché à condition que cela ne modifie 
          pas la structure de sa main.
        </p>
        <p className="mb-2">
          Si le joueur ayant déclaré <em>riichi</em> remporte la donne, il peut alors 
          bénéficier des&nbsp; 
          <Link key="Dora" href="/dora" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">ura dora</em>
          </Link>
          .
        </p>
        <p>
          Il est interdit de déclarer <em>riichi</em> s&apos;il reste moins de quatre tuiles dans le 
          mur.
        </p>
      </Card>
      <Card title="Furiten" style="italic">
        <p className="mb-2">
          Lorsqu&apos;un joueur est <em>tenpai</em> mais a déjà dans sa défausse une tuile qui lui 
          aurait permis de compléter sa main, il est <em>furiten</em>.
        </p>
        <p className="mb-2">
          Dans cet état, le joueur ne peut plus faire d&apos;appel <em>ron</em> tant qu&apos;il 
          n&apos;a pas changé sa main.
        </p>
        <p>
          Si un joueur <em>tenpai</em> laisse passer sa chance de faire un appel <em>ron</em> sur 
          une défausse, il est <em>furiten</em> temporaire. Il ne pourra pas déclarer 
          d&apos;appel <em>ron</em> avant sa prochaine pioche.
        </p>
      </Card>
      <Card title="Nouvelle donne" style="none">
        <p className="mb-2">
          Si le donneur a remporté la donne ou était <em>tenpai</em> sur une donne nulle, il reste 
          donneur et ajoute un compteur au&nbsp;
          <Link 
            key="Points" 
            href="/points" 
            className="text-green-400 hover:text-yellow-400 font-bold"
          >
            <em className="link">honba</em>
          </Link>
          .
        </p>
        <p className="mb-2">
          Sinon, le nouveau donneur est celui assis à la droite du donneur précédent.
        </p>
        <p>
          Un fois que tous les joueurs ont été donneur une fois, le vent dominant devient Sud.
        </p>
      </Card>
      <Card title="Fin de partie" style="none">
        <p>
          La partie se termine lorsqu&apos;un joueur n&apos;a plus de points ou lorsque tous les
          joueurs ont été donneurs alors que le vent dominant était Sud.
        </p>
      </Card>
    </main>
  );
}