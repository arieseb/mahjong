const TableHead = () => {
  return (
    <thead>
      <tr className="divide-x bg-[#003617] print:bg-slate-200 print:divide-black">
        <th className="text-center py-1">Nom français</th>
        <th className="text-sm text-center py-1">Nom japonais</th>
        <th className="text-center py-1">Description</th>
        <th className="text-center p-1 w-24">Main fermée ?</th>
      </tr>
    </thead>
  );
}

export default TableHead;