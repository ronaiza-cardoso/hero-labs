import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-content: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextContainer = styled.div`
  text-align: center;
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
