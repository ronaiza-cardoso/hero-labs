import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Loupe } from 'assets/icons/loupe.svg'

import * as S from './styles'

function Search({ placeholder, onChange }) {
  return (
    <S.Container>
      <Loupe />
      <S.Input
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.Container>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Search
