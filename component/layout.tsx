import React from 'react';
import styled from 'styled-components';
import { EmailForm } from './email-form';
import {getColor, getMq} from "./style/theme";

export const Layout = styled.article`
  margin: 2rem 1rem;
  
  @media(min-width: ${getMq("t")}) {
    max-width: 680px;
    margin: 2rem auto;
  }
`;

export const HEADER_TEXT = `<a href="/">/* typeerror */</a>`

export const PostLayout: React.FC<{}> = ({children}) => {
  return (
    <Layout>
      <PostHeader dangerouslySetInnerHTML={{__html: HEADER_TEXT}} />
      {children}
      <EmailForm />
    </Layout>
  )
}

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

export const HomeHeader = styled.pre`
  white-space: pre;
  margin: 0;
  margin-left: -10px;
  font-size: 0.8rem;
  line-height: 1.4;
  font-size: 0.9rem;
`

export const HomeHeaderHeading = styled(HomeHeader)`
  margin-left: 0;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const PostHeader = styled(HomeHeaderHeading)`
  margin-top: 0;

  a {
    color: ${getColor('text')};
  }
  
`

export const HomeHeaderDesktop = styled(HomeHeader)`
  display: none;
  

  @media(min-width: ${getMq('m')}) {
    font-size: 1rem;
    display: block;
  }
`

export const HomeHeaderMobile = styled(HomeHeader)`
    display: block;

  @media(min-width: ${getMq('m')}) {
    display: none;
  }
`