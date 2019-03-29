export default theme => ({
    root: {
        display: 'flex',
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#222831',
        paddingTop: 64,
        
        [theme.breakpoints.down('xs')]: {
            paddingTop: 56,
        }
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
    },
    appbar: {
        position: 'fixed',
        top: 0,
        left: 0,
    },
    main: {
        display: 'flex',
        flexGrow: 2,

    },
})