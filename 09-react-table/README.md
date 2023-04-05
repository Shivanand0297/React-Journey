## React-Table v7
<hr>

### Steps

- Create a data `column.js` file specifying all the columns needed.
- Create a table component file.
  - Import the `useTable()` hook, mock table data and defined columns data file
- Destructure the required functions from useTable() hook.

```js
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({
    columns,
    data,
  });
```

- Memoize the data useing `useMemo()` hook from react.
- Write the html markup for table.
- Apply the table props as below.

```js
<table {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
</table>
```

- Apply the css styles to table.

<hr>

### Adding table footer.

- Specify the Footer property in `column.js` file.
- Destructure the `footerGroups` from useTable() hook.

```js
<tfoot>
  {footerGroups.map((footerGroup) => (
    <tr {...footerGroup.getFooterGroupProps()}>
      {footerGroup.headers.map((column) => (
        <td {...column.getFooterProps()}>{column.render("Footer")}</td>
      ))}
    </tr>
  ))}
</tfoot>
```

<hr>

### Sorting column

- Import `useSortBy` from react-table.
- Add in the second param in `useTable()` hook.

```jsx
<th {...column.getHeaderProps(column.getSortByToggleProps())}>
  {column.render("Header")}
  <span>{column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") : null}</span>
</th>
```
<hr>

### Formating Data

- Add this in column.js file, Cell will control what will be rendered in the UI.

```js
Cell: ({ value }) => {
  return format(new Date(value), "dd/MM/yyyy");
};
```
<hr>

### Filtering Data (Global filter)

- Make a global filter component as below.

```js
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
```

- Import useGlobalFilter hook from react-table.
- Extract `state: { globalFilter }` and `setGlobalFIlter` function from `useTable()` hook.
- Pass above 2 as a props in `<GlobalFilter/>` component.

<hr>

### Column Filter

```js
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search:
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
export default ColumnFilter;
```

- Import `useFilters` hook from react-table
- Place in the second parameter of useTable().
- Add ```<div>{column.canFilter ? column.render("Filter") : null}</div>``` between `<th>` tag.
- Add `Filter: ColumnFilter` in `column.js` file

