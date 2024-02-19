import './Basic.css'

/*
  HTML 태그는 lowercase이기 때문에, 리액트 컴포넌트를 그와 구분하기 위해 대문자로 시작한다.

  JSX 마크업 구문(optional).
  - 태그를 닫아야 함. ex) <br />
  - 컴포넌트는 여러 개의 JSX 태그를 반환할 수 없음. <div> 혹은 <>와 같은 부모로 wrap해야 함.
*/
function MyButton() {
  return (
    <button className="test">I'm a button</button>
  );
}

function Header() {
  const state = false;

  return (
    <>
      {/* {state && <h1>true</h1>} */}
      {state ? (
        <h1>true</h1>
      ) : (
        <h1>false</h1>
      )}
    </>
  );
}

/*
  리액트 앱은 컴포넌트로 만들어진다. 리액트 컴포넌트는 마크업을 반환하는 자바스크립트 함수이다.
*/
function Basic() {
  return (
    <>
      <Header />
      <MyButton></MyButton>
    </>
  );
}

// 이 파일의 메인 컴포넌트 명시
export default Basic;
