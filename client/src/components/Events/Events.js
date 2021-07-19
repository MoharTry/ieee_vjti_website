import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getEvents} from "../../actions/events";
import useStyles from "../../styles";
import EventsHolder from './EventsHolder';
import Pagination from '../Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Events = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
     const page = query.get('page') || 1;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getEvents());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={9} md={9}>
                   
                        <EventsHolder setCurrentId={setCurrentId} />
                        <Paper className={classes.pagination} elevation={6}>
                <Pagination page = {page}/>
                </Paper>
                    </Grid>
                </Grid>
                
               
            </Container>
        </Grow>
    );
};

export default Events;

