import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';

const theme = createTheme({
      palette: {
            primary: {
                  main: "#3483fa"
            },
            secondary: {
                  main: "rgba(65,137,230,.15)",
                  contrastText: "#3483fa"
            },
      },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
      <ThemeProvider theme={theme}>
            <App />
      </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
