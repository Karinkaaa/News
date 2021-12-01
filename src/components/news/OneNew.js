import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, Divider, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "left",
        overflowWrap: "break-word"
    },
    div: {
        display: "flex",
        placeContent: "space-between"
    },
    divider: {
        margin: "1% 0",
        backgroundColor: theme.palette.primary.light
    },
    media: {
        height: 0,
        marginTop: 20,
        paddingTop: "56.25%"
    }
}));

const OneNew = ({ oneNew }) => {
    const classes = useStyles();
    const { title, description, url, image, publishedAt, source } = oneNew;

    return (
        <Box border={1} p={5} className={classes.root}>
            <div className={classes.div}>
                <Typography
                    variant={"subtitle1"}
                    color={"secondary"}
                >
                    {source.name}
                </Typography>

                <Typography
                    variant={"subtitle2"}
                    color={"secondary"}
                >
                    {publishedAt.substr(0, 10)}
                </Typography>
            </div>

            <Divider className={classes.divider}/>

            {
                title && (
                    <>
                        <Typography
                            variant={"h4"}
                            color={"primary"}
                        >
                            {title}
                        </Typography>
                        <Divider className={classes.divider}/>
                    </>
                )
            }

            {
                description && (
                    <>
                        <Typography
                            variant={"h5"}
                            color={"inherit"}
                        >
                            {description}
                        </Typography>
                        <Divider className={classes.divider}/>
                    </>
                )
            }

            {
                url && (
                    <Link
                        variant={"subtitle2"}
                        color={"secondary"}
                        href={url}
                    >
                        {url}
                    </Link>
                )
            }

            {
                image && (
                    <CardMedia
                        className={classes.media}
                        image={image}
                    />
                )
            }
        </Box>
    );
};

OneNew.propTypes = {
    oneNew: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
        source: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default OneNew;