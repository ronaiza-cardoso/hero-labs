import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Loupe } from 'assets/icons/loupe.svg'

import * as S from './styles'

function Search({ placeholder }) {
  return (
    <S.Container>
      <Loupe />
      <S.Input placeholder={placeholder} />
    </S.Container>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default Search
