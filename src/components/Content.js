import React from 'react';

const Content = () => {

    const clickButtonHandler = (value) => {
        console.log('Clicked! ' + value)
    };

    const inputHandler = (e) => {
        console.log(e.target.value)
    };

  return (
      <main>
          <div className="container">
              <h1>First App</h1>

              <input type="text" onChange={inputHandler}/>

              <button onClick={() => clickButtonHandler(1)}>Add one</button>

              <button onClick={() => clickButtonHandler(2)}>Add two</button>

          </div>
      </main>
  );
}

export default Content;
