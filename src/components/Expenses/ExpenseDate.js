import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const expenseDate = props.date;
    const dateString = (expenseDate.getDate().toString().length < 2 ? "0" + expenseDate.getDate().toString() : expenseDate.getDate().toString()) + 
    "." + (expenseDate.getMonth().toString().length < 2 ? "0" + expenseDate.getMonth().toString() : expenseDate.getMonth().toString()) + 
    "." + expenseDate.getFullYear().toString();

    return (
            <div className="expense-date">{dateString}</div>
    );
}

export default ExpenseDate;