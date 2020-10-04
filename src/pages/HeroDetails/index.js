import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { path } from 'ramda'

import logo from 'assets/icons/logo-transparent-background.svg'

import { ReactComponent as HeartFilled } from 'assets/icons/heart-filled.svg'
import { ReactComponent as Heart } from 'assets/icons/heart.svg'
import { ReactComponent as Book } from 'assets/icons/book.svg'
import { ReactComponent as Video } from 'assets/icons/video.svg'
import { ReactComponent as StarFilledDisabled } from 'assets/icons/star-filled-disabled.svg'

import api from 'config/api'
import Search from 'components/Search'
import theme from 'styles/theme'
import { FAVORITES_KEY } from 'config/constants'
import * as S from './styles'

function HeroDetails() {
  const [hero, setHero] = useState()
  const [lastComics, setLastComics] = useState()
  const [isHeroFavorite, setIsHeroFavorite] = useState()
  const { id } = useParams()

  useEffect(() => {
    function fetchHero() {
      api
        .get(`/characters/${id}`)
        .then(({ data }) => setHero(path(['data', 'results', 0], data)))
    }

    function fetchLastComics() {
      api
        .get(`/characters/${id}/comics`, { params: { orderBy: 'onsaleDate' } })
        .then(({ data }) => setLastComics(path(['data', 'results'], data)))
    }

    fetchHero()
    fetchLastComics()
  }, [id])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    setIsHeroFavorite(favorites.includes(path(['id'], hero)))
  }, [hero])

  function handleFavorite() {
    const numberId = Number(id)
    const storedFavorites = new Set(
      JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    )

    if (storedFavorites.size === 5 && storedFavorites.has(id)) {
      // TODO: add toast
      alert('é permitido favoritar apenas 5 personagens')
      return
    }

    if (storedFavorites.has(numberId)) {
      storedFavorites.delete(numberId)
    } else {
      storedFavorites.add(numberId)
    }

    setIsHeroFavorite(storedFavorites.has(hero.id))
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...storedFavorites]))
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
      <S.Main>
        <S.InfoContainer backgroundName={path(['name'], hero)}>
          <S.TextContainer>
            <S.TitleContainer onClick={handleFavorite}>
              <S.Title>{path(['name'], hero)}</S.Title>
              {isHeroFavorite ? <HeartFilled /> : <Heart />}
            </S.TitleContainer>

            <S.P>
              {path(['description'], hero) ||
                'Ainda estamos trabalhando nesse registro'}
            </S.P>

            <S.ContentDetailsWrapper>
              <S.ContentContainer>
                <S.H2>Quadrinhos</S.H2>
                <S.HeroDetailsContent>
                  <Book /> <S.H2>{path(['comics', 'available'], hero)}</S.H2>
                </S.HeroDetailsContent>
              </S.ContentContainer>

              <S.ContentContainer>
                <S.H2>Filmes</S.H2>
                <S.HeroDetailsContent>
                  <Video />
                  <S.H2 isDisabled>--</S.H2>
                </S.HeroDetailsContent>
              </S.ContentContainer>
            </S.ContentDetailsWrapper>

            <S.HeroLineInformation>
              <S.H2>Rating:</S.H2>
              {Array(5)
                .fill(0)
                .map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <StarFilledDisabled key={`${item}-${i}`} />
                ))}
            </S.HeroLineInformation>
            <S.HeroLineInformation>
              <S.H2>Ultimo quadrinho:</S.H2>
              <S.H2 isDisabled>--</S.H2>
            </S.HeroLineInformation>
          </S.TextContainer>
          <S.Thumbnail
            src={`${path(['thumbnail', 'path'], hero)}.${path(
              ['thumbnail', 'extension'],
              hero
            )}`}
          />
        </S.InfoContainer>
        <S.LastComicsContainer>
          <S.LastComicsTitle>Últimos lançamentos</S.LastComicsTitle>

          <S.LastComicsContentContainer>
            {lastComics &&
              lastComics.map((comic) => (
                <S.ComicCard key={comic.id}>
                  <S.ComicPhoto
                    src={`${path(['thumbnail', 'path'], comic)}.${path(
                      ['thumbnail', 'extension'],
                      comic
                    )}`}
                  />
                  <S.ComicTitle>{comic.title}</S.ComicTitle>
                </S.ComicCard>
              ))}
          </S.LastComicsContentContainer>
        </S.LastComicsContainer>
      </S.Main>
    </S.Container>
  )
}

export default HeroDetails
