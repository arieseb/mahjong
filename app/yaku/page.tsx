import Card from "../ui/Card";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-10/12 lg:w-4/6 xl:w-2/5 flex-1">
      <Card title="aucun" style="none">
        <p className="mb-2">
          Les <em>yaku</em> sont des combinaisons de tuiles permettant de valider une main.
        </p>
        <p className="mb-2">
          Une main sans <em>yaku</em> ne peut être déclarée gagnante, elle est même soumise à des&nbsp;
          <Link 
            key="Pénalités" 
            href="/pénalités" 
            className="text-green-400 hover:text-yellow-400 font-bold"
          >
            pénalités
          </Link>.
        </p>
        <p className="mb-2">
          Le menu ci-dessus permet de passer en revue les différents <em>yaku</em> possibles, 
          classés par le nombre de <em>han</em> qu&apos;ils rapportent.
        </p>
        <p className="mb-2">
          Certains <em>yaku</em> peuvent être valides uniquement lorsque la main est fermée, valoir 
          plus de points lorsqu&apos;elle l&apos;est ou peuvent être validés indifféremment que la 
          main soit fermée ou non.
        </p>
        <p className="mb-2">Les <em>yaku</em> sont combinables pour marquer davantage de points.</p>
        <br/>
        <p className="mb-8">
          <strong>Rappel important</strong> : <span className="underline">les&nbsp;
          <Link key="Dora" href="/dora" className="text-green-400 hover:text-yellow-400 font-bold">
            <em className="link">dora</em>
          </Link>
          &nbsp;ne sont pas des <em>yaku</em></span>, même s&apos;ils rapportent également des&nbsp;
          <em>han</em>.
        </p>
        <p className="text-sm italic">
          Si vous souhaitez imprimer les tableaux, ils ont été optimisés pour une impression au 
          format paysage sur une feuille A4. Ils restent imprimables au format portrait mais les 
          tuiles ne seront pas affichées.
        </p>
      </Card>
    </main>
  );
}