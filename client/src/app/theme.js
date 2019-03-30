import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
    palette: {
        primary: {
            main: '#181C22',
            light: '#222831',
            dark: '#1A1D24',
            contrastText: "#FFF",
        },
        secondary: {
            main: "#efbb35",
            light: "#fae042",
            dark: "#efbb35",
            contrastText: "#000",
        },
        background: {
            appBar: '#f5f5f5',
            appBarGradient: 'linear-gradient(to right, #302e24, #28313e)',
        },
        text: {
            primary: '#FFF',
        },
    },
    typography: {
        fontFamily: [
            "'Raleway'",
            "'Roboto'", 
            "'Helvetica'", 
            "'Arial'", 
            "'sans-serif'",
        ].join(','),
        useNextVariants: true,
    },
    props: {
        MuiButton: {
            variant: "contained",
            color: "primary"
        },
    },
})