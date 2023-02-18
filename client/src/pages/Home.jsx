import React, { useEffect, useState } from "react";
import AuthorsTable from "../components/AuthorsTable";
import axios from "axios";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Home = () => {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
      setAuthorsList(list.data);
    };
    getData();
  }, []);

  return (
    <>
      <Box textAlign='center' sx={{textDecoration: 'none', overflowX: 'none'}}>
        <Link to='/new'>
          <Button variant="contained" sx={{marginY: 2}}>Add new author</Button>
        </Link>
      </Box>
      <h3 align="center">We have quotes by:</h3>
      <AuthorsTable list={authorsList} setList={setAuthorsList}/>
    </>
  );
};

export default Home;
