import React, { useContext } from "react";
import { User } from "./User";
import { AddUser } from "./AddUser";
import { DataContext } from "../Context/DataContext";

function Crud() {
  const { onAdd, onEdit, onDelete, users } = useContext(DataContext);
  return (
    <div className="CrudContainer">
      <AddUser />
      <div ClassName="PostsContainer">
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            title={user.title}
            body={user.body}
            onEdit={onEdit}
            onDelete={onDelete}
          /> ////////// THIS IS THE MAP TO SHOW THE PRODUCTS IN HOME WITH THE PROPS /////////////
        ))}
      </div>
    </div>
  );
}

export default Crud;
