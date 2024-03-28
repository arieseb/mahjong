'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
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

const ToggleMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-[#003617] gap-2 absolute z-[500] py-4 px-8 rounded-xl">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              {
                'text-green-400 hover:text-yellow-400': pathname !== link.href,
              },
              {
                'text-yellow-600 hover:text-yellow-400': pathname === link.href,
              },
            )}
          >
            <p><FontAwesomeIcon icon={faCaretRight} className='me-2'/>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ToggleMenu;