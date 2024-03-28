import FourteenTiles from "@/app/ui/FourteenTiles";
import Card from "@/app/ui/Card";
import TableHead from "../ui/TableHead";
import TableRow from "../ui/TableRow";

export default function Page() {
  return (
    <main  className="max-[400px]:w-10/12 w-auto flex-1">
      <h2 className="hidden print:block text-center text-xl font-bold pt-4">
        <em>Mangan</em>
      </h2>
      <Card title="aucun" style="none">
        <div className="border max-[400px]:overflow-x-auto">
          <table className="table-auto border-collapse divide-y max-[345px]:text-sm">
            <TableHead />
            <tbody className="divide-y print:divide-black">
              <TableRow
                background="none"
                frenchName="Main Pure"
                style="none"
                japaneseName="Chinitsu"
                description="
                  Main composée uniquement de tuiles d&apos;une seule famille, sans honneurs
                "
                example="yes"
                closedHand="+1 Han"
              >
                <FourteenTiles
                  tile1="../Sou1"
                  tile2="../Sou2"
                  tile3="../Sou3"
                  tile4="../Sou4"
                  tile5="../Sou5"
                  tile6="../Sou6"
                  tile7="../Sou8"
                  tile8="../Sou8"
                  tile9="../Sou8"
                  tile10="../Sou9"
                  tile11="../Sou9"
                  tile12="../Sou9"
                  tile13="../Sou3"
                  tile14="../Sou3"
                />
              </TableRow>
              <TableRow
                background="dark"
                frenchName="Nagashi Mangan"
                style="italic"
                japaneseName="Nagashi Mangan"
                description="
                  À l&apos;issue d&apos;une donne nulle, défausse uniquement composée de terminales 
                  <br/>et d&apos;honneurs non réclamés
                "
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