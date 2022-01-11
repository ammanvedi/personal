import {DefaultTheme} from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        text: '#212121',
        link: '#5352ed',
        success: '#78e08f',
        white: '#f1f2f6',
        textLight: '#747d8c',
        failure: '#eb4d4b'
    },
    mq: {
        m: '415px',
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