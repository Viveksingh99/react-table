export const COLUMNS = [
  {
    Headers: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Headers: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Headers: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Headers: "Bate of Birth",
    Footer: "Bate of Birth",
    accessor: "date_of_birth",
  },
  {
    Headers: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Headers: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GRUOPAD_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Headers: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Headers: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
  {
    Headers: "Phone",
    Footer: "Phone",
    columns: [
      {
        Headers: "Bate of Birth",
        Footer: "Bate of Birth",
        accessor: "date_of_birth",
      },
      {
        Headers: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Headers: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
// export default (COLUMNS, GRUOPAD_COLUMNS);
