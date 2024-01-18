import logo from './logo.svg';
import './App.css';

function Header(props) { // props(Object type)를 받아서 표현식을 사용하여 동적으로 설정
  return (
    <header>
        <h1><a href="/">{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];

  props.topics.forEach((topic) => {
    lis.push(<li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li>);
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
      <Header title="Hello"></Header>
      <Header title="World"></Header>
      {/* 객체 또는 Number를 전달하기 위해서 표현식을 사용 */}
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, world!!"></Article>
      <Article title={1}></Article>
    </div>
  );
}

export default App; // 기본으로 내보내는 값
