
import Quizgameece from './ecepage';
import Quizgame from './main_quizpage';
import Quizgameeee from "./eeepage"
import Quizgamegen from './generalSubs';


function App() {
  var s="gen"
  
  if(s==="ece"){

  
  return (
    
    <div className="App">

      <Quizgameece></Quizgameece> 

      </div>
  );
}
if(s==="cme"){

  
  return (
    
    <div className="App">

      <Quizgame></Quizgame> 

      </div>
  );
}
if(s==="eee"){

  
  return (
    
    <div className="App">

      <Quizgameeee></Quizgameeee> 

      </div>
  );
}
if(s==="gen"){

  
  return (
    
    <div className="App">

      <Quizgamegen></Quizgamegen> 

      </div>
  );
}
}

export default App;
