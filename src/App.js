import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const getNewExpense = expense => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
  }
  //expenses.
  };

  const expenses = [{
    id:1,
    date: new Date(2023, 6, 27),
    title: "Tissues",
    amount: 2.94
  }, {
    id:2,
    date: new Date(2022, 11, 2),
    title: "Candles",
    amount: 80.01
  }

  ];
  return (
    <div>
      <NewExpense onNewExpense={getNewExpense}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;