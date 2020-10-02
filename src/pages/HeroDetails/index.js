import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import api from 'config/api'
import * as S from './styles'

function HeroDetails() {
  const { id } = useParams()

  useEffect(() => {
    function fetchHero() {
      api.get(`/characters/${id}`).then(({ data }) => console.log(data))
    }

    fetchHero()
  }, [id])

  return <S.Container>dddd</S.Container>
}

export default HeroDetails
