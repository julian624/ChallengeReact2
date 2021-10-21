import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import { DataProvider } from "./Context/DataContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  //Hook get token to login
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            {!isAuth ? (
              <Route path="/">
                <Login setIsAuth={setIsAuth} />
              </Route>
            ) : (
              <Home setIsAuth={setIsAuth} />
            )}
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
