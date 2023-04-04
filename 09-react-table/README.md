## React-Table v7

### Steps
- Create a data `column.js` file specifying all the columns needed.
- Create a table component file.
  - Import the `useTable()` hook, mock table data and defined columns data file
- Destructure the required functions from useTable() hook.

```js 
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow
    } = useTable({
    columns,
    data
  })
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