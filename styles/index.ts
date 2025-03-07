import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f23460',
        marginBottom: 12,
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 20,

    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,

    },
    botão:{
        backgroundColor: '#4ecdc4',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,

    },
    botãoText:{
        fontWeight: 'bold',
        color: '#fff'
    },
    card:{
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop:30,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        borderColor: '#ddd'

    },
    cardTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    cardText:{
        fontSize: 16,
        color: '#666'
    }
})

export default styles;