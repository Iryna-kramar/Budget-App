import React, { useState } from "react";

const BudgetContext = React.createContext();

const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets ] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const getBudgetExpenses = (budgetId) => {
    return 
  };
  const addExpense = () => {};
  const addBudget = () => {};
  const deleteBudget = () => {};
  const deleteExpense = () => {};

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetProvider, BudgetContext };
