import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [expenseTitle, setTitle] = useState(props.expense.title);
    const expenseDate = props.expense.date;
    //let expenseTitle = props.expense.title;
    const expensePrice = props.expense.amount;

    const clickHandler = () => {
        setTitle("???");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expensePrice + " PLN"}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;