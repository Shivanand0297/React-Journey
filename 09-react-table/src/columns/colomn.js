export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth"
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone"
  },
]

// Header -> Labels for each of the columns, only the fields specified in the column will get rendered in the ui
// accessor -> Identifies which data goes under which column in each row