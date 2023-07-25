
import './App.css'
import {useState} from "react";

function App() {
const [form,setForm]= useState({
    amount:0,
    description:'',
    date:""});
    async function handleSubmit(e){
        e.preventDefault();
        // console.log(form);
        const res = await fetch('http://localhhost:4000/transaction',{
            method:'POST',
            body:form,
        });
        console.log(res);
    }

    function handleInput(e){
        console.log(e.target.value);
        setForm({... form,[e.target.name]:e.target.value});
    }

  return (
    <>
     <div>
         Transaction Form
         <form onSubmit={handleSubmit}>
             <div>
                 <input type="number" value={form.amount}
                        onChange={handleInput}
                        name="amount"
                        placeholder="Enter Transaction"/>
             </div>
             <div>
               <input type="text"
                      value={form.description}
                      onChange={handleInput}
                      placeholder="Enter Transaction Description"
                      name="description"/>
             </div>
             <div>
                 <input type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInput}
                        placeholder="Enter Transaction Description"/>
             </div>
             <button type="submit">Submit</button>
         </form>
     </div>
    </>
  )
}

export default App
