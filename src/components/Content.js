import React from 'react';

const Content = (props) => {

    let name = 'Initial';

    const clickButtonHandler = (value) => {
        props.bc('Hello');
        console.log('Clicked! ' + name);
    };

    const inputHandler = (e) => {
        name = e.target.value;
        console.log(e.target.value)
    };

  return (
      <main>
          <div className="container">
              <h1>First App</h1>
              {name}
              <input type="text" onChange={inputHandler}/>

              <button onClick={() => clickButtonHandler(1)}>Add one</button>

              <button onClick={() => clickButtonHandler(2)}>Add two</button>

          </div>
      </main>
  );
}

export default Content;
