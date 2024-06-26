import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import useStore from "../hooks/useStore";

const DataTableComponent = ({
  allData,
  tableHeadings,
  selectableRows,
  selectableRowDisabled,
  ExpandedComponent,
  expandableRows,
  handleSelectedRowsChange
}) => {
  const columns = tableHeadings;
  const data = allData;
  const appMode = useStore((state) => state.appMode)

  const customStyles = {
    pagination: {
      style: {
        borderRadius: "0 0 14px 14px",
      },
    },
  };

  return (
    <div className="rounded-xl shadow-xl border border-theme-primaryBorder">
      <DataTable
        theme={appMode}
        columns={columns}
        data={data}
        selectableRows={selectableRows}
        expandableRows={expandableRows}
        expandableRowsComponent={ExpandedComponent}
        customStyles={customStyles}
        selectableRowDisabled={selectableRowDisabled}
        onSelectedRowsChange={handleSelectedRowsChange}
        sortable
        pagination
        highlightOnHover
        // striped
        responsive
      />
    </div>
  );
};

export default DataTableComponent;
