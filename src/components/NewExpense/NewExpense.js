import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const newDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.getNewExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSavaValue={newDataHandler}/>
        </div>
    );
};

export default NewExpense;