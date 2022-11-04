import { Alert } from 'react-native';
import { useState } from 'react';
import { Conhecimento } from '../../componentes/Conhecimento';
import * as S from './estilos'

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
      descricao: descricao.trim() //tira os espaços
    }

    if( descricao.trim() === '' || typeof(
      competencias.find( //procura uma competencia que tenha a descrição igual a da novaCompetencia adicionada
        ({ descricao }) => descricao === novaCompetencia.descricao
      )
    ) === 'object' ){
      setDescricao('')
      return Alert.alert('A competência já existe', 'envie outra')
    }

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
            ({ descricao }) => descricao !== competencia.descricao
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
      <S.Container>

        <S.Titulo>Meus</S.Titulo>
        <S.Subtitulo>conhecimentos</S.Subtitulo>

        <S.ContainerAdicionar>
          <S.Campo
            onChangeText={setDescricao}
            value={descricao}
          />
          <S.Botao
            onPress={adicionarCompetencia}
          >
            <S.Icone/>
          </S.Botao>
        </S.ContainerAdicionar>

        <S.Lista
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
            <S.ListaVazia>
              Nenhuma competência armazenada
            </S.ListaVazia>
          )}
        />

      </S.Container>
    );
  }