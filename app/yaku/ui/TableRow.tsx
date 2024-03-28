import React, { ReactNode } from 'react';

interface TableRowProps {
  background: string;
  frenchName: string;
  style: string;
  japaneseName: string;
  description: string;
  example: string;
  closedHand: string;
  children: ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ 
  children,
  background,
  frenchName,
  style,
  japaneseName,
  description,
  example,
  closedHand
 }) => {
  return (
    <>
      {background !== "none" ?
        <tr 
          className="divide-x bg-[#003617] hover:bg-[#06722f] print:bg-slate-200 print:divide-black"
        >
          {style !== "italic" ? 
            <td 
              className="p-1 text-sm lg:text-base" 
              dangerouslySetInnerHTML={{ __html: frenchName }} 
            /> :
            <td 
              className="italic text-sm lg:text-base p-1" 
              dangerouslySetInnerHTML={{ __html: frenchName }} 
            />
          }
          <td className="text-sm italic p-1">{japaneseName}</td>
          {example === "none" ?
            <td className="text-sm p-1" dangerouslySetInnerHTML={{ __html: description }} /> :
            <td className="text-sm pt-1 pb-2 px-1">
              <p className="pb-1" dangerouslySetInnerHTML={{ __html: description }} />
              <div className="flex justify-center">
                {children}
              </div>
            </td>  
          }
          <td className="text-center py-1">{closedHand}</td>
        </tr> :
        <tr className="divide-x hover:bg-[#06722f] print:divide-black">
          {style !== "italic" ? 
            <td 
              className="p-1 text-sm lg:text-base"
              dangerouslySetInnerHTML={{ __html: frenchName }}
            /> :
            <td 
              className="italic text-sm lg:text-base p-1" 
              dangerouslySetInnerHTML={{ __html: frenchName }} 
            />
          }
          <td className="text-sm italic p-1">{japaneseName}</td>
          {example === "none" ?
            <td className="text-sm p-1" dangerouslySetInnerHTML={{ __html: description }} /> :
            <td className="text-sm pt-1 pb-2 px-1">
              <p className="pb-1" dangerouslySetInnerHTML={{ __html: description }} />
              <div className="flex justify-center">
                {children}
              </div>
            </td>  
          }
          <td className="text-center py-1">{closedHand}</td>
        </tr>
      }
    </>
  );
}

export default TableRow;