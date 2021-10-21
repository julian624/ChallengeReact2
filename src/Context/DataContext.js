import React, { createContext, useEffect, useState } from "react";
//////// CONTEXT API////////////////
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  ///////////////// USING LIMIT=3 BECAUSE I DONT WANTED 100 POSTS IN MY HOME///////////
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=3")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };
  /////////////// HERE THE FETCH FOR GET POST PUT AND DELETE///////////////
  const onAdd = async (title, body, id) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        body: body,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.title = title;
            user.body = body;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (title) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${title}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.title !== title;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        onAdd,
        onEdit,
        onDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
