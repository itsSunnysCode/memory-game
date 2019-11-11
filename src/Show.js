import React, {useState} from 'react';

const Show=(props)=>{



            const [GuessedNumber, setGuessedNumber] = useState();
            const [correctGuess, setcorrectGuess] = useState(0);
            const [showResult, setshowResult] = useState(false);
     
     
            const submitHandler=(e)=>{
                    e.preventDefault();
                    let temp = localStorage.getItem('number');
                    let i=0, guess=i;
                    while(GuessedNumber[i]===temp[i]){
                            i++;
                            guess=i; 
                            if(guess===6){
                            break;
                        } 
                    }
        
            setcorrectGuess(guess);
            setshowResult(true);
            }

            const restart=()=>{
            localStorage.removeItem('number');
            props.history.push('/');
            }


            if(showResult===true){
                var result=<h2>{correctGuess} correct guesses</h2>
            }
   
    return(
        <div>
        <h1>Guess The Number</h1> 
        <form onSubmit={submitHandler}>
        <input type='number' max="999999"  onChange={(e)=>{setGuessedNumber(e.target.value)}}  required></input>
        <br />
        <button  type="submit">Guess</button>
        
        </form>
        <button onClick={restart}>Replay Game</button> <br/>
        {result}       
        </div>
    );
}

export default Show;