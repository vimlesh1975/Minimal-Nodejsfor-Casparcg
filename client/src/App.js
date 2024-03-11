import { useState } from 'react'
function App() {
  const [files, setFiles] = useState(['amb', 'red'])

  const endpoint =  (str) => {
    const url = "http://localhost:9000/endpoint";
    const postData = { string: str };
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(postData)
    };

    // No need to handle the response or errors
    fetch(url, fetchOptions);
};

  return (
    <div className="App">
      {files.map((file, i) =>
        <div key={i}>
          {file}<button onClick={()=>endpoint('play 1-1 ' + file )}>Play</button><button onClick={()=>endpoint('pause 1-1' )}>Pause</button><button onClick={()=>endpoint('resume 1-1' )}>Resume</button> <button onClick={()=>endpoint('stop 1-1 ' + file )}>Stop</button>
        </div>)}

    </div>
  );
}

export default App;
