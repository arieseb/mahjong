import FourteenTiles from "@/app/ui/FourteenTiles";
import Tile from "@/app/ui/Tile";
import Card from "@/app/ui/Card";
import TableHead from "../ui/TableHead";
import TableRow from "../ui/TableRow";

export default function Page() {
  return (
    <main className="max-[400px]:w-10/12 w-auto">
      <h2 className="hidden print:block text-center text-xl font-bold pt-4 pb-[20px]">
        2 <em>Han</em>
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
                frenchName="Sept Paires"
                style="none"
                japaneseName="Chiitoitsu"
                description="Main composée de sept paires distinctes"
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man2"
                  tile3="../Pin4"
                  tile4="../Pin4"
                  tile5="../Pin8"
                  tile6="../Pin8"
                  tile7="../Sou3"
                  tile8="../Sou3"
                  tile9="../Sou5"
                  tile10="../Sou5"
                  tile11="../Sou9"
                  tile12="../Sou9"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Triple Brelan"
                style="none"
                japaneseName="San Shoku Doukou"
                description="Main composée de trois brelans identiques de chaque famille"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man3"
                  tile2="../Man3"
                  tile3="../Man3"
                  tile4="../Pin3"
                  tile5="../Pin3"
                  tile6="../Pin3"
                  tile7="../Sou3"
                  tile8="../Sou3"
                  tile9="../Sou3"
                  tile10="../Sou7"
                  tile11="../Sou8"
                  tile12="../Sou9"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Tout Brelan"
                style="none"
                japaneseName="Toitoi Hou"
                description="Main composée de 4 brelans ou carrés et d&apos;une paire"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man5"
                  tile2="../Man5"
                  tile3="../Man5"
                  tile4="../Pin4"
                  tile5="../Pin4"
                  tile6="../Pin4"
                  tile7="../Sou3"
                  tile8="../Sou3"
                  tile9="../Sou3"
                  tile10="../Sou9"
                  tile11="../Sou9"
                  tile12="../Sou9"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Trois Brelans Cachés"
                style="none"
                japaneseName="San Ankou"
                description="Main composée de 3 brelans non exposés"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man5"
                  tile2="../Man5"
                  tile3="../Man5"
                  tile4="../Pin4"
                  tile5="../Pin4"
                  tile6="../Pin4"
                  tile7="../Sou3"
                  tile8="../Sou3"
                  tile9="../Sou3"
                  tile10="../Sou7"
                  tile11="../Sou8"
                  tile12="../Sou9"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Trois Carrés"
                style="none"
                japaneseName="San Kantsu"
                description="Main composée de 3 carrés"
                example="yes"
                closedHand="Non"
              >
                <div className="hidden lg:flex lg:gap-1">
                  <FourteenTiles
                    tile1="../Man5"
                    tile2="../Man5"
                    tile3="../Man5"
                    tile4="../Man5"
                    tile5="../Pin4"
                    tile6="../Pin4"
                    tile7="../Pin4"
                    tile8="../Pin4"
                    tile9="../Sou2"
                    tile10="../Sou2"
                    tile11="../Sou2"
                    tile12="../Sou2"
                    tile13="../Sou5"
                    tile14="../Sou6"
                  />
                  <Tile tile="../Sou7" />
                  <Tile tile="../Shaa" />
                  <Tile tile="../Shaa" />
                </div>
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Tout Extrémités<br/>et Honneurs"
                style="none"
                japaneseName="Honroutou"
                description="
                  Main composée de combinaisons ne contenant que des extrémités et des honneurs
                "
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man1"
                  tile3="../Man1"
                  tile4="../Pin1"
                  tile5="../Pin1"
                  tile6="../Pin1"
                  tile7="../Chun"
                  tile8="../Chun"
                  tile9="../Chun"
                  tile10="../Ton"
                  tile11="../Ton"
                  tile12="../Ton"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Trois Petits Dragons"
                style="none"
                japaneseName="Shousangen"
                description="
                  Main composée de deux brelans ou carrés de dragons et d&apos;une paire du 
                  troisième
                "
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man2"
                  tile3="../Man3"
                  tile4="../Pin7"
                  tile5="../Pin8"
                  tile6="../Pin9"
                  tile7="../Chun"
                  tile8="../Chun"
                  tile9="../Chun"
                  tile10="../Hatsu"
                  tile11="../Hatsu"
                  tile12="../Hatsu"
                  tile13="../Haku"
                  tile14="../Haku"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Semi Pure"
                style="none"
                japaneseName="Honitsu"
                description="Main composée d&apos;une seule famille et d&apos;honneurs"
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man2"
                  tile3="../Man3"
                  tile4="../Man4"
                  tile5="../Man4"
                  tile6="../Man4"
                  tile7="../Man7"
                  tile8="../Man8"
                  tile9="../Man9"
                  tile10="../Hatsu"
                  tile11="../Hatsu"
                  tile12="../Hatsu"
                  tile13="../Haku"
                  tile14="../Haku"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Terminales Partout"
                style="none"
                japaneseName="Junchan"
                description="
                  Chaque combinaison contient une terminale et au moins une d&apos;entre  elles est 
                  une suite
                "
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man2"
                  tile3="../Man3"
                  tile4="../Man9"
                  tile5="../Man9"
                  tile6="../Man9"
                  tile7="../Pin7"
                  tile8="../Pin8"
                  tile9="../Pin9"
                  tile10="../Sou1"
                  tile11="../Sou1"
                  tile12="../Sou1"
                  tile13="../Sou9"
                  tile14="../Sou9"
                />
              </TableRow>
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}