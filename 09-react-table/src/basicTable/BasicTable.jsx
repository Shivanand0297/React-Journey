import React from "react";

import { useSortBy, useTable } from "react-table";
import MOCK_DATA from "../table_data/MOCK_DATA.json";
import { COLUMNS } from "../columns/colomn";
import { useMemo } from "react";

// table css
import "./BasicTable.css";

const BasicTable = () => {
  // Note: memoize the data so that the data is not created on each render.
  // if not done react table will think that new data is coming every single time
  // and attempts to perform complex logics every single time.
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { 
    getTableProps, //needed by the table tag
    getTableBodyProps, //needed by the body tag
    headerGroups, //we can group column headers into one header
    footerGroups,
    rows, 
    prepareRow 
  } = useTable({
      columns,
      data,
    }, useSortBy);

  return (
    
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>{column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️"): null}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      {/* table footer */}
      <tfoot>
        {footerGroups.map((footerGroup)=>(
          <tr {...footerGroup.getFooterGroupProps()} >
            {footerGroup.headers.map((column)=>(
              <td {...column.getFooterProps()} >
                {column.render("Footer")}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default BasicTable;
