import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
const Expenseitem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const onClickHandler = () => {
  //   setTitle("First step!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={onClickHandler}>Change Title</button> */}
    </Card>
  );
};
export default Expenseitem;