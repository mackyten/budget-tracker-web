import { drawerProps } from "./types";
import { ContactMail, Home, Info } from "@mui/icons-material";

export const drawerWidth = 240;
export const miniDrawerWidth = 60;

export const items: drawerProps[] = [
    {
        title: 'Home',
        icon: <Home />,
        link: '/home',
    },
    {
        title: 'About',
        icon: <Info />,
        link: '/about',
    },
    {
        title: 'Contact',
        icon: <ContactMail />,
        link: '/contact',
    },
]