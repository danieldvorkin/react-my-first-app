import React from 'react';
import ReactDOM from 'react-dom';

// return function
const Welcome = ((props) =>
  <div>
    <h4>Welcome to my site {props.name}</h4>
  </div>
);

// New ES6 object
const App = (() => {
  const nameArray = ["Joel", "Dani", "Mary", "Daniel", "Eric"];

  const nameMapper = (() =>
    nameArray.map((name, i) =>
      <Welcome key={i} name={name} />
    )
  );

  const changeHandler = ((event) => {
    console.log(event.target.value)
  })

  return (
    <div>
      {nameMapper()}
      <input onChange={changeHandler} />
    </div>
  )
});

ReactDOM.render(<App />, document.getElementById('app'));
