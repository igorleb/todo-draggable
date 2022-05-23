import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <div className='App'>
      <div className='wrapper'>
        <input type='text' placeholder='Enter something...' />
        <button className='enter'>ENTER</button>
      </div>
    </div>
  );
}

export default App;
