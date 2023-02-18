import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import { Button, TableBody } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'

const AuthorsTable = ({ list, setList }) => {
  const navigate = useNavigate();

  const confirmDelete = (id, name) => {
    Swal.fire({
      title: 'Are you sure?',
            text: `You are going to delete ${name}!!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.isConfirmed) {
        deleteAuthor(id);
      }
    })
  }

  const deleteAuthor = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_REACT_API_URL}/${id}`);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!!!',
        text: `Error: ${err?.response?.data?.message || err.message}`,
      })
    }
    const all = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
    setList(all.data)
  }

  return (
    <div>
      <TableContainer 
        component={Paper}
        sx={{maxWidth: "700px", padding: "25px 30px", margin: "35px auto", overflowX: 'hidden'}}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ paddingX: 6}}>Author</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((item, idx) => {
              return (
              <TableRow
                key={"author" + idx}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="secondary" sx={{margin: "10px"}}>
                    <Link to={`/edit/${item._id}`} style={{textDecoration: 'none', color: 'inherit'}}>Edit</Link>
                  </Button>
                  <Button variant="outlined" color="error" onClick={()=> confirmDelete(item._id, item.name)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuthorsTable;

