
import {useState} from "react";

function App() {
const [form,setForm]= useState({
    amount:0,
    description:'',
    date:""});
    async function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        };
        const res = await fetch('http://localhost:4000/transaction', requestOptions);
        const data = await res.json();
        console.log(data);
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
