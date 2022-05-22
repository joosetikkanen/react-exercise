import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from "../App";

const UserCard: FC<{userInfo: User, deleteUser: (arg0: User) => void}> = (props) => {

    return (
        <Card variant="outlined" sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography>Etunimi: {props.userInfo.name}</Typography>
              <Typography>Sukunimi: {props.userInfo.surname}</Typography>
              <Typography>Email: {props.userInfo.email}</Typography>
              <Typography>Toimipiste: {props.userInfo.office}</Typography>
              <Typography>ID: {props.userInfo.id}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" variant="outlined">Muokkaa</Button>
              <Button size="small" variant="outlined" startIcon={<DeleteIcon />} onClick={() => props.deleteUser(props.userInfo)}>Poista</Button>
            </CardActions>
          </Card>
    )
}

export default UserCard;