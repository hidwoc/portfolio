import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Login/Login";
import Main from "./screens/Main/Main";
import Nav from "./components/Nav/Nav";
import { verify, getHeidi } from "./services/admins";
import "./App.css";

function App() {
  const [admin, setAdmin] = useState(null);
  const [heidi, setHeidi] = useState(null);

  useEffect(() => {
    const fetchHeidi = async () => {
      const res = await getHeidi();
      setHeidi(res);
    };
    fetchHeidi();
  }, []);

  useEffect(() => {
    const verifyAdmin = async () => {
      const admin = await verify();
      admin ? setAdmin(admin) : setAdmin(null);
    };
    verifyAdmin();
  }, []);

  const loading = <div>Loading...</div>;

  return (
    <div className="App">
      <Layout>
        <Route path="/login">
          <Login setAdmin={setAdmin} />
        </Route>
        <Route exact path="/">
          <Landing/>
          <Nav />
          {!heidi ? loading : <Main admin={admin} heidi={heidi}/>}
        </Route>
      </Layout>
    </div>
  );
}

export default App;
