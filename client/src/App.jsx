import "./App.css";
import Main from "./components/Main/Main";
import Layout from "./Layout/Layout";
import Login from "./screens/Login/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Login/>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
