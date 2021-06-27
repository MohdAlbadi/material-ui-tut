import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, red, yellow } from "@material-ui/core/colors";

const useStyle = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "work") {
        return yellow[700];
      }
      if (note.category == "reminders") {
        return red[700];
      }
      if (note.category == "money") {
        return green[500];
      }
      if (note.category == "todos") {
        return blue[500];
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyle(note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        ></CardHeader>

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
