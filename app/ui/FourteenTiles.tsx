import Tile from "@/app/ui/Tile";

const FourteenTiles = (props: any) => {
  return (
  <div className="hidden lg:flex lg:gap-1">
    <Tile tile={props.tile1}/>
    <Tile tile={props.tile2}/>
    <Tile tile={props.tile3}/>
    <Tile tile={props.tile4}/>
    <Tile tile={props.tile5}/>
    <Tile tile={props.tile6}/>
    <Tile tile={props.tile7}/>
    <Tile tile={props.tile8}/>
    <Tile tile={props.tile9}/>
    <Tile tile={props.tile10}/>
    <Tile tile={props.tile11}/>
    <Tile tile={props.tile12}/>
    <Tile tile={props.tile13}/>
    <Tile tile={props.tile14}/>
  </div>
  );
}

export default FourteenTiles;