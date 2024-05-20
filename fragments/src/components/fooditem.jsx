import Item from "./item";

const Fooditems = ({hi}) => {

    
    return (
   
    <ul className ="list-group">
        {hi.map((i) =>{
            <Item key ={i} food={i}></Item>
        })}
       </ul>
   
 );
};
        
        
 export default Fooditems;



