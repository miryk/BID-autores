import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import Swal from 'sweetalert2'

const EditAuthor = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [author, setAuthor] = useState({name: ""});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/${_id}`)
      setAuthor(response.data);
    }
    getData();
  }, [])
  

  const edit = async (values, actions) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_API_URL}/${author._id}`, values)
      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Great!!!',
          text: `Author ${response.data.name} updated successfully!`,
      });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!!!',
        text: `Error: ${err?.response?.data?.message || err.message}`,
    })
    }
    navigate('/')
  }

  return (
    <div className="container">
      <AuthorForm onSubmit={edit} initialValues={author} btnText="Edit"/>
    </div>
  )
}

export default EditAuthor