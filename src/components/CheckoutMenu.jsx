import React, { Component } from 'react'

// Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Components
// import Cards from './Cards';
// import FullMenu from './FullMenu';

export default class CheckoutMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            kettleCorn: [
                {
                    type: 'Honey Kettle Corn',
                    description: 'lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom',
                    price: 19.99,
                    img: 'https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                    id: 1
                },
                {
                    type: 'Cheddar Kettle Corn',
                    description: 'lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom',
                    price: 19.99,
                    img: 'https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                    id: 2
                },
                {
                    type: 'Plain Kettle Corn',
                    description: 'lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom',
                    price: 19.99,
                    img: 'https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                    id: 3
                },
                {
                    type: 'Caramel Kettle Corn',
                    description: 'lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom',
                    price: 19.99,
                    img: 'https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                    id: 4
                }
            ]
        }
    }
    
    addToCart = (e) =>{
        console.log('button clicked!')
        let cart = this.state.cart.slice(0);
        cart.push(e.target.id)

        this.setState({
            cart: cart,
        }, () => {
            console.log(cart)
        })

        // this.setState({
        //     cart: e.target.cart.push()
        // }, ()=> {
        //     console.log(this.state.cart)
        // })
    }
    
    render() {
        return (
            <Grid container display='flex'>
                <Grid item>
                    <Grid container>
                        {this.state.kettleCorn.map((snack) => {
                            // console.log(snack.type)
                            // console.log(snack.description)
                            // console.log(snack.img)
                            // console.log(snack.price)
                            return (
                                <Grid item key={snack.id}>
                                    <Card>
                                     <CardActionArea>
                                        <CardMedia
                                            image={snack.img}
                                            title="Kettle Corn"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {snack.type}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {snack.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {snack.price}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <Button size="small" color="primary" key={snack.id} onClick={this.addToCart}>
                                            Add to Cart
                                        </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            )
                        })}

                    </Grid>
                </Grid>
                <Grid item>
                    ||  This is the cart side
                </Grid>
            </Grid>
        )
    }
}
