import { Grid, Paper, Container } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, SetNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => SetNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    SetNotes(newNotes);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete}></NoteCard>{" "}
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
