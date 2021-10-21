import React, { useState } from "react";
import Modal from "./Modal";
import swal from "sweetalert";

export const User = ({ title, body, id, onEdit, onDelete, key }) => {
  const showAlert = () => {
    swal({
      title: "Borrar contenido?",
      text: "Si borras el contenido no podras recuperar los datos.",
      icon: "error",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({ text: "El archivo se borro con exito", icon: "success" });
        handleDelete();
      }
    });
  };
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(title);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input
            className="InputAddUser"
            placeholder="title"
            name="title"
            defaultValue={title}
          />
          <input
            className="InputAddUser"
            placeholder="body"
            name="body"
            defaultValue={body}
          />
          <button className="btn btn-success" onSubmit={handleOnEditSubmit}>
            Save
          </button>
        </form>
      ) : (
        <div className="user">
          <h3 className="user-name">{title}</h3>
          {/* <span className="user-email">{body}</span> */}
          <div className="DivButtons">
            <Modal title={title} body={body} />
            <button className="btn btn-secondary" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={showAlert}>
              Delete
            </button>
          </div>
          <hr></hr>
        </div>
      )}
    </div>
  );
};
