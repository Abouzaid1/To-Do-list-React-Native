import { createSlice } from '@reduxjs/toolkit'



export const taskSlice = createSlice({
  name: 'task',
  initialState:[],
  reducers: {
    addTask: (state,action) => {
      state.unshift(action.payload)
    },
    getTask: (state,action) => {
      return action.payload
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, getTask,deleteTask } = taskSlice.actions

export default taskSlice.reducer