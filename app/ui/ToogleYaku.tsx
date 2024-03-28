'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const links = [
  {name: '1 Han', href: '/yaku/1han'},
  {name: '2 Han', href: '/yaku/2han'},
  {name: '3 Han', href: '/yaku/3han'},
  {name: 'Mangan', href: '/yaku/mangan'},
  {name: 'Yakuman', href: '/yaku/yakuman'},
];

const ToggleYaku = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-[#003617] gap-2 absolute z-[500] py-4 px-8 rounded-xl ms-44 mt-24">
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

export default ToggleYaku;