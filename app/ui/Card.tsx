import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  style: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title, style }) => {
  return (
    <div className='bg-[#05532d] my-2 p-8 rounded-xl text-justify z-50 print:bg-slate-200'>
      {title !== "aucun" ?
        (style !== "italic" ? 
          <h2 className="
            text-amber-400 text-center -mt-2 mb-2 text-lg font-normal print:text-black
          ">
            {title}
          </h2> :
          <h2 className="
            text-amber-400 text-center -mt-2 mb-2 text-lg italic font-normal print:text-black
          ">
            {title}
          </h2>
        ) :
        <></>
      }
      {children}
    </div>
  );
}

export default Card;