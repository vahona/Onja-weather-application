import styled from 'styled-components'
import Styled from 'styled-components'

export const Container = styled.div`
  background-color: #1e213a;
  color: white;
  padding: 3rem;
  
`;
export const Container1 = styled.div`
  background-color: #1e213a;
  color: white;
  padding: 4rem;
  padding-top: 7rem;
  z-index: 0
`;
export const Container3 = styled.div`
  background-color: #1e213a;
  color: white;
  padding-top: 7rem;
  height: 100%;
  z-index: 2
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

export const BottomSearch = styled.button`
  background-color: gray;
  padding: 1rem;
  color: white;
  border-radius: 5px;
  position: absolute;
  margin: 1rem;
  
`;

export const Header = styled.h1`
  margin: 0
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
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

export const Speed = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  color: #e7e7eb;
`;

export const Visibility = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
`;

export const SubSpeed = styled.sub`
  font-weight: bold;
  font-size: 50px;
  line-height: 75px;
  color: #e7e7eb;
`;

export const SubVisibility = styled.sub`
  font-weight: bold;
  font-size: 50px;
  line-height: 75px;
  text-align: center;
  color: #e7e7eb;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: #1e213a;
  border: 1px solid gray
`;
export const Button = styled.button`
  padding: 1rem;
  background-color: blue;
  color: white;
  border: 1px solid gray;
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 3rem;
    left: 20%;
    color: gray;
    background-color: transparent;
    border: none;
    font-size: 32px
`;
