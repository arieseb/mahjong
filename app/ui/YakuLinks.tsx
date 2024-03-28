'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
  {name: '1 Han', href: '/yaku/1han'},
  {name: '2 Han', href: '/yaku/2han'},
  {name: '3 Han', href: '/yaku/3han'},
  {name: 'Mangan', href: '/yaku/mangan'},
  {name: 'Yakuman', href: '/yaku/yakuman'},
];

const YakuLinks = () => {
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

export default YakuLinks;