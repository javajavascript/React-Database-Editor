import React from "react"
import ReactDOM from "react-dom"
//import TodoContainer from "./components-class/TodoContainer"
//import TodoContainer from "./components-function/TodoContainer"
import Table from "./components/Table"
//import "./index.css"
import "./table.css"

//The following is data for "Table" (custom element)
const theadData = ["Name", "Company Email", "Date", "Options"];
const tbodyData = [
{
  id: 1, 
  items: ["John", "john@companyemail.com", "01/01/2021"]
}, 
{
  id: 2, 
  items: ["Sally", "sally@companyemail.com", "12/24/2020"]
},
{
  id: 3, 
  items: ["Maria", "maria@companyemail.com", "12/01/2020"]
},
{
  id: 4, 
  items: ["Sara", "sara@companyemail.com", "12/01/2020"]
},
]

ReactDOM.render(<Table theadData={theadData} tbodyData={tbodyData} />, document.getElementById("root"));