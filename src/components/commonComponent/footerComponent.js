import React, { Component } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

class FooterComponent extends Component{

    constructor(){
        super()
        this.state = {value: 0}
    }


    render(){
        return(
            <>
                <footer>
                <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={this.state.value}
                        onChange={(event, newValue) => {
                        this.setState({value : newValue});
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                    </Box>
                </footer>
            </>
        )
    }
}
export default FooterComponent