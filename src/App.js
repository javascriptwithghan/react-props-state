
import { useState } from 'react';
import './App.css';
// import Footer from './Common/Footer';
// import Header  from './Common/Header';
// import Main from './Main';
import Demo from './Democlass';

function App() {
   const [count, setCount] = useState(0);

   const onCounthander = () => {
    setCount(count+1);
   }
  return (
    <div className="App">
      {/* <Header  name="Arun" age="40" address="Noida" />
        <Main/>
      <Footer/> */}
     <Demo />
     <h3>{count}</h3>

     <button onClick={onCounthander}>Click to change count</button>
    <br/>

    </div>
  );
}

export default App;
