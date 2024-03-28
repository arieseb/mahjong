const ManTable = () => {
  return (
    <div className="
        border-b-[1px] border-e-[1px] max-md:overflow-x-auto print:border-black print:text-sm
      ">
      <table className="table-auto border-collapse divide-y print:divide-black">
        <thead>
          <tr className="divide-x print:divide-black">
            <td className="border-s-0">&nbsp;</td>
            <th scope="col" className="px-4 py-2 xl:max-[1545px]:px-1 text-center border-t-[1px]">
              Mangan<br/><span className="text-sm font-light">(5 Han)</span>
            </th>
            <th scope="col" className="px-4 py-2 xl:max-[1545px]:px-1 text-center border-t-[1px]">
              Haneman<br/><span className="text-sm font-light">(6-7 Han)</span>
            </th>
            <th scope="col" className="px-4 py-2 xl:max-[1545px]:px-1 text-center border-t-[1px]">
              Baiman<br/><span className="text-sm font-light">(8-10 Han)</span>
            </th>
            <th scope="col" className="px-4 py-2 xl:max-[1545px]:px-1 text-center border-t-[1px]">
              Sanbaiman<br/><span className="text-sm font-light">(11-12 Han)</span>
            </th>
            <th scope="col" className="px-4 py-2 xl:max-[1545px]:px-1 text-center border-t-[1px]">
              Yakuman<br/><span className="text-sm font-light">(13+ Han)</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y print:divide-black">
          <tr className="divide-x print:divide-black">
            <th 
              scope="row" 
              className="px-2 py-2 xl:max-[1545px]:px-1 text-center border-s-[1px] print:border-black"
            >
              Joueur ordinaire
            </th>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">8000</strong><br/>2000<br/>
              <span className="underline">4000</span>
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">12000</strong><br/>3000<br/>
              <span className="underline">6000</span>
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">16000</strong><br/>4000<br/>
              <span className="underline">8000</span>
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">24000</strong><br/>6000<br/>
              <span className="underline">12000</span>
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">32000</strong><br/>8000<br/>
              <span className="underline">16000</span>
            </td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th 
              scope="row" 
              className="px-2 py-2 xl:max-[1545px]:px-1 text-center border-s-[1px] print:border-black"
            >
              Donneur
            </th>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">12000</strong><br/>4000
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">18000</strong><br/>6000
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">24000</strong><br/>8000
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">36000</strong><br/>12000
            </td>
            <td className="px-6 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">48000</strong><br/>16000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManTable;