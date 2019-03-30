export default theme => ({
    root: {
        display: 'flex',
        width: '100%',
        background: theme.palette.background.appBarGradient,
        boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.1), 
        0px 4px 5px 0px rgba(0, 0, 0, 0.1)`,
    },
    
    toolbar: {
        display: 'flex',
        flexGrow: 2,
        alignItems: 'center',
        width: '100%',
        margin: 0,
    },

    title: {
        flexGrow: 2,
        textAlign: 'center',
        marginLeft: 64,
        color: 'white',
        fontSize: '1.2em',
    },

    icon: {
        color: '#FFF',
    },
})