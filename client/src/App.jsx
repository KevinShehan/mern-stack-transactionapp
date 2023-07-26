
import { useEffect, useState } from "react";

function App() {
    const [form, setForm] = useState({
        amount: 0,
        description: '',
        date: ""
    });

    const [transactions, settransactions]=useState([])
    useEffect(() => {
        fetchTransaction()
    }, [])

    async function fetchTransaction() {
        const res = await fetch('http://localhost:4000/transaction');
        const data = await res.json();
        settransactions(data)
        console.log(data);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        };
        const res = await fetch('http://localhost:4000/transaction', requestOptions);
     if (res.ok) {
         fetchTransaction();
     }
    }


    function handleInput(e) {
        console.log(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
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
                            placeholder="Enter Transaction" />
                    </div>
                    <div>
                        <input type="text"
                            value={form.description}
                            onChange={handleInput}
                            placeholder="Enter Transaction Description"
                            name="description" />
                    </div>
                    <div>
                        <input type="date"
                            name="date"
                            value={form.date}
                            onChange={handleInput}
                            placeholder="Enter Transaction Description" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <br />
                <section>
                    <table border="1">
                        <caption>All Transactions</caption>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                        { transactions.map((trx)=>(
                            <tr key={trx._id}>
                            <td>{trx.amount}</td>
                            <td>{trx.description}</td>
                            <td>{trx.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}

export default App
