import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 18px;
  margin-bottom: 18px;
`

export const ContainerCompetencia = styled.View`
  flex: 1;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: #121214;
`

export const Descricao = styled.Text`
  margin-bottom: 10px;
  font-size: 13px;
  color: #fff;
`

export const Nivel = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`

export const Botao = styled.TouchableOpacity`
  align-self: flex-end;
  width: 56px;
  height: 56px;
  background-color: red;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const Icone = styled(FontAwesome).attrs({
  name: 'remove'
})`
  font-size: 20px;
  color: #e6e6e6;
`