
import { useState } from 'react'
import './App.css'
import Landing from './Components/Landing'
import Quiz from './Components/Quiz'

function App() {
const [quizStarted,setQuizStarted]=useState(false)
const [username, setUserName] = useState("");
const [uname,setUname]=useState("")
  return (
   
    <div style={{width:"100vw",height:"100vh"}} className='d-flex justify-content-center align-items-center flex-column'>
      
      {
       quizStarted ? (<Quiz username={username} uname={uname}/>):<Landing setQuizStarted={setQuizStarted} username={username} setUserName={setUserName}  setUname={setUname}/>}
    </div>
   
  )
}

export default App
