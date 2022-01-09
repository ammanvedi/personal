import React from "react"
import * as Typog from '../component/typography';
import styled from 'styled-components';
import { getColor } from "./style/theme";

type PostMetaProps = {
    title: string,
    date: number,
    linkPath: string,
}

const Title = styled(Typog.H5)`
    color: ${getColor('text')};
    font-size: 0.9rem;
    margin: 0;
`

const DateWrapper = styled(Typog.Body)`
    margin: 0;
    font-size: 0.7rem;
`

const Wrapper = styled.div`
    margin-bottom: 15px;
`


export const PostMeta: React.FC<PostMetaProps> = ({title, date, linkPath}) => {

    const d = new Date(date)
    const dateString = new Intl.DateTimeFormat(
        'en-GB', 
        { dateStyle: 'medium'}
    ).format(d)

    return (
        <Wrapper>
            <a href={linkPath}>
                <Title>
                    {title}
                </Title>
                <DateWrapper>
                    {dateString}
                </DateWrapper>
            </a>
        </Wrapper>
    )
}