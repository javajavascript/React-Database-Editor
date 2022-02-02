import React, { useState, useRef } from "react"
import TableRow from "./TableRow.js";
import TableHead from "./TableHead.js";

const Table = (props) => {
    const [table, setTable] = useState(props.tbodyData)
    //the input of the bottom textbox to add a new row
    const [newWord , setNewWord] = useState("");
    //sets the visibility of the edit and confirm edit buttons
    const [showEdit, setShowEdit] = useState(true);
    //need reference to focus the textbox
    const textboxRef = useRef();

    const deleteRow = (id) => {
        setTable([
          ...table.filter(row => {
            return row.id !== id
          }),
        ])
    }

    //add a new row using newWord passed in from onClick
    //TBI: breakup into two functions, one that generates a new row and one that adds/validates the row
    const addRow = (newWord, e) => {
        e.preventDefault(); //prevent page reload onClick
        const date = new Date();
        const dateFormatted = date.toLocaleDateString();
        const newRow = {
          id: Math.floor(Math.random() * 101), //TBI: ideally use UUID
          items: [newWord, newWord.toLowerCase()+"@companyemail.com", dateFormatted]
        }
        //if newWord is blank, set textbox border red to show invalid input and display error message
        //if newWord is not blank, add a new record to the table and set the textbox border black
        if (newWord === "") { 
            textboxRef.current.style.borderColor="red";
            alert("Error: Input is Blank");
        }
        else { 
            textboxRef.current.style.borderColor="black";
            setTable([...table, newRow]);
        }
    }

    //fills the bottom textbox with the name of the row
    const editRow = (data) => {
        setNewWord(data);
        setShowEdit(false);//hide edit button and show confirm edit button
        textboxRef.current.focus();//focus the textbox
        textboxRef.current.style.color="blue";//set the input text blue to show editing instead of adding
    }

    //does the actual editing of the row
    //setTable is necessary for re-render (update state)
    const editRowConfirm = (newWord, rowId) => {
        setShowEdit(true);//show edit button and hide confirm edit button
        textboxRef.current.style.color="black";//set the input text blue to show adding instead of editing
        const date = new Date();
        const dateFormatted = date.toLocaleDateString();
        const updatedRow = {
            id: rowId,
            items: [newWord, newWord.toLowerCase()+"@companyemail.com", dateFormatted]
        }
        setTable(
            table.map(row => {
                if (row.id === rowId && newWord !== "") {
                    row = updatedRow
                }
                return row;
            })    
        )
        setNewWord("");//set bottom textbox to blank
    }

    //TBI: can refactor and break up into components
    //TBI: form for searching
    return (
        <div>
        {/* <form>
            <input 
            type="text" 
            placeholder="Search" 
            value={searchWord}
            onChange={(e) => searchRows(e)}
            />
        </form>  */}
        <table className = "tableClass">
            <thead>
                <TableHead key = {props.theadData} data={props.theadData}/>
            </thead>
            <tbody>
                {table.map((item) => {
                    return <TableRow 
                    key = {item.id} 
                    id = {item.id} //because key is not a prop
                    data={item.items}
                    deleteRowFunction={deleteRow}
                    editRowFunction={editRow}
                    editRowConfirmFunction={editRowConfirm}
                    editWord={newWord}
                    showEdit={showEdit}
                    />
                })}
            </tbody>
        </table>
        <form>
            <input 
            type="text" 
            placeholder="Add" 
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            ref={textboxRef}
            />
            {/* only show the add button when showEdit is true (edit mode is off), otherwise hide it */}
            {showEdit ? <button className="add" onClick = {(e) => addRow(newWord, e)}>Add</button> : null}
        </form> 
        </div>
    ); 
}

export default Table;