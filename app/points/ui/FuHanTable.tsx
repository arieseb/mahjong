import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const FuHanTable = () => {
  return (
      <div className="border w-fit max-[680px]:overflow-x-auto print:border-black">
        <table className="table-auto border-collapse divide-y text-sm print:divide-black">
          <thead>
            <tr className="divide-x print:divide-black">
              <td rowSpan={2} className="px-2 py-2 xl:max-[1545px]:px-1 text-center">
                <em>Han<br/>Fu</em>
              </td>
              <th scope="col" colSpan={4} className="text-center">Joueur ordinaire</th>
              <th scope="col" colSpan={4} className="text-center">Donneur</th>
            </tr>
            <tr className="divide-x divide-y print:divide-black">
              <th 
                scope="col" 
                className="px-2 py-2 xl:max-[1545px]:px-0 text-center border-[1px] print:border-black"
              >
                1
              </th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">2</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">3</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">4</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">1</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">2</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">3</th>
              <th scope="col" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">4</th>
            </tr>
          </thead>
          <tbody className="divide-y print:divide-black">
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">20</th>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-center">
                <FontAwesomeIcon 
                  icon={faCircleXmark} 
                  className='text-xl text-red-400 print:text-red-600'
                />
              </td>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-end">
                400<br/><span className="underline">700</span>
              </td>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-end">
                700<br/><span className="underline">1300</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                1300<br/><span className="underline">2600</span>
              </td>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-center">
              <FontAwesomeIcon 
                  icon={faCircleXmark} 
                  className='text-xl text-red-400 print:text-red-600'
                />
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">700</td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">1300</td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">2600</td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">25</th>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-center">
              <FontAwesomeIcon 
                  icon={faCircleXmark} 
                  className='text-xl text-red-400 print:text-red-600'
                />
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">1600</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">3200</strong><br/>800<br/>
                <span className="underline">1600</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">6400</strong><br/>1600<br/>
                <span className="underline">3200</span>
              </td>
              <td className="px-2 xl:max-[1545px]:px-1 py-2 text-center">
              <FontAwesomeIcon 
                  icon={faCircleXmark} 
                  className='text-xl text-red-400 print:text-red-600'
                />
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">2400</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">4800</strong><br/>1600
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">9600</strong><br/>3200
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">30</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">1000</strong><br/>300<br/>
                <span className="underline">500</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">2000</strong><br/>500<br/>
                <span className="underline">1000</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">3900</strong><br/>1000<br/>
                <span className="underline">2000</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">*7700</strong><br/>2000<br/>
                <span className="underline">3900</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">1500</strong><br/>500
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">2900</strong><br/>1000
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">5800</strong><br/>2000
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">*11600</strong><br/>3900
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">40</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">1300</strong><br/>400<br/>
                <span className="underline">700</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">2600</strong><br/>700<br/>
                <span className="underline">1300</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">5200</strong><br/>1300<br/>
                <span className="underline">2600</span>
              </td>
              <td className="px-2 py-2  xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">2000</strong><br/>700
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">3900</strong><br/>1300
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">7700</strong><br/>2600
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">50</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">1600</strong><br/>400<br/>
                <span className="underline">800</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">3200</strong><br/>800<br/>
                <span className="underline">1600</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">6400</strong><br/>1600<br/>
                <span className="underline">3200</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">2400</strong><br/>800
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">4800</strong><br/>1600
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">9600</strong><br/>3200
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">60</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">2000</strong><br/>500<br/>
                <span className="underline">1000</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">3900</strong><br/>1000<br/>
                <span className="underline">2000</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
                <strong className="text-yellow-400 print:text-orange-600">*7700</strong><br/>2000<br/>
                <span className="underline">3900</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">2900</strong><br/>1000
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">5800</strong><br/>2000
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">*11600</strong><br/>3900
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-1 text-center">70</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">2300</strong><br/>600<br/>
                <span className="underline">1200</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">4500</strong><br/>1200<br/>
                <span className="underline">2300</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">3400</strong><br/>1200
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">6800</strong><br/>2300
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
            </tr>
            <tr className="divide-x print:divide-black">
              <th scope="row" className="px-2 py-2 xl:max-[1545px]:px-0 text-center">80</th>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">2600</strong><br/>700<br/>
                <span className="underline">1300</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end">
              <strong className="text-yellow-400 print:text-orange-600">5200</strong><br/>1300<br/>
                <span className="underline">2600</span>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
              <strong className="text-yellow-400 print:text-orange-600">3900</strong><br/>1300
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-end align-top">
                <strong className="text-yellow-400 print:text-orange-600">7700</strong><br/>2600
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
              <td className="px-2 py-2 xl:max-[1545px]:px-1 text-center align-top">
                <strong>Mangan</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default FuHanTable;