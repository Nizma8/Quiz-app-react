
import { useState } from 'react'
import './App.css'
import Landing from './Components/Landing'
import Quiz from './Components/Quiz'
import questions from './question'


function App() {
const [quizStarted,setQuizStarted]=useState(false)
const [username, setUserName] = useState("");
const [uname,setUname]=useState("")
const {questionData} = questions


const [categor,setCategor]=useState("")
const [DataFromCategory,setDataFromategory]=useState([])
 const handleSelect =(category)=>{
    setCategor(category)
 }




 const getCat =()=>{
  if(categor){
    setDataFromategory( questionData.filter(item=>item.category===categor))
    setQuizStarted(true)
    setCategor("")
  }
 }

  return (
   
    <div style={{width:"100vw",height:"100vh"}} className='d-flex justify-content-center align-items-center flex-column'>
      
      {
       quizStarted ? (<Quiz username={username} uname={uname} DataFromCategory={DataFromCategory} setQuizStarted={setQuizStarted} />):<Landing setQuizStarted={setQuizStarted} username={username} setUserName={setUserName}  setUname={setUname} categor={categor}  handleSelect={ handleSelect} getCat={getCat} />}
    </div>
   
  )
}

export default App
