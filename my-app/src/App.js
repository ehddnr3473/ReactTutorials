import logo from './logo.svg';
import './App.css';

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
        props.onChangeMode(event.target.id);
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
  const topics = [
    {id:1, title:'html', body: 'html is ...'}, 
    {id:2, title:'css', body: 'css is ...'}, 
    {id:3, title:'javascript', body: 'javascript is ...'}
  ];

  return (
    <div>
      <Header title="Hello, world!!" onChangeMode={() => {
        alert('Header');
      }}></Header>
      {/* 객체 또는 Number를 전달하기 위해서 표현식을 사용 */}
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, world!!"></Article>
      <Article title={1}></Article>
    </div>
  );
}

export default App; // 기본으로 내보내는 값
