import Calculator from "./components/Calculator.jsx"
import Header from "./components/Header"
import Result from "./components/Result.jsx";
import {useState} from 'react'; 

function App() {
  const [userInput,setUserInput]=useState({
      initialInvestment:10000,
      annualInvestment:1200,
      expectedReturn:6, 
      duration:10
  })

  function handleChange(inputIdentifier, newValue)
{
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput, 
            [inputIdentifier]:+newValue 
        }
    });

}

const inputIsValid = userInput.duration>=1; 


  return (
    <>
    
    <Header/>
    <Calculator onChange={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than 0 </p>}
    {inputIsValid && <Result input={userInput} ></Result>}
    
    </>
    
  )
}

export default App
