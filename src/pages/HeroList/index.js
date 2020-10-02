import React, { useState, useEffect } from 'react'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'

import Search from 'components/Search'

import api from 'config/api'
import Card from 'components/Card'
import * as S from './styles'

function transformFavoriteHero(heroes) {
  const newHeroes = heroes.map(({ name, id, thumbnail }) => ({
    name,
    id,
    thumbnail,
    isFavorite: true,
  }))

  return newHeroes
}

function HeroList() {
  const [heroes, setHeroes] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(() => fetchHeros(), [])

  function fetchHeros(query) {
    setIsLoading(true)
    const queryParams = {
      nameStartsWith: query,
      orderBy: 'name',
    }

    api
      .get('/characters', { params: query && queryParams })
      .then(({ data }) => setHeroes(transformFavoriteHero(data.data.results)))
      .finally(() => setIsLoading(false))
  }

  function handleHeroSearch(search) {
    fetchHeros(search)
  }

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

        <Search placeholder="Procure por heróis" onChange={handleHeroSearch} />
      </S.HeaderContainer>
      <S.Main>
        {isLoading && <div>Loading...</div>}
        {heroes &&
          !isLoading &&
          heroes.map((hero) => <Card {...hero} key={hero.id} />)}
      </S.Main>
    </S.Container>
  )
}

export default HeroList
