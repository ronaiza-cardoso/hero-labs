import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.large};
  `}
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;

  > div:nth-child(2) {
    width: 50%;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`
export const Logo = styled.div`
  ${({ src }) => css`
    background: url(${src});
    width: 15rem;
    height: 5rem;
    background-size: contain;
    background-repeat: no-repeat;
  `}
`

export const LogoText = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
