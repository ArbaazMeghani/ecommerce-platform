import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CartManagementButton from '../../common/CartManagementButton';
import BuyNowButton from '../../common/BuyNowButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  noTextDecoration: {
    textDecoration: 'inherit',
    color: "inherit",
  },
});

export default function Product(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/product/${props.product.productId}`} className={classes.noTextDecoration}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.product.images[0].imageUrl}
            title={props.product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              price: {props.product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <CartManagementButton product={props.product} />
        <BuyNowButton product={props.product}/>
      </CardActions>
    </Card>
  );
}
