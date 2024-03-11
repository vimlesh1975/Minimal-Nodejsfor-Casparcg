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

const getPlaylist =  () => {
  fetch('http://localhost:9000/playlist')
  .then(response => response.json())
  .then(data => {
    // Handle the received playlist data
    const receivedPlaylist = data.playlist;
    console.log(receivedPlaylist);
    // Do something with the playlist data
    setFiles(receivedPlaylist)
  })
  .catch(error => {
    console.error('Error fetching playlist:', error);
  });
};


  return (
    <div className="App">
<button onClick={getPlaylist}>GetPlaylist</button>

      {files.map((file, i) =>
        <div key={i}>
          {file.filename}<button onClick={()=>endpoint('play 1-1 ' + file.filename )}>Play</button><button onClick={()=>endpoint('pause 1-1' )}>Pause</button><button onClick={()=>endpoint('resume 1-1' )}>Resume</button> <button onClick={()=>endpoint('stop 1-1 ' + file )}>Stop</button>
        </div>)}

    </div>
  );
}

export default App;
