import"./styles.css";
import Button from "../../components/Button/Button";
import Imput from"../../components/Input/Input";
import Counter from "../../components/Counter/Counter";



function Lesson04() {
    // 2.Variante
    const showMessage = ()=>{
        alert("Hello, user");
    };

    const showNameMessage = (userName)=>{
        alert(`Hello, ${userName}`);
    }
    const onChange = (event, message)=> {
        console.log(`${event.target.value}-${message}`);
        // console.log(event.target.value);
        // console.log(event);
    };
    return(
        <div className="lesson04-container">
            {/* <Imput onImputChange ={onChange}/>
            <Imput onImputChange ={(event) =>onChange(event,'value')}/>

            {/* 1. Variante */}
            {/* <Button name="Func Inner" onButtonclick={()=> alert("Hi")}/>
            <Button name="Func Outer" onButtonclick={showMessage}/> */}
            {/* 3. Variante */}
            {/* <Button name="Func With Parameters" onButtonclick={() =>showNameMessage("Tom")}/> */} 
        
        <Counter/>
        </div>
    );
}
export default Lesson04;
