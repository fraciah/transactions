import DataTable from "react-data-table-component";

const TableComponent = ({data, columns, onRowClicked}) => {
  return (
    <div className="table-container">
      <DataTable
        data={data}
        columns={columns}
        onRowClicked={onRowClicked}
        customStyles={customStyles}
        highlightOnHover
        striped
        responsive
        pagination
      />
    </div>
  )
}
export default TableComponent;

const customStyles = {
  headRow:{
    style:{
      background: "#106ba0",
      color: "white",
    }
  },
  rows:{
    style:{
      cursor: "pointer"
    }
  }
}