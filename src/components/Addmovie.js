import { Button, TextField, Typography } from '@mui/material';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';

export const Addmovies = ({ data, setMovie }) => {
  const [movie, setMovieDetails] = useState({
    mname: '',
    mactor: '',
    mactress: '',
    mdirector: '',
    myear: '',
    mcam: '',
    mproducer: '',
    mlanguage: '',
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setMovieDetails((movie) => ({ ...movie, [name]: value }));
  };

  const addHandler = () => {
    setMovie((prevData) => [...prevData, movie]);
    setMovieDetails({
      mname: '',
      mactor: '',
      mactress: '',
      mdirector: '',
      myear: '',
      mcam: '',
      mproducer: '',
      mlanguage: '',
    });
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <Typography>Movie Name : </Typography>
      <TextField variant="outlined" name="mname" value={movie.mname} onChange={inputHandler} />
      <Typography>Actor : </Typography>
      <TextField variant="outlined" name="mactor" value={movie.mactor} onChange={inputHandler} />
      <Typography>Actress : </Typography>
      <TextField variant="outlined" name="mactress" value={movie.mactress} onChange={inputHandler} />
      <Typography>Director : </Typography>
      <TextField variant="outlined" name="mdirector" value={movie.mdirector} onChange={inputHandler} />
      <Typography>Released Year : </Typography>
      <TextField variant="outlined" name="myear" value={movie.myear} onChange={inputHandler} />
      <Typography>Camera : </Typography>
      <TextField variant="outlined" name="mcam" value={movie.mcam} onChange={inputHandler} />
      <Typography>Producer : </Typography>
      <TextField variant="outlined" name="mproducer" value={movie.mproducer} onChange={inputHandler} />
      <Typography>Language : </Typography>
      <TextField variant="outlined" name="mlanguage" value={movie.mlanguage} onChange={inputHandler} />
      <br />
      <br />
      <Button variant="contained" color="success" onClick={addHandler}>
        Submit
      </Button>
    </div>
  );
};

export const Home = ({ data }) => {
  return (
    <div style={{ paddingTop: '100px' }} className='App'>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell>Actor</TableCell>
            <TableCell>Actress</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Released Year</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.mname}</TableCell>
                <TableCell>{item.mactor}</TableCell>
                <TableCell>{item.mactress}</TableCell>
                <TableCell>{item.mdirector}</TableCell>
                <TableCell>{item.myear}</TableCell>
                <TableCell>{item.mcam}</TableCell>
                <TableCell>{item.mproducer}</TableCell>
                <TableCell>{item.mlanguage}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
};