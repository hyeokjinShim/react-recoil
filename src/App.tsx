import React from 'react';
import { 
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import styles from './App.module.css';
import TodoList from './components/todoList/todoList';
import TodoItemCreator from './components/todoItemCreator/todoItemCreator';

const App = () => {

  return (
    <div className={styles.appContainer}>
      <RecoilRoot>
        {/* <TodoItemCreator /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;



