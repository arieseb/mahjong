import FourteenTiles from "@/app/ui/FourteenTiles";
import Card from "@/app/ui/Card";
import TableHead from "../ui/TableHead";
import TableRow from "../ui/TableRow";

export default function Page() {
  return (
    <main className="max-[400px]:w-10/12 w-auto flex-1">
      <h2 className="hidden print:block text-center text-xl font-bold pt-4">
        3 <em>Han</em>
      </h2>
      <Card title="aucun" style="none">
        <div className="border max-[400px]:overflow-x-auto">
          <table 
            className="table-auto border-collapse divide-y max-[345px]:text-sm print:divide-black"
          >
            <TableHead />
            <tbody className="divide-y">
            <TableRow
                background="none"
                frenchName="Deux Fois<br/>Double Suite Pure"
                style="none"
                japaneseName="Ryanpeikou"
                description="Main fermée composée de deux fois deux suites identiques"
                example="yes"
                closedHand="Oui"
              >
                <FourteenTiles
                  tile1="../Man2"
                  tile2="../Man3"
                  tile3="../Man4"
                  tile4="../Man2"
                  tile5="../Man3"
                  tile6="../Man4"
                  tile7="../Sou6"
                  tile8="../Sou7"
                  tile9="../Sou8"
                  tile10="../Sou6"
                  tile11="../Sou7"
                  tile12="../Sou8"
                  tile13="../Shaa"
                  tile14="../Shaa"
                />
              </TableRow>
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}