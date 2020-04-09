import React, {Fragment, useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        
        e.preventDefault();

        console.log("Hello");

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: +amount
        }

        console.log(newTransaction);

        addTransaction(newTransaction);
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                            (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}
