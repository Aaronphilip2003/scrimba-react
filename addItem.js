import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        document.getElementById()
        console.log(thingsArray)
    }
    
    const thingsElements = thingsArray.map(info => {
      <p key={info}>{info}</p>
    })
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// This is without State so it wont update on click
