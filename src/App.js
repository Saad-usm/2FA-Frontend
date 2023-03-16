import React from 'react';
import './App.css'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios'
import { JSEncrypt } from "jsencrypt";


const getResponse = async () => {
  const res = await axios.get(`http://127.0.0.1:8000/`);
console.log(res);  
}

const postResponse = async (message) => {
  const res = await axios.post(`http://127.0.0.1:8000/`, message);
}

export default function App() {


  getResponse();
// const fetcher = url => axios.get(url).then(res => res)


//   const { data } = useSWR('https://securityprojectbackend.saad-usm.repl.co', fetcher);
//   console.log(data);



  // encryption stuff
  let encrypt = new JSEncrypt();

  var publicKey = `
  -----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtV6qLdvndBNPpyd43cKCGhOe+ui5TjJr3677dnqCwajhFtHOGOK3vBAHa5qIF/xF0E5+AnXgwAQvBrg277rIKCDLdzCvxURX/8HEhOIHIaOijc5kE/pxBmwIwlDzbLKfrBPo33xDyOSpNa59/StDWfknSz0PJjnKyfWIDtqIG9QIDAQAB
  -----END PUBLIC KEY-----`;

    encrypt.setPublicKey(publicKey);

    let encryptMessaged = encrypt.encrypt("Hello World");
    console.log(encryptMessaged);

  postResponse(encryptMessaged);
  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
