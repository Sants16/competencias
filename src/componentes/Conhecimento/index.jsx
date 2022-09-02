import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './estilos'

export const Conhecimento = ({ nome, nivel, excluir }) => {
    return(
        <View style={styles.container}>

            <Text style={styles.descricao}> { nome } / {nivel} </Text>

            <TouchableOpacity style={styles.botao} onPress={excluir}>
                <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

        </View>
    )
}