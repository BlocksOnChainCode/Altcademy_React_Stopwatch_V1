const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// Path: index.js
ReactDOM.render(
  element,
  document.getElementById('root')
);
