import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { borderRadius } from '@mui/system';
import UserCard from './components/UserCard';


export type User = {
  name: string,
  surname: string,
  email: string,
  office: string,
  id: number,
}

const mockUsers: User[] = [
  {
    name: "asd1",
    surname: "qwe1",
    email: "asd1@asd1",
    office: "office1",
    id: 0,
  },
  {
    name: "asd2",
    surname: "qwe2",
    email: "asd2@asd2",
    office: "office2",
    id: 1,
  },
  {
    name: "asd2",
    surname: "qwe2",
    email: "asd2@asd2",
    office: "office2",
    id: 2,
  },
  {
    name: "asd2",
    surname: "qwe2",
    email: "asd2@asd2",
    office: "office2",
    id: 3,
  },
  {
    name: "asd2",
    surname: "qwe2",
    email: "asd2@asd2",
    office: "office2",
    id: 4,
  }
]

function App() {

  const [dialogOpen, setOpen] = useState(false);

  const [office, setOffice] = useState("")

  const [users, setUsers] = useState(mockUsers)

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


  const deleteUser = (userToDelete: User) => {

    if (window.confirm("Are you sure you want to delete the user?")){
      setUsers(users.filter((user) => {
        return user.id !== userToDelete.id
      }))
    }
  }

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
            {users.map((user) => (
              <UserCard userInfo={user} deleteUser={deleteUser} />
            ))}
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
