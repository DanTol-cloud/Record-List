import { createSlice } from '@reduxjs/toolkit'

const recordSlice = createSlice({
  'name': 'records',
  'initialState': [
    {
      'id': 0,
      'title': 'one title',
      'isDone': false,
    },
    {
      'id': 1,
      'title': 'new title',
      'isDone': false,
    },
    {
      'id': 2,
      'title': 'old title',
      'isDone': true,
    },
    {
      'id': 3,
      'title': 'two title',
      'isDone': false,
    },
    {
      'id': 4,
      'title': 'new title',
      'isDone': false,
    },
    {
      'id': 5,
      'title': 'old title',
      'isDone': true,
    },
    {
      'id': 6,
      'title': 'some title',
      'isDone': false,
    },
    {
      'id': 7,
      'title': 'new title',
      'isDone': false,
    },
    {
      'id': 8,
      'title': 'old title',
      'isDone': true,
    },
  ],
  'reducers': {
    'addRecord': (state, action) => {
      const newRecord = {
        'id': Date.now(),
        'title': action.payload,
        'isDone': false,
      }
      state.push(newRecord)
    },
    'toggleIsDone': (state, action) => {
      const record = state.find((rec) => rec.id === action.payload)
      if (record) {
        record.isDone = !record.isDone
      }
    },
  },
})

export const { addRecord, toggleIsDone } = recordSlice.actions
export default recordSlice.reducer
