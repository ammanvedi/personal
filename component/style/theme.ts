import {DefaultTheme} from "styled-components";
import {Colors, MQ} from "../../styled";

export const theme: DefaultTheme = {
    colors: {
        text: '#212121',
        link: '#2e86de'
    },
    mq: {
        t: '768px',
        d: '1024px'
    }
}

interface InterpolationProps {
    theme: DefaultTheme
}

export const getMq = (mq: keyof MQ) => (props: InterpolationProps): string => {
    return props.theme.mq[mq]
}

export const getColor = (color: keyof Colors) => (props: InterpolationProps): string => {
    return props.theme.colors[color]
}