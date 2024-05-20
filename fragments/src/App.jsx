

import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return(
    <div>
      <h1>healthy food</h1>
      <ul class ="List-group">
        
      <li class="List-group-item">an item</li>
      <li class="List-group-item">an item</li>
      <li class="List-group-item">an item</li>
      <li class="List-group-item">an item</li>
      </ul>
    </div>

  );
  
}

export default App;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return(
    <React.Fragment>
    <h1>healthy food</h1>
    <ul class ="List-group">
    
    <li class="List-group-item">daal</li>
    <li class="List-group-item">green vegetables</li>
    <li class="List-group-item">roti </li>
    <li class="List-group-item">salad</li>
    </ul>
    </React.Fragment>
    
    );
    
  }
  
  export default App;
  
  
  
  
  import "bootstrap/dist/css/bootstrap.min.css";
  function App(){
    return(
      <>
      <h1>healthy food</h1>
      <ul class ="List-group">
      
      <li class="List-group-item">daal</li>
      <li class="List-group-item">green vegetables</li>
      <li class="List-group-item">roti </li>
      <li class="List-group-item">salad</li>
      </ul>
      </>
      
      );
      
    }
    
    export default App;
    
    

    
    
    import React from "react";
    import "bootstrap/dist/css/bootstrap.min.css";
    
    function App(){
      
      let foodItems = ["dal","green vegetables","roti","salad","milk","gheee","makhhan"];
      
      return(
        <React.Fragment>         
        <h1>healthy food</h1>                                                                       
        <ul class ="List-group">
        {foodItems.map(m =>  <li key ={m}class="List-group-item">{m}</li>)}
        </ul>
        </React.Fragment>
        
        );
        
      }
      
      export default App;
      
      
      
      import React from "react";
      import "bootstrap/dist/css/bootstrap.min.css";
      
      function App(){
        // let foodItems = ["dal","green vegetables","roti","salad","milk","gheee","makhhan"];
        
        
        
        let foodItems = [];
        
        
        if (foodItems.length===0){
          return <h2>i am still gungry</h2>;
        }
        
        return(
          <React.Fragment>         
          <h1>healthy food</h1>                                                                       
          <ul class ="List-group">
          {foodItems.map(m =>  <li key ={m}class="List-group-item">{m}</li>)}
          </ul>
          </React.Fragment>
          
          );
          
        }
        
        export default App;
        
        
        
        
        
        import React from "react";
        import "bootstrap/dist/css/bootstrap.min.css";
        
        function App(){
          // let foodItems = ["dal","green vegetables","roti","salad","milk","gheee","makhhan"];
          
          
          
          let foodItems = [];
          
          
          
          
          
          return(
            
            <React.Fragment>         
            <h1>healthy food</h1>       
            {foodItems.length===0 ? <h3>can i eat</h3> : <h3>no you cant</h3>}                                                                
            <ul class ="List-group">
            {foodItems.map(m =>  <li key ={m}class="List-group-item">{m}</li>)}
            </ul>
            </React.Fragment>
            );
          }
          
          export default App;
          
          
          
          */
         import React from "react";
         import Fooditems from "./components/fooditem";
         import Errormessage from "./components/errormessage";
         import "bootstrap/dist/css/bootstrap.min.css";
         import ".item.module.css";
          
         
         function App(){
         //  let fooditems = ["dal","green vegetables","roti","salad","milk","gheee","makhhan"];
           
           let fooditems = [];
          
            return(
              <>
              <h1>hello food items</h1>
              <Errormessage hi ={fooditems}></Errormessage>
              <Fooditems hi ={fooditems}></Fooditems>
              </>
              );
              
              
            }
            
            export default App;








