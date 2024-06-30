import "./mainquizstyles.css";
import React, { useState } from 'react';
import Quizgame from "./main_quizpage.js"
import quimg from "./questions.png"


const Quizgameece=()=>{
const questions_cme_1=[
    {
        questionValue:"what is ele full form?",
        options:[
           {optionValue:"cascading style sheets", isAnswer:true},
           {optionValue:"cascadingaee style sheets", isAnswer:false},
           {optionValue:"cascadingasa style sheets", isAnswer:false},
           {optionValue:"cascadings style sheets", isAnswer:false}
        ],
    
    },
    {
        questionValue:"what is de full form?",
        options:[
           {optionValue:"hhttmml", isAnswer:true},
           {optionValue:"sdfjkhdfasd", isAnswer:false},
           {optionValue:"sdfasdfasdf", isAnswer:false},
           {optionValue:"csdfasd", isAnswer:false}
        ],
    
    },  {
        questionValue:"what is diode full form?",
        options:[
           {optionValue:"gsdfg", isAnswer:true},
           {optionValue:"sdfgsdfg", isAnswer:false},
           {optionValue:"sdfgsdg", isAnswer:false},
           {optionValue:"sdfgsdfgss", isAnswer:false}
        ],
    
    },  {
        questionValue:"what is yy full form?",
        options:[
           {optionValue:"jhd", isAnswer:true},
           {optionValue:"weth etrbh", isAnswer:false},
           {optionValue:"cegywebgs", isAnswer:false},
           {optionValue:"qertgqwergs", isAnswer:false}
        ],
    
    },  {
        questionValue:"what is rrr full form?",
        options:[
           {optionValue:"cascadisdfgng style sheets", isAnswer:true},
           {optionValue:"dsfgfgs", isAnswer:false},
           {optionValue:"rrrts", isAnswer:false},
           {optionValue:"rr", isAnswer:false}
        ],
    
    }
    

];
const [questionValue,setQuestionValue]=useState(0);
var [score,setScore]=useState(0);
const [showScore, setShowScore] = useState(false);
const [startgames,setStartgames]=useState(false)
const optionClicked=(isAnswer)=>{
  if(isAnswer){
    setScore(score+1)
  }
  if(questionValue===questions_cme_1.length-1){
    setShowScore(true);

    
  }
  else{
  setQuestionValue(questionValue+1)
  }
};
const startgame=()=>{
    setStartgames(true)
}

    return(
        <div>
            
 <div>
 {
           showScore?(
           <div id='quizbox'>
           <h1 id="scoree">You scored {score} out of {questions_cme_1.length}</h1>
       </div>
       ):( <div id="quizbox">
        <h1 id="qn">ece questions</h1>

       <h1 id="qn">Question {questionValue+1}:</h1>
       <h2  id="question_text">{questions_cme_1[questionValue].questionValue}</h2>
       <h3 id="qn">options:</h3>
       {
       questions_cme_1[questionValue].options.map((answerr)=>(
           <ul>
               <li>
               <button id="optionsbtns" onClick={()=>optionClicked(answerr.isAnswer)}>{answerr.optionValue}</button>
               </li>
           </ul>
           ))
       }
       
   </div>)
           }
</div>
{/* <Quizgame></Quizgame> */}
        </div>
    );
}
export default Quizgameece