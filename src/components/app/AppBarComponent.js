import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#2E3336"
    },
    toolBar: {
        paddingLeft: 5
    },
    iconBtn: {
        margin: 0,
        "&:hover": {
            color: theme.palette.success.light
        }
    },
    title: {
        flexGrow: 1,
        paddingLeft: 10
    }
}));

const AppBarComponent = () => {
    const classes = useStyles();

    return (
        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <IconButton
                    className={classes.iconBtn}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <Home/>
                </IconButton>

                <Typography variant={"h5"} className={classes.title}>
                    GNews
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;