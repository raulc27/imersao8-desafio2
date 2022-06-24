import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,

} from '@mui/material'

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import {
    Link as RouterLink,
} from 'react-router-dom';
import api from '../services/api';
import LoadingGIF from '../assets/Loading.gif';
import { useParams } from 'react-router-dom'; 

const SinglePost = (props) => {
    const [Post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    async function getThePostData() {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/${params.id}`);
            setPost(data);
            setIsLoading(false);
        }
        catch (_e) {
            console.log("Error: ", _e);
        }
    }

    useEffect(() => {
        getThePostData()
    }, [])
    return (
        <>

            <Grid item xs={7}>
                <RouterLink to="/">
                    <CardHeader
                        title="Voltar"
                    />
                </RouterLink>

                <Box>
                    {isLoading && (<CircularProgress/>)}
                    </Box>

                <Card>
                    <List>
                        <ListItem>
                            {Post.title}
                        </ListItem>
                        <ListItem>
                            {Post.body}
                        </ListItem>
                    </List>
                </Card>

            </Grid>
        </>
    )
}

export default SinglePost;