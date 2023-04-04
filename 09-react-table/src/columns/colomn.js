export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth"
  },
  {
    Header: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    accessor: "phone"
  },
]

// Header -> Labels for each of the columns, only the fields specified in the column will get rendered in the ui
// accessor -> Identifies which data goes under which column in each row