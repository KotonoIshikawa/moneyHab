import React, { useEffect, useState,useRef, useContext} from "react";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { db } from "../firebase/Firebase";
import { collection, query, orderBy, where, onSnapshot} from "firebase/firestore";
import { AuthContext } from "../auth/AuthProvider";

import { useForceUpdate } from "./useForceUpdate";

import Header from "./Header";
import Balance from "./Balance";
import { useHistory } from "react-router-dom";

import theme from "../theme/theme";
import { Container, Grid, ThemeProvider, Box, IconButton, CssBaseline, Paper } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';




function Main () {

    const history = useHistory();
    
    const targetDate = new Date();
    
    const [d, setD] = useState("");
    const [ IncItems, setIncItems ] = useState([]);
    const [ ExpItems, setExpItems ] = useState([]);
    const [m, setM] = useState("");
    const [y, setY] = useState("");
    const currentDay = targetDate.getDate();
    const currentMonth = targetDate.getMonth() +1;
    const currentYear = targetDate.getFullYear();

    const {currentUser} = useContext(AuthContext);

    const isFirstRender = useRef(true);

    const forceUpdate = useForceUpdate();
    
    useEffect(() => {
        getIncItems();
        getExpItems();
    }, []);

    useEffect(() => {
        if(isFirstRender.current) { // 初回レンダー判定
            isFirstRender.current = false; 
            return;// もう初回レンダーじゃない
        } else {
            const passObj = {
                
                IncItems: IncItems,
                ExpItems:ExpItems,
                selectD: d,
                selectM :m,
                selectY: y,
            
            }
            history.push({
                pathname: "/detail",
                state : {

                    IncItems: passObj.IncItems,
                    ExpItems:passObj.ExpItems,
                    selectD: passObj.selectD,
                    selectM :passObj.selectM,
                    selectY: passObj.selectY,

                }
            });
        }
    
    },[d]);

    const handleClickCalender = ((arg) => {
            console.log(`カレンダー押下時:${IncItems.length}`);
        
            const selectD = arg.dateStr;

            const a = selectD.slice(0,4);
            const b = selectD.slice(5,7);
            const c = selectD.slice(8,10);
            
            setM(b);
            setY(a);
            setD(c);
            
    });

    //ユーザのDBをget
    const getIncItems = () => {
        console.log("get Inc colled");
        const IncDoc = collection(db, "IncItems");

        const queryInc = query(IncDoc, where("uid", "==", currentUser.uid), orderBy("date"));

        const IncomeItems = [];
        const unsubscribe = onSnapshot(queryInc, (querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                IncomeItems.push(
                    {
                        ...doc.data(),
                        docId: doc.id
                    }
                );
            });
        });
        
        setIncItems(IncomeItems);
    }

    const getExpItems = () => {
        
        const ExpDoc = collection(db, "ExpItems");

        const queryExp = query(ExpDoc, where("uid", "==", currentUser.uid), orderBy("date"));
        const expenseItems = [];
        const unsubscribe = onSnapshot(queryExp, (querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                expenseItems.push(
                    {
                        ...doc.data(),
                        docId: doc.id
                    }
                );
            });
        });

        
        setExpItems(expenseItems);
    }

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component = "div" maxWidth = "lg">
                <Header
                    currentYear = {currentYear}
                    currentMonth = {currentMonth}
                    currentDay = {currentDay}
                />

                <Container component = "div" maxWidth = "xs">
                    <Box
                        sx={{
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderBottom: 2,
                            borderColor: 'primary.main'
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Balance
                                    IncItems = {IncItems}
                                    ExpItems = {ExpItems}
                                    
                                />
                            </Grid>

                            <Grid item xs={1}>
                                <IconButton aria-label="upDate" onClick={() => forceUpdate()}>
                                    <CalculateIcon/>
                                </IconButton>

                            </Grid>
                        
                        </Grid>

                    </Box>
                </Container>
                <Container component = "div" maxWidth = "lg">
                    <Paper
                        elevation={8} 
                        sx={{
                            maxwidth: 600,
                            alignItems: 'center',
                            p: 'auto',
                            m:'auto',
                            mt: 8

                            

                        }}
                    >
                        <Box
                            sx={{
                                
                                alignItems: 'center',
                                m:'auto',
                                p: 5

                
                            }}
                        >
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                locale="ja" 
                                dateClick={(day) => handleClickCalender(day)}

                            />
                        </Box>
                    </Paper>
                </Container>
                
          

           
                {/*<Bar_graph
                    ExpItems = {ExpItems}
                    setExpItems = {setExpItems}
                    currentMonth = {currentMonth}
                    currentYear = {currentYear}

                />*/}
            

           
                {/*<pie_chart
                    ExpItems = {ExpItems}
                    setExpItems = {setExpItems}
                    currentMonth = {currentMonth}
                    currentYear = {currentYear}

                />*/}
                

            </Container>
           
                
                
        </ThemeProvider>
    );
}
export default Main;