import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import {
    Grid,
    Card,
    CardHeader,
    CardContent
} from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';
import {
    Link as RouterLink,
} from 'react-router-dom';
import api from '../services/api';
import LoadingGIF from '../assets/Loading.gif';

export default function AllPosts() {
    const [Posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getPostsData() {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/`);
            setPosts(data);
            setIsLoading(false);
        }
        catch (_e) {
            console.log("Error: ", _e);
        }
    }

    useEffect(() => {
        getPostsData();
    }, [])




    return (
        <>
            <Box>
                        { isLoading && (<CircularProgress/>)   }
                            </Box>
            <Card>
                <Paper>
                    <Box>
                        <List>
                            {
                                Posts.map((post, key) => (
                                    <ListItem>
                                        <RouterLink to={`/${post.id}`} >{post.title}</RouterLink>
                                    </ListItem>
                                ))
                            }

                        </List>
                    </Box>
                </Paper>
            </Card>
        </>
    )

    /*   !isLoading ? return(
       Posts.map(post=>(
           <List>
               <ListItem>{post.userId}</ListItem>
               <ListItem>{post.id}</ListItem>
               <ListItem>{post.title}</ListItem>
               <ListItem>{post.body}</ListItem>
           </List>
       ))
       : return (
       <>
      
       </>
      ) 
          {
           !isLoading ? (
               <>
                   Renderizando
               </>
           ) : (
               <>
                    <img src={LoadingGIF} alt="loading" />
               </>
           )
       }
      */
}
