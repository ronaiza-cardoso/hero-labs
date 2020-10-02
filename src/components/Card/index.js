import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as HeartFilled } from 'assets/icons/heart-filled.svg'
import { ReactComponent as Heart } from 'assets/icons/heart.svg'

import * as S from './styles'

function Card({ thumbnail, name, isFavorite, onClick }) {
  return (
    <S.Container data-testid={name}>
      <S.Thumbnail
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Button
          onClick={onClick}
          aria-label={isFavorite ? 'Favorito' : 'Favoritar'}
        >
          {isFavorite ? <HeartFilled /> : <Heart />}
        </S.Button>
      </S.Content>
    </S.Container>
  )
}

Card.propTypes = {
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
