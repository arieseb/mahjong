import Tile from "@/app/ui/Tile";

const NineTiles = (props: any) => {
  return (
  <div className="hidden min-[535px]:flex gap-1">
    <Tile tile={props.tile1}/>
    <Tile tile={props.tile2}/>
    <Tile tile={props.tile3}/>
    <Tile tile={props.tile4}/>
    <Tile tile={props.tile5}/>
    <Tile tile={props.tile6}/>
    <Tile tile={props.tile7}/>
    <Tile tile={props.tile8}/>
    <Tile tile={props.tile9}/>
  </div>
  );
}

export default NineTiles;