import styled from 'styled-components';
import {getMq} from "./style/theme";

export const Layout = styled.article`
  margin: 3rem 1rem;
  
  @media(min-width: ${getMq("t")}) {
    max-width: 680px;
    margin: 3rem auto;
  }
`;

export const CenterImage = styled.div`
  display: block;
  text-align: center;
  max-width: 100%;
`

export const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const PostListItem = styled.li`
  margin: 0;
`