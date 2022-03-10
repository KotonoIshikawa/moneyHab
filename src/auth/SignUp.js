import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import theme from "../theme/theme";

import { Paper, ThemeProvider } from "@mui/material";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Avatar } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Box } from "@mui/material";



const SignUp = ({ history }) => {
    const { Signup } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        Signup(email.value, password.value, history);

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
                            <AssignmentIndIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            アカウント登録
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
                                        type="email"
                                        
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
                                登録
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to = "/signup" variant="body2">
                                        <Typography component="h7" variant="h7">
                                            アカウントをお持ちの方はこちら
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        
        
                    </Box>
                </Paper>
                
            </Container>
            
        </ThemeProvider>

        /*<ThemeProvider theme={theme}>
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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginTop:5 }}>
                            <AssignmentIndIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            アカウント登録
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 5 }}>
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
                                登録
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to ="/login" variant="body2">
                                        <Typography component="h7" variant="h7">
                                            アカウントをお持ちの方はこちら
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>*/
        /*<div>
            <h1>アカウント登録をされていない方</h1>
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
            <Link to = "/login">アカウントをお持ちの方</Link>

        </div>*/
    );
};
export default withRouter(SignUp);