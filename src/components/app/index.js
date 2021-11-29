import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "./AppBarComponent";
import News from "../../containers/news";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBarComponent/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <News/>
            </main>
        </div>
    );
};

export default App;