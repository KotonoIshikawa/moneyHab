import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const IncRecord = ({ Delete, IncItem,forceUpdate}) => {

    const deleteHandler = () => {
    
        const docId = IncItem.docId;
        Delete("Inc",docId)
        .then(() => {forceUpdate()})


    }

    return(
            <TableRow
              key={IncItem.category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                    <TableCell component="th" scope="row">{IncItem.category}</TableCell>
                    <TableCell align="left">{IncItem.Amount}</TableCell>
                    <TableCell align='right'>
                        <IconButton onClick={deleteHandler}>
                                <DeleteIcon/>
                        </IconButton>
                    </TableCell>
            </TableRow>
            


    );
};
export default IncRecord;