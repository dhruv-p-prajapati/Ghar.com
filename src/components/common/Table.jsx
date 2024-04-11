import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const Table = ({ columns, rows, pageSizeOptions }) => {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSizeOptions[0] }
          }
        }}
        pageSizeOptions={pageSizeOptions}
        rowSelection={false}
        autoHeight={true}
      />
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number)
};

export default Table;
