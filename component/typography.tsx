import styled from 'styled-components';


// Settings generated with https://type-scale.com/
const BaseHeading = styled.div(props => ({
    margin: '3rem 0 1.38rem',
    lineHeight: 1.3,
    fontWeight: 600,
    color: props.theme.colors.text
}));

export const H1 = styled(BaseHeading)(() => ({
    marginTop: 0,
    fontSize: '2.488rem'
})).withComponent('h1')

export const H2 = styled(BaseHeading)(() => ({
    fontSize: '2.074rem'
})).withComponent('h2')

export const H3 = styled(BaseHeading)(() => ({
    fontSize: '1.728rem'
})).withComponent('h3')

export const H4 = styled(BaseHeading)(() => ({
    fontSize: '1.44rem'
})).withComponent('h3')

export const H5 = styled(BaseHeading)(() => ({
    fontSize: '1.2rem'
})).withComponent('h3')

export const Body = styled.p(props => ({
    color: props.theme.colors.text,
    marginBottom: '1rem',
    fontWeight: 400,
    lineHeight: 1.75
}));

export const BlockQuote = styled.blockquote(() => ({

}))