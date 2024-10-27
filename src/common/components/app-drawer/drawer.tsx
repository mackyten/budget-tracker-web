import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import theme from "../../theme";
import useHomeStore from "./store";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth, items, miniDrawerWidth } from "./drawer.properties";
import { NavLink } from "react-router-dom";



const MyDrawer: React.FC = () => {
    const { drawerOpen, toggleDrawer } = useHomeStore();
    return (
        <Drawer
            open={drawerOpen}
            variant="permanent"
            sx={{
                width: drawerOpen ? drawerWidth : miniDrawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerOpen ? drawerWidth : miniDrawerWidth,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    className="mr-2"
                >
                    {drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
            </Toolbar>
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {items.map((item, index) => (
                        <NavLink
                            key={item.title}
                            to={item.link}
                            style={{ textDecoration: 'none' }} // Remove underline from links
                        >
                            {({ isActive }) => (
                                <ListItem
                                    sx={{
                                        bgcolor: isActive ? 'white' : 'transparent',
                                        color: isActive ? 'black' : 'inherit',
                                        '&:hover': {
                                            bgcolor: isActive ? 'white' : 'rgba(255, 255, 255, 0.08)', // Slightly lighter on hover
                                        },
                                        transition: 'background-color 0.3s, color 0.3s',
                                    }}
                                >
                                    <ListItemIcon sx={{ color: isActive ? 'black' : 'inherit' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            )}
                        </NavLink>

                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
export default MyDrawer;