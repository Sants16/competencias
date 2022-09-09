import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Conhecimento } from '../../componentes/Conhecimento';
import { styles } from './estilos'

export const Inicial = () => {

  const [descricao, setDescricao] = useState('')
  const [competencias, setCompetencias] = useState([])

  function adicionarCompetencia() {
    if(competencias.includes(descricao.trim())){
        return Alert.alert('A competência já existe', 'Adicione outra!')
      }

    setCompetencias(
      [...competencias, descricao]
    )
    setDescricao('')
  }

  function excluirCompetencia(nomeCompetencia) {
    Alert.alert('Excluir', 'Confirmar exclusão?', [
      {
        text: 'Sim',
        onPress: () => {
          const updatedCompetencias = competencias.filter( 
              ( nome ) => nome !== nomeCompetencia
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
          keyExtractor={ item => item }
          renderItem={ ({ item }) => (
            <Conhecimento
              key={item}
              nome={item}
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