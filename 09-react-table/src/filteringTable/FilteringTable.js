import React from "react";

import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import MOCK_DATA from "../table_data/MOCK_DATA.json";
import { COLUMNS } from "../columns/colomn";
import { useMemo } from "react";

// table css
import "../basicTable/BasicTable.css";
import GlobalFilter from "./GlobalFilter";

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps, //needed by the table tag
    getTableBodyProps, //needed by the body tag
    headerGroups, //we can group column headers into one header
    footerGroups,
    rows,
    prepareRow,
    state: { globalFilter }, //filter state
    setGlobalFilter, //function to set GlobalFilter value
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? "⬇️" : "⬆️" : null}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
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
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default FilteringTable;
