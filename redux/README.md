# Redux [https://react-redux.js.org]

## Summary
* configureStore()를 사용하여 Store 생성
  - Reducer 함수를 named argument로 받음
  - 자동으로 Store를 기본 설정

* 리액트 애플리케이션 컴포넌트에 Redux store를 제공
  - <Provider> 컴포넌트를 <App />에 추가
  - Store를 다음과 같이 넘겨줌. <Provider store={store}>

* createSlice()를 사용하여 'slice' Reducer 생성
  - createSlice(이름, 초깃값, named Reducer 함수들)
  - Reducer 함수를 사용해서 상태(state)를 변경(mutate)
  - 생성된 slice reducer와 action creators를 export
  
* 리액트 컴포넌트에서 useSelector/useDispatch 리액트 Redux 훅을 사용
  - useSelector 훅으로 Store로부터 데이터를 읽음.
  - useDispatch 훅으로 dispatch 함수를 가져오고, dispatch action 수행