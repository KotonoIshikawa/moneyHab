import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ExpRecord = ({ Delete, ExpItem, forceUpdate }) => {

    const deleteHandler = () => {
        
        
        const docId = ExpItem.docId;
        Delete("Exp",docId)
        .then(() => {forceUpdate()})

    }

    return(

        <TableRow
            key={ExpItem.category}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{ExpItem.category}</TableCell>
            <TableCell align="left">{ExpItem.Amount}</TableCell>
            <TableCell align='right'>
                <IconButton onClick={deleteHandler}>
                        <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
export default ExpRecord;