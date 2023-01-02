import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/visual/sidebar/Sidebar.jsx';

function App() {

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Sidebar open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
