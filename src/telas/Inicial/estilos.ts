import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      textAlign: 'center'
    },
    titulo: {
      backgroundColor: 'darkblue',
      paddingTop: 10,
      color: '#e6e6e6',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 30,
    },
    subtitulo: {
      backgroundColor: 'darkblue',
      color: '#e6e6e6',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 10,
    },

    containerAdicionar: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 18,
      marginBottom: 18
    },
    campo: {
        flex: 1,
        height: 56,
        backgroundColor: 'black',
        padding: 16,
        borderRadius: 5,
        fontSize: 13,
        marginRight: 12,
        borderWidth: 1,
        borderColor: 'white',
        color: '#fff'
    },
    botao: {
        width: 56,
        height: 56,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoTexto: {
      color: '#fff',
      fontSize: 20
    },

    listaVazia: {
      color: '#e6e6e6',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600'
    }
  });