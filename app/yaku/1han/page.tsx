import FourteenTiles from "@/app/ui/FourteenTiles";
import Card from "@/app/ui/Card";
import TableHead from "../ui/TableHead";
import TableRow from "../ui/TableRow";

export default function Page() {
  return (
    <main className="max-[400px]:w-10/12 w-auto">
      <h2 className="hidden print:block text-center text-xl font-bold pt-4">
        1 <em>Han</em>
      </h2>
      <Card title="aucun" style="none">
        <div className="border max-[400px]:overflow-x-auto">
          <table 
            className="table-auto border-collapse divide-y max-[345px]:text-sm print:divide-black"
          >
            <TableHead />
            <tbody className="divide-y print:divide-black">
              <TableRow
                background="none"
                frenchName="Riichi"
                style="italic"
                japaneseName="Riichi"
                description="<em>Tenpai</em> annoncé sur main cachée avec une mise de 1000 points"
                example="none"
                closedHand="Oui"
              >
                <></>
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Ippatsu"
                style="italic"
                japaneseName="Ippatsu"
                description="
                  +1<em>Han</em> si la victoire survient après un tour initerrompu après annoncé 
                  <em>Riichi</em>
                "
                example="none"
                closedHand="Oui"
              >
                <></>
              </TableRow>
              <TableRow
                background="none"
                frenchName="Double Riichi"
                style="italic"
                japaneseName="Daburu Riichi"
                description="
                  +1<em>Han</em> si l&apos;annonce Riichi survient durant le premier tour de jeu 
                  ininterrompu
                "
                example="none"
                closedHand="Oui"
              >
                <></>
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Tout Caché Tiré"
                style="none"
                japaneseName="Menzen Tsumo"
                description="Victoire sur pioche sur une main cachée"
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Pin6"
                  tile5="../Pin7"
                  tile6="../Pin8"
                  tile7="../Sou3"
                  tile8="../Sou4"
                  tile9="../Sou5"
                  tile10="../Sou7"
                  tile11="../Sou7"
                  tile12="../Sou7"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Pinfu"
                style="italic"
                japaneseName="Pinfu"
                description="
                  Main composée de 4 suites et d&apos;une paire sans valeur<br/>La tuile gagnante 
                  doit terminer une suite en attente sur les deux côtés
                "
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man2"
                  tile3="../Man3"
                  tile4="../Pin3"
                  tile5="../Pin4"
                  tile6="../Pin5"
                  tile7="../Sou2"
                  tile8="../Sou3"
                  tile9="../Sou4"
                  tile10="../Sou6"
                  tile11="../Sou7"
                  tile12="../Sou8"
                  tile13="../Sou9"
                  tile14="../Sou9"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Double Suite Pure"
                style="none"
                japaneseName="Iipeiko"
                description="Main composée de deux suites identiques (de la même famille)"
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Pin6"
                  tile5="../Pin7"
                  tile6="../Pin8"
                  tile7="../Sou3"
                  tile8="../Sou4"
                  tile9="../Sou5"
                  tile10="../Sou3"
                  tile11="../Sou4"
                  tile12="../Sou5"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Tout Ordinaire"
                style="none"
                japaneseName="Tanyao"
                description="Main composée d&apos;aucun honneur ni terminales"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Pin6"
                  tile5="../Pin7"
                  tile6="../Pin8"
                  tile7="../Sou3"
                  tile8="../Sou4"
                  tile9="../Sou5"
                  tile10="../Sou3"
                  tile11="../Sou4"
                  tile12="../Sou5"
                  tile13="../Sou7"
                  tile14="../Sou7"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Brelan d&apos;Honneurs"
                style="none"
                japaneseName="Yakuhai"
                description="
                  Main contenant un brelan ou un carré de dragons, du vent dominant ou du vent du 
                  joueur
                "
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Pin5"
                  tile5="../Pin6"
                  tile6="../Pin7"
                  tile7="../Sou1"
                  tile8="../Sou2"
                  tile9="../Sou3"
                  tile10="../Hatsu"
                  tile11="../Hatsu"
                  tile12="../Hatsu"
                  tile13="../Man7"
                  tile14="../Man7"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Triple Suite"
                style="none"
                japaneseName="San Shoku Doujun"
                description="Main composée de trois suites identiques de chaque famille"
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Pin2"
                  tile5="../Pin3"
                  tile6="../Pin4"
                  tile7="../Sou2"
                  tile8="../Sou3"
                  tile9="../Sou4"
                  tile10="../Sou7"
                  tile11="../Sou8"
                  tile12="../Sou9"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Grande Suite Pure"
                style="none"
                japaneseName="Ittsuu"
                description="Main contenant 123456789 d&apos;une seule famille"
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Pin1"
                  tile2="../Pin2"
                  tile3="../Pin3"
                  tile4="../Pin4"
                  tile5="../Pin5"
                  tile6="../Pin6"
                  tile7="../Pin7"
                  tile8="../Pin8"
                  tile9="../Pin9"
                  tile10="../Sou7"
                  tile11="../Sou7"
                  tile12="../Sou7"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Extrémités et<br/>Honneurs Partout"
                style="none"
                japaneseName="Chanta"
                description="
                  Toutes les combinaisons de la main contiennent des tuiles terminales ou des 
                  honneurs <br/>avec au moins une suite
                "
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man2"
                  tile3="../Man3"
                  tile4="../Pin1"
                  tile5="../Pin1"
                  tile6="../Pin1"
                  tile7="../Sou9"
                  tile8="../Sou9"
                  tile9="../Sou9"
                  tile10="../Chun"
                  tile11="../Chun"
                  tile12="../Chun"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Vol d&apos;un Carré"
                style="none"
                japaneseName="Chankan"
                description="
                  Victoire en volant la tuile qu&apos;un joueur ajoute à un brelan exposé pour
                  former un carré
                "
                example="none"
                closedHand="Non"
              >
                <></>
              </TableRow>
              <TableRow
                background="none"
                frenchName="Finir sur un Carré"
                style="none"
                japaneseName="Rinchan Kaihou"
                description="Victoire sur la tuile de remplacement après avoir déclaré un carré"
                example="none"
                closedHand="Non"
              >
                <></>
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Fond de la Mer"
                style="none"
                japaneseName="Haitei"
                description="Victoire en piochant la dernière tuile du mur"
                example="none"
                closedHand="Non"
              >
                <></>
              </TableRow>
              <TableRow
                background="none"
                frenchName="Fond de la Mer"
                style="none"
                japaneseName="Houtei"
                description="Victoire en volant la dernière tuile du mur"
                example="none"
                closedHand="Non"
              >
                <></>
              </TableRow>
            </tbody>
          </table>
        </div>
      </Card> 
    </main>
  );
}