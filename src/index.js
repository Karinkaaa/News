import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "./store";
import App from "./components/app";
import MessageInfo from "./containers/info";

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#334e8b"
        },
        secondary: {
            main: "#d13e45"
        }
    }
});

render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
            <MessageInfo/>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);