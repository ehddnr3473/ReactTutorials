import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter', 
  initialState: {
    value: 0,
  }, 
  /*
    <Reducer>
    - Action을 기반으로 현재 상태를 다음 상태로 변경하는 함수
    - 이전 상태와 액션을 받아서 새로운 상태를 반환
    - mutating logic 가능
    - no return statement is required
  */
  reducers: {
    increment: (state) => {
      state.value += 1
    }, 
    decrement: (state) => {
      state.value -= 1
    }, 
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer