import { useEffect } from 'react'

import { UseAppDispatch, UseAppSelector } from '../../redux/hooks.ts'
import {
  completed,
  current,
} from '../../redux/slices/task-status-counter-slice.ts'
import './styles.css'

const CounterContainer = (): JSX.Element => {
  const taskStatusCounter = UseAppSelector((state) => state.taskStatusCounter)
  const records = UseAppSelector((state) => state.records)

  const dispatch = UseAppDispatch()

  const completedRec = records.filter((rec) => rec.isDone === true)
  const currentRec = records.filter((rec) => rec.isDone !== true)

  useEffect(() => {
    dispatch(completed(completedRec.length))
    dispatch(current(currentRec.length))
  }, [dispatch, completedRec.length, currentRec.length])

  const { completedTasks, currentTasks } = taskStatusCounter

  return (
    <div className="counter-container">
      <h2 className="completed">Completed: {completedTasks}</h2>
      <h2 className='current'>Current: {currentTasks}</h2>
    </div>
  )
}

export default CounterContainer
