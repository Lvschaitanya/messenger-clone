import { useEffect, useState } from 'react';
import { FormControl,IconButton,Input } from '@material-ui/core';
import Message from './components/Message';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    // {userName:'Lvs', text:'Hello'}
  ])
  const [userName, setUserName] = useState('')

  useEffect(()=>(
    setUserName(prompt('Enter your Name'))
  ),[])

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>{
      const chat = document.getElementById('chat')
      setTimeout(()=>{
        chat.scrollTo(0,chat.scrollHeight)
  
      },100)
      setMessages(snapshot.docs.map(doc =>({
        id:doc.id,
        message:doc.data()
      })))
    })
  },[])

  const sendMsg = (e) =>{
    e.preventDefault()
    // setMessages([...messages,{userName:userName,message:input}])
    db.collection('messages').add({
      userName: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    const chat= document.getElementById('chat')
    setTimeout(()=>{
      chat.scrollTo(0,chat.scrollHeight)

    },100)
    setInput('')
  }

  return (
    <div className="App">
      {/* <h1>Hi {userName}</h1> */}
      <nav className='nav'>
        <h1>Hello {userName}</h1>
      </nav>

      <div id='chat' className='msg'>
        <FlipMove>
          {messages.map(({id,message})=>(
            <Message key={id} userName={userName} message={message} />
          ))}
        </FlipMove>
      </div>

      <div className='footer'>
        <form className='form'>
          <FormControl className='formcontrol'>
            {/* <InputLabel>Enter your Message</InputLabel> */}
            <Input className='msginput' placeholder='Enter your Message' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <IconButton className='msgbutton' type='submit' disabled={!input} variant='contained' color='primary' onClick={sendMsg}>
              <SendIcon />
            </IconButton>
            {/* <Button disabled={!input} variant='contained' color='primary' onClick={sendMsg}>Send</Button> */}
          </FormControl>
        </form>
      </div>



    </div>
  );
}

export default App;
