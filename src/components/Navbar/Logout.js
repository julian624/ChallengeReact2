import React from "react";

export default function Logout() {
  function handleLogOut(setIsAuth) {
    localStorage.clear();
    setIsAuth(false);
  }
  //////// ONLY A SIMPLE BUTTON FOR LOGOUT//////////
  return (
    <div className="containerr">
      <form className="form-inline pt-3">
        <button className="btn btn-danger butonflex" onClick={handleLogOut}>
          {" "}
          Log out{" "}
        </button>
      </form>
    </div>
  );
}
