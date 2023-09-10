
const style = {
    container: {
        marginTop: '8px'
    },
    item: {
        padding: '8px',
        width: '100%',
        backgroundColor: '#545454',
        marginBottom: '3px',
        borderRadius: '5px'
    }
}
export const AppList = ({ messages }) => {
    return(
        <div style={style.container}>
            {
                messages.map((message, index) =>
                    <div style={style.item} key={index}>
                        <span>{index + 1}. {message.text}</span>
                    </div>
                )
            }

        </div>
    )
}
