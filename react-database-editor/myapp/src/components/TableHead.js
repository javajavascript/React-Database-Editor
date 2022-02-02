import React from "react";

const TableHead = (props) => {
    return (
        <tr>
            {props.data.map((item) => {
                return <th key={item}>{item}</th>
            })}
        </tr>
    );
};

export default TableHead;


