import React, {useEffect} from "react";
import SearchPanel from "../search-panel";
import TeacherList from "../teachers-list/teachers-list";
import "./App.css";



function App() {

  return (
    <div className="App">

      <SearchPanel />
      <TeacherList className='list'/>

    </div>
  );
}

export default App;
