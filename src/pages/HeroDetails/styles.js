import styled, { css, keyframes } from 'styled-components'

const floating = keyframes`
  0 { transform: translate(0,  0px); }
  65%  { transform: translate(0, 15px); }
  to   { transform: translate(0, -0px); }    
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100%;
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.large};
    z-index: ${theme.layers.overlay};
  `}
`

export const HeaderContainer = styled.header`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(auto, 40rem));
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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
export const Main = styled.main`
  ${({ theme, backgroundName }) => css`
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 40rem));
    justify-content: space-around;
    position: relative;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.secondary};

    &:before {
      content: '${backgroundName}';
      position: absolute;
      left: 0;
      font-size: clamp(20vw, 30vw, 15vw);
      text-transform: uppercase;
      font-weight: 600;
      color: ${theme.colors.white};
      z-index: -1;
      animation-name: ${floating};
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      background: ${theme.colors.secondary};
    }
  `}
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`
export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large} 0;
  `}
`
export const Title = styled.h1``
export const P = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.lineHeight};
    color: ${theme.colors.gray};
  `}
`

export const Thumbnail = styled.div`
  ${({ src }) => css`
    background: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20rem;
    height: 40rem;
  `}
`
export const NameBackground = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
  `}
`
