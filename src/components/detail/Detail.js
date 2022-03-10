import React , { useState, useContext, useEffect}from 'react';
import { useLocation } from "react-router";
import { db } from "../../firebase/Firebase";
import { AuthContext } from "../../auth/AuthProvider";
import { useForceUpdate } from "../useForceUpdate";


import { doc, deleteDoc, Timestamp, setDoc} from "firebase/firestore";

import Header from './Header';
import AddItems from './AddItems';
import List from './List';
import { Paper, ThemeProvider } from "@mui/material";
import theme from '../../theme/theme';
import { Container, CssBaseline } from '@mui/material';


function Detail () {
    const location = useLocation();
    const [inputCategory, setInputCategory] = useState("");
    const [inputAmount, setInputAmount] = useState(0);
    const [type, setType] = useState("");
    const [IncItems, setIncItems] = useState([]);
    const [ExpItems, setExpItems] = useState([]);
    const [selectD, setSelectD] = useState("");
    const [selectM, setSelectM] = useState("");
    const [selectY, setSelectY] = useState("");

    const forceUpdate = useForceUpdate();

    //初回れんだーのみ
    useEffect(() => {
        setIncItems(location.state.IncItems);
        setExpItems(location.state.ExpItems);
        setSelectD(location.state.selectD);
        setSelectM(location.state.selectM);
        setSelectY(location.state.selectY);
        console.log("Detail useEffect called");
        if (window.name !== "any") {
            window.location.reload();
            window.name = "any";
        } else {
            window.name = "";
        }
                

    },[]);

    const {currentUser} = useContext(AuthContext);

    const add = async(category, Amount,type,d,m,y) => {
        try{    
                const docId = Math.random().toString(32).substring(2);
                const date = Timestamp.now();
                if(type === 'Inc'){
                    
                    await setDoc(doc(db, 'IncItems', docId), {
                        uid: currentUser.uid,
                        category: category,
                        Amount: Amount,
                        date: date,//FireBaseの日付(入力時間)
                        Day:d,
                        Month:m,
                        Year:y

                        
                    })

                    setIncItems([
                        ...IncItems,
                        {
                            Amount: Amount,
                            category: category,
                            date: date,
                            docId: docId,
                            Day:d,
                            Month:m,
                            Year:y

                        }
                    ]);
                    
                }else if(type ==='Exp'){

                    await setDoc(doc(db, "ExpItems", docId), {
                        uid: currentUser.uid,
                        category: category,
                        Amount: Amount,
                        date: date,//FireBaseの日付（入力時間）
                        Day:d,
                        Month:m,
                        Year:y

                        
                    })
                    
                    setExpItems([
                        ...ExpItems, 
                        {
                            Amount: Amount,
                            category: category,
                            date: date,
                            docId: docId,
                            Day:d,
                            Month:m,
                            Year:y
    
                        }
                    ]);

                }

        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            
        }
    };

    const Delete = async(type,docId) => {
        console.log("delete");
        if(type === 'Inc'){
            await deleteDoc(doc(db, "IncItems", docId));
            const targetId = docId;
            const newIncItems = IncItems;
            newIncItems.some(function(v, i){
                if (v.docId==targetId) newIncItems.splice(i,1); 
            });
            setIncItems(IncItems);
            

            console.log(IncItems);
        }else if(type === 'Exp'){
            await deleteDoc(doc(db, "ExpItems", docId));
            const targetId = docId;
            const newExpItems = ExpItems;
            newExpItems.some(function(v, i){
                if (v.docId==targetId) newExpItems.splice(i,1); 
            });
            setExpItems(ExpItems);
        }

    };


    
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component = "div" maxWidth = "lg">
                <CssBaseline />
                
                <Header
                    selectD = {selectD}
                    selectM = {selectM}
                    selectY = {selectY}
                />
                
                
                <Paper
                        elevation={8} 
                        sx={{
                            maxwidth: 600,
                            alignItems: 'center',
                            p: 'auto',
                            m:'auto',
                            mt:8
                            

                            

                        }}
                >
                    
                    <AddItems
                        add = {add}
                        type = {type}
                        setType = {setType}
                        inputAmount = {inputAmount}
                        setInputAmount = {setInputAmount}
                        inputCategory = {inputCategory}
                        setInputCategory = {setInputCategory}
                        D = {selectD}
                        M = {selectM}
                        Y = {selectY}
                    />
                </Paper>

            
                <List
                    Delete = {Delete}
                    type = {type}
                    setType = {setType}
                    selectD = {selectD}
                    selectM = {selectM}
                    selectY = {selectY}
                    IncItems = {IncItems}
                    ExpItems = {ExpItems}
                    
                    forceUpdate = {forceUpdate}



                />

            

            </Container>
        </ThemeProvider>
        

    );
    
}
export default Detail;
