import {DefaultTheme} from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        text: '#212121',
        link: '#2e86de'
    },
    mq: {
        t: '768px',
        d: '1024px',
        p: '500px'
    }
}

interface InterpolationProps {
    theme: DefaultTheme
}

export const getMq = (mq: keyof DefaultTheme['mq']) => (props: InterpolationProps): string => {
    return props.theme.mq[mq]
}

export const getColor = (color: keyof DefaultTheme['colors']) => (props: InterpolationProps): string => {
    return props.theme.colors[color]
}