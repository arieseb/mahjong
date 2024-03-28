import FourteenTiles from "@/app/ui/FourteenTiles";
import Card from "@/app/ui/Card";
import TableHead from "../ui/TableHead";
import TableRow from "../ui/TableRow";
import Tile from "@/app/ui/Tile";

export default function Page() {
  return (
    <main className="max-[400px]:w-10/12 w-auto">
      <h2 className="hidden print:block text-center text-xl font-bold pt-4">
        <em>Yakuman</em>
      </h2>
      <Card title="aucun" style="none">
        <div className="border max-[400px]:overflow-x-auto">
          <table className="table-auto border-collapse divide-y max-[345px]:text-sm">
            <TableHead />
            <tbody className="divide-y print:divide-black">
              <TableRow
                  background="none"
                  frenchName="Bénédiction du Ciel"
                  style="none"
                  japaneseName="Tenhou"
                  description="Victoire du donneur sur sa main de départ"
                  example="none"
                  closedHand="Oui"
                >
                  <></>
                </TableRow>
                <TableRow
                  background="dark"
                  frenchName="Bénédiction de la Terre"
                  style="none"
                  japaneseName="Chihou"
                  description="Victoire sur pioche lors du premier tour de jeu ininterrompu"
                  example="none"
                  closedHand="Oui"
                >
                  <></>
                </TableRow>
                <TableRow
                  background="none"
                  frenchName="Bénédiction de l&apos;Homme"
                  style="none"
                  japaneseName="Tenhou"
                  description="Victoire sur vol de tuile lors du premier tour de jeu ininterrompu"
                  example="none"
                  closedHand="Oui"
                >
                  <></>
                </TableRow>
                <TableRow
                background="dark"
                frenchName="Quatre Brelans Cachés"
                style="none"
                japaneseName="Suu Ankou"
                description="Main composée de quatre brelans ou carrés non exposés"
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man2"
                  tile3="../Man2"
                  tile4="../Man8"
                  tile5="../Man8"
                  tile6="../Man8"
                  tile7="../Sou6"
                  tile8="../Sou6"
                  tile9="../Sou6"
                  tile10="../Sou7"
                  tile11="../Sou7"
                  tile12="../Sou7"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Quatre Carrés"
                style="none"
                japaneseName="Suu Kantsu"
                description="Main composée de quatre carrés"
                example="yes"
                closedHand="Non"
              >
                <div  className="hidden lg:flex lg:gap-1">
                  <FourteenTiles
                    tile1="../Man2"
                    tile2="../Man2"
                    tile3="../Man2"
                    tile4="../Man2"
                    tile5="../Sou6"
                    tile6="../Sou6"
                    tile7="../Sou6"
                    tile8="../Sou6"
                    tile9="../Sou7"
                    tile10="../Sou7"
                    tile11="../Sou7"
                    tile12="../Sou7"
                    tile13="../Shaa"
                    tile14="../Shaa"
                  />
                  <Tile tile="../Shaa"/>
                  <Tile tile="../Shaa"/>
                </div>
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Main Verte"
                style="none"
                japaneseName="Ryuu Isou"
                description="Main composée uniquement de tuiles intégralement vertes"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Sou2"
                  tile2="../Sou3"
                  tile3="../Sou4"
                  tile4="../Sou4"
                  tile5="../Sou4"
                  tile6="../Sou4"
                  tile7="../Sou6"
                  tile8="../Sou6"
                  tile9="../Sou6"
                  tile10="../Sou8"
                  tile11="../Sou8"
                  tile12="../Sou8"
                  tile13="../Hatsu"
                  tile14="../Hatsu"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Tout Terminales"
                style="none"
                japaneseName="Chinroutou"
                description="Main composée uniquement de tuiles terminales"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Man1"
                  tile2="../Man1"
                  tile3="../Man1"
                  tile4="../Pin9"
                  tile5="../Pin9"
                  tile6="../Pin9"
                  tile8="../Sou1"
                  tile9="../Sou1"
                  tile7="../Sou1"
                  tile10="../Sou9"
                  tile11="../Sou9"
                  tile12="../Sou9"
                  tile13="../Man9"
                  tile14="../Man9"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Tout Honneurs"
                style="none"
                japaneseName="Tsuu Isou"
                description="Main composée uniquement d&apos;honneurs"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Ton"
                  tile2="../Ton"
                  tile3="../Ton"
                  tile4="../Nan"
                  tile5="../Nan"
                  tile6="../Nan"
                  tile8="../Haku"
                  tile9="../Haku"
                  tile7="../Haku"
                  tile10="../Chun"
                  tile11="../Chun"
                  tile12="../Chun"
                  tile13="../Hatsu"
                  tile14="../Hatsu"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Trois Grands Dragons"
                style="none"
                japaneseName="Daisangen"
                description="Main composée d&apos;un brelan de chaque dragon"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Sou1"
                  tile2="../Sou1"
                  tile3="../Sou1"
                  tile4="../Hatsu"
                  tile5="../Hatsu"
                  tile6="../Hatsu"
                  tile8="../Haku"
                  tile9="../Haku"
                  tile7="../Haku"
                  tile10="../Chun"
                  tile11="../Chun"
                  tile12="../Chun"
                  tile13="../Man6"
                  tile14="../Man6"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Quatre Petits Vents"
                style="none"
                japaneseName="Shousuushi"
                description="
                  Main composée d&apos;un brelan de trois des vents et d&apos;une paire du quatrième
                "
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Ton"
                  tile2="../Ton"
                  tile3="../Ton"
                  tile4="../Nan"
                  tile5="../Nan"
                  tile6="../Nan"
                  tile8="../Pei"
                  tile9="../Pei"
                  tile7="../Pei"
                  tile10="../Pin3"
                  tile11="../Pin3"
                  tile12="../Pin3"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
              <TableRow
                background="none"
                frenchName="Quatre Grands Vents"
                style="none"
                japaneseName="Daisuushi"
                description="Main composée d&apos;un brelan de chaque vent"
                example="yes"
                closedHand="Non"
              >
                <FourteenTiles
                  tile1="../Ton"
                  tile2="../Ton"
                  tile3="../Ton"
                  tile4="../Nan"
                  tile5="../Nan"
                  tile6="../Nan"
                  tile8="../Pei"
                  tile9="../Pei"
                  tile7="../Pei"
                  tile10="../Shaa"
                  tile11="../Shaa"
                  tile12="../Shaa"
                  tile13="../Sou7"
                  tile14="../Sou7"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Treize Orphelins"
                style="none"
                japaneseName="Kokushi Musou"
                description="
                  Main composée d&apos;un exemplaire de chaque honneur et terminales plus un en 
                  double
                "
                example="yes"
                closedHand="Oui"
              >
                <div className="flex flex-col">
                  <FourteenTiles
                    tile1="../Man1"
                    tile2="../Man9"
                    tile3="../Pin1"
                    tile4="../Pin9"
                    tile5="../Sou1"
                    tile6="../Sou9"
                    tile8="../Ton"
                    tile9="../Nan"
                    tile7="../Pei"
                    tile10="../Shaa"
                    tile11="../Chun"
                    tile12="../Haku"
                    tile13="../Hatsu"
                    tile14="../Sou1"
                  />
                  <p className="pt-1 italic">(Double yakuman si attente multiple)</p>
                </div>
              </TableRow>
              <TableRow
                background="none"
                frenchName="Neuf Portes"
                style="none"
                japaneseName="Chuuren Pouto"
                description="
                  Main composée de 1112345678999 d&apos;une seule famile plus un en double
                "
                example="yes"
                closedHand="Oui"
              >
                <div className="flex flex-col">
                  <FourteenTiles
                    tile1="../Man1"
                    tile2="../Man1"
                    tile3="../Man1"
                    tile4="../Man2"
                    tile5="../Man3"
                    tile6="../Man4"
                    tile8="../Man5"
                    tile9="../Man6"
                    tile7="../Man7"
                    tile10="../Man8"
                    tile11="../Man9"
                    tile12="../Man9"
                    tile13="../Man9"
                    tile14="../Man4"
                  />
                  <p className="pt-1 italic">(Double yakuman si attente multiple)</p>
                </div>
              </TableRow>
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}