import React from 'react'
import { atom, useRecoilValue } from 'recoil'
import TodoItemCreator from '../todoItemCreator/todoItemCreator'
import TodoItem from '../todoItem/todoItem'
import { filteredTodoListState, todoListState } from '../store/store'
import TodoListFilters from '../todoListFilters/todoListFilters'
import TodoListStats from '../todoListStats/todoListStats'

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  return (
    <div>
      <TodoListFilters />
      <TodoListStats />
      <TodoItemCreator />
      {
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      }
    </div>
  )
}


export default TodoList