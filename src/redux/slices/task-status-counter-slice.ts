import { createSlice } from '@reduxjs/toolkit'

const taskStatusCounterSlice = createSlice({
  'name': 'taskStatusCounter',
  'initialState': {
    'completedTasks': 0,
    'currentTasks': 0,
  },
  'reducers': {
    'completed': (state, action) => {
      state.completedTasks = action.payload
    },
    'current': (state, action) => {
      state.currentTasks = action.payload
    },
  },
})

export const { completed, current } = taskStatusCounterSlice.actions

export default taskStatusCounterSlice.reducer
