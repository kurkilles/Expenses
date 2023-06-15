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
            <ExpensesFilter selected={newFilter} onFilterChange={filterHandler}/>
            <Card className="expenses">
                <ExpenseItem expense={props.expenses[0]} />
                <ExpenseItem expense={props.expenses[1]} />
            </Card>
        </div>
    );
}

export default Expenses;