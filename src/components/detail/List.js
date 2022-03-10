import React from 'react';
import { withRouter } from "react-router";

import IncRecord from "./IncRecord";
import ExpRecord from "./ExpRecord";

import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { TableBar } from '@mui/icons-material';



const List = ({Delete, selectD, selectM, selectY, IncItems, ExpItems,type,setType, history, forceUpdate}) => {


    const setIncRecord = () => {
        
        if(IncItems){
            const thisIncItems = [];
            IncItems.forEach((IncItem) => {
                if(IncItem.Month === selectM && IncItem.Year === selectY && IncItem.Day === selectD ){
                    thisIncItems.push(IncItem);
                }
        
            });
        
            return (
                            
                thisIncItems.map((IncItem) => (

                    <IncRecord  
                        Delete = {Delete} 
                        IncItem = {IncItem}
                        type = {type}
                        setType = {setType}
                        forceUpdate = {forceUpdate}
                                
                    />
                    
                    
                ))
                

            );
        }
    };

    const setExpRecord = () => {
        if(ExpItems){
            const thisExpItems = [];
            ExpItems.forEach((ExpItem) => {
                if(ExpItem.Month === selectM && ExpItem.Year === selectY && ExpItem.Day === selectD ){
                    thisExpItems.push(ExpItem);
                }
            });
            return(
                thisExpItems.map((ExpItem) => (
                    
                    <ExpRecord  
                        Delete = {Delete} 
                        ExpItem = {ExpItem}
                        type = {type}
                        setType = {setType}
                        forceUpdate = {forceUpdate}
                                    
                    />
                
                ))
            );
        }
    }

    const finishHandler = () => {
        
        history.push("/");
    }
    


    return(
        <Container component="div" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTop: 2,
                    borderColor: 'text.disabled',
                    pt: 2
                }}
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs = {6}>
                        <Typography variant="h4" gutterBottom component="div">
                            収入
                        </Typography>
                    </Grid>
                    <Grid item xs = {6}>
                        <Typography variant="h4" gutterBottom component="div">
                            支出
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container spacing={3} >

                    <Grid item xs = {6}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>カテゴリー</TableCell>
                                    <TableCell align="left">金額&nbsp;(円)</TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {setIncRecord()}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Grid>
                    <Grid item xs = {6}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>カテゴリー</TableCell>
                                    <TableCell align="right">金額&nbsp;(円)</TableCell>
                                    <TableCell align='right'></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {setExpRecord()}
                            </TableBody>
                            </Table>
                        </TableContainer>
                         
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Button variant="contained" onClick={finishHandler}>
                    完了
                </Button>
                
            </Box>
            
        </Container>
    );
};
export default withRouter(List);