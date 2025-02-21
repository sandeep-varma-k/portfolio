import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 120;
const navItems = [
    ['Expertise', 'expertise'],
    ['Timeline', 'timeline'],
    // ['Projects', 'projects'],
    // ['Contact', 'contact']
];

export default function AppNavigation() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const scrollToSection = (section: string) => {
        const expertiseElement = document.getElementById(section);
        if (expertiseElement) {
            expertiseElement.scrollIntoView({ behavior: 'smooth' });
        }
    };



    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ my: 2, ml:2 }}>
               Menu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item[0]} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left' }} onClick={() => scrollToSection(item[1])}>
                            <ListItemText primary={item[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" id="navigation"  sx={{bgcolor: "white", color: "black"}}>
                <Toolbar>

                    {/*Elements visible with width of xs only - typically for mobile*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { sm: 'none' }, textAlign:'right' }}>
                        <Button startIcon={<HomeIcon />}
                            onClick={() => scrollToSection("home")} sx={{ color: '#000', textTransform: 'none', fontSize: 16, fontWeight: 600 }} >
                            Home
                        </Button>
                    </Box>



                    {/*Elements visible with width of sm and above - typically for non-mobile screens*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign:'left' }}>
                            <Button startIcon={<HomeIcon />} variant={"text"}
                                onClick={() => scrollToSection("home")} sx={{ color: '#000', textTransform: 'none', fontSize: 16, fontWeight: 600  }}>
                                Home
                            </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item[0]} onClick={() => scrollToSection(item[1])}
                                    sx={{ color: '#000', textTransform: 'none', fontSize: 16, fontWeight: 600,

                                        }}
                            >
                                {item[0]}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>
            <nav>
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
