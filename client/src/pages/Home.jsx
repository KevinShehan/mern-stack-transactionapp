import React from 'react';
import TransactionList from '../components/TransactionList';
import TransactionForm from "../components/TransactionForm";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

const InitialForm = {
    amount: 0,
    description: '',
    date: ""
}

function Home() {
    const [form, setForm] = useState(InitialForm);

    const [transactions, settransactions] = useState([]);
    const [edittransaction, setEdittransaction] = useState([]);
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
            setForm(InitialForm);
            fetchTransaction();
        }
    }


    function handleInput(e) {
        console.log(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

  return (
    <Container>
            <div>
     
                <TransactionForm fetchTransaction={fetchTransaction} editTransaction={edittransaction} />
                <TransactionList transactions={transactions}
                    fetchTransaction={fetchTransaction}
                    setEditTransaction={setEdittransaction} />

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
                    <button variant="contained" type="submit">Submit</button>

                </form>
                <br />
                {/* <table border="1">
                        <caption>All Transactions</caption>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {transactions.map((trx) => (
                                <tr key={trx._id}>
                                    <td>{trx.amount}</td>
                                    <td>{trx.description}</td>
                                    <td>{trx.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
            </div>
        </Container>
  )
}

export default Home
