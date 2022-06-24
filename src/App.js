import Routing from './routes';
import React from 'react';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routing/>
        </ThemeProvider>
    )
}
export default App;
