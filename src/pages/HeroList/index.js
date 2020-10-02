import React from 'react'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'

import * as S from './styles'

function HeroList() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <Logo />
        <S.TextContainer>
          <S.H1>EXPLORE O UNIVERSO</S.H1>
          <S.H2>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </S.H2>
        </S.TextContainer>
      </S.HeaderContainer>
    </S.Container>
  )
}

export default HeroList
