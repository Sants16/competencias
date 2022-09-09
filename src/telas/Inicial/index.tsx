import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Conhecimento } from '../../componentes/Conhecimento';
import { styles } from './estilos'

//uuid
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

interface tipoCompetencia { //definindo um tipo de dado proprio
  codigo : string //campo obrigatorio
  descricao : string //campo obrigatorio
  nivel ?: string //campo opcional
}

export const Inicial = () => {

  const [descricao, setDescricao] = useState<string>('') //definindo o tipo do state
  const [competencias, setCompetencias] = useState<tipoCompetencia[]>([])

  function adicionarCompetencia() {
    const novaCompetencia : tipoCompetencia = {
      codigo: String( uuid() ),
      descricao: descricao
    }

    // if(descricao.trim() === '' || competencias.includes(descricao.trim())){
    //     return Alert.alert('A competência já existe', 'Adicione outra!')
    //   }

    setCompetencias(
      [...competencias, novaCompetencia]
    )
    setDescricao('')
    console.log(novaCompetencia)
  }

  function excluirCompetencia(competencia : tipoCompetencia) {
    Alert.alert('Excluir', 'Confirmar exclusão?', [
      {
        text: 'Sim',
        onPress: () => {
          const updatedCompetencias = competencias.filter( 
              ( competenciaArmazenada ) => competenciaArmazenada.descricao !== competencia.descricao
          )
          setCompetencias(updatedCompetencias)
        }
      },
      {
        text: 'Não'
      }
    ])
  }

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Meus conhecimentos</Text>
        <Text style={styles.subtitulo}>conhecimentos</Text>

        <View style={styles.containerAdicionar}>
          <TextInput
            style={styles.campo}
            placeholder='Informe a competência'
            placeholderTextColor='#e6e6e6'
            onChangeText={setDescricao}
            value={descricao}
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={adicionarCompetencia}
          >
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={competencias}
          keyExtractor={ item => item.codigo }
          renderItem={ ({ item }) => (
            <Conhecimento
              key={item.codigo}
              nome={item.descricao}
              excluir={() => excluirCompetencia(item)}
            />
          )}
          ListEmptyComponent={ () => (
            <Text style={styles.listaVazia}>
              Nenhuma competência armazenada
            </Text>
          )}
        />

      </View>
    );
  }