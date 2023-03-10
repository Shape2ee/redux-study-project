import React, { useState } from 'react';
const Home: React.FC = () => {
  const [text, setText] = useState<string>('')

  const handleChangeInput = (e: any): void => {
    setText(e.target.value)
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    console.log(text)
    setText('')
  }

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={text} onChange={handleChangeInput}/>
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default Home;