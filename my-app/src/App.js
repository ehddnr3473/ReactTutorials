import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) { // props(Object type)를 받아서 표현식을 사용하여 동적으로 설정
  return (
    <header>
        <h1><a href="/" onClick={(event) => { // event 객체로 이벤트 컨트롤 가능
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];

  props.topics.forEach((topic) => {
    lis.push(<li key={topic.id}>
      <a id={topic.id} href={'/read/' + topic.id} onClick={event => {
        event.preventDefault();

        // event 객체의 target은 이벤트를 유발한 태그를 가리킴. 여기에서는 a 태그.
        props.onChangeMode(Number(event.target.id));
        // props.onChangeMode(topic.id);
      }}>{topic.title}</a></li>);
  });

  return (
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
  );
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'html', body: 'html is ...'}, 
    {id:2, title:'css', body: 'css is ...'}, 
    {id:3, title:'javascript', body: 'javascript is ...'}
  ];

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, world!!"></Article>;
  } else if (mode === 'READ') {
    let title, body = null;

    for(let i = 0; i<topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header title="Hello, world!!" onChangeMode={() => {
        setMode('WELCOME'); // State 값이 변경되면서, App component가 다시 실행됨.
      }}></Header>
      {/* 객체 또는 Number를 전달하기 위해서 표현식을 사용 */}
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <Article title={1}></Article>
    </div>
  );
}

export default App; // 기본으로 내보내는 값
