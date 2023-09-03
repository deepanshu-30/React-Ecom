import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppBar } from '@mui/material';

export default function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation stickyFooter="true" sx={{ width: 'auto', backgroundImage: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 100%)' }}
            value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                sx={{ color: 'whitesmoke !important' }}
                icon={<RestoreIcon
                />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                sx={{ color: 'whitesmoke !important' }}
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                sx={{ color: 'whitesmoke !important' }}
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder"
                value="folder"
                sx={{ color: 'whitesmoke !important' }}
                icon={<FolderIcon />} />
        </BottomNavigation>
    );
}