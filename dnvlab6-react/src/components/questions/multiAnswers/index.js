import { useRef , useState} from 'react';
import './style.css';
import * as uuid from 'uuid';
import {questions} from '../index';


const isArrayEqual = (selected, correct) => {

 if (selected.length !== correct.length) {
  return false;
 }
 return correct.filter(e => !selected.includes(e)).length === 0;
};

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number[]} props.correctAnswer
 * @returns 
 */
const MultiAnswerComponent = (props) => {

 let selectedAnswerIndex = [];
 const checkboxClick = (index, status) => {
  if (status) {
   selectedAnswerIndex.push(index);
  } else {
   selectedAnswerIndex = selectedAnswerIndex.filter(e => e === index);
  }
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
 };

 const correctRef = useRef();
 const wrongRef = useRef();
 const showAnswerRef = useRef();
 const [wrongAttempts, setWrongAttempts] = useState(0);
 const [showCorrectAnswer , setShowCorrectAnswer] = useState(false);
 

 


 const checkOnClick = () => {
  if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
   correctRef.current.classList.add('selected');
   wrongRef.current.classList.remove('selected');
  } else {
    setWrongAttempts(wrongAttempts + 1);
    wrongRef.current.classList.add('selected');
    correctRef.current.classList.remove('selected');
    console.log(wrongAttempts);

  }
  
 };


 


 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     return (<div>
     
      {props.correctAnswer.includes(i)&& showCorrectAnswer ? <label style={{color : "green"}}>{answer}
      <input
       data = {answer}
       type='checkbox'
       onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
       checked =  {props.correctAnswer.includes(i)&& showCorrectAnswer ? true : undefined}
       
      /></label> : <label >{answer}
       <input
       data = {answer}
       type='checkbox'
       onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
       checked =  {props.correctAnswer.includes(i)&& showCorrectAnswer ? true : undefined}
       
      />
      </label>}
     </div>);
    })}
   </div>
   <div className='check'>
    <div className='button' onClick={checkOnClick}>
     check my answer
     <div ref={correctRef} className='correct'>correct</div>
     <div ref={wrongRef} className='wrong'>wrong</div>
    </div>
     {wrongAttempts > 2 && <div  className='button correct-answer-button' onClick={() => setShowCorrectAnswer(true)} ref={showAnswerRef}>
     show me correct answer
     
    </div>}
    
    
   </div>
  </div>
 );
};

export default MultiAnswerComponent;