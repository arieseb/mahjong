import Link from "next/link";
import Tile from "@/app/ui/Tile";
import BackTile from "@/app/ui/BackTile";
import Card from "../ui/Card";

export default function Page() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5">
      <Card title="aucun" style="none">
        <p className="mb-2">
          La <em>dora</em> est une tuile qui rapporte des points bonus lorsqu&apos;elle se trouve 
          dans la main.
        </p>
        <p className="mb-2">
          En effet, chaque <em>dora</em> vaudra 1 <em>han</em> supplémentaire lors du décompte des 
          points.
        </p>
        <p className="mb-2"><strong>Mais attention : il ne s&apos;agit pas d&apos;un&nbsp;
          <Link key="Yaku" href="/yaku" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">yaku</em>
          </Link> !</strong>
        </p>
        <p className="mb-2">
          Lors de la&nbsp;
          <Link 
            key="Préparation" 
            href="/preparation" 
            className="text-green-400 hover:text-yellow-400 font-bold"
          >
            <em className="link">préparation</em>
          </Link>
          , la troisème tuile en partant de la gauche du mur mort est retournée : c&apos;est 
          l&apos;indicateur de <em>dora</em>.
        </p>
        <p className="mb-2">
          Cependant, c&apos;est la tuile suivante de la famille qui sera la <em>dora</em>, pas 
          celle montrée par l&apos;indicateur.
        </p>
        <div className="hidden min-[450px]:flex gap-1 mb-2 justify-center">
          <BackTile />
          <BackTile />
          <Tile tile="Man6"/>
          <BackTile />
          <BackTile />
          <BackTile />
          <BackTile />
        </div>
        <p className="mb-2 hidden min-[450px]:block">
          Dans cet exemple, la <em>dora</em> sera donc le 7 de caractères.
        </p>
        <p className="mb-2">
          Si l&apos;indicateur est un vent, l&apos;ordre est Est, Sud, Ouest puis Nord
          <span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex gap-1 mb-2 justify-center">
          <Tile tile="Ton"/>
          <Tile tile="Nan"/>
          <Tile tile="Shaa"/>
          <Tile tile="Pei"/>
        </div>
        <p className="mb-2">
          Si l&apos;indicateur est un dragon, l&apos;ordre est Rouge, Blanc puis Vert
          <span className="hidden min-[278px]:inline"> :</span>
        </p>
        <div className="flex gap-1 mb-2 justify-center">
          <Tile tile="Chun"/>
          <Tile tile="Haku"/>
          <Tile tile="Hatsu"/>
        </div>
        <p>
          Si l&apos;indicateur est la dernière tuile d&apos;une famille, la <em>dora</em> sera alors 
          la première de celle-ci.
        </p>
      </Card>
      <Card title="Kan Dora" style="italic">
        <p>
          À chaque fois qu&apos;un carré est déclaré, on retourne un indicateur supplémentaire avant 
          de piocher la tuile de remplacement.
        </p>
      </Card>
      <Card title="Ura Dora" style="italic">
        <p>
          Ces <em>dora</em> spéciales sont déterminées par les tuiles situées sous les indicateurs. 
          Elles sont révelées seulement si le joueur qui remporte la main a déclaré <em>riichi</em> 
          &nbsp;au cours de la donne.
        </p>
      </Card>
      <Card title="Aka Dora" style="italic">
        <p className="mb-2">
          Les <em>aka dora</em> sont les 5 rouges de chaque famille et les avoir dans la main 
          rapporte également 1 <em>han</em> pour chacun d&apos;entre eux.
        </p>
        <div className="flex gap-1 justify-center">
          <Tile tile="Pin5-Dora"/>
          <Tile tile="Sou5-Dora"/>
          <Tile tile="Man5-Dora"/>
        </div>
      </Card>
    </main>
  );
}