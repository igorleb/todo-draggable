import React, {useState, useEffect} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import {randomColor} from 'randomcolor';
import Draggable from 'react-draggable';

function App() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const newItem = () => {
    if (item.trim() !== '') {
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPos: {
          x: 500,
          y: -500
        }

      }
      setItems((items) => [...items, newItem])
      setItem('')
    } else {
      alert('Enter something...')
      setItem('');
    }
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <input type='text' placeholder='Enter something...' onChange={(e) => setItem(e.target.value)}/>
        <button className='enter' onClick={newItem}>ENTER</button>
      </div>
      {
        items.map((item, index) => {
          return (
            <Draggable 
              key={index}
              defaultPosition={item.defaultPos}
              >
                <div className='todo_item' style={{backgroundColor: item.color}}>
                  {`${item.item}`}
                  <button className='delete'>X</button>
                </div>
              
            </Draggable>
          )
        })
      }
    </div>
  );
}

export default App;
