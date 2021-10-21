import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
////////// THIS IS THE COMPONENT TO CREATE A USER WITH THE FORM, WITH THE DATA BRINDED WITH CONTEXT AND A FUNCTION ONADD
export const AddUser = () => {
  const { onAdd, id } = useContext(DataContext);
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value, evt.target.id);
    evt.target.title.value = "";
    evt.target.body.value = "";
    evt.target.id = { id };
  };

  return (
    <form className="FormTitle" onSubmit={handleOnSubmit}>
      <h1>Agrega tu titulo y tu comentario</h1>
      <input className="InputAddUser" placeholder="Titulo" name="title" />
      <input className="InputAddUser" placeholder="Comentario" name="body" />

      <button className="btn btn-primary ml-4" onSubmit={handleOnSubmit}>
        Add
      </button>
      <hr />
    </form>
  );
};
