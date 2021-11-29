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
    const { source, author, title, description, url, urlToImage, publishedAt } = oneNew;

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


            <Typography
                variant={"h6"}
                color={"primary"}
            >
                {author}
            </Typography>

            {
                author && <Divider className={classes.divider}/>
            }

            <Typography
                variant={"h4"}
                color={"inherit"}
            >
                {title}
            </Typography>

            {
                title && <Divider className={classes.divider}/>
            }

            <Typography
                variant={"subtitle2"}
                color={"inherit"}
            >
                {description}
            </Typography>

            {
                description && <Divider className={classes.divider}/>
            }

            <Link
                variant={"subtitle2"}
                color={"secondary"}
                href={url}
            >
                {url}
            </Link>

            {
                urlToImage && (
                    <CardMedia
                        className={classes.media}
                        image={urlToImage}
                    />
                )
            }
        </Box>
    );
};

OneNew.propTypes = {
    oneNew: PropTypes.shape({
        source: PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
            ]),
            name: PropTypes.string.isRequired
        }).isRequired,
        author: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string.isRequired
    }).isRequired
};

export default OneNew;