import {AppInput} from "./components/AppInput";
import {AppList} from "./components/AppList";
import {useEffect, useState} from "react";

function App() {

    const [messages, setMessages] = useState([])

    const URL = process.env.REACT_APP_API_URL
    console.log(URL)

    const createMessage = (message) => {
        return fetch(`${URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        .then(response => response.json())
        .then(data => setMessages([...messages, data.message]))
    }

    const getMessages = () => {
        return fetch(`${URL}/messages`)
        .then(response => response.json())
        .then(data => setMessages(data.messages))
    }

    useEffect(() => {
        getMessages()
    }, []);


  return (
    <div className="App">
      <AppInput createMessage={createMessage} />
        <AppList messages={messages} />
    </div>
  );
}

export default App;
