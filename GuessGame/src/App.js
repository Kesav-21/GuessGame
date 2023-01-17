import "./styles/App.css";
import Button from './components/Button';
import {useState,useEffect} from "react";
function App() {
  const [number,setNumber]=useState(0);
  const [randomNumber,setRandomNumber]=useState(0);
  const [guess,setGuess]=useState("Start Guessing...");
  const [score,setScore]=useState(5);
  const [hint,setHint]=useState();
  const handleOnChangeEvent=(event)=>{
    setNumber(event.target.value);
  }
  const randomNumberGenerator=()=>{
    setRandomNumber(Math.floor(Math.random()*100));
  }
  useEffect(randomNumberGenerator,[]);
  const handleCheck=()=>{
    if (number==randomNumber){
      setGuess("You are winner and genius!!!");
      setHint("");
    }else {
      setGuess("You are loser Try again");
      setScore(score-1);
      if(score==0){
        setGuess("Game Over");
        setHint("");
      }
      if(number>randomNumber){
        setHint("Guess Lower");
      }else{
        setHint("Guess Higher");
      }
    }
  }
  const handleReset=()=>{
    setNumber(0);
    randomNumberGenerator();
    setGuess("Start Guessing...")
  }
  return (
    <div className="App">
      <h1>Guessing Game</h1>
      <h1>{guess}</h1>
      <input onChange={handleOnChangeEvent} className="guessnumber" placeholder="Enter the number between 1 to 20" />
      <Button title="Again" click={handleCheck}/><br/>
      <Button title="Check" click={handleReset}/>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
