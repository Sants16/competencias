import * as S from './estilos'

export const Conhecimento = ({ nome, excluir }) => {
    return(
        <S.Container>

            <S.Descricao> { nome.toUpperCase() } </S.Descricao>

            <S.Botao onPress={excluir}>
                <S.Icone/>
            </S.Botao>

        </S.Container>
    )
}