import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID='3493dfd2-ee6e-459e-b420-6372557308cd'
      userName='kirokodev'
      userSecret='4732'
      renderChatFeed={({ chatAppProp }) => <ChatFeed {...chatAppProp} />}
    />
  )
}

export default App
