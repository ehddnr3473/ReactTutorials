# Passing Data Deeply with Context
Context는 UI 트리 아래에 있는 모든 컴포넌트에 정보를 제공한다.

## Usage
- createContext(defaultValue: T)를 사용해서 context 생성
- 부모 요소에서 자식 요소에 Context.Provider를 사용하여 context를 넘겨줌
- 자식 요소에서 useContext(context: Context<T>) 훅을 사용해서 context 값 사용
- 가까운 자식 요소나 먼 자식 요소도 사용 가능하며, useContext()를 사용하는 컴포넌트는 UI 트리에서 가장 가까운 Provider로부터 값을 가져옴.