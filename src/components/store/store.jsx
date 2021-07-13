import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter){
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = todoList.filter((item) => !item.isComplete).length;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    const formattedPercentCompleted = Math.round(percentCompleted * 100) + '%';

    return{
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      formattedPercentCompleted
    }
  }
})