import {useState} from 'react'
import MyContext from './contexts/MyContext'
import {FormWrapper} from './components/FormWrapper'
import {Navbar} from './components/Navbar'
import './App.css';

function App() {
  
  const [name, setName] = useState("")
  return (
    <div className="App">
      <MyContext.Provider value={{name, setName}}>
        <Navbar/>
        <FormWrapper/>
      </MyContext.Provider>
    </div>
  )
}

export default App;
