import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      textAlign: 'center'
    },
    titulo: {
      backgroundColor: 'red',
      paddingTop: 10,
      color: '#e6e6e6',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 30,
    },
    subtitulo: {
      backgroundColor: 'red',
      color: '#e6e6e6',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 10,
    },
    campo: {
      backgroundColor: '#e6e6e6',
        marginTop: 16,
        padding: 16,
        borderRadius: 5,
        fontSize: 13
    },
    botao: {
      backgroundColor: 'darkgreen',
        marginTop: 16,
        padding: 16,
        borderRadius: 5
    },
    botaoTexto: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 15
    }
  });