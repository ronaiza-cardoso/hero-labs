import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import logo from 'assets/icons/logo-transparent-background.svg'

import api from 'config/api'
import Search from 'components/Search'
import theme from 'styles/theme'
import * as S from './styles'

function HeroDetails() {
  const { id } = useParams()

  useEffect(() => {
    function fetchHero() {
      api.get(`/characters/${id}`).then(({ data }) => console.log(data))
    }

    fetchHero()
  }, [id])

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.LogoContainer>
          <S.Logo src={logo} />
          <S.LogoText>Search Heros</S.LogoText>
        </S.LogoContainer>
        <Search
          placeholder="Procure por hérois"
          backgroundColor={theme.colors.white}
          onChange={() => console.log()}
        />
      </S.HeaderContainer>
    </S.Container>
  )
}

export default HeroDetails
