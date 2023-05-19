import './App.css';
import Modal from './components/modalka/Modal';
// import LiftingUp from './components/liftingApp/LiftingUp';
import OpenForm from './components/openForm/OpenForm';

function App() {
  // const users=[]

  // const newData =(data)=>{
  //   console.log(data); // text
  // }
  
  return (
    <div className="App">
      <OpenForm/>
      {/* <LiftingUp   text="test" onNewData={newData} /> */}
    </div>
  );
}

export default App;









