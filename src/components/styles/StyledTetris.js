import styled from 'styled-components'

import backgroundImage from '../../img/bg.png'

export const StyledTetrisWrapper = styled.div`
  background: url(${backgroundImage}) #000000;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

export const StyledTetris = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px;

  aside {
    display: block;
    max-width: 200px;
    padding: 0 20px;
    width: 100%;
  }
`