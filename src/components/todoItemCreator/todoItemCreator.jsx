import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/store'

const TodoItemCreator = (props) => {

  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList, 
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ]);
    setInputValue('');
  }

  const pressEnter = (event) => {
    if(event.key === "Enter"){
      addItem()
    }
  }

  const onChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} onKeyPress={pressEnter} />
      <button onClick={addItem} >Add</button>
    </div>
  )
}

export default TodoItemCreator

let id=0;
function getId(){
  return id++;
}