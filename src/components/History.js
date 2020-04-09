import React, {Fragment, useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from '../context/GlobalState'

export const History = () => {

    const {transactions} = useContext(GlobalContext);

    // console.log(context);

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction = {transaction} />
                ))}
            </ul>
        </Fragment>
    )
}
