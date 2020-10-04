import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { path, pathOr } from 'ramda'

import logo from 'assets/icons/logo-transparent-background.svg'

import { ReactComponent as HeartFilled } from 'assets/icons/heart-filled.svg'
import { ReactComponent as Heart } from 'assets/icons/heart.svg'

import api from 'config/api'
import Search from 'components/Search'
import theme from 'styles/theme'
import { FAVORITES_KEY } from 'config/constants'
import * as S from './styles'

function HeroDetails() {
  const [hero, setHero] = useState()
  const { id } = useParams()

  useEffect(() => {
    function fetchHero() {
      api.get(`/characters/${id}`).then(({ data }) => setHero(data.data))
    }

    fetchHero()
  }, [id])

  function isFavorite() {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    return favorites.includes(path(['results', 0, 'id'], hero))
  }

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
      <S.Main backgroundName={path(['results', 0, 'name'], hero)}>
        <S.InfoContainer>
          <S.TitleContainer>
            <S.Title>{path(['results', 0, 'name'], hero)}</S.Title>
            {isFavorite() ? <HeartFilled /> : <Heart />}
          </S.TitleContainer>

          <S.P>
            {path(['results', 0, 'description'], hero) ||
              'Ainda estamos trabalhando nesse registro'}
          </S.P>
        </S.InfoContainer>

        <S.Thumbnail
          src={`${path(['results', 0, 'thumbnail', 'path'], hero)}.${path(
            ['results', 0, 'thumbnail', 'extension'],
            hero
          )}`}
        />
      </S.Main>
    </S.Container>
  )
}

export default HeroDetails
