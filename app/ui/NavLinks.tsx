'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
  {name: 'Accueil', href: '/'},
  {name: 'Préparation', href: '/preparation'},
  {name: 'Mécanismes', href: '/mecanismes'},
  {name: 'Yaku', href: '/yaku'},
  {name: 'Dora', href: '/dora'},
  {name: 'Points', href: '/points'},
  {name: 'Pénalités', href: '/penalites'},
  {name: 'Liens', href: '/liens'},
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 min-[1755px]:gap-6">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'font-bold',
              {
                'text-green-400 hover:text-yellow-400': pathname !== link.href,
              },
              {
                'text-yellow-600 hover:text-yellow-400': pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;