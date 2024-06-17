import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { client } from "../../../Client/Clientaxios";





export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [productData,setProductData] = useState('');

  const getProduct = async () => {
    try {
      const response = await client.get("project/getproduct");
      console.log(response);
      setProductData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct()
  }, [])
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{
                  minWidth: 170,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Model
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 170,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Motor
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 170,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Image
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 170,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Range
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 170,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData && productData.map((each) => (
              <TableRow
                key={each._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {each.model}
                </TableCell>
                <TableCell align="right">{each.motor}</TableCell>
                <TableCell align="right">{each.image}</TableCell>
                <TableCell align="right">{each.range}</TableCell>
                <TableCell align="right">{each.range}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={productData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
