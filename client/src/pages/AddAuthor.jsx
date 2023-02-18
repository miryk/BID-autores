import { Box, Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import AuthorForm from "../components/AuthorForm";

const AddAuthor = () => {

  const initialValues = {
    name: ""
  }

  const addAuthor = async (values, actions) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}`, values);
      console.log(response)
      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Great!!!',
          text: `Author ${response.data.name} added successfully!`,
      });
      }
      actions.resetForm(initialValues);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!!!',
        text: `Error: ${err?.response?.data?.message || err.message}`,
    })
    }
  }

  return (
  <div className="container">
    <AuthorForm onSubmit={addAuthor} btnText="Add" initialValues={initialValues}/>
  </div>
  )
};

export default AddAuthor;
