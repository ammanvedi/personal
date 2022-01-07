import styled from 'styled-components';
import {getMq} from "./style/theme";

export const Layout = styled.article`
  margin: 3rem 1rem;
  
  @media(min-width: ${getMq("t")}) {
    max-width: 680px;
    margin: 3rem auto;
  }
`