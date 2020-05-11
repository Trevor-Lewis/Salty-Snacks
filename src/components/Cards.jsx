import React, { Component } from 'react'

// Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Cards(props){
 
        return (
            <Grid item xs={12} md={6} lg={3}>
            <Card>
            <CardActionArea>
              <CardMedia
                image={props.image}
                title="Kettle Corn"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.snack}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </CardActions>
          </Card>
          </Grid>
        )
    }

