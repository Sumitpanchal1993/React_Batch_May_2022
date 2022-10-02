import React, { Component } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const imageRef = require("../assets/back06.jpg")

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
]
class MaterialGridComponent extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={imageRef}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={true} timeout="auto">
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                            aside for 10 minutes.
                                        </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                            stirring often until thickened and fragrant, about 10 minutes. Add
                                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                        </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to distribute. Top with artichokes and
                                            peppers, and cook without stirring, until most of the liquid is absorbed,
                                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                            mussels, tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just tender, 5 to 7
                                            minutes more. (Discard any mussels that don&apos;t open.)
                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Movie" />}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default MaterialGridComponent;
