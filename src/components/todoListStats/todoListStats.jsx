import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../store/store'

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    formattedPercentCompleted
  } = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Total items: {totalNum} </li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed : {totalUncompletedNum} </li>
      <li>Percent completed : {formattedPercentCompleted} </li>
    </ul>
  )
}

export default TodoListStats
