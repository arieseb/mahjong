'use client';

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLinks from "@/app/ui/NavLinks";
import Yakubar from "./Yakubar";
import ToggleMenu from "./ToggleMenu";
import ToggleYaku from "./ToogleYaku";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <nav className="hidden md:block print:hidden">
        <div className="flex flex-col justify-center gap-2 text-lg">
          <NavLinks />
          {
            pathname === "/yaku" || 
            pathname === "/yaku/1han" || 
            pathname === "/yaku/2han" || 
            pathname === "/yaku/3han" || 
            pathname === "/yaku/mangan" || 
            pathname === "/yaku/yakuman" ?
            <Yakubar /> :
            <></>
          }
        </div>
      </nav>
      <div className="flex md:hidden w-full justify-evenly print:hidden">
        <nav className="w-10/12">
          <button onClick={toggleDropdown} className="flex items-center hover:text-yellow-400">
              <FontAwesomeIcon icon={faBars} className='m-4 text-xl'/><p>Menu</p>
          </button>
          <div ref={dropdownRef} className={`${isDropdownOpen ? 'block' : 'hidden'}`}>
            <ToggleMenu />
            {
              pathname === "/yaku" || 
              pathname === "/yaku/1han" || 
              pathname === "/yaku/2han" || 
              pathname === "/yaku/3han" || 
              pathname === "/yaku/mangan" || 
              pathname === "/yaku/yakuman" ?
              <ToggleYaku /> :
              <></>
            }
          </div>
        </nav>
        <div></div>
      </div>
    </>
  );
}

export default Navbar;
