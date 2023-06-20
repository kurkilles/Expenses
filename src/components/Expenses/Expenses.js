import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [newFilter, setFilter] = useState("");

    const filterHandler = filterData => {
        setFilter(filterData);
        console.log(filterData);
    }

    return (
        <div>            
            <Card className="expenses">
                <ExpensesFilter selected={newFilter} onFilterChange={filterHandler}/>
                {props.expenses.map(expense => <ExpenseItem expense={expense} />)}
            </Card>
        </div>
    );
}

export default Expenses;