import './App.css';
import Basic from './Basic';
import List from './List';
import {SharedButtons, NotSharedButtons} from './UpdatingScreen';

function App() {
  return (
    <>
      <Basic />
      <List />
      <NotSharedButtons />
      <NotSharedButtons />
      <br/>
      <SharedButtons />
    </>
  );
}

// 이 파일의 메인 컴포넌트 명시
export default App;
