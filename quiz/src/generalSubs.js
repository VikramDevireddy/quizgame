import "./mainquizstyles.css";
import React, { useState } from 'react';
import Quizgame from "./main_quizpage.js"
import quimg from "./questions.png"
import gensubb from "./gensubb.png"


const Quizgamegen=()=>{
const questions_cme_1=[
    {
        questionValue:"The critical angle for total internal reflection is maximum for",
        options:[
           {optionValue:"Red Light", isAnswer:false},
           {optionValue:"Blue Light", isAnswer:false},
           {optionValue:"Ultraviolet rays", isAnswer:false},
           {optionValue:"Infrared rays", isAnswer:true}
        ],
    
    },
    {
        questionValue:"In thermodynamics,heat and work are",
        options:[
           {optionValue:"Path function", isAnswer:true},
           {optionValue:"Intensive thermodynamic state variables", isAnswer:false},
           {optionValue:"Extensive thermodynamic state variables", isAnswer:false},
           {optionValue:"Point function", isAnswer:false}
        ],
    
    },  {
        questionValue:"which is the following is  non-renewable source of energy?",
        options:[
           {optionValue:"Coal", isAnswer:true},
           {optionValue:"Solar", isAnswer:false},
           {optionValue:"Geothermal", isAnswer:false},
           {optionValue:"Tidal", isAnswer:false}
        ],
    
    },  {
        questionValue:"the solution of Mercury with other metals is called",
        options:[
           {optionValue:"Saturated solution ", isAnswer:false},
           {optionValue:"Unsaturated solution", isAnswer:false},
           {optionValue:"Amalagam", isAnswer:true},
           {optionValue:"supersaturated solution", isAnswer:false}
        ],
    
    },  {
        questionValue:"The Two electrons present in an orbital are distinguished by",
        options:[
           {optionValue:"Principal Quantum number", isAnswer:false},
           {optionValue:"Azimuthal Quantum number ", isAnswer:false},
           {optionValue:"Magnetic Quantum number", isAnswer:false},
           {optionValue:"Spin Quantum number", isAnswer:true}
        ],
    
    },
    {
        questionValue:"A strong acid has a",
        options:[
           {optionValue:"Weak conjugate acid", isAnswer:false},
           {optionValue:"Weak conjugate base", isAnswer:true},
           {optionValue:"Strong conjugate base", isAnswer:false},
           {optionValue:"Strong conjugate acid", isAnswer:false}
        ],
    
    },  {
        questionValue:"the poor conductor of the electricity among the following is:",
        options:[
           {optionValue:"Copper", isAnswer:false},
           {optionValue:"Aluminium", isAnswer:false},
           {optionValue:"Silver", isAnswer:false},
           {optionValue:"Pure water", isAnswer:true}
        ],
    
    },  {
        questionValue:"How many sides in octagon",
        options:[
           {optionValue:"3", isAnswer:false},
           {optionValue:"4", isAnswer:false},
           {optionValue:"7", isAnswer:false},
           {optionValue:"8", isAnswer:true}
        ],
    
    },  {
        questionValue:"Who is the father of mathematics",
        options:[
           {optionValue:"Issac newton", isAnswer:false},
           {optionValue:"Alan Turing", isAnswer:false},
           {optionValue:"archimedas", isAnswer:true},
           {optionValue:"john Napier", isAnswer:false}
        ],
    
    },  {
        questionValue:"Who is the father of trigonometry",
        options:[
           {optionValue:"CoHipparchusal", isAnswer:true},
           {optionValue:"mark allo", isAnswer:false},
           {optionValue:"archimedas", isAnswer:false},
           {optionValue:"Blaise pascal", isAnswer:false}
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
            <img src={gensubb} alt="cme" id="branchimg"/>
 <div>
 {
           showScore?(
           <div id='quizbox'>
           <h1 id="scoree">You scored {score} out of {questions_cme_1.length}</h1>
       </div>
       ):( <div id="quizbox">
        <h1 id="qn">general sub questions</h1>

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
export default Quizgamegen