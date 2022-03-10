import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import theme from "../theme/theme";

import { Card, CardContent, Paper, ThemeProvider } from "@mui/material";
import { Button, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Avatar } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { Box } from "@mui/material";
import { Checkbox } from "@mui/material";




const Login = ({ history }) => {
    const { Login } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        Login(email.value, password.value, history);


    };

    return(
        <ThemeProvider theme={theme}>
            
            <Container component="main" maxWidth="sm">
                <CssBaseline/>
                <Paper 
                    elevation={3} 
                    sx={{
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        alignItems: 'center',
                        p: 'auto'

                    }}
                >
                    <Box
                        sx={{
                            m: 'auto',
                            p: 'auto',
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main',marginTop:5 }}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            ログイン
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3, mb: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="メールアドレス"
                                        name="email"
                                        autoComplete="email"
                                    />
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="パスワード"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                ログイン
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to = "/signup" variant="body2">
                                        <Typography component="h7" variant="h7">
                                            アカウントをお持ちでない方はこちら
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        
        
                    </Box>
                </Paper>
                
            </Container>
            
        </ThemeProvider>
        
            /*<div>
                <h1>アカウントをお持ちの方</h1>
                <form onSubmit = {handleSubmit}>
                    <div className = "AcountBox">
                        <label className = "AcountCategory">メールアドレス</label>
                        <input name = "email" type = "email" placeholder = "例)email@gmail.com" />

                    </div>
                    <div className = "AcountBox">
                        <label className = "AcountCategory">パスワード</label>
                        <input name = "password" type = "password" placeholder = "パスワードを入力してください" />
                    </div>
                        <button type = "Submit" >ログイン</button>
                </form>
                <Link to = "/signup">アカウント登録をされていない方</Link>

            </div>*/
        
    );
};
export default withRouter(Login);