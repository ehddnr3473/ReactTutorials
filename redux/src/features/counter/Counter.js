import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export function Counter() {
  // useSelector를 사용해서 Store로부터 데이터를 읽을 수 있음.
  const count = useSelector((state) => state.counter.value);
  
  // Dispatch: 액션을 발생시켜 상태의 변경을 일으키는 메서드
  // 디스패치를 통해 액션을 스토어로 보내면 리듀서가 호출되어 상태가 갱신됨.
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}