import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import './App.css';
import { useState } from 'react';

const stringData = "This is string data from parent rendered to child element"
const listArray = [];

function App() {
  const listItemStatement = <p>List Items</p>;
  const [userSubmit, ChangeUserSubmit] = useState('');
  const [buttonSelected, ChangeButtonSelected] = useState('')

  const SubmitTransferHandler = (value) => {
    ChangeUserSubmit(value);
    listArray.push(value)
  }
  const ButtonChangeHandler = (value) => {
    ChangeButtonSelected(value)
  }

  return (
    <div className="App">
      <Form onStringTransfer = {stringData} onSubmitTransfer = {SubmitTransferHandler}/>
      <p>{userSubmit}</p>
      {listArray.length === 0 ? listItemStatement
      : listArray.map((item, index) => <p key={index}>{(index + 1) + ': ' + item}</p>)}
  
      <p>{buttonSelected}</p>
      <ThreeButtons onButtonChange = {ButtonChangeHandler}/>
    </div>
  );
}

export default App;
