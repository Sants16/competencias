import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 18,
        marginBottom: 18
      },
      descricao: {
          flex: 1,
          height: 56,
          backgroundColor: '#121214',
          padding: 16,
          borderRadius: 5,
          fontSize: 13,
          marginRight: 12,
          color: '#fff'
      },
      botao: {
          width: 56,
          height: 56,
          backgroundColor: 'red',
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center'
      },
      botaoTexto: {
        color: '#fff',
        fontSize: 20
      },
})