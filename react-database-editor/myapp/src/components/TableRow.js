import React from "react";

//edit and confirm edit buttons are rendered conditionally
const TableRow = (props) => {
    return (
        //tr with the actual data
        <tr>
            {props.data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
            {/* only show the edit button when showEdit is true (edit mode is off), otherwise hide it */}
            {/* only show the confirm edit button when showEdit is false (edit mode is on), otherwise hide it */}
            <td>
                {props.showEdit ? <button className="edit" onClick={() => props.editRowFunction(props.data[0])}>Edit</button> : null}
                {!props.showEdit ? <button className="editConfirm" onClick={() => props.editRowConfirmFunction(props.editWord, props.id)}>Confirm Edit</button> : null}
                <button className="delete" onClick={() => props.deleteRowFunction(props.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;