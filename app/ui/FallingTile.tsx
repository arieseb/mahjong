'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "react-spring";

interface FallingTileProps {
  position: string;
}

const FallingTile: React.FC<FallingTileProps> = ({ position }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [randomX, setRandomX] = useState(0);
  const pathname = usePathname();
  const tileWidth = 40;
  const margin = 25;

  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateWindowHeight();
    window.addEventListener("resize", updateWindowHeight);

    return () => {
      window.removeEventListener("resize", updateWindowHeight);
    };
  }, []);

  useEffect(() => {
    const updateRandomX = () => {
      const screenWidth = window.innerWidth;
      let newRandomX = 0;

      if (position === "left") {
        const maxLeftX = (screenWidth / 5) * 1.5 - tileWidth - margin;
        const minLeftX = margin;
        newRandomX = Math.floor(Math.random() * (maxLeftX - minLeftX + 1) + minLeftX);
      } else if (position === "right") {
        const maxRightX = screenWidth - margin - tileWidth;
        const minRightX = (screenWidth / 5) * 3.5 + margin;
        newRandomX = Math.floor(Math.random() * (maxRightX - minRightX + 1) + minRightX);
      }

      setRandomX(newRandomX);
    };

    updateRandomX();

    const handleResize = () => {
      updateRandomX();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [position]);

  const tileList = [
    "Chun", "Haku", "Hatsu", "Man1", "Man2", "Man3", "Man4", "Man5", "Man6", "Man7",
    "Man8", "Man9", "Man5-Dora", "Nan", "Pei", "Pin1", "Pin2", "Pin3", "Pin4", "Pin5", "Pin6",
    "Pin7", "Pin8", "Pin9", "Pin5-Dora", "Shaa", "Sou1", "Sou2", "Sou3", "Sou4", "Sou5", "Sou6",
    "Sou7", "Sou8", "Sou9", "Sou5-Dora", "Ton"
  ];

  const randomNumber = Math.floor(Math.random() * tileList.length);
  const randomDelay = () => Math.floor(Math.random() * (6000 + 1));
  const randomAngle = () => Math.floor(Math.random() * (360 + 1));
  const randomSpeed = () => Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);

  const styles = useSpring({
    from: { opacity: 1, y: -60, x: randomX, rotate: randomAngle() },
    to: { opacity: 0, y: windowHeight - 60, x: randomX, rotate: 720 },
    config: { duration: randomSpeed() },
    loop: true,
    delay: randomDelay(),
  });

  return (
    <div className="absolute top-0 z-[1] print:hidden">
      <animated.div style={styles}>
        {pathname === '/' ?
          <>
            <Image
              src="Front.svg"
              alt="Fond de la tuile"
              width="40"
              height="50"
            />
            <Image
              src={tileList[randomNumber] + ".svg"}
              alt={"Tuile animée"}
              width="36"
              height="48"
              className="-mt-[50px] ms-[2px]"
            />
          </> :
          <>
            <Image
              src="../Front.svg"
              alt="Fond de la tuile"
              width="40"
              height="50"
            />
            <Image
              src={"../" + tileList[randomNumber] + ".svg"}
              alt={"Tuile animée"}
              width="36"
              height="48"
              className="-mt-[50px] ms-[2px]"
            />
          </> 
        }
      </animated.div>
    </div>
  );
};

export default FallingTile;
