import React from "react";
import DataTable from "react-data-table-component";


const DataTableComponent = () => {
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  const customStyles = {
    rows: {
      style: {
        color: "#223336",
        // backgroundColor: `${theme.primaryBg}`, // Use CSS variable for background color
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    striped: {
      default: "red",
    },
  };

  return (
    <div>
      <DataTable
        pagination
        columns={columns}
        customStyles={customStyles}
        data={data}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        highlightOnHover
        className="bg-theme.primaryBg"
      />
    </div>
  );
};

export default DataTableComponent;
