import React from 'react'; 8.5 (gzipped, 3.4)
import ReactDOM from 'react-dom'; 115.9 (gzipped, 37.1)



function App() {
  const [count, setCount] = React.useState(0)
  
  return (
    <div>
      'Hello from React!'
      <button onClick={() => setCount(count +1)}>Click Me {count}</button>

    </div>

  )
}

ReactDOM.render(<App></App>, document.getElementById('app'))

