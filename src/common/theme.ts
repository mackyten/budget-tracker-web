import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        custom?: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
    }

    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#264653', // Replace with your primary color
        },
        secondary: {
            main: '#2a9d8f', // Replace with your secondary color
        },
        warning: {
            main: '#e9c46a'
        },
        // Add more colors as needed
        custom: {
            light: '#6ec6ff',
            main: '#2196f3',
            dark: '#0069c0',
            contrastText: '#fff',
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

export default theme;