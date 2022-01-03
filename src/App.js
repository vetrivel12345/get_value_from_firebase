
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import db from './firebase';
import {useState} from 'react'

function App() {
  const[array , setArray]=useState([])
  const readData=async()=>{
  const arr=[];
  const querySnapshot = await getDocs(collection(db, "login"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  arr.push( doc.data());
});

setArray(arr);

}
  return (
    <div className="App">
      <button onClick={readData}> onetime</button>
    
             
      {array.map((e)=>( 
        <>
      <table>
        <tr>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
        </tr>
      </table>
       </>
      ))}
    </div>
  );
}

export default App;
