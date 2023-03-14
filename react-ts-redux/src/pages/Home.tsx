import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dispatchAdd } from '../store';
import ToDoLIst from '../components/ToDoLIst';

const Home: React.FC = () => {  
  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('')

  const handleChangeInput = (e: any): void => {
    setText(e.target.value)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(dispatchAdd(text))
    setText('')
  }

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={text} onChange={handleChangeInput}/>
        <button type='submit'>Add</button>
      </form>
      <ToDoLIst />
    </>
  );
};

// const mapStateToProps = (state: ToDoList) => {
//   return { toDos : state }
// }
// export default connect(mapStateToProps)(Home);
export default Home;