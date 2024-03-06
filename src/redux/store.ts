import { configureStore } from '@reduxjs/toolkit'

import recordReducer from './slices/record-slice.ts'
import taskStatusCounterReducer from './slices/task-status-counter-slice.ts'

export const store = configureStore({
  'reducer': {
    'records': recordReducer,
    'taskStatusCounter': taskStatusCounterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
