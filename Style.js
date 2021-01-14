import styled from 'styled-components'
import Styled from 'styled-components'

export const Container = styled.div`
  background-color: #1e213a;
  color: white;
  padding: 3rem;
  
`;

export const Container2 = styled.div`
  background-color: #1e213a;
  color: white;
  padding: 3rem;
  padding-right: 10%;
  margin-bottom: 2rem;
  margin: 1rem;
`;

export const Body = styled.div`
  color: white
`;

export const Header = styled.h1`
  margin: 0
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`;

export const Hightlight = styled.div`
  grid-column: 2 / 1;
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

export const Degre = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GrayDeg = styled.div`
  color: gray

`

export const TodayDegree = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #e7e7eb;
`;