import { Autocomplete, Button, Container, Fab, Grid, TextField } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BorderTop } from '@mui/icons-material';

const AddItems = ({ add, type, setType, inputAmount, setInputAmount, inputCategory, setInputCategory, D, M, Y}) => {
    
    function typeHandlerInc () {
        setType('Inc');

    };

    function typeHandlerExp(){
        setType('Exp');
    };

    function resetHandler(){
        setInputAmount(0);
        setInputCategory("");
    }

    const categoryHandler = (element, newCategory) => {
        setInputCategory(newCategory);
    };

    const AmountHandler = (element) => {
        setInputAmount(Number(element.target.value));
    };
 

    const AddItemHandler = (element) => {
        element.preventDefault();
        let flug1;
        let flug2;
        if(inputAmount === 0 || inputCategory === ""){
            if(inputAmount === 0){
                flug1 = "金額"
                alert(`${flug1}が入力されていません。`);
            }else{
                flug1 = "カテゴリー"
                alert(`${flug1}が入力されていません。`);
            }
           
           
            
        }else if((typeof inputAmount) !== "number"){
            if((typeof inputAmount) !== "number"){
                flug2 = "金額"
                alert(`${flug2}は数字で入力してください。`);
            }
            

        }else{
            try{
                add(inputCategory, inputAmount,type,D,M,Y);
            }finally{
                resetHandler();
                console.log("inputAmount,category -> DB");
            }
        }
    };

    const categoryOptions = [
        "食費",
        "家賃",
        "水道光熱費",
        "通信費",
        "保険",
        "教育費",
        "日用品",
        "交際費",
        "娯楽費",
        "美容",
        "医療費",
        "交通費",
        "その他",
        "給料",
        "お小遣い",
        "臨時収入",
     ];

        
    
    return(
        <Container component="div" maxWidth = "md">
            <Box sx={{
                        m: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "center",
                        py: 7,
                        px: 'auto'
                    }}
            >   
            
                <Grid container spacing={2} alignItems="center">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" aria-label="Income" onClick={typeHandlerInc}>
                            <AddIcon />
                        </Fab>
                    </Box>
                    
                    
                    <Grid item xs = {5}>
                        <Autocomplete

                            freeSolo
                            id="category"
                            options={categoryOptions}
                            onChange = {categoryHandler}
                            onInputChange = {categoryHandler}
                            renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    label="カテゴリー"
                                    required
                                    fullWidth
                                    name="category"
                                    type="string"
                                    variant="standard"
                                />}
                        />
                    </Grid>
                    <Grid item xs = {5}>
                        <TextField
                            value={inputAmount}
                            id="amount"
                            label="金額"
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            required
                            onChange={AmountHandler}
                        />
                            
                    </Grid>

                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" aria-label="Expense" onClick={typeHandlerExp}>
                            <RemoveIcon />
                        </Fab>
                    </Box>


                </Grid>

                
            </Box>
            <Box sx={{
                        m: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "center",
                        py: 3,
                        px: 'auto'

                    }}
            >   
                <Button variant="contained" onClick={AddItemHandler}>
                        登録
                </Button>
            </Box>
        </Container>
    );

};
export default AddItems;