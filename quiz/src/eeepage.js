import "./mainquizstyles.css";
import React, { useState } from 'react';
import quimg from "./questions.png"
import Eeeimg from "./eee.png"


const Quizgameeee=()=>{
const questions_cme_1=[
    {
        questionValue:"fleming's right hand rule,the direction of the induced emf in the conductor is given by ",
        options:[
           {optionValue:"Index finger", isAnswer:false},
           {optionValue:"Middle finger", isAnswer:true},
           {optionValue:"Thumb", isAnswer:false},
           {optionValue:"Ring finger", isAnswer:false}
        ],
    
    },
    {
        questionValue:"THe armature reaction effect in d.c. machines can be neutralised by using ",
        options:[
           {optionValue:"Only compensating winding", isAnswer:false},
           {optionValue:"Only interpoles", isAnswer:false},
           {optionValue:"Both compensating winding and interpoles", isAnswer:true},
           {optionValue:"Main field winding", isAnswer:false}
        ],
    
    },  {
        questionValue:"Which of the following motor is having very high no load speed?",
        options:[
           {optionValue:"dc shunt motor", isAnswer:false},
           {optionValue:"DC series motor", isAnswer:true},
           {optionValue:"DC compound motor", isAnswer:false},
           {optionValue:"induction motor", isAnswer:false}
        ],
    
    },  {
        questionValue:":A 220v,d.c motor draws an armature current of 20A.Its armature resistance is 0.6ohm Then the back emf in the motor will be",
        options:[
           {optionValue:"195V", isAnswer:false},
           {optionValue:"202V", isAnswer:false},
           {optionValue:"208V", isAnswer:true},
           {optionValue:"215V", isAnswer:false}
        ],
    
    },  {
        questionValue:":In a single phase factor meter the phase difference between the currents inthe two pressure coils is",
        options:[
           {optionValue:"Exactly 0 degrees", isAnswer:false},
           {optionValue:"Approximately 0 degrees", isAnswer:false},
           {optionValue:"Exactly 90 degree", isAnswer:true},
           {optionValue:"approximately 90 degrees", isAnswer:false}
        ],

    
    },
    {
        questionValue:"What should be the height of the 'Roof pole'?",
        options:[
           {optionValue:"3m", isAnswer:false},
           {optionValue:"Less than 3m", isAnswer:true},
           {optionValue:"more than 3mr", isAnswer:false},
           {optionValue:"can't decided", isAnswer:false}
        ],
    
    },{
        questionValue:"The earthing rod orientation in the pit should be:",
        options:[
           {optionValue:"45 degrees", isAnswer:false},
           {optionValue:"Horizontal", isAnswer:false},
           {optionValue:"Veritical", isAnswer:true},
           {optionValue:"75 degrees", isAnswer:false}
        ],
    
    },{
        questionValue:"What is the cause for mechanical overloads in the induction motors?",
        options:[
           {optionValue:"Stalling", isAnswer:true},
           {optionValue:"blowing of fuse", isAnswer:false},
           {optionValue:"under voltage", isAnswer:false},
           {optionValue:"open circuit", isAnswer:false}
        ],
    
    },{
        questionValue:"Specific energy consumption is least in ____ service.",
        options:[
           {optionValue:"Main line", isAnswer:true},
           {optionValue:"urban", isAnswer:false},
           {optionValue:"suburban", isAnswer:false},
           {optionValue:"rural service only", isAnswer:false}
        ],
    
    },{
        questionValue:"The coasting retardation is around",
        options:[
           {optionValue:"16 km phps", isAnswer:false},
           {optionValue:"1.6 km phps", isAnswer:false},
           {optionValue:"0.16 km phps", isAnswer:true},
           {optionValue:"50 km phps", isAnswer:false}
        ],
    
    },
    

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
            <img src={Eeeimg} alt="cme" id="branchimg"/>
 <div>
 {
           showScore?(
           <div id='quizbox'>
           <h1 id="scoree">You scored {score} out of {questions_cme_1.length}</h1>
       </div>
       ):( 
        
                   <div id="quizbox">
                     <h1 id="qn">eee questions</h1>
        
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

        </div>
    );
}
export default Quizgameeee