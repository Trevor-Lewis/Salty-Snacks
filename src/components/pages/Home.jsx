import React from 'react'

// Components
// import Cards from '../Cards';
import FoodMenu from '../FoodMenu';

// Images
import BigCTA from '../../Images/BigPlaceholder.jpg';
// import CardImg from '../../Images/Small PlaceHolder.jpg'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    flexWrap: 'wrap',
    backgroundColor: "#212121",
    margin: 0,
    padding: 0
    // width: '100%'
  },
  card: {
  
  },
  media: {
    height: 200,
  },
  ctaImage: {
    width: "100%",
    height: "auto",
    // marginBottom: "55px"
  },
  cardContainer: {
    margin: 45
  },
  cta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    padding: 10,
  },
  grid:{
    padding: 0,
    
  },
  ctaContent: {
    textAlign: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} spacing={0}>
        {/* <Paper className={classes.paper} elevation={3}> */}
      <Grid item xs={12}>
          <img className={classes.ctaImage} src={BigCTA} alt=""/>
      </Grid>

      {/* <Paper className={classes.cta}>
        <Typography gutterBottom variant='h3' component='h2'>
            Feeling hungry?
        </Typography>
        <Typography className={classes.ctaContent} gutterBottom variant='h5' component='h2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at eum, eligendi nam, cupiditate facilis a harum, necessitatibus ut fuga magni eaque animi nobis consequatur soluta in nostrum! Sequi, quod.
        </Typography>
      </Paper> */}

       <Grid className={classes.cardContainer} container spacing={3}> 
       {/* <Cards image='https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'/> */}
       <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
              title="Kettle Corn"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kettle Corn
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, unde rerum. Ipsum, maxime?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <FoodMenu />
            <Button size="small" color="primary">
              Order Delivery
            </Button>
          </CardActions>
        </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1544418749-94b09b11e93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
              title="Kettle Corn"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Old Fashion Soda
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, unde rerum. Ipsum, maxime?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Full Menu
            </Button>
            <Button size="small" color="primary">
              Order Delivery
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1511951786553-1d4f975424c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
              title="Kettle Corn"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Soft Pretzels
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, unde rerum. Ipsum, maxime?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Full Menu
            </Button>
            <Button size="small" color="primary">
              Order Delivery
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1566735275344-75288923274a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80'
              title="Kettle Corn"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sweet Treats
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, unde rerum. Ipsum, maxime?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">
              Full Menu
            </Button>
            <Button size="small">
              Order Delivery
            </Button>
          </CardActions>
        </Card>
      </Grid>
      </Grid> 
        {/* </Paper> */}
      </Grid>
    </div>
  );
}
