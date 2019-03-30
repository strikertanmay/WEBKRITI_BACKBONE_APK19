export default theme => ({
    pageRoot: {
        display: 'flex',
        width: "100%",
        flexGrow: 2,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 4 * theme.spacing.unit,
    },

    cardContainer: {
        margin: 0,
        width: '100%',
        padding: theme.spacing.unit,
    },
})