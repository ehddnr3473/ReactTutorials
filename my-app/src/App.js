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

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;

      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"/></p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;

      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event => {
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"/></p>
    </form>
  </article>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is ...'}, 
    {id:2, title:'css', body: 'css is ...'}, 
    {id:3, title:'javascript', body: 'javascript is ...'}
  ]);

  let content = null;
  let contextControl = null;

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
    contextControl = <li><a href={"/update/" + id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      /*
      const [value, setValue] = useState(PRIMITIVE);
      ex) string, number, bigint, boolean, undefined, symbol, null

      const [value, setValue] = useState(Object);
      ex) object, array
      객체일 경우의 복제 시퀀스
      1. newValue = {...value}; // 복제
      2. newValue 변경
      3. setValue(newValue);
      */
      const newTopic = { id: nextId, title: _title,  body: _body };
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);

      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for(let i = 0; i<topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(_title, _body) => {
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: _title, body: _body};

      for(let i = 0; i <newTopics.length; i++) {
        if(newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
        
        setTopics(newTopics);
        setMode('READ');
      }
    }}></Update>
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
      <ul>
        <li>
          <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
      {/* <Article title={1}></Article> */}
    </div>
  );
}

export default App; // 기본으로 내보내는 값
