'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";

const Tile = (props: any) => {
  const pathname = usePathname();

  return (
    <figure className="hidden min-[278px]:block">
      {pathname === '/' ?
        <Image
          src="Front.svg"
          alt="Fond de la tuile"
          width="40"
          height="50"
        /> :
        <Image
          src="../Front.svg"
          alt="Fond de la tuile"
          width="40"
          height="50"
        />
      }
      <Image
        src={props.tile + ".svg"}
        alt={"Tuile " + props.tile}
        width="36"
        height="48"
        className="-mt-[50px] ms-[2px]"
      />
    </figure>
  );
}

export default Tile;