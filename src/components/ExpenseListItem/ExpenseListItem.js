import React from "react";
import classNames from "classnames";
import "./ExpenseListItem.scss";

export default function ExpenseListItem(props) {

  return (
    <li className="expense-item">
      <h2>{props.expense}</h2>
    </li>
  );
}
