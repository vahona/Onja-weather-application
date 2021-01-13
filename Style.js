import styled from 'styled-components'
import Styled from 'styled-components'

export const Container = styled.div`
  background-color: #1e213a;
  color: white;
  padding: 3rem;
  
`;

export const Body = styled.div`
  background-color: #333333;
  color: white
`;

export const Header = styled.h1`
  margin: 0
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`;

export const Griddiv = styled.div`
   grid-column: 1
`

export const Tablegrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 2rem;
  grid-gap: 1rem;
  
`;