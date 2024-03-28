import Link from "next/link";
import Card from "../ui/Card";

export default function Page() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5">
      <Card title="Les Vents" style="none">
        <p className="mb-2">
          Un Vent est attribué à chaque joueur. Le joueur qui commence est Est. Sud est à droite de 
          Est, Ouest est en face et Nord est à gauche.        
        </p>
        <p>
          Au début de la partie, le vent dominant est toujours Est. Le vent dominant change lorsque 
          chaque joueur a joué une main en tant que Est.
        </p>
      </Card>
      <Card title="Constuction du mur" style="none">
        <p className="mb-2">
          Le mur comporte 34 tuiles réparties en 17 piles de 2 tuiles devant chaque joueur. Pour 
          accélerer la construction, chaque joueur bâtit une partie du mur face à lui. Les murs 
          sont ensuite réunis pour former un carré.
        </p>
        <p>
          Par convention, chaque joueur incline légèrement son mur vers la droite pour faciliter la 
          pioche des autres joueurs.
        </p>
      </Card>
      <Card title="La Brèche et le Mur Mort" style="none">
        <p className="mb-2">
          Le joueur Est lance deux dés et compte ce nombre de joueurs dans le sens inverse des 
          aiguilles d&apos;une montre en commençant par lui-même.
        </p>
        <p>
          Le joueur ainsi désigné ouvre le mur face à lui en comptant ce même nombre les tuiles 
          depuis la droite. Après celle-ci, le mur est ouvert, et les 7 piles de tuiles à droite de 
          l&apos;ouverture forment le mur mort.
        </p>
      </Card>
      <Card title="Distribution des tuiles" style="none">
        <p className="mb-2">
          A partir de la gauche de la brèche, Est prend les 4 premières tuiles (un carré de 2x2 tuiles), 
          Sud en prend 4 de la même manière, puis Ouest, puis Nord jusqu&apos;à ce que tous les 
          joueurs aient 12 tuiles.
        </p>
        <p>
          Enfin, Est prend ses 2 dernières tuiles (La première et la troisième de la rangée supérieure) 
          tandis que les autres ne prennent à leur tour qu&apos;une seule tuile.
        </p>
      </Card>
      <Card title="L&apos;indicateur de Dora" style="none">
        <p>
          Retournez la troisième tuile en partant de la gauche dans le mur mort pour révéler 
          l&apos;indicateur de dora (on révèle un indicateur après chaque pioche d&apos;une tuile de 
          remplacement).
        </p>
        <p>
          Cette tuile indique quelle est la dora, qui sera la suivante de la famille.
        </p>
        <p>Plus d&apos;informations sur&nbsp; 
          <Link key="Dora" href="/dora" className="text-green-400 hover:text-yellow-400 font-bold">
            la page dédiée aux dora
          </Link>.
        </p>
      </Card>
    </main>
  );
}