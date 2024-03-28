'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";

const BackTile = () => {
  const pathname = usePathname();

  return (
    <figure className="hidden min-[278px]:block">
      {pathname === '/' ?
        <Image
          src="Back.svg"
          alt="Dos de la tuile"
          width="40"
          height="50"
        /> :
        <Image
          src="../Back.svg"
          alt="Dos de la tuile"
          width="40"
          height="50"
        />
      }
    </figure>
  );
}

export default BackTile;