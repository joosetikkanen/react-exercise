import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { borderRadius } from '@mui/system';

function App() {

  const [dialogOpen, setOpen] = useState(false);

  const [office, setOffice] = useState("")

  const offices = [
    {
      name: "office1"
    },
    {
      name: "office2"
    },
    {
      name: "office3"
    }
  ]

  return (
    <div className="App">
      <div className="header">
        <Button variant="outlined">User management</Button>
        <Button variant="outlined">Project management</Button>
      </div>
      <div className="pageContent">
        <div className="left-block">
          <div className="list-header">
            <h3>User List</h3>
            <Button variant="outlined" onClick={() => setOpen(true)}>Add new user</Button>
            <Dialog open={dialogOpen} onClose={() => setOpen(false)}>
              <DialogTitle>Add new user</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {/*esiteteksti*/}
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField margin="dense" fullWidth variant="standard" label="Nimi" />
                <TextField margin="dense" fullWidth variant="standard" label="Nimi" />
                <TextField margin="dense" fullWidth variant="standard" label="Nimi" />
                <TextField margin="dense" fullWidth variant="standard" select value={office} onChange={(e) => setOffice(e.target.value)} label="Toimipiste">
                  {offices.map((office) => (
                    <MenuItem key={office.name} value={office.name}>
                      {office.name}
                    </MenuItem>
                  ))}
                </TextField>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Add</Button>
              </DialogActions>
          </Dialog>
          </div>
          <div className="userList">
          <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" variant="outlined">Muokkaa</Button>
              <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>Poista</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small">Muokkaa</Button>
              <Button size="small">Poista</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small">Muokkaa</Button>
              <Button size="small">Poista</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small">Muokkaa</Button>
              <Button size="small">Poista</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
              <Typography>Etunimi: asdasd</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small">Muokkaa</Button>
              <Button size="small">Poista</Button>
            </CardActions>
          </Card>
          </div>
        </div>
        <div className="userInfo">
          <h3>User information</h3>
          <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch"}, }} >
            <TextField label="Nimi" />
            <TextField label="Nimi" />
            <TextField label="Nimi" />
            <TextField label="Nimi" />
            <TextField select value={office} onChange={(e) => setOffice(e.target.value)} label="Toimipiste">
              {offices.map((office) => (
                <MenuItem key={office.name} value={office.name}>
                  {office.name}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="outlined"> Save </Button>
          </Box>
        </div>
      </div>
      
    </div>
  );
}

export default App;
