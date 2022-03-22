import Card from "./components/Card";
import data from "./components/data";
import Header from "./components/Header";
import Navbar from "./components/Navbar"

import "./css/App.css"


function App(props) {
  return (
    <div >
      <Navbar></Navbar>
      <Header></Header>
      <Card veri= {data}></Card>

   </div> 
  );
}

export default App;
