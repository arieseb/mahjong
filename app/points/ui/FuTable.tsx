const FuTable = () => {
  return (
    <div className="border mb-4 w-fit max-[420px]:overflow-x-auto print:border-black">
      <table className="table-auto border-collapse divide-y max-[455px]:text-sm print:divide-black">
        <thead>
          <tr className="divide-x print:divide-black">
            <th scope="col" className="px-6 py-2">Combinaison</th>
            <th scope="col" className="px-6 py-2">Valeur ouverte</th>
            <th scope="col" className="px-6 py-2">Valeur cachée</th>
          </tr>
        </thead>
        <tbody className="divide-y print:divide-black">
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Brelan de tuiles ordinaires</th>
            <td className="px-6 py-2 text-center">2 <em>Fu</em></td>
            <td className="px-6 py-2 text-center">4 <em>Fu</em></td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Brelan de terminales ou d&apos;honneurs</th>
            <td className="px-6 py-2 text-center">4 <em>Fu</em></td>
            <td className="px-6 py-2 text-center">8 <em>Fu</em></td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Carré de tuiles ordinaires</th>
            <td className="px-6 py-2 text-center">8 <em>Fu</em></td>
            <td className="px-6 py-2 text-center">16 <em>Fu</em></td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Carré de terminales ou d&apos;honneurs</th>
            <td className="px-6 py-2 text-center">16 <em>Fu</em></td>
            <td className="px-6 py-2 text-center">32 <em>Fu</em></td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Paire de dragons</th>
            <td colSpan={2} className="px-6 py-2 text-center">2 <em>Fu</em></td>
          </tr>
          <tr className="divide-x print:divide-black">
            <th scope="row" className="px-6 py-2">Paires du vent dominant ou du joueur</th>
            <td colSpan={2} className="px-6 py-2 text-center">2 <em>Fu</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FuTable;