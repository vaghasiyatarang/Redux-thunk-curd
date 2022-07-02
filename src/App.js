import "./App.css";
import List from "./redux/component/List";
import Edit from "./redux/component/Edit";
import Add from "./redux/component/Add";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux'
function App() {
  // const userList = useSelector(state => state.userList)

  // const { loading, error, user } = userList

  return (
    <div>
      <header>
        <h1 align="center"> redux-Project-CRUD</h1>
      </header>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/back" element={<List />} />
      </Routes>

      {/* <List/> */}
    </div>
  );
}

export default App;
