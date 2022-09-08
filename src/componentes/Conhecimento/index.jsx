import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './estilos'

export const Conhecimento = ({ nome, excluir }) => {
    return(
        <View style={styles.container}>

            <Text style={styles.descricao}> { nome.toUpperCase() } </Text>

            <TouchableOpacity style={styles.botao} onPress={excluir}>
                <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

        </View>
    )
}