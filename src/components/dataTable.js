import React from "react";
import DataTable from "react-data-table-component";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";

const DataTableComponent = ({
  allData,
  tableHeadings,
  selectableRows,
  selectableRowDisabled,
}) => {
  const columns = tableHeadings;
  const data = allData;

  const customStyles = {
     pagination: {
        style : {
            borderRadius: "0 0 10px 10px" ,
        }
     }


  };

  return (
    <div className="rounded-t-xl">
      <DataTable
        columns={columns}
        data={data}
        selectableRows={selectableRows}
        sortable
        pagination
        highlightOnHover
        responsive
        striped
        customStyles={customStyles}
        selectableRowDisabled={selectableRowDisabled}
        className="bg-theme-primaryBg"
      />
    </div>
  );
};

export default DataTableComponent;
