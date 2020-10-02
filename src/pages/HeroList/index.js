import React, { useState, useEffect } from 'react'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as NounHero } from 'assets/icons/noun-hero.svg'
import { ReactComponent as HeartFilled } from 'assets/icons/heart-filled.svg'

import Search from 'components/Search'

import api from 'config/api'
import Card from 'components/Card'
import { FAVORITES_KEY } from 'config/constants'
import * as S from './styles'

function transformFavoriteHero(heroes) {
  const favorites = new Set(
    JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
  )

  const newHeroes = heroes.map(({ name, id, thumbnail }) => ({
    name,
    id,
    thumbnail,
    isFavorite: favorites.has(id),
  }))

  return newHeroes
}

function HeroList() {
  const [heroes, setHeroes] = useState()
  const [isLoading, setIsLoading] = useState()
  const [toggleShowFavorites, setToggleShowFavorites] = useState(false)

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

  function handleToggle() {
    if (toggleShowFavorites) {
      fetchHeros()
    } else {
      setHeroes(heroes.filter((item) => item.isFavorite))
    }

    setToggleShowFavorites((prevState) => !prevState)
  }

  function handleFavoriteHero({ id }, index) {
    const storedFavorites = new Set(
      JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    )

    if (storedFavorites.size === 5 && !storedFavorites.has(id)) {
      // TODO: add toast
      alert('é permitido favoritar apenas 5 personagens')
      return
    }

    if (storedFavorites.has(id)) {
      storedFavorites.delete(id)
    } else {
      storedFavorites.add(id)
    }

    const newHeroes = [...heroes]
    newHeroes[index] = {
      ...heroes[index],
      isFavorite: !heroes[index].isFavorite,
    }

    setHeroes(newHeroes)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...storedFavorites]))
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

        <S.HeroActionsContainer>
          <S.ResultTitle data-testid={heroes && heroes.length}>
            Encontrados {heroes && heroes.length} heróis
          </S.ResultTitle>

          <S.ToggleContainer>
            <S.HeroActionContainer isActive={!toggleShowFavorites}>
              <NounHero />
              Ordernar por nome - A/Z
            </S.HeroActionContainer>
            <S.ToggleButton
              isActive={toggleShowFavorites}
              onClick={() => handleToggle()}
              data-testid="toggle-button"
            />
            <S.HeroActionContainer isActive={toggleShowFavorites}>
              <HeartFilled />
              Somente Favoritos
            </S.HeroActionContainer>
          </S.ToggleContainer>
        </S.HeroActionsContainer>
      </S.HeaderContainer>
      <S.Main>
        {isLoading && <div>Loading...</div>}
        {heroes &&
          !isLoading &&
          heroes.map((hero, index) => (
            <Card
              {...hero}
              key={hero.id}
              onClick={() => handleFavoriteHero(hero, index)}
            />
          ))}
      </S.Main>
    </S.Container>
  )
}

export default HeroList
